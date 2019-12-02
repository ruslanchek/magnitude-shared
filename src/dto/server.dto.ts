import { IEntityUserShared } from '../entities/User';

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
