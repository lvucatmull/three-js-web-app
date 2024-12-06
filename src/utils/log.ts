import {
  FetchLogFormat,
  LogLevelType,
  LogLoggerFormat,
  LogLoggerType,
  LogRequestType,
  LogServiceType,
  LogStartEndType
} from './types/logType';

export function apiJsonLogGenerator(
  serviceName: LogServiceType,
  requestType: LogRequestType,
  startEnd: LogStartEndType,
  requestName: string | undefined,
  params: string | null,
  body: string | null
): Object {
  const date = Date.now();
  //FIXME : Inner JSON 파싱이 가능해지면 아래와 같이 구현하자
  const logger: LogLoggerFormat = {
    logger_type: LogLoggerType.API,
    service_name: serviceName,
    request_type: requestType,
  };

  const message = ['params : (', params, '), body : (', body, ')'].join(' ');
  const logObject: FetchLogFormat = {
    mytime: date / 1000,
    thread: 0,
    level: LogLevelType.INFO,
    logger: '(' + JSON.stringify(logger) + ')',
    start_end: startEnd,
    request_name: requestName,
    message: message,
  };

  // const logGenerated = JSON.stringify(logObject);
  // return logGenerated;
  return logObject;
}
