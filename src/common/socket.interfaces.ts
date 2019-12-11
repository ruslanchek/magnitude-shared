import { ESocketError } from './socket.enums';

export interface ISocketClientPacket<T> {
  data: T;
  token: string | null;
  ns: string;
}

export interface ISocketServerErrorField {
  name: string;
  errors: string[];
}

export interface ISocketServerError {
  code: ESocketError;
  message?: string;
  fields?: ISocketServerErrorField[];
}

export interface ISocketServerPacket<T> {
  data: T | null;
  error: ISocketServerError | null;
}
