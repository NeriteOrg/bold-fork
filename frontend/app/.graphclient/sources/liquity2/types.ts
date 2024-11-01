// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace Liquity2Types {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigDecimal: { input: bigint; output: bigint; }
  BigInt: { input: bigint; output: bigint; }
  Bytes: { input: string; output: string; }
  Int8: { input: number; output: number; }
  Timestamp: { input: string; output: string; }
};

export type Aggregation_interval =
  | 'hour'
  | 'day';

export type BlockChangedFilter = {
  readonly number_gte: Scalars['Int']['input'];
};

export type Block_height = {
  readonly hash?: InputMaybe<Scalars['Bytes']['input']>;
  readonly number?: InputMaybe<Scalars['Int']['input']>;
  readonly number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export type BorrowerInfo = {
  readonly id: Scalars['ID']['output'];
  readonly troves: Scalars['Int']['output'];
  readonly trovesByCollateral: ReadonlyArray<Scalars['Int']['output']>;
};

export type BorrowerInfo_filter = {
  readonly id?: InputMaybe<Scalars['ID']['input']>;
  readonly id_not?: InputMaybe<Scalars['ID']['input']>;
  readonly id_gt?: InputMaybe<Scalars['ID']['input']>;
  readonly id_lt?: InputMaybe<Scalars['ID']['input']>;
  readonly id_gte?: InputMaybe<Scalars['ID']['input']>;
  readonly id_lte?: InputMaybe<Scalars['ID']['input']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  readonly troves?: InputMaybe<Scalars['Int']['input']>;
  readonly troves_not?: InputMaybe<Scalars['Int']['input']>;
  readonly troves_gt?: InputMaybe<Scalars['Int']['input']>;
  readonly troves_lt?: InputMaybe<Scalars['Int']['input']>;
  readonly troves_gte?: InputMaybe<Scalars['Int']['input']>;
  readonly troves_lte?: InputMaybe<Scalars['Int']['input']>;
  readonly troves_in?: InputMaybe<ReadonlyArray<Scalars['Int']['input']>>;
  readonly troves_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']['input']>>;
  readonly trovesByCollateral?: InputMaybe<ReadonlyArray<Scalars['Int']['input']>>;
  readonly trovesByCollateral_not?: InputMaybe<ReadonlyArray<Scalars['Int']['input']>>;
  readonly trovesByCollateral_contains?: InputMaybe<ReadonlyArray<Scalars['Int']['input']>>;
  readonly trovesByCollateral_contains_nocase?: InputMaybe<ReadonlyArray<Scalars['Int']['input']>>;
  readonly trovesByCollateral_not_contains?: InputMaybe<ReadonlyArray<Scalars['Int']['input']>>;
  readonly trovesByCollateral_not_contains_nocase?: InputMaybe<ReadonlyArray<Scalars['Int']['input']>>;
  /** Filter for the block changed event. */
  readonly _change_block?: InputMaybe<BlockChangedFilter>;
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<BorrowerInfo_filter>>>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<BorrowerInfo_filter>>>;
};

export type BorrowerInfo_orderBy =
  | 'id'
  | 'troves'
  | 'trovesByCollateral';

export type Collateral = {
  readonly id: Scalars['ID']['output'];
  readonly collIndex: Scalars['Int']['output'];
  readonly token: Token;
  readonly minCollRatio: Scalars['BigInt']['output'];
  readonly troves: ReadonlyArray<Trove>;
  readonly addresses: CollateralAddresses;
  readonly stabilityPoolDeposits: ReadonlyArray<StabilityPoolDeposit>;
  readonly totalDeposited: Scalars['BigInt']['output'];
  readonly totalDebt: Scalars['BigInt']['output'];
  readonly price: Scalars['BigInt']['output'];
};


export type CollateraltrovesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Trove_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Trove_filter>;
};


export type CollateralstabilityPoolDepositsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<StabilityPoolDeposit_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<StabilityPoolDeposit_filter>;
};

export type CollateralAddresses = {
  readonly id: Scalars['ID']['output'];
  readonly borrowerOperations: Scalars['Bytes']['output'];
  readonly collateral: Collateral;
  readonly sortedTroves: Scalars['Bytes']['output'];
  readonly stabilityPool: Scalars['Bytes']['output'];
  readonly token: Scalars['Bytes']['output'];
  readonly troveManager: Scalars['Bytes']['output'];
  readonly troveNft: Scalars['Bytes']['output'];
};

export type CollateralAddresses_filter = {
  readonly id?: InputMaybe<Scalars['ID']['input']>;
  readonly id_not?: InputMaybe<Scalars['ID']['input']>;
  readonly id_gt?: InputMaybe<Scalars['ID']['input']>;
  readonly id_lt?: InputMaybe<Scalars['ID']['input']>;
  readonly id_gte?: InputMaybe<Scalars['ID']['input']>;
  readonly id_lte?: InputMaybe<Scalars['ID']['input']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  readonly borrowerOperations?: InputMaybe<Scalars['Bytes']['input']>;
  readonly borrowerOperations_not?: InputMaybe<Scalars['Bytes']['input']>;
  readonly borrowerOperations_gt?: InputMaybe<Scalars['Bytes']['input']>;
  readonly borrowerOperations_lt?: InputMaybe<Scalars['Bytes']['input']>;
  readonly borrowerOperations_gte?: InputMaybe<Scalars['Bytes']['input']>;
  readonly borrowerOperations_lte?: InputMaybe<Scalars['Bytes']['input']>;
  readonly borrowerOperations_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']['input']>>;
  readonly borrowerOperations_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']['input']>>;
  readonly borrowerOperations_contains?: InputMaybe<Scalars['Bytes']['input']>;
  readonly borrowerOperations_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  readonly collateral?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_not?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_gt?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_lt?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_gte?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_lte?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_in?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly collateral_not_in?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly collateral_contains?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_starts_with?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_ends_with?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_?: InputMaybe<Collateral_filter>;
  readonly sortedTroves?: InputMaybe<Scalars['Bytes']['input']>;
  readonly sortedTroves_not?: InputMaybe<Scalars['Bytes']['input']>;
  readonly sortedTroves_gt?: InputMaybe<Scalars['Bytes']['input']>;
  readonly sortedTroves_lt?: InputMaybe<Scalars['Bytes']['input']>;
  readonly sortedTroves_gte?: InputMaybe<Scalars['Bytes']['input']>;
  readonly sortedTroves_lte?: InputMaybe<Scalars['Bytes']['input']>;
  readonly sortedTroves_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']['input']>>;
  readonly sortedTroves_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']['input']>>;
  readonly sortedTroves_contains?: InputMaybe<Scalars['Bytes']['input']>;
  readonly sortedTroves_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  readonly stabilityPool?: InputMaybe<Scalars['Bytes']['input']>;
  readonly stabilityPool_not?: InputMaybe<Scalars['Bytes']['input']>;
  readonly stabilityPool_gt?: InputMaybe<Scalars['Bytes']['input']>;
  readonly stabilityPool_lt?: InputMaybe<Scalars['Bytes']['input']>;
  readonly stabilityPool_gte?: InputMaybe<Scalars['Bytes']['input']>;
  readonly stabilityPool_lte?: InputMaybe<Scalars['Bytes']['input']>;
  readonly stabilityPool_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']['input']>>;
  readonly stabilityPool_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']['input']>>;
  readonly stabilityPool_contains?: InputMaybe<Scalars['Bytes']['input']>;
  readonly stabilityPool_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  readonly token?: InputMaybe<Scalars['Bytes']['input']>;
  readonly token_not?: InputMaybe<Scalars['Bytes']['input']>;
  readonly token_gt?: InputMaybe<Scalars['Bytes']['input']>;
  readonly token_lt?: InputMaybe<Scalars['Bytes']['input']>;
  readonly token_gte?: InputMaybe<Scalars['Bytes']['input']>;
  readonly token_lte?: InputMaybe<Scalars['Bytes']['input']>;
  readonly token_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']['input']>>;
  readonly token_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']['input']>>;
  readonly token_contains?: InputMaybe<Scalars['Bytes']['input']>;
  readonly token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  readonly troveManager?: InputMaybe<Scalars['Bytes']['input']>;
  readonly troveManager_not?: InputMaybe<Scalars['Bytes']['input']>;
  readonly troveManager_gt?: InputMaybe<Scalars['Bytes']['input']>;
  readonly troveManager_lt?: InputMaybe<Scalars['Bytes']['input']>;
  readonly troveManager_gte?: InputMaybe<Scalars['Bytes']['input']>;
  readonly troveManager_lte?: InputMaybe<Scalars['Bytes']['input']>;
  readonly troveManager_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']['input']>>;
  readonly troveManager_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']['input']>>;
  readonly troveManager_contains?: InputMaybe<Scalars['Bytes']['input']>;
  readonly troveManager_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  readonly troveNft?: InputMaybe<Scalars['Bytes']['input']>;
  readonly troveNft_not?: InputMaybe<Scalars['Bytes']['input']>;
  readonly troveNft_gt?: InputMaybe<Scalars['Bytes']['input']>;
  readonly troveNft_lt?: InputMaybe<Scalars['Bytes']['input']>;
  readonly troveNft_gte?: InputMaybe<Scalars['Bytes']['input']>;
  readonly troveNft_lte?: InputMaybe<Scalars['Bytes']['input']>;
  readonly troveNft_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']['input']>>;
  readonly troveNft_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']['input']>>;
  readonly troveNft_contains?: InputMaybe<Scalars['Bytes']['input']>;
  readonly troveNft_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  readonly _change_block?: InputMaybe<BlockChangedFilter>;
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<CollateralAddresses_filter>>>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<CollateralAddresses_filter>>>;
};

