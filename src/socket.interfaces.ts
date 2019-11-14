export interface ISocketClientPacket<T> {
  data: T;
  token: string | null;
}

export interface ISocketServerErrorField {
  name: string;
  errors: string[];
}

export interface ISocketServerError {
  general: string;
  fields?: ISocketServerErrorField[];
}

export interface ISocketServerPacket<T> {
  data?: T;
  error?: ISocketServerError;
}
