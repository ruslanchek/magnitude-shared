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
  InvalidToken = 'InvalidToken',
  NotFound = 'NotFound',
  BadRequest = 'BadRequest',
  NoAccess = 'NoAccess',
  ServerError = 'ServerError',
  EmptyPacket = 'EmptyPacket',
  InvalidData = 'InvalidData',
}
