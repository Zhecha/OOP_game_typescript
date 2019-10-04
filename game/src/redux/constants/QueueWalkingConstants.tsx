export const QUEUE_ACTIONS = {
  GET_NEW_QUEUE: "GET_NEW_QUEUE"
};

interface GetNewQueueAction {
  type: typeof QUEUE_ACTIONS.GET_NEW_QUEUE;
}

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

export type QueueActionsTypes = GetNewQueueAction;
