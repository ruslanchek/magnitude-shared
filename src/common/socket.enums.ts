export enum ESocketAction {
  AuthAuthorize = 'AuthAuthorize',
  AuthRegister = 'AuthRegister',
  AuthLogin = 'AuthLogin',
  AuthMe = 'AuthMe',

  AuthValidateEmailRequest = 'AuthValidateEmailRequest',
  AuthValidateEmailConfirm = 'AuthValidateEmailConfirm',

  AuthPasswordResetRequest = 'AuthPasswordResetRequest',
  AuthPasswordResetConfirm = 'AuthPasswordResetConfirm',

  ProjectCreate = 'ProjectCreate',
  ProjectGetOwnProjects = 'ProjectGetOwnProjects',
}

export enum ESocketError {
  InvalidToken = 'InvalidToken',
  NotFound = 'NotFound',
  BadRequest = 'BadRequest',
  NoAccess = 'NoAccess',
  ServerError = 'ServerError',
  EmptyPacket = 'EmptyPacket',
  InvalidData = 'InvalidData',
  NoUserError = 'NoUserError',
}