export type CollateralAddresses_orderBy =
  | 'id'
  | 'borrowerOperations'
  | 'collateral'
  | 'collateral__id'
  | 'collateral__collIndex'
  | 'collateral__minCollRatio'
  | 'collateral__totalDeposited'
  | 'collateral__totalDebt'
  | 'collateral__price'
  | 'sortedTroves'
  | 'stabilityPool'
  | 'token'
  | 'troveManager'
  | 'troveNft';

export type Collateral_filter = {
  readonly id?: InputMaybe<Scalars['ID']['input']>;
  readonly id_not?: InputMaybe<Scalars['ID']['input']>;
  readonly id_gt?: InputMaybe<Scalars['ID']['input']>;
  readonly id_lt?: InputMaybe<Scalars['ID']['input']>;
  readonly id_gte?: InputMaybe<Scalars['ID']['input']>;
  readonly id_lte?: InputMaybe<Scalars['ID']['input']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  readonly collIndex?: InputMaybe<Scalars['Int']['input']>;
  readonly collIndex_not?: InputMaybe<Scalars['Int']['input']>;
  readonly collIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  readonly collIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  readonly collIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  readonly collIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  readonly collIndex_in?: InputMaybe<ReadonlyArray<Scalars['Int']['input']>>;
  readonly collIndex_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']['input']>>;
  readonly token?: InputMaybe<Scalars['String']['input']>;
  readonly token_not?: InputMaybe<Scalars['String']['input']>;
  readonly token_gt?: InputMaybe<Scalars['String']['input']>;
  readonly token_lt?: InputMaybe<Scalars['String']['input']>;
  readonly token_gte?: InputMaybe<Scalars['String']['input']>;
  readonly token_lte?: InputMaybe<Scalars['String']['input']>;
  readonly token_in?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly token_not_in?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly token_contains?: InputMaybe<Scalars['String']['input']>;
  readonly token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  readonly token_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  readonly token_starts_with?: InputMaybe<Scalars['String']['input']>;
  readonly token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  readonly token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  readonly token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  readonly token_ends_with?: InputMaybe<Scalars['String']['input']>;
  readonly token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  readonly token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  readonly token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  readonly token_?: InputMaybe<Token_filter>;
  readonly minCollRatio?: InputMaybe<Scalars['BigInt']['input']>;
  readonly minCollRatio_not?: InputMaybe<Scalars['BigInt']['input']>;
  readonly minCollRatio_gt?: InputMaybe<Scalars['BigInt']['input']>;
  readonly minCollRatio_lt?: InputMaybe<Scalars['BigInt']['input']>;
  readonly minCollRatio_gte?: InputMaybe<Scalars['BigInt']['input']>;
  readonly minCollRatio_lte?: InputMaybe<Scalars['BigInt']['input']>;
  readonly minCollRatio_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']['input']>>;
  readonly minCollRatio_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']['input']>>;
  readonly troves_?: InputMaybe<Trove_filter>;
  readonly addresses_?: InputMaybe<CollateralAddresses_filter>;
  readonly stabilityPoolDeposits_?: InputMaybe<StabilityPoolDeposit_filter>;
  readonly totalDeposited?: InputMaybe<Scalars['BigInt']['input']>;
  readonly totalDeposited_not?: InputMaybe<Scalars['BigInt']['input']>;
  readonly totalDeposited_gt?: InputMaybe<Scalars['BigInt']['input']>;
  readonly totalDeposited_lt?: InputMaybe<Scalars['BigInt']['input']>;
  readonly totalDeposited_gte?: InputMaybe<Scalars['BigInt']['input']>;
  readonly totalDeposited_lte?: InputMaybe<Scalars['BigInt']['input']>;
  readonly totalDeposited_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']['input']>>;
  readonly totalDeposited_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']['input']>>;
  readonly totalDebt?: InputMaybe<Scalars['BigInt']['input']>;
  readonly totalDebt_not?: InputMaybe<Scalars['BigInt']['input']>;
  readonly totalDebt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  readonly totalDebt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  readonly totalDebt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  readonly totalDebt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  readonly totalDebt_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']['input']>>;
  readonly totalDebt_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']['input']>>;
  readonly price?: InputMaybe<Scalars['BigInt']['input']>;
  readonly price_not?: InputMaybe<Scalars['BigInt']['input']>;
  readonly price_gt?: InputMaybe<Scalars['BigInt']['input']>;
  readonly price_lt?: InputMaybe<Scalars['BigInt']['input']>;
  readonly price_gte?: InputMaybe<Scalars['BigInt']['input']>;
  readonly price_lte?: InputMaybe<Scalars['BigInt']['input']>;
  readonly price_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']['input']>>;
  readonly price_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  readonly _change_block?: InputMaybe<BlockChangedFilter>;
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<Collateral_filter>>>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<Collateral_filter>>>;
};

export type Collateral_orderBy =
  | 'id'
  | 'collIndex'
  | 'token'
  | 'token__id'
  | 'token__name'
  | 'token__symbol'
  | 'token__decimals'
  | 'minCollRatio'
  | 'troves'
  | 'addresses'
  | 'addresses__id'
  | 'addresses__borrowerOperations'
  | 'addresses__sortedTroves'
  | 'addresses__stabilityPool'
  | 'addresses__token'
  | 'addresses__troveManager'
  | 'addresses__troveNft'
  | 'stabilityPoolDeposits'
  | 'totalDeposited'
  | 'totalDebt'
  | 'price';

export type InterestBatch = {
  readonly id: Scalars['ID']['output'];
  readonly collateral: Collateral;
  readonly batchManager: Scalars['Bytes']['output'];
  readonly debt: Scalars['BigInt']['output'];
  readonly coll: Scalars['BigInt']['output'];
  readonly annualInterestRate: Scalars['BigInt']['output'];
  readonly annualManagementFee: Scalars['BigInt']['output'];
  readonly troves: ReadonlyArray<Trove>;
};


export type InterestBatchtrovesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Trove_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Trove_filter>;
};

export type InterestBatch_filter = {
  readonly id?: InputMaybe<Scalars['ID']['input']>;
  readonly id_not?: InputMaybe<Scalars['ID']['input']>;
  readonly id_gt?: InputMaybe<Scalars['ID']['input']>;
  readonly id_lt?: InputMaybe<Scalars['ID']['input']>;
  readonly id_gte?: InputMaybe<Scalars['ID']['input']>;
  readonly id_lte?: InputMaybe<Scalars['ID']['input']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  readonly collateral?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_not?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_gt?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_lt?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_gte?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_lte?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_in?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly collateral_not_in?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly collateral_contains?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_starts_with?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_ends_with?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_?: InputMaybe<Collateral_filter>;
  readonly batchManager?: InputMaybe<Scalars['Bytes']['input']>;
  readonly batchManager_not?: InputMaybe<Scalars['Bytes']['input']>;
  readonly batchManager_gt?: InputMaybe<Scalars['Bytes']['input']>;
  readonly batchManager_lt?: InputMaybe<Scalars['Bytes']['input']>;
  readonly batchManager_gte?: InputMaybe<Scalars['Bytes']['input']>;
  readonly batchManager_lte?: InputMaybe<Scalars['Bytes']['input']>;
  readonly batchManager_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']['input']>>;
  readonly batchManager_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']['input']>>;
  readonly batchManager_contains?: InputMaybe<Scalars['Bytes']['input']>;
  readonly batchManager_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  readonly debt?: InputMaybe<Scalars['BigInt']['input']>;
  readonly debt_not?: InputMaybe<Scalars['BigInt']['input']>;
  readonly debt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  readonly debt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  readonly debt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  readonly debt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  readonly debt_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']['input']>>;
  readonly debt_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']['input']>>;
  readonly coll?: InputMaybe<Scalars['BigInt']['input']>;
  readonly coll_not?: InputMaybe<Scalars['BigInt']['input']>;
  readonly coll_gt?: InputMaybe<Scalars['BigInt']['input']>;
  readonly coll_lt?: InputMaybe<Scalars['BigInt']['input']>;
  readonly coll_gte?: InputMaybe<Scalars['BigInt']['input']>;
  readonly coll_lte?: InputMaybe<Scalars['BigInt']['input']>;
  readonly coll_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']['input']>>;
  readonly coll_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']['input']>>;
  readonly annualInterestRate?: InputMaybe<Scalars['BigInt']['input']>;
  readonly annualInterestRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  readonly annualInterestRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  readonly annualInterestRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  readonly annualInterestRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  readonly annualInterestRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  readonly annualInterestRate_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']['input']>>;
  readonly annualInterestRate_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']['input']>>;
  readonly annualManagementFee?: InputMaybe<Scalars['BigInt']['input']>;
  readonly annualManagementFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  readonly annualManagementFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  readonly annualManagementFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  readonly annualManagementFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  readonly annualManagementFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  readonly annualManagementFee_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']['input']>>;
  readonly annualManagementFee_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']['input']>>;
  readonly troves_?: InputMaybe<Trove_filter>;
  /** Filter for the block changed event. */
  readonly _change_block?: InputMaybe<BlockChangedFilter>;
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<InterestBatch_filter>>>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<InterestBatch_filter>>>;
};

export type InterestBatch_orderBy =
  | 'id'
  | 'collateral'
  | 'collateral__id'
  | 'collateral__collIndex'
  | 'collateral__minCollRatio'
  | 'collateral__totalDeposited'
  | 'collateral__totalDebt'
  | 'collateral__price'
  | 'batchManager'
  | 'debt'
  | 'coll'
  | 'annualInterestRate'
  | 'annualManagementFee'
  | 'troves';

export type InterestRateBracket = {
  readonly id: Scalars['ID']['output'];
  readonly collateral: Collateral;
  readonly rate: Scalars['BigInt']['output'];
  readonly totalDebt: Scalars['BigInt']['output'];
};

export type InterestRateBracket_filter = {
  readonly id?: InputMaybe<Scalars['ID']['input']>;
  readonly id_not?: InputMaybe<Scalars['ID']['input']>;
  readonly id_gt?: InputMaybe<Scalars['ID']['input']>;
  readonly id_lt?: InputMaybe<Scalars['ID']['input']>;
  readonly id_gte?: InputMaybe<Scalars['ID']['input']>;
  readonly id_lte?: InputMaybe<Scalars['ID']['input']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  readonly collateral?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_not?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_gt?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_lt?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_gte?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_lte?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_in?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly collateral_not_in?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly collateral_contains?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_starts_with?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_ends_with?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_?: InputMaybe<Collateral_filter>;
  readonly rate?: InputMaybe<Scalars['BigInt']['input']>;
  readonly rate_not?: InputMaybe<Scalars['BigInt']['input']>;
  readonly rate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  readonly rate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  readonly rate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  readonly rate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  readonly rate_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']['input']>>;
  readonly rate_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']['input']>>;
  readonly totalDebt?: InputMaybe<Scalars['BigInt']['input']>;
  readonly totalDebt_not?: InputMaybe<Scalars['BigInt']['input']>;
  readonly totalDebt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  readonly totalDebt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  readonly totalDebt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  readonly totalDebt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  readonly totalDebt_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']['input']>>;
  readonly totalDebt_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  readonly _change_block?: InputMaybe<BlockChangedFilter>;
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<InterestRateBracket_filter>>>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<InterestRateBracket_filter>>>;
};

