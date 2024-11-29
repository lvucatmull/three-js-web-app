import axios from "axios";

export const fetchDataWithQuery = ({
    method, 
    url,
    ...params
}) => {
    return new Promise((resolve, reject) => {
      axios({
          method: method ? method : 'post',
          url: url,
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          transformRequest: [
            function (data, headers) {
              return resolve(JSON.parse(data));
            },
          ],
          data: params,
          withCredentials: false,
        })
    });
}