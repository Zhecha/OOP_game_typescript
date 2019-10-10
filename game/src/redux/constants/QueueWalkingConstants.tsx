export const GET_NEW_QUEUE = "GET_NEW_QUEUE";
export const UPDATE_QUEUE = "UPDATE_QUEUE";

export interface QueueObjectType {
  id: number;
  PhotoUrl: string;
  teamA: boolean;
  teamB: boolean;
  type: string;
  active: boolean;
}

export interface QueueState {
  queue: Array<QueueObjectType>;
}

export type QueueActionsTypes = | {type: "GET_NEW_QUEUE"} | {type: "UPDATE_QUEUE"};