export type InterestRateBracket_orderBy =
  | 'id'
  | 'collateral'
  | 'collateral__id'
  | 'collateral__collIndex'
  | 'collateral__minCollRatio'
  | 'collateral__totalDeposited'
  | 'collateral__totalDebt'
  | 'collateral__price'
  | 'rate'
  | 'totalDebt';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type Query = {
  readonly collateral?: Maybe<Collateral>;
  readonly collaterals: ReadonlyArray<Collateral>;
  readonly token?: Maybe<Token>;
  readonly tokens: ReadonlyArray<Token>;
  readonly collateralAddresses?: Maybe<CollateralAddresses>;
  readonly collateralAddresses_collection: ReadonlyArray<CollateralAddresses>;
  readonly interestRateBracket?: Maybe<InterestRateBracket>;
  readonly interestRateBrackets: ReadonlyArray<InterestRateBracket>;
  readonly trove?: Maybe<Trove>;
  readonly troves: ReadonlyArray<Trove>;
  readonly borrowerInfo?: Maybe<BorrowerInfo>;
  readonly borrowerInfos: ReadonlyArray<BorrowerInfo>;
  readonly stabilityPool?: Maybe<StabilityPool>;
  readonly stabilityPools: ReadonlyArray<StabilityPool>;
  readonly stabilityPoolDeposit?: Maybe<StabilityPoolDeposit>;
  readonly stabilityPoolDeposits: ReadonlyArray<StabilityPoolDeposit>;
  readonly stabilityPoolDepositSnapshot?: Maybe<StabilityPoolDepositSnapshot>;
  readonly stabilityPoolDepositSnapshots: ReadonlyArray<StabilityPoolDepositSnapshot>;
  readonly stabilityPoolEpochScale?: Maybe<StabilityPoolEpochScale>;
  readonly stabilityPoolEpochScales: ReadonlyArray<StabilityPoolEpochScale>;
  readonly interestBatch?: Maybe<InterestBatch>;
  readonly interestBatches: ReadonlyArray<InterestBatch>;
  /** Access to subgraph metadata */
  readonly _meta?: Maybe<_Meta_>;
};


export type QuerycollateralArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycollateralsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Collateral_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Collateral_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokensArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycollateralAddressesArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycollateralAddresses_collectionArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CollateralAddresses_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CollateralAddresses_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryinterestRateBracketArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryinterestRateBracketsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<InterestRateBracket_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<InterestRateBracket_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytroveArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytrovesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Trove_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Trove_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryborrowerInfoArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryborrowerInfosArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BorrowerInfo_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BorrowerInfo_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerystabilityPoolArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerystabilityPoolsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<StabilityPool_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<StabilityPool_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerystabilityPoolDepositArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerystabilityPoolDepositsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<StabilityPoolDeposit_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<StabilityPoolDeposit_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerystabilityPoolDepositSnapshotArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerystabilityPoolDepositSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<StabilityPoolDepositSnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<StabilityPoolDepositSnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerystabilityPoolEpochScaleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerystabilityPoolEpochScalesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<StabilityPoolEpochScale_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<StabilityPoolEpochScale_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryinterestBatchArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryinterestBatchesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<InterestBatch_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<InterestBatch_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type StabilityPool = {
  readonly id: Scalars['ID']['output'];
  readonly totalDeposited: Scalars['BigInt']['output'];
};

export type StabilityPoolDeposit = {
  readonly id: Scalars['ID']['output'];
  readonly collateral: Collateral;
  readonly deposit: Scalars['BigInt']['output'];
  readonly depositor: Scalars['Bytes']['output'];
  readonly snapshot: StabilityPoolDepositSnapshot;
};

export type StabilityPoolDepositSnapshot = {
  readonly id: Scalars['ID']['output'];
  readonly B: Scalars['BigInt']['output'];
  readonly P: Scalars['BigInt']['output'];
  readonly S: Scalars['BigInt']['output'];
  readonly epoch: Scalars['BigInt']['output'];
  readonly scale: Scalars['BigInt']['output'];
  readonly deposit: StabilityPoolDeposit;
};

export type StabilityPoolDepositSnapshot_filter = {
  readonly id?: InputMaybe<Scalars['ID']['input']>;
  readonly id_not?: InputMaybe<Scalars['ID']['input']>;
  readonly id_gt?: InputMaybe<Scalars['ID']['input']>;
  readonly id_lt?: InputMaybe<Scalars['ID']['input']>;
  readonly id_gte?: InputMaybe<Scalars['ID']['input']>;
  readonly id_lte?: InputMaybe<Scalars['ID']['input']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  readonly B?: InputMaybe<Scalars['BigInt']['input']>;
  readonly B_not?: InputMaybe<Scalars['BigInt']['input']>;
  readonly B_gt?: InputMaybe<Scalars['BigInt']['input']>;
  readonly B_lt?: InputMaybe<Scalars['BigInt']['input']>;
  readonly B_gte?: InputMaybe<Scalars['BigInt']['input']>;
  readonly B_lte?: InputMaybe<Scalars['BigInt']['input']>;
  readonly B_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']['input']>>;
  readonly B_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']['input']>>;
  readonly P?: InputMaybe<Scalars['BigInt']['input']>;
  readonly P_not?: InputMaybe<Scalars['BigInt']['input']>;
  readonly P_gt?: InputMaybe<Scalars['BigInt']['input']>;
  readonly P_lt?: InputMaybe<Scalars['BigInt']['input']>;
  readonly P_gte?: InputMaybe<Scalars['BigInt']['input']>;
  readonly P_lte?: InputMaybe<Scalars['BigInt']['input']>;
  readonly P_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']['input']>>;
  readonly P_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']['input']>>;
  readonly S?: InputMaybe<Scalars['BigInt']['input']>;
  readonly S_not?: InputMaybe<Scalars['BigInt']['input']>;
  readonly S_gt?: InputMaybe<Scalars['BigInt']['input']>;
  readonly S_lt?: InputMaybe<Scalars['BigInt']['input']>;
  readonly S_gte?: InputMaybe<Scalars['BigInt']['input']>;
  readonly S_lte?: InputMaybe<Scalars['BigInt']['input']>;
  readonly S_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']['input']>>;
  readonly S_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']['input']>>;
  readonly epoch?: InputMaybe<Scalars['BigInt']['input']>;
  readonly epoch_not?: InputMaybe<Scalars['BigInt']['input']>;
  readonly epoch_gt?: InputMaybe<Scalars['BigInt']['input']>;
  readonly epoch_lt?: InputMaybe<Scalars['BigInt']['input']>;
  readonly epoch_gte?: InputMaybe<Scalars['BigInt']['input']>;
  readonly epoch_lte?: InputMaybe<Scalars['BigInt']['input']>;
  readonly epoch_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']['input']>>;
  readonly epoch_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']['input']>>;
  readonly scale?: InputMaybe<Scalars['BigInt']['input']>;
  readonly scale_not?: InputMaybe<Scalars['BigInt']['input']>;
  readonly scale_gt?: InputMaybe<Scalars['BigInt']['input']>;
  readonly scale_lt?: InputMaybe<Scalars['BigInt']['input']>;
  readonly scale_gte?: InputMaybe<Scalars['BigInt']['input']>;
  readonly scale_lte?: InputMaybe<Scalars['BigInt']['input']>;
  readonly scale_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']['input']>>;
  readonly scale_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']['input']>>;
  readonly deposit_?: InputMaybe<StabilityPoolDeposit_filter>;
  /** Filter for the block changed event. */
  readonly _change_block?: InputMaybe<BlockChangedFilter>;
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<StabilityPoolDepositSnapshot_filter>>>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<StabilityPoolDepositSnapshot_filter>>>;
};

export type StabilityPoolDepositSnapshot_orderBy =
  | 'id'
  | 'B'
  | 'P'
  | 'S'
  | 'epoch'
  | 'scale'
  | 'deposit'
  | 'deposit__id'
  | 'deposit__deposit'
  | 'deposit__depositor';

