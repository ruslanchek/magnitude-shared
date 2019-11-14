import { IEntityUser } from '../entities/User';

export interface IServerDtoAuthAuthorize {}
export interface IServerDtoAuthRegister {
  token: string;
}
export interface IServerDtoAuthLogin {
  token: string;
}
export interface IServerDtoAuthMe {
  user: IEntityUser;
}

export interface IServerDtoAuthValidateEmailRequest {}
export interface IServerDtoAuthValidateEmailConfirm {}

export interface IServerDtoAuthPasswordResetRequest {}
export interface IServerDtoAuthPasswordResetConfirm {}
