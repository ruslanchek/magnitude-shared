import { IEntityUserShared } from '../entities/User';
import { IEntityProjectShared } from '../entities/project';

/**
 * Auth
 * */
export interface IServerDtoAuthAuthorize {}
export interface IServerDtoAuthRegister {
  token: string;
}
export interface IServerDtoAuthLogin {
  token: string;
}
export interface IServerDtoAuthMe {
  user: IEntityUserShared;
}

export interface IServerDtoAuthValidateEmailRequest {}
export interface IServerDtoAuthValidateEmailConfirm {}

export interface IServerDtoAuthPasswordResetRequest {}
export interface IServerDtoAuthPasswordResetConfirm {}

/**
 * Projects
 * */
export interface IServerDtoProjectCreate {
  item: IEntityProjectShared;
}

export interface IServerDtoGetProjects {
  list: IEntityProjectShared[];
}