export type StabilityPoolDeposit_filter = {
  readonly id?: InputMaybe<Scalars['ID']['input']>;
  readonly id_not?: InputMaybe<Scalars['ID']['input']>;
  readonly id_gt?: InputMaybe<Scalars['ID']['input']>;
  readonly id_lt?: InputMaybe<Scalars['ID']['input']>;
  readonly id_gte?: InputMaybe<Scalars['ID']['input']>;
  readonly id_lte?: InputMaybe<Scalars['ID']['input']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  readonly collateral?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_not?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_gt?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_lt?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_gte?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_lte?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_in?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly collateral_not_in?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly collateral_contains?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_starts_with?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_ends_with?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_?: InputMaybe<Collateral_filter>;
  readonly deposit?: InputMaybe<Scalars['BigInt']['input']>;
  readonly deposit_not?: InputMaybe<Scalars['BigInt']['input']>;
  readonly deposit_gt?: InputMaybe<Scalars['BigInt']['input']>;
  readonly deposit_lt?: InputMaybe<Scalars['BigInt']['input']>;
  readonly deposit_gte?: InputMaybe<Scalars['BigInt']['input']>;
  readonly deposit_lte?: InputMaybe<Scalars['BigInt']['input']>;
  readonly deposit_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']['input']>>;
  readonly deposit_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']['input']>>;
  readonly depositor?: InputMaybe<Scalars['Bytes']['input']>;
  readonly depositor_not?: InputMaybe<Scalars['Bytes']['input']>;
  readonly depositor_gt?: InputMaybe<Scalars['Bytes']['input']>;
  readonly depositor_lt?: InputMaybe<Scalars['Bytes']['input']>;
  readonly depositor_gte?: InputMaybe<Scalars['Bytes']['input']>;
  readonly depositor_lte?: InputMaybe<Scalars['Bytes']['input']>;
  readonly depositor_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']['input']>>;
  readonly depositor_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']['input']>>;
  readonly depositor_contains?: InputMaybe<Scalars['Bytes']['input']>;
  readonly depositor_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  readonly snapshot?: InputMaybe<Scalars['String']['input']>;
  readonly snapshot_not?: InputMaybe<Scalars['String']['input']>;
  readonly snapshot_gt?: InputMaybe<Scalars['String']['input']>;
  readonly snapshot_lt?: InputMaybe<Scalars['String']['input']>;
  readonly snapshot_gte?: InputMaybe<Scalars['String']['input']>;
  readonly snapshot_lte?: InputMaybe<Scalars['String']['input']>;
  readonly snapshot_in?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly snapshot_not_in?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly snapshot_contains?: InputMaybe<Scalars['String']['input']>;
  readonly snapshot_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  readonly snapshot_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly snapshot_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  readonly snapshot_starts_with?: InputMaybe<Scalars['String']['input']>;
  readonly snapshot_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  readonly snapshot_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  readonly snapshot_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  readonly snapshot_ends_with?: InputMaybe<Scalars['String']['input']>;
  readonly snapshot_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  readonly snapshot_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  readonly snapshot_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  readonly snapshot_?: InputMaybe<StabilityPoolDepositSnapshot_filter>;
  /** Filter for the block changed event. */
  readonly _change_block?: InputMaybe<BlockChangedFilter>;
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<StabilityPoolDeposit_filter>>>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<StabilityPoolDeposit_filter>>>;
};

export type StabilityPoolDeposit_orderBy =
  | 'id'
  | 'collateral'
  | 'collateral__id'
  | 'collateral__collIndex'
  | 'collateral__minCollRatio'
  | 'collateral__totalDeposited'
  | 'collateral__totalDebt'
  | 'collateral__price'
  | 'deposit'
  | 'depositor'
  | 'snapshot'
  | 'snapshot__id'
  | 'snapshot__B'
  | 'snapshot__P'
  | 'snapshot__S'
  | 'snapshot__epoch'
  | 'snapshot__scale';

export type StabilityPoolEpochScale = {
  readonly id: Scalars['ID']['output'];
  readonly S: Scalars['BigInt']['output'];
  readonly B: Scalars['BigInt']['output'];
};

export type StabilityPoolEpochScale_filter = {
  readonly id?: InputMaybe<Scalars['ID']['input']>;
  readonly id_not?: InputMaybe<Scalars['ID']['input']>;
  readonly id_gt?: InputMaybe<Scalars['ID']['input']>;
  readonly id_lt?: InputMaybe<Scalars['ID']['input']>;
  readonly id_gte?: InputMaybe<Scalars['ID']['input']>;
  readonly id_lte?: InputMaybe<Scalars['ID']['input']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  readonly S?: InputMaybe<Scalars['BigInt']['input']>;
  readonly S_not?: InputMaybe<Scalars['BigInt']['input']>;
  readonly S_gt?: InputMaybe<Scalars['BigInt']['input']>;
  readonly S_lt?: InputMaybe<Scalars['BigInt']['input']>;
  readonly S_gte?: InputMaybe<Scalars['BigInt']['input']>;
  readonly S_lte?: InputMaybe<Scalars['BigInt']['input']>;
  readonly S_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']['input']>>;
  readonly S_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']['input']>>;
  readonly B?: InputMaybe<Scalars['BigInt']['input']>;
  readonly B_not?: InputMaybe<Scalars['BigInt']['input']>;
  readonly B_gt?: InputMaybe<Scalars['BigInt']['input']>;
  readonly B_lt?: InputMaybe<Scalars['BigInt']['input']>;
  readonly B_gte?: InputMaybe<Scalars['BigInt']['input']>;
  readonly B_lte?: InputMaybe<Scalars['BigInt']['input']>;
  readonly B_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']['input']>>;
  readonly B_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  readonly _change_block?: InputMaybe<BlockChangedFilter>;
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<StabilityPoolEpochScale_filter>>>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<StabilityPoolEpochScale_filter>>>;
};

export type StabilityPoolEpochScale_orderBy =
  | 'id'
  | 'S'
  | 'B';

export type StabilityPool_filter = {
  readonly id?: InputMaybe<Scalars['ID']['input']>;
  readonly id_not?: InputMaybe<Scalars['ID']['input']>;
  readonly id_gt?: InputMaybe<Scalars['ID']['input']>;
  readonly id_lt?: InputMaybe<Scalars['ID']['input']>;
  readonly id_gte?: InputMaybe<Scalars['ID']['input']>;
  readonly id_lte?: InputMaybe<Scalars['ID']['input']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  readonly totalDeposited?: InputMaybe<Scalars['BigInt']['input']>;
  readonly totalDeposited_not?: InputMaybe<Scalars['BigInt']['input']>;
  readonly totalDeposited_gt?: InputMaybe<Scalars['BigInt']['input']>;
  readonly totalDeposited_lt?: InputMaybe<Scalars['BigInt']['input']>;
  readonly totalDeposited_gte?: InputMaybe<Scalars['BigInt']['input']>;
  readonly totalDeposited_lte?: InputMaybe<Scalars['BigInt']['input']>;
  readonly totalDeposited_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']['input']>>;
  readonly totalDeposited_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  readonly _change_block?: InputMaybe<BlockChangedFilter>;
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<StabilityPool_filter>>>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<StabilityPool_filter>>>;
};

export type StabilityPool_orderBy =
  | 'id'
  | 'totalDeposited';

