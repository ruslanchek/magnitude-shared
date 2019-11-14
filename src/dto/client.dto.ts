export interface IClientDtoAuthAuthorize {}
export interface IClientDtoAuthRegister {
  email: string;
  password: string;
}
export interface IClientDtoAuthLogin {
  email: string;
  password: string;
}
export interface IClientDtoAuthMe {}

export interface IClientDtoAuthValidateEmailRequest {}
export interface IClientDtoAuthValidateEmailConfirm {
  code: string;
}

export interface IClientDtoAuthPasswordResetRequest {
  email: string;
}
export interface IClientDtoAuthPasswordResetConfirm {
  code: string;
}
