import type { FlowDeclaration } from "@/src/services/TransactionFlow";

import { Amount } from "@/src/comps/Amount/Amount";
import { EarnPositionSummary } from "@/src/comps/EarnPositionSummary/EarnPositionSummary";
import { getCollToken } from "@/src/liquity-utils";
import { TransactionDetailsRow } from "@/src/screens/TransactionsScreen/TransactionsScreen";
import { usePrice } from "@/src/services/Prices";
import { vAddress, vCollIndex, vDnum } from "@/src/valibot-utils";
import * as dn from "dnum";
import * as v from "valibot";

const FlowIdSchema = v.literal("earnWithdraw");

const RequestSchema = v.object({
  flowId: FlowIdSchema,
  backLink: v.union([
    v.null(),
    v.tuple([
      v.string(), // path
      v.string(), // label
    ]),
  ]),
  successLink: v.tuple([
    v.string(), // path
    v.string(), // label
  ]),
  successMessage: v.string(),

  collIndex: vCollIndex(),
  depositor: vAddress(),
  boldAmount: vDnum(),
  claim: v.boolean(),
});

export type Request = v.InferOutput<typeof RequestSchema>;

type Step = "withdrawFromStabilityPool";

const stepNames: Record<Step, string> = {
  withdrawFromStabilityPool: "Withdraw",
};

export const earnWithdraw: FlowDeclaration<Request, Step> = {
  title: "Review & Send Transaction",

  Summary({ flow }) {
    const collateral = getCollToken(flow.request.collIndex);
    const symbol = collateral?.symbol;
    return (
      symbol && (
        <EarnPositionSummary
          address={flow.request.depositor}
          collSymbol={symbol}
          txPreviewMode
        />
      )
    );
  },

  Details({ flow }) {
    const { request } = flow;
    const boldPrice = usePrice("USDN");
    return (
      <>
        <TransactionDetailsRow
          label='You withdraw'
          value={[
            <Amount key='start' value={request.boldAmount} suffix=' USDN' />,
            <Amount
              key='end'
              value={boldPrice && dn.mul(request.boldAmount, boldPrice)}
              prefix='$'
            />,
          ]}
        />
      </>
    );
  },

  async getSteps() {
    return ["withdrawFromStabilityPool"];
  },

  getStepName(stepId) {
    return stepNames[stepId];
  },

  parseRequest(request) {
    return v.parse(RequestSchema, request);
  },

  async writeContractParams(_stepId, { contracts, request }) {
    const collateral = contracts.collaterals[request.collIndex];
    return {
      ...collateral.contracts.StabilityPool,
      functionName: "withdrawFromSP",
      args: [request.boldAmount[0], request.claim],
    };
  },
};
