import { IEntityTag } from './tag';

export interface IEntityStoryShared {
  id: string;
  title: string;
  tags: IEntityTag[];
}