export type Subscription = {
  readonly collateral?: Maybe<Collateral>;
  readonly collaterals: ReadonlyArray<Collateral>;
  readonly token?: Maybe<Token>;
  readonly tokens: ReadonlyArray<Token>;
  readonly collateralAddresses?: Maybe<CollateralAddresses>;
  readonly collateralAddresses_collection: ReadonlyArray<CollateralAddresses>;
  readonly interestRateBracket?: Maybe<InterestRateBracket>;
  readonly interestRateBrackets: ReadonlyArray<InterestRateBracket>;
  readonly trove?: Maybe<Trove>;
  readonly troves: ReadonlyArray<Trove>;
  readonly borrowerInfo?: Maybe<BorrowerInfo>;
  readonly borrowerInfos: ReadonlyArray<BorrowerInfo>;
  readonly stabilityPool?: Maybe<StabilityPool>;
  readonly stabilityPools: ReadonlyArray<StabilityPool>;
  readonly stabilityPoolDeposit?: Maybe<StabilityPoolDeposit>;
  readonly stabilityPoolDeposits: ReadonlyArray<StabilityPoolDeposit>;
  readonly stabilityPoolDepositSnapshot?: Maybe<StabilityPoolDepositSnapshot>;
  readonly stabilityPoolDepositSnapshots: ReadonlyArray<StabilityPoolDepositSnapshot>;
  readonly stabilityPoolEpochScale?: Maybe<StabilityPoolEpochScale>;
  readonly stabilityPoolEpochScales: ReadonlyArray<StabilityPoolEpochScale>;
  readonly interestBatch?: Maybe<InterestBatch>;
  readonly interestBatches: ReadonlyArray<InterestBatch>;
  /** Access to subgraph metadata */
  readonly _meta?: Maybe<_Meta_>;
};


export type SubscriptioncollateralArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncollateralsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Collateral_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Collateral_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokensArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncollateralAddressesArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncollateralAddresses_collectionArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CollateralAddresses_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CollateralAddresses_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioninterestRateBracketArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioninterestRateBracketsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<InterestRateBracket_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<InterestRateBracket_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontroveArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontrovesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Trove_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Trove_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionborrowerInfoArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionborrowerInfosArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BorrowerInfo_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BorrowerInfo_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionstabilityPoolArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionstabilityPoolsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<StabilityPool_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<StabilityPool_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionstabilityPoolDepositArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionstabilityPoolDepositsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<StabilityPoolDeposit_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<StabilityPoolDeposit_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionstabilityPoolDepositSnapshotArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionstabilityPoolDepositSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<StabilityPoolDepositSnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<StabilityPoolDepositSnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionstabilityPoolEpochScaleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionstabilityPoolEpochScalesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<StabilityPoolEpochScale_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<StabilityPoolEpochScale_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioninterestBatchArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioninterestBatchesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<InterestBatch_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<InterestBatch_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Token = {
  readonly id: Scalars['ID']['output'];
  readonly collateral: Collateral;
  readonly name: Scalars['String']['output'];
  readonly symbol: Scalars['String']['output'];
  readonly decimals: Scalars['Int']['output'];
};

export type Token_filter = {
  readonly id?: InputMaybe<Scalars['ID']['input']>;
  readonly id_not?: InputMaybe<Scalars['ID']['input']>;
  readonly id_gt?: InputMaybe<Scalars['ID']['input']>;
  readonly id_lt?: InputMaybe<Scalars['ID']['input']>;
  readonly id_gte?: InputMaybe<Scalars['ID']['input']>;
  readonly id_lte?: InputMaybe<Scalars['ID']['input']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  readonly collateral?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_not?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_gt?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_lt?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_gte?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_lte?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_in?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly collateral_not_in?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly collateral_contains?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_starts_with?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_ends_with?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_?: InputMaybe<Collateral_filter>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly name_not?: InputMaybe<Scalars['String']['input']>;
  readonly name_gt?: InputMaybe<Scalars['String']['input']>;
  readonly name_lt?: InputMaybe<Scalars['String']['input']>;
  readonly name_gte?: InputMaybe<Scalars['String']['input']>;
  readonly name_lte?: InputMaybe<Scalars['String']['input']>;
  readonly name_in?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly name_not_in?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly name_contains?: InputMaybe<Scalars['String']['input']>;
  readonly name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  readonly name_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  readonly name_starts_with?: InputMaybe<Scalars['String']['input']>;
  readonly name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  readonly name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  readonly name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  readonly name_ends_with?: InputMaybe<Scalars['String']['input']>;
  readonly name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  readonly name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  readonly name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  readonly symbol?: InputMaybe<Scalars['String']['input']>;
  readonly symbol_not?: InputMaybe<Scalars['String']['input']>;
  readonly symbol_gt?: InputMaybe<Scalars['String']['input']>;
  readonly symbol_lt?: InputMaybe<Scalars['String']['input']>;
  readonly symbol_gte?: InputMaybe<Scalars['String']['input']>;
  readonly symbol_lte?: InputMaybe<Scalars['String']['input']>;
  readonly symbol_in?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly symbol_not_in?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly symbol_contains?: InputMaybe<Scalars['String']['input']>;
  readonly symbol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  readonly symbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly symbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  readonly symbol_starts_with?: InputMaybe<Scalars['String']['input']>;
  readonly symbol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  readonly symbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  readonly symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  readonly symbol_ends_with?: InputMaybe<Scalars['String']['input']>;
  readonly symbol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  readonly symbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  readonly symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  readonly decimals?: InputMaybe<Scalars['Int']['input']>;
  readonly decimals_not?: InputMaybe<Scalars['Int']['input']>;
  readonly decimals_gt?: InputMaybe<Scalars['Int']['input']>;
  readonly decimals_lt?: InputMaybe<Scalars['Int']['input']>;
  readonly decimals_gte?: InputMaybe<Scalars['Int']['input']>;
  readonly decimals_lte?: InputMaybe<Scalars['Int']['input']>;
  readonly decimals_in?: InputMaybe<ReadonlyArray<Scalars['Int']['input']>>;
  readonly decimals_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']['input']>>;
  /** Filter for the block changed event. */
  readonly _change_block?: InputMaybe<BlockChangedFilter>;
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<Token_filter>>>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<Token_filter>>>;
};

export type Token_orderBy =
  | 'id'
  | 'collateral'
  | 'collateral__id'
  | 'collateral__collIndex'
  | 'collateral__minCollRatio'
  | 'collateral__totalDeposited'
  | 'collateral__totalDebt'
  | 'collateral__price'
  | 'name'
  | 'symbol'
  | 'decimals';

export type Trove = {
  readonly id: Scalars['ID']['output'];
  readonly borrower: Scalars['Bytes']['output'];
  readonly closedAt?: Maybe<Scalars['BigInt']['output']>;
  readonly collateral: Collateral;
  readonly createdAt: Scalars['BigInt']['output'];
  readonly debt: Scalars['BigInt']['output'];
  readonly deposit: Scalars['BigInt']['output'];
  readonly interestBatch?: Maybe<InterestBatch>;
  readonly interestRate: Scalars['BigInt']['output'];
  readonly stake: Scalars['BigInt']['output'];
  readonly status: TroveStatus;
  readonly troveId: Scalars['String']['output'];
  readonly usedLeverageZapper: Scalars['Boolean']['output'];
};

export type TroveStatus =
  | 'active'
  | 'closedByOwner'
  | 'closedByLiquidation'
  | 'zombie';

