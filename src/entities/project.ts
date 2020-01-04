import { IEntityTag } from './tag';

export interface IEntityProjectShared {
  id: string;
  title: string;
  owner: string;
  invitees: string[];
  updatedAt: Date;
  createdAt: Date;
  tags: IEntityTag[];
}
