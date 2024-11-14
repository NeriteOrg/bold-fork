import type { Address, Position, PositionLoanUncommitted } from "@/src/types";
import type { ReactNode } from "react";

import { ActionCard } from "@/src/comps/ActionCard/ActionCard";
import content from "@/src/content";
import { ACCOUNT_POSITIONS } from "@/src/demo-mode";
import { DEMO_MODE } from "@/src/env";
import { useStakePosition } from "@/src/liquity-utils";
import { useEarnPositionsByAccount, useLoansByAccount } from "@/src/subgraph-hooks";
import { css } from "@/styled-system/css";
import { StrongCard } from "@liquity2/uikit";
import { a, useSpring, useTransition } from "@react-spring/web";
import * as dn from "dnum";
import { useRef } from "react";
import { match, P } from "ts-pattern";
import { NewPositionCard } from "./NewPositionCard";
import { PositionCardEarn } from "./PositionCardEarn";
import { PositionCardLoan } from "./PositionCardLoan";

type Mode = "positions" | "loading" | "actions";

export function Positions({
  address,
  columns,
  showNewPositionCard = true,
  title = (mode) =>
    mode === "actions"
      ? content.home.openPositionTitle
      : content.home.myPositionsTitle,
}: {
  address: null | Address;
  columns?: number;
  showNewPositionCard?: boolean;
  title?: (mode: Mode) => ReactNode;
}) {
  const loans = useLoansByAccount(address);
  const earnPositions = useEarnPositionsByAccount(address);

  const isPositionsPending = Boolean(
    address && (
      loans.isPending
      || earnPositions.isPending
      || stakePosition.isPending
    ),
  );

  const positions = isPositionsPending ? [] : (
    DEMO_MODE ? ACCOUNT_POSITIONS : [
      ...loans.data ?? [],
      ...earnPositions.data ?? [],
      ...stakePosition.data && dn.gt(stakePosition.data.deposit, 0) ? [stakePosition.data] : [],
    ]
  );

  let mode: Mode = address && positions && positions.length > 0
    ? "positions"
    : isPositionsPending
    ? "loading"
    : "actions";

  return (
    <PositionsGroup
      columns={columns}
      mode={mode}
      positions={positions ?? []}
      showNewPositionCard={showNewPositionCard}
      title={title}
    />
  );
}

function PositionsGroup({
  columns = 3,
  mode,
  onTitleClick,
  positions,
  title,
  showNewPositionCard,
}: {
  columns?: number;
  mode: Mode;
  onTitleClick?: () => void;
  positions: Exclude<Position, PositionLoanUncommitted>[];
  title: (mode: Mode) => ReactNode;
  showNewPositionCard: boolean;
}) {
  const title_ = title(mode);

  const cards = match(mode)
    .returnType<Array<[number, ReactNode]>>()
    .with("positions", () => {
      let cards: Array<[number, ReactNode]> = [];

      if (showNewPositionCard) {
        cards.push([positions.length ?? -1, <NewPositionCard key='new' />]);
      }

      cards = cards.concat(
        positions.map((position, index) =>
          match(position)
            .returnType<[number, ReactNode]>()
            .with({ type: P.union("borrow", "leverage") }, (p) => [
              index,
              <PositionCardLoan key={index} {...p} />,
            ])
            .with({ type: "earn" }, (p) => [
              index,
              <PositionCardEarn key={index} {...p} />,
            ])
            .otherwise(() => [index, <div key={index} />])
        )
      );

      return cards;
    })
    .with("loading", () => [
      [0, <StrongCard key='0' loading />],
      [1, <StrongCard key='1' loading />],
      [2, <StrongCard key='2' loading />],
    ])
    .with("actions", () =>
      showNewPositionCard
        ? [
            [0, <ActionCard key='0' type='borrow' />],
            [1, <ActionCard key='1' type='leverage' />],
            [2, <ActionCard key='2' type='earn' />],
          ]
        : []
    )
    .exhaustive();

  if (mode === "actions") {
    columns = 3;
  }

  const cardHeight = mode === "actions" ? 144 : 188;
  const rows = Math.ceil(cards.length / columns);
  const containerHeight = cardHeight * rows + 24 * (rows - 1);

  const positionTransitions = useTransition(cards, {
    keys: ([index]) => `${mode}${index}`,
    from: {
      opacity: 0,
      transform: "scale3d(0.97, 0.97, 1)",
    },
    enter: {
      opacity: 1,
      transform: "scale3d(1, 1, 1)",
    },
    leave: {
      display: "none",
      immediate: true,
    },
    config: {
      mass: 2,
      tension: 1800,
      friction: 80,
    },
  });

  const animateHeight = useRef(false);
  if (mode === "loading") {
    animateHeight.current = true;
  }

  const containerSpring = useSpring({
    initial: { height: cardHeight },
    from: { height: cardHeight },
    to: { height: containerHeight },
    immediate: !animateHeight.current || mode === "loading",
    config: {
      mass: 1,
      tension: 2400,
      friction: 100,
    },
  });

  return (
    <div>
      {title_ && (
        <h1
          className={css({
            fontSize: 32,
            color: "content",
            userSelect: "none",
          })}
          style={{
            paddingBottom: mode === "actions" ? 48 : 32,
          }}
          onClick={onTitleClick}
        >
          {title_}
        </h1>
      )}
      <a.div
        className={css({
          position: "relative",
        })}
        style={{
          ...containerSpring,
        }}
      >
        <a.div
          className={css({
            display: "grid",
            gap: 24,
          })}
          style={{
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gridAutoRows: cardHeight,
          }}
        >
          {positionTransitions((style, [_, card]) => (
            <a.div
              className={css({
                display: "grid",
                height: "100%",
                willChange: "transform, opacity",
              })}
              style={style}
            >
              {card}
            </a.div>
          ))}
        </a.div>
      </a.div>
    </div>
  );
}
