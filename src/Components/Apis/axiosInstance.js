import axios from "axios";

const serverUrl = "http://localhost:4001/api/v1";
const socketServerUrl = "https://api.example.com/v1";

// const createAxiosInstance = (baseURL) => {
//   const instance = axios.create({
//     baseURL,
//     withCredentials: true,
//   });

//   return instance;
// };

// export default createAxiosInstance;

export const ServerInstance = axios.create({
  serverUrl,
  withCredentials: true,
});
export const SocketServerInstance = axios.create({
  socketServerUrl,
  withCredentials: true,
});
