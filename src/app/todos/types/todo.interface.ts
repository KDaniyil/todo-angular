export interface TodoInterface {
  id: string;
  text: string;
  isCompleted: boolean;
}

export enum FilterEnum {
  all = 'all',
  active = 'active',
  completed = 'completed',
}
