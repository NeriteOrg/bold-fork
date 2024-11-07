import type { CollIndex, PositionEarn } from "@/src/types";
import type { Dnum } from "dnum";

import { Amount } from "@/src/comps/Amount/Amount";
import { ConnectWarningBox } from "@/src/comps/ConnectWarningBox/ConnectWarningBox";
import { Field } from "@/src/comps/Field/Field";
import { InputTokenBadge } from "@/src/comps/InputTokenBadge/InputTokenBadge";
import content from "@/src/content";
import { DNUM_0, dnumMax } from "@/src/dnum-utils";
import { parseInputFloat } from "@/src/form-utils";
import { fmtnum } from "@/src/formatting";
import { getCollToken } from "@/src/liquity-utils";
import { useAccount, useBalance } from "@/src/services/Arbitrum";
import { useTransactionFlow } from "@/src/services/TransactionFlow";
import { infoTooltipProps } from "@/src/uikit-utils";
import { css } from "@/styled-system/css";
import {
  Button,
  Checkbox,
  HFlex,
  InfoTooltip,
  InputField,
  Tabs,
  TextButton,
  TokenIcon,
} from "@liquity2/uikit";
import * as dn from "dnum";
import { useState } from "react";

type ValueUpdateMode = "add" | "remove";

export function PanelUpdateDeposit({
  deposited,
  collIndex,
  position,
}: {
  deposited: Dnum;
  collIndex: null | CollIndex;
  position?: PositionEarn;
}) {
  const account = useAccount();
  const txFlow = useTransactionFlow();

  const [mode, setMode] = useState<ValueUpdateMode>("add");
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);
  const [claimRewards, setClaimRewards] = useState(false);

  const hasDeposit = position?.deposit && dn.gt(position.deposit, 0);

  const parsedValue = parseInputFloat(value);

  const value_ =
    focused || !parsedValue || dn.lte(parsedValue, 0)
      ? value
      : `${fmtnum(parsedValue, "full")}`;

  const depositDifference =
    mode === "remove"
      ? dn.mul(parsedValue ?? DNUM_0, -1)
      : parsedValue ?? DNUM_0;

  const updatedDeposit = dnumMax(
    dn.add(position?.deposit ?? DNUM_0, depositDifference),
    DNUM_0
  );

  const boldBalance = useBalance(account.address, "USDN");

  const updatedBoldQty = dn.add(deposited, depositDifference);

  const updatedPoolShare =
    depositDifference && dn.gt(updatedBoldQty, 0)
      ? dn.div(updatedDeposit, updatedBoldQty)
      : DNUM_0;

  const collateral = getCollToken(collIndex);

  const allowSubmit =
    account.isConnected && parsedValue && dn.gt(parsedValue, 0);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        gap: 48,
      }}
    >
      <Field
        field={
          <InputField
            contextual={
              <InputTokenBadge
                background={false}
                icon={<TokenIcon symbol='USDN' />}
                label='USDN'
              />
            }
            label={{
              start:
                mode === "remove"
                  ? content.earnScreen.withdrawPanel.label
                  : content.earnScreen.depositPanel.label,
              end: (
                <Tabs
                  compact
                  items={[
                    {
                      label: "Deposit",
                      panelId: "panel-deposit",
                      tabId: "tab-deposit",
                    },
                    {
                      label: "Withdraw",
                      panelId: "panel-withdraw",
                      tabId: "tab-withdraw",
                    },
                  ]}
                  onSelect={(index, { origin, event }) => {
                    setMode(index === 1 ? "remove" : "add");
                    setValue("");
                    if (origin !== "keyboard") {
                      event.preventDefault();
                      (event.target as HTMLElement).focus();
                    }
                  }}
                  selected={mode === "remove" ? 1 : 0}
                />
              ),
            }}
            labelHeight={32}
            onFocus={() => setFocused(true)}
            onChange={setValue}
            onBlur={() => setFocused(false)}
            value={value_}
            placeholder='0.00'
            secondary={{
              start: (
                <HFlex gap={4}>
                  <div>{content.earnScreen.depositPanel.shareLabel}</div>
                  <div>
                    <Amount format={2} percentage value={updatedPoolShare} />
                  </div>
                  <InfoTooltip
                    {...infoTooltipProps(
                      content.earnScreen.infoTooltips.depositPoolShare
                    )}
                  />
                </HFlex>
              ),
              end:
                mode === "add"
                  ? boldBalance.data && (
                      <TextButton
                        label={`Max ${fmtnum(boldBalance.data, 2)} USDN`}
                        onClick={() => setValue(dn.toString(boldBalance.data))}
                      />
                    )
                  : position?.deposit &&
                    dn.gt(position.deposit, 0) && (
                      <TextButton
                        label={`Max ${fmtnum(position.deposit, 2)} USDN`}
                        onClick={() => {
                          setValue(dn.toString(position.deposit));
                          setClaimRewards(true);
                        }}
                      />
                    ),
            }}
          />
        }
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 24,
          width: "100%",
        }}
      >
        {hasDeposit && (
          <HFlex justifyContent='space-between'>
            <div
              className={css({
                display: "flex",
                alignItems: "center",
                gap: 8,
              })}
            >
              <label
                className={css({
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  cursor: "pointer",
                  userSelect: "none",
                })}
              >
                <Checkbox checked={claimRewards} onChange={setClaimRewards} />
                {content.earnScreen.depositPanel.claimCheckbox}
              </label>
              <InfoTooltip
                {...infoTooltipProps(
                  mode === "remove"
                    ? content.earnScreen.infoTooltips.alsoClaimRewardsWithdraw
                    : content.earnScreen.infoTooltips.alsoClaimRewardsDeposit
                )}
              />
            </div>
            {position && (
              <div
                className={css({
                  display: "flex",
                  gap: 24,
                })}
              >
                <div>
                  <Amount value={position.rewards.bold} />{" "}
                  <span
                    className={css({
                      color: "contentAlt",
                    })}
                  >
                    USDN
                  </span>
                </div>
                {collateral && (
                  <div>
                    <Amount value={position.rewards.coll} />{" "}
                    <span
                      className={css({
                        color: "contentAlt",
                      })}
                    >
                      {collateral.name}
                    </span>
                  </div>
                )}
              </div>
            )}
          </HFlex>
        )}
        <ConnectWarningBox />
        <Button
          disabled={!allowSubmit}
          label={content.earnScreen.depositPanel.action}
          mode='primary'
          size='large'
          wide
          onClick={() => {
            if (collateral && account.address && collIndex !== null) {
              txFlow.start({
                flowId: mode === "remove" ? "earnWithdraw" : "earnDeposit",
                backLink: [
                  `/earn/${collateral.name.toLowerCase()}`,
                  "Back to editing",
                ],
                successLink: ["/", "Go to the Dashboard"],
                successMessage:
                  mode === "remove"
                    ? "The withdrawal has been processed successfully."
                    : "The deposit has been processed successfully.",

                depositor: account.address,
                boldAmount: dn.abs(depositDifference),
                claim: claimRewards,
                collIndex,
              });
            }
          }}
        />
      </div>
    </div>
  );
}