export type Trove_filter = {
  readonly id?: InputMaybe<Scalars['ID']['input']>;
  readonly id_not?: InputMaybe<Scalars['ID']['input']>;
  readonly id_gt?: InputMaybe<Scalars['ID']['input']>;
  readonly id_lt?: InputMaybe<Scalars['ID']['input']>;
  readonly id_gte?: InputMaybe<Scalars['ID']['input']>;
  readonly id_lte?: InputMaybe<Scalars['ID']['input']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  readonly borrower?: InputMaybe<Scalars['Bytes']['input']>;
  readonly borrower_not?: InputMaybe<Scalars['Bytes']['input']>;
  readonly borrower_gt?: InputMaybe<Scalars['Bytes']['input']>;
  readonly borrower_lt?: InputMaybe<Scalars['Bytes']['input']>;
  readonly borrower_gte?: InputMaybe<Scalars['Bytes']['input']>;
  readonly borrower_lte?: InputMaybe<Scalars['Bytes']['input']>;
  readonly borrower_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']['input']>>;
  readonly borrower_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']['input']>>;
  readonly borrower_contains?: InputMaybe<Scalars['Bytes']['input']>;
  readonly borrower_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  readonly closedAt?: InputMaybe<Scalars['BigInt']['input']>;
  readonly closedAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  readonly closedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  readonly closedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  readonly closedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  readonly closedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  readonly closedAt_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']['input']>>;
  readonly closedAt_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']['input']>>;
  readonly collateral?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_not?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_gt?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_lt?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_gte?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_lte?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_in?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly collateral_not_in?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly collateral_contains?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_starts_with?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_ends_with?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  readonly collateral_?: InputMaybe<Collateral_filter>;
  readonly createdAt?: InputMaybe<Scalars['BigInt']['input']>;
  readonly createdAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  readonly createdAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  readonly createdAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  readonly createdAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  readonly createdAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  readonly createdAt_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']['input']>>;
  readonly createdAt_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']['input']>>;
  readonly debt?: InputMaybe<Scalars['BigInt']['input']>;
  readonly debt_not?: InputMaybe<Scalars['BigInt']['input']>;
  readonly debt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  readonly debt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  readonly debt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  readonly debt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  readonly debt_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']['input']>>;
  readonly debt_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']['input']>>;
  readonly deposit?: InputMaybe<Scalars['BigInt']['input']>;
  readonly deposit_not?: InputMaybe<Scalars['BigInt']['input']>;
  readonly deposit_gt?: InputMaybe<Scalars['BigInt']['input']>;
  readonly deposit_lt?: InputMaybe<Scalars['BigInt']['input']>;
  readonly deposit_gte?: InputMaybe<Scalars['BigInt']['input']>;
  readonly deposit_lte?: InputMaybe<Scalars['BigInt']['input']>;
  readonly deposit_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']['input']>>;
  readonly deposit_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']['input']>>;
  readonly interestBatch?: InputMaybe<Scalars['String']['input']>;
  readonly interestBatch_not?: InputMaybe<Scalars['String']['input']>;
  readonly interestBatch_gt?: InputMaybe<Scalars['String']['input']>;
  readonly interestBatch_lt?: InputMaybe<Scalars['String']['input']>;
  readonly interestBatch_gte?: InputMaybe<Scalars['String']['input']>;
  readonly interestBatch_lte?: InputMaybe<Scalars['String']['input']>;
  readonly interestBatch_in?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly interestBatch_not_in?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly interestBatch_contains?: InputMaybe<Scalars['String']['input']>;
  readonly interestBatch_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  readonly interestBatch_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly interestBatch_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  readonly interestBatch_starts_with?: InputMaybe<Scalars['String']['input']>;
  readonly interestBatch_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  readonly interestBatch_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  readonly interestBatch_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  readonly interestBatch_ends_with?: InputMaybe<Scalars['String']['input']>;
  readonly interestBatch_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  readonly interestBatch_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  readonly interestBatch_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  readonly interestBatch_?: InputMaybe<InterestBatch_filter>;
  readonly interestRate?: InputMaybe<Scalars['BigInt']['input']>;
  readonly interestRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  readonly interestRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  readonly interestRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  readonly interestRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  readonly interestRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  readonly interestRate_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']['input']>>;
  readonly interestRate_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']['input']>>;
  readonly stake?: InputMaybe<Scalars['BigInt']['input']>;
  readonly stake_not?: InputMaybe<Scalars['BigInt']['input']>;
  readonly stake_gt?: InputMaybe<Scalars['BigInt']['input']>;
  readonly stake_lt?: InputMaybe<Scalars['BigInt']['input']>;
  readonly stake_gte?: InputMaybe<Scalars['BigInt']['input']>;
  readonly stake_lte?: InputMaybe<Scalars['BigInt']['input']>;
  readonly stake_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']['input']>>;
  readonly stake_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']['input']>>;
  readonly status?: InputMaybe<TroveStatus>;
  readonly status_not?: InputMaybe<TroveStatus>;
  readonly status_in?: InputMaybe<ReadonlyArray<TroveStatus>>;
  readonly status_not_in?: InputMaybe<ReadonlyArray<TroveStatus>>;
  readonly troveId?: InputMaybe<Scalars['String']['input']>;
  readonly troveId_not?: InputMaybe<Scalars['String']['input']>;
  readonly troveId_gt?: InputMaybe<Scalars['String']['input']>;
  readonly troveId_lt?: InputMaybe<Scalars['String']['input']>;
  readonly troveId_gte?: InputMaybe<Scalars['String']['input']>;
  readonly troveId_lte?: InputMaybe<Scalars['String']['input']>;
  readonly troveId_in?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly troveId_not_in?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly troveId_contains?: InputMaybe<Scalars['String']['input']>;
  readonly troveId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  readonly troveId_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly troveId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  readonly troveId_starts_with?: InputMaybe<Scalars['String']['input']>;
  readonly troveId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  readonly troveId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  readonly troveId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  readonly troveId_ends_with?: InputMaybe<Scalars['String']['input']>;
  readonly troveId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  readonly troveId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  readonly troveId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  readonly usedLeverageZapper?: InputMaybe<Scalars['Boolean']['input']>;
  readonly usedLeverageZapper_not?: InputMaybe<Scalars['Boolean']['input']>;
  readonly usedLeverageZapper_in?: InputMaybe<ReadonlyArray<Scalars['Boolean']['input']>>;
  readonly usedLeverageZapper_not_in?: InputMaybe<ReadonlyArray<Scalars['Boolean']['input']>>;
  /** Filter for the block changed event. */
  readonly _change_block?: InputMaybe<BlockChangedFilter>;
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<Trove_filter>>>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<Trove_filter>>>;
};

export type Trove_orderBy =
  | 'id'
  | 'borrower'
  | 'closedAt'
  | 'collateral'
  | 'collateral__id'
  | 'collateral__collIndex'
  | 'collateral__minCollRatio'
  | 'collateral__totalDeposited'
  | 'collateral__totalDebt'
  | 'collateral__price'
  | 'createdAt'
  | 'debt'
  | 'deposit'
  | 'interestBatch'
  | 'interestBatch__id'
  | 'interestBatch__batchManager'
  | 'interestBatch__debt'
  | 'interestBatch__coll'
  | 'interestBatch__annualInterestRate'
  | 'interestBatch__annualManagementFee'
  | 'interestRate'
  | 'stake'
  | 'status'
  | 'troveId'
  | 'usedLeverageZapper';

