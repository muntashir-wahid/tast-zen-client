import httpClient from "./httpClient";

const APIKit = {
  tasks: {
    addTask: (data) => {
      return httpClient.post("tasks", data);
    },
    getTasksOnStatus: (params) => {
      return httpClient.get("tasks", { params });
    },
  },
};

export default APIKit;
