import axios, { AxiosError, AxiosInstance } from 'axios';
import { apiJsonLogGenerator } from './log';
import { LogRequestType, LogServiceType, LogStartEndType, MethodType } from './types';

export const fetchDataWithQuery = (method: MethodType, url: string, ...params: any[]) => {
  return new Promise((resolve, reject) => {
    axios({
      method: method,
      url: url,
      headers: { 'Content-Type': 'application/json' },
      transformRequest: [
        function (data, headers) {
          console.log('[Axios] transformRequest : ', data, headers);
          return resolve(data);
        },
      ],
      data: params,
      withCredentials: false,
    });
  });
};

export function initAxios(requestServiceType: LogServiceType): AxiosInstance {
  let axiosInstance = axios.create();

  axiosInstance.interceptors.request.use(
    function (config) {
      console.log('[initAxios] config : ', config);
      let url = '';

      if (config.url !== undefined) {
        url = config.url;
      }
      const jsonLog = apiJsonLogGenerator(
        requestServiceType,
        LogRequestType.REST,
        LogStartEndType.START,
        url,
        url,
        JSON.stringify(config.data)
      );

      console.log(
        `%c requestJsonLog : ${jsonLog}`,
        'color: orange;'
      );
      return config;
    },
    function (error: AxiosError) {
      console.log('[initAxios] error : ', error);
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    function (response) {
      console.log('[initAxios] config : ', response);
      let url = '';

      if (response.config.url !== undefined) {
        url = response.config.url;
      }

      const responseObject = {
        status: response.status,
        statusText: response.statusText,
        data: response.data,
      };

      const responseJsonLog = apiJsonLogGenerator(
        requestServiceType,
        LogRequestType.REST,
        LogStartEndType.END,
        url,
        url,
        JSON.stringify(responseObject)
      );
      // sendLogMessage(responseJsonLog);
      console.log(`%c responseJsonLog : ${JSON.stringify(responseJsonLog, null, 2)}`, 'color: orange;');
      return response;
    },
    function (error: AxiosError) {
      console.log('[initAxios] error : ', error);
      return Promise.reject(error);
    }
  );

  return axiosInstance;
}