export type _Block_ = {
  /** The hash of the block */
  readonly hash?: Maybe<Scalars['Bytes']['output']>;
  /** The block number */
  readonly number: Scalars['Int']['output'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  readonly timestamp?: Maybe<Scalars['Int']['output']>;
  /** The hash of the parent block */
  readonly parentHash?: Maybe<Scalars['Bytes']['output']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  readonly block: _Block_;
  /** The deployment ID */
  readonly deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  readonly hasIndexingErrors: Scalars['Boolean']['output'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

  export type QuerySdk = {
      /** null **/
  collateral: InContextSdkMethod<Query['collateral'], QuerycollateralArgs, MeshContext>,
  /** null **/
  collaterals: InContextSdkMethod<Query['collaterals'], QuerycollateralsArgs, MeshContext>,
  /** null **/
  token: InContextSdkMethod<Query['token'], QuerytokenArgs, MeshContext>,
  /** null **/
  tokens: InContextSdkMethod<Query['tokens'], QuerytokensArgs, MeshContext>,
  /** null **/
  collateralAddresses: InContextSdkMethod<Query['collateralAddresses'], QuerycollateralAddressesArgs, MeshContext>,
  /** null **/
  collateralAddresses_collection: InContextSdkMethod<Query['collateralAddresses_collection'], QuerycollateralAddresses_collectionArgs, MeshContext>,
  /** null **/
  interestRateBracket: InContextSdkMethod<Query['interestRateBracket'], QueryinterestRateBracketArgs, MeshContext>,
  /** null **/
  interestRateBrackets: InContextSdkMethod<Query['interestRateBrackets'], QueryinterestRateBracketsArgs, MeshContext>,
  /** null **/
  trove: InContextSdkMethod<Query['trove'], QuerytroveArgs, MeshContext>,
  /** null **/
  troves: InContextSdkMethod<Query['troves'], QuerytrovesArgs, MeshContext>,
  /** null **/
  borrowerInfo: InContextSdkMethod<Query['borrowerInfo'], QueryborrowerInfoArgs, MeshContext>,
  /** null **/
  borrowerInfos: InContextSdkMethod<Query['borrowerInfos'], QueryborrowerInfosArgs, MeshContext>,
  /** null **/
  stabilityPool: InContextSdkMethod<Query['stabilityPool'], QuerystabilityPoolArgs, MeshContext>,
  /** null **/
  stabilityPools: InContextSdkMethod<Query['stabilityPools'], QuerystabilityPoolsArgs, MeshContext>,
  /** null **/
  stabilityPoolDeposit: InContextSdkMethod<Query['stabilityPoolDeposit'], QuerystabilityPoolDepositArgs, MeshContext>,
  /** null **/
  stabilityPoolDeposits: InContextSdkMethod<Query['stabilityPoolDeposits'], QuerystabilityPoolDepositsArgs, MeshContext>,
  /** null **/
  stabilityPoolDepositSnapshot: InContextSdkMethod<Query['stabilityPoolDepositSnapshot'], QuerystabilityPoolDepositSnapshotArgs, MeshContext>,
  /** null **/
  stabilityPoolDepositSnapshots: InContextSdkMethod<Query['stabilityPoolDepositSnapshots'], QuerystabilityPoolDepositSnapshotsArgs, MeshContext>,
  /** null **/
  stabilityPoolEpochScale: InContextSdkMethod<Query['stabilityPoolEpochScale'], QuerystabilityPoolEpochScaleArgs, MeshContext>,
  /** null **/
  stabilityPoolEpochScales: InContextSdkMethod<Query['stabilityPoolEpochScales'], QuerystabilityPoolEpochScalesArgs, MeshContext>,
  /** null **/
  interestBatch: InContextSdkMethod<Query['interestBatch'], QueryinterestBatchArgs, MeshContext>,
  /** null **/
  interestBatches: InContextSdkMethod<Query['interestBatches'], QueryinterestBatchesArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Query['_meta'], Query_metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  collateral: InContextSdkMethod<Subscription['collateral'], SubscriptioncollateralArgs, MeshContext>,
  /** null **/
  collaterals: InContextSdkMethod<Subscription['collaterals'], SubscriptioncollateralsArgs, MeshContext>,
  /** null **/
  token: InContextSdkMethod<Subscription['token'], SubscriptiontokenArgs, MeshContext>,
  /** null **/
  tokens: InContextSdkMethod<Subscription['tokens'], SubscriptiontokensArgs, MeshContext>,
  /** null **/
  collateralAddresses: InContextSdkMethod<Subscription['collateralAddresses'], SubscriptioncollateralAddressesArgs, MeshContext>,
  /** null **/
  collateralAddresses_collection: InContextSdkMethod<Subscription['collateralAddresses_collection'], SubscriptioncollateralAddresses_collectionArgs, MeshContext>,
  /** null **/
  interestRateBracket: InContextSdkMethod<Subscription['interestRateBracket'], SubscriptioninterestRateBracketArgs, MeshContext>,
  /** null **/
  interestRateBrackets: InContextSdkMethod<Subscription['interestRateBrackets'], SubscriptioninterestRateBracketsArgs, MeshContext>,
  /** null **/
  trove: InContextSdkMethod<Subscription['trove'], SubscriptiontroveArgs, MeshContext>,
  /** null **/
  troves: InContextSdkMethod<Subscription['troves'], SubscriptiontrovesArgs, MeshContext>,
  /** null **/
  borrowerInfo: InContextSdkMethod<Subscription['borrowerInfo'], SubscriptionborrowerInfoArgs, MeshContext>,
  /** null **/
  borrowerInfos: InContextSdkMethod<Subscription['borrowerInfos'], SubscriptionborrowerInfosArgs, MeshContext>,
  /** null **/
  stabilityPool: InContextSdkMethod<Subscription['stabilityPool'], SubscriptionstabilityPoolArgs, MeshContext>,
  /** null **/
  stabilityPools: InContextSdkMethod<Subscription['stabilityPools'], SubscriptionstabilityPoolsArgs, MeshContext>,
  /** null **/
  stabilityPoolDeposit: InContextSdkMethod<Subscription['stabilityPoolDeposit'], SubscriptionstabilityPoolDepositArgs, MeshContext>,
  /** null **/
  stabilityPoolDeposits: InContextSdkMethod<Subscription['stabilityPoolDeposits'], SubscriptionstabilityPoolDepositsArgs, MeshContext>,
  /** null **/
  stabilityPoolDepositSnapshot: InContextSdkMethod<Subscription['stabilityPoolDepositSnapshot'], SubscriptionstabilityPoolDepositSnapshotArgs, MeshContext>,
  /** null **/
  stabilityPoolDepositSnapshots: InContextSdkMethod<Subscription['stabilityPoolDepositSnapshots'], SubscriptionstabilityPoolDepositSnapshotsArgs, MeshContext>,
  /** null **/
  stabilityPoolEpochScale: InContextSdkMethod<Subscription['stabilityPoolEpochScale'], SubscriptionstabilityPoolEpochScaleArgs, MeshContext>,
  /** null **/
  stabilityPoolEpochScales: InContextSdkMethod<Subscription['stabilityPoolEpochScales'], SubscriptionstabilityPoolEpochScalesArgs, MeshContext>,
  /** null **/
  interestBatch: InContextSdkMethod<Subscription['interestBatch'], SubscriptioninterestBatchArgs, MeshContext>,
  /** null **/
  interestBatches: InContextSdkMethod<Subscription['interestBatches'], SubscriptioninterestBatchesArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Subscription['_meta'], Subscription_metaArgs, MeshContext>
  };

  export type Context = {
      ["liquity2"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
