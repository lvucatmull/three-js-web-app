export type ServiceType = 'poke' | 'server';

//Logger types
export enum LogServiceType {
  POKEMON = 'POKEAPI',
  USER = 'USER',
  AUTH = 'AUTH',
  COMMON = 'COMMON',
}

export enum LogStartEndType {
  START = 'START',
  END = 'END',
  NOTAPI = 'NOT API',
  // 'START' | 'END' | 'NOT API';
}

export enum LogRequestType {
  GRAPHQL = 'GRAPHQL',
  REST = 'REST',
  RABBITMQ = 'RABBITMQ',
}

export enum LogLevelType {
  DEBUG = 'DEBUG',
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR',
}

export enum LogLoggerType {
  API = 'API',
  SIMPLETEXT = 'SIMPLE TEXT',
}

export type LogLoggerFormat = {
  logger_type: LogLoggerType;
  service_name?: LogServiceType;
  request_type?: LogRequestType;
};

//XXX : Log Format
// export type EfkLogFormat = {
export type FetchLogFormat = {
  mytime?: number;
  thread?: number;
  level?: LogLevelType;
  logger?: string;
  start_end?: LogStartEndType;
  request_name?: string;
  message?: string;
};
