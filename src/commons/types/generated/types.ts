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
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export enum ICareer_Enum {
  Jobseeker = 'JOBSEEKER',
  Newcomer = 'NEWCOMER',
  Student = 'STUDENT'
}

export type ICreateProjectInput = {
  description: Scalars['String'];
  imgUrl: Scalars['String'];
  intro: Scalars['String'];
  locationId: Scalars['String'];
  method: IMethod_Enum;
  name: Scalars['String'];
  numbers: Array<Scalars['Int']>;
  platformIds: Array<Scalars['String']>;
  positionIds: Array<Scalars['String']>;
  recruitDate: Scalars['DateTime'];
  skill: Scalars['String'];
  teamname: Scalars['String'];
  typeId: Scalars['String'];
};

export type ICreateUserInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type ILocation = {
  __typename?: 'Location';
  id: Scalars['String'];
  name: Scalars['String'];
  region: IRegion;
};

export enum IMethod_Enum {
  Mediate = 'MEDIATE',
  Meet = 'MEET',
  Untact = 'UNTACT'
}

export type IMutation = {
  __typename?: 'Mutation';
  cancelPointPayment: IPointPayment;
  checkTokenToEmail: Scalars['Boolean'];
  createLocation: ILocation;
  createPlatform: IPlatform;
  createPointPayment: IPointPayment;
  createPosition: IPosition;
  createProject: IProject;
  createRegion: IRegion;
  createTendency: ITendency;
  createType: IType;
  createUser: IUser;
  login: IToken;
  logout: Scalars['String'];
  restoreAccessToken: IToken;
  sendTokenToEmail: Scalars['String'];
  updateUserByOnboard: IUser;
  uploadFile: Array<Scalars['String']>;
};


export type IMutationCancelPointPaymentArgs = {
  impUid: Scalars['String'];
};


export type IMutationCheckTokenToEmailArgs = {
  email: Scalars['String'];
  token: Scalars['String'];
};


export type IMutationCreateLocationArgs = {
  name: Scalars['String'];
};


export type IMutationCreatePlatformArgs = {
  name: Scalars['String'];
};


export type IMutationCreatePointPaymentArgs = {
  amount: Scalars['Float'];
  impUid: Scalars['String'];
};


export type IMutationCreatePositionArgs = {
  name: Scalars['String'];
};


export type IMutationCreateProjectArgs = {
  createProjectInput: ICreateProjectInput;
};


export type IMutationCreateRegionArgs = {
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


export type IMutationUploadFileArgs = {
  files: Array<Scalars['Upload']>;
};

export enum IPoint_Payment_Status_Enum {
  Cancel = 'CANCEL',
  Payment = 'PAYMENT'
}

export type IPlatform = {
  __typename?: 'Platform';
  id: Scalars['String'];
  name: Scalars['String'];
  projects: Array<IProject>;
};

export type IPointPayment = {
  __typename?: 'PointPayment';
  amount: Scalars['Int'];
  id: Scalars['String'];
  impUid: Scalars['String'];
  status: IPoint_Payment_Status_Enum;
};

export type IPosition = {
  __typename?: 'Position';
  id: Scalars['String'];
  name: Scalars['String'];
  projectToPositions: Array<IProjectToPosition>;
};

export type IProject = {
  __typename?: 'Project';
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  imgUrl: Scalars['String'];
  intro: Scalars['String'];
  isComplete: Scalars['Boolean'];
  leader: IUser;
  location: ILocation;
  method: IMethod_Enum;
  name: Scalars['String'];
  platforms: Array<IPlatform>;
  projectToPositions: Array<IProjectToPosition>;
  recruitDate: Scalars['DateTime'];
  skill: Scalars['String'];
  teamname: Scalars['String'];
  type: IType;
};

export type IProjectToPosition = {
  __typename?: 'ProjectToPosition';
  id: Scalars['String'];
  number: Scalars['Int'];
  position: IPosition;
  project: IProject;
};

export type IQuery = {
  __typename?: 'Query';
  fetchLocations: Array<ILocation>;
  fetchPlatforms: Array<IPlatform>;
  fetchPositions: Array<IPosition>;
  fetchProject: IProject;
  fetchProjects: Array<IProject>;
  fetchRegions: Array<IRegion>;
  fetchTendencys: Array<ITendency>;
  fetchTypes: Array<IType>;
  fetchUser: IUser;
};


export type IQueryFetchProjectArgs = {
  projectId: Scalars['String'];
};


export type IQueryFetchProjectsArgs = {
  page: Scalars['Float'];
};

export type IRegion = {
  __typename?: 'Region';
  id: Scalars['String'];
  name: Scalars['String'];
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
