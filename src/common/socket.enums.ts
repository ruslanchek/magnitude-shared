export enum ESocketAction {
  AuthAuthorize = 'AuthAuthorize',
  AuthRegister = 'AuthRegister',
  AuthLogin = 'AuthLogin',
  AuthMe = 'AuthMe',

  AuthValidateEmailRequest = 'AuthValidateEmailRequest',
  AuthValidateEmailConfirm = 'AuthValidateEmailConfirm',

  AuthPasswordResetRequest = 'AuthPasswordResetRequest',
  AuthPasswordResetConfirm = 'AuthPasswordResetConfirm',
}

export enum ESocketError {
  InvalidToken,
  NotFound,
  BadRequest,
  NoAccess,
  ServerError,
}
