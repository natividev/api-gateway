export enum RabbitMQ {
  UserQueue = 'users',
}

export enum UserMSG {
  CREATE = 'CREATE_USER',
  FIND_ALL = 'FIND_ALL_USERS',
  FIND_ONE = 'FIND_ONE_USER',
  UPDATE_USER = 'UPDATE_USER',
  DELETE_USER = 'DELETE_USER',
  VALID_USER = 'VALID_USER',
}
