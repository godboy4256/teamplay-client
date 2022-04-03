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

export type IBoard = {
  __typename?: 'Board';
  content: Scalars['String'];
  id: Scalars['String'];
  project: IProject;
  title: Scalars['String'];
  user: IUser;
};

export enum ICareer_Enum {
  Jobseeker = 'JOBSEEKER',
  Newcomer = 'NEWCOMER',
  Student = 'STUDENT'
}

export type IChat = {
  __typename?: 'Chat';
  chatRoom: IChatRoom;
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  user: IUser;
};

export type IChatRoom = {
  __typename?: 'ChatRoom';
  chat: Array<IChat>;
  chatRoomMembers: Array<IChatRoomMember>;
  id: Scalars['String'];
  name: Scalars['String'];
  project: IProject;
};

export type IChatRoomMember = {
  __typename?: 'ChatRoomMember';
  chatRoom: IChatRoom;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  user: IUser;
};

export type ICreateProjectInput = {
  description: Scalars['String'];
  imgUrl: Scalars['String'];
  intro: Scalars['String'];
  locationId: Scalars['String'];
  method: IMethod_Enum;
  name: Scalars['String'];
  numbers: Array<Scalars['Int']>;
  platformIds: Array<Scalars['String']>;
  point: Scalars['Int'];
  positionIds: Array<Scalars['String']>;
  recruitDate: Scalars['DateTime'];
  skill: Scalars['String'];
  teamname: Scalars['String'];
  typeId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
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
  createBoard: IBoard;
  createLocation: ILocation;
  createPlatform: IPlatform;
  createPointPayment: IPointPayment;
  createPosition: IPosition;
  createProject: IProject;
  createRegion: IRegion;
  createTask: ITask;
  createTendency: ITendency;
  createType: IType;
  createUser: IUser;
  deleteAllProject: Scalars['Boolean'];
  deleteBoard: Scalars['Boolean'];
  deleteProject: Scalars['Boolean'];
  deleteTask: Scalars['Boolean'];
  joinChatRoom: IChatRoomMember;
  login: IToken;
  logout: Scalars['String'];
  restoreAccessToken: IToken;
  sendMessage: Scalars['String'];
  sendTokenToEmail: Scalars['String'];
  startProject: IProject;
  updateBoard: IBoard;
  updateTask: ITask;
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


export type IMutationCreateBoardArgs = {
  content: Scalars['String'];
  projectId: Scalars['String'];
  title: Scalars['String'];
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


export type IMutationCreateTaskArgs = {
  content: Scalars['String'];
  dutyMember: Array<Scalars['String']>;
  limit: Scalars['DateTime'];
  projectId: Scalars['String'];
  taskType: ITask_Type_Enum;
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


export type IMutationDeleteBoardArgs = {
  boardId: Scalars['String'];
};


export type IMutationDeleteProjectArgs = {
  projectId: Scalars['String'];
};


export type IMutationDeleteTaskArgs = {
  taskId: Scalars['String'];
};


export type IMutationJoinChatRoomArgs = {
  projectId: Scalars['String'];
};


export type IMutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationSendMessageArgs = {
  chatRoomId: Scalars['String'];
  message: Scalars['String'];
};


export type IMutationSendTokenToEmailArgs = {
  email: Scalars['String'];
};


export type IMutationStartProjectArgs = {
  chatRoomId: Scalars['String'];
  point: Scalars['Float'];
  userIds: Array<Scalars['String']>;
};


export type IMutationUpdateBoardArgs = {
  boardId: Scalars['String'];
  content: Scalars['String'];
  title: Scalars['String'];
};


export type IMutationUpdateTaskArgs = {
  content: Scalars['String'];
  dutyMember: Array<Scalars['String']>;
  limit: Scalars['DateTime'];
  taskId: Scalars['String'];
  taskType: ITask_Type_Enum;
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
  impUid?: Maybe<Scalars['String']>;
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
  isStart: Scalars['Boolean'];
  leader: IUser;
  location: ILocation;
  method: IMethod_Enum;
  name: Scalars['String'];
  platforms: Array<IPlatform>;
  point: Scalars['Int'];
  projectToPositions: Array<IProjectToPosition>;
  recruitDate: Scalars['DateTime'];
  skill: Scalars['String'];
  teamname: Scalars['String'];
  type: IType;
  updatedAt: Scalars['DateTime'];
  users?: Maybe<Array<IUser>>;
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
  fetchBoard: IBoard;
  fetchBoards: Array<IBoard>;
  fetchChatRoomMembers: Array<IChatRoomMember>;
  fetchChatRooms: Array<IChatRoom>;
  fetchChats: Array<IChat>;
  fetchLocations: Array<ILocation>;
  fetchPlatforms: Array<IPlatform>;
  fetchPositions: Array<IPosition>;
  fetchProject: IProject;
  fetchProjects: Array<IProject>;
  fetchRegions: Array<IRegion>;
  fetchTask: ITask;
  fetchTasks: Array<ITask>;
  fetchTendencys: Array<ITendency>;
  fetchTypes: Array<IType>;
  fetchUser: IUser;
};


export type IQueryFetchBoardArgs = {
  boardId: Scalars['String'];
};


export type IQueryFetchChatRoomMembersArgs = {
  chatRoomId: Scalars['String'];
};


export type IQueryFetchChatsArgs = {
  chatRoomId: Scalars['String'];
  page: Scalars['Float'];
};


export type IQueryFetchProjectArgs = {
  projectId: Scalars['String'];
};


export type IQueryFetchProjectsArgs = {
  page: Scalars['Float'];
};


export type IQueryFetchTaskArgs = {
  taskId: Scalars['String'];
};

export type IRegion = {
  __typename?: 'Region';
  id: Scalars['String'];
  name: Scalars['String'];
};

export enum ITask_Type_Enum {
  Design = 'DESIGN',
  Development = 'DEVELOPMENT',
  Planning = 'PLANNING'
}

export type ITask = {
  __typename?: 'Task';
  content: Scalars['String'];
  id: Scalars['String'];
  is_complete: Scalars['Boolean'];
  limit: Scalars['DateTime'];
  taskType: ITask_Type_Enum;
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
  chatRoomMembers: Array<IChatRoomMember>;
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  point: Scalars['Int'];
  position?: Maybe<IPosition>;
  projects: Array<IProject>;
  task?: Maybe<Array<ITask>>;
  tendencys?: Maybe<Array<ITendency>>;
  types?: Maybe<Array<IType>>;
};
