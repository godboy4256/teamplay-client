export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export enum ICareer_Enum {
  Jobseeker = 'JOBSEEKER',
  Newcomer = 'NEWCOMER',
  Student = 'STUDENT'
}

export type ICreateUserInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type IMutation = {
  __typename?: 'Mutation';
  checkTokenToEmail: Scalars['Boolean'];
  createPosition: IPosition;
  createTendency: ITendency;
  createType: IType;
  createUser: IUser;
  login: IToken;
  logout: Scalars['String'];
  restoreAccessToken: IToken;
  sendTokenToEmail: Scalars['String'];
  updateUserByOnboard: IUser;
};


export type IMutationCheckTokenToEmailArgs = {
  email: Scalars['String'];
  token: Scalars['String'];
};


export type IMutationCreatePositionArgs = {
  name: Scalars['String'];
};


export type IMutationCreateTendencyArgs = {
  name: Scalars['String'];
};


export type IMutationCreateTypeArgs = {
  name: Scalars['String'];
};


export type IMutationCreateUserArgs = {
  createUserInput: ICreateUserInput;
};


export type IMutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationSendTokenToEmailArgs = {
  email: Scalars['String'];
};


export type IMutationUpdateUserByOnboardArgs = {
  updateUserOnboardInput: IUpdateUserOnboardInput;
};

export type IPosition = {
  __typename?: 'Position';
  id: Scalars['String'];
  name: Scalars['String'];
};

export type IQuery = {
  __typename?: 'Query';
  fetchPositions: Array<IPosition>;
  fetchTendencys: Array<ITendency>;
  fetchTypes: Array<IType>;
  fetchUser: IUser;
};

export type ITendency = {
  __typename?: 'Tendency';
  id: Scalars['String'];
  name: Scalars['String'];
  users: Array<IUser>;
};

export type IToken = {
  __typename?: 'Token';
  accessToken: Scalars['String'];
  onboarding?: Maybe<Scalars['Boolean']>;
};

export type IType = {
  __typename?: 'Type';
  id: Scalars['String'];
  name: Scalars['String'];
  users: Array<IUser>;
};

export type IUpdateUserOnboardInput = {
  career?: InputMaybe<ICareer_Enum>;
  positionId: Scalars['String'];
  tendencyId: Array<Scalars['String']>;
  typeId: Array<Scalars['String']>;
};

export type IUser = {
  __typename?: 'User';
  career?: Maybe<ICareer_Enum>;
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  point: Scalars['Int'];
  position?: Maybe<IPosition>;
  tendencys?: Maybe<Array<ITendency>>;
  types?: Maybe<Array<IType>>;
};
