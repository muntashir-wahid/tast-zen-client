import httpClient from "./httpClient";

const APIKit = {
  tasks: {
    addTask: (data) => {
      return httpClient.post("tasks", data);
    },
    getTasksOnStatus: (params) => {
      return httpClient.get("tasks", { params });
    },

    addTaskAttachment: (taskUid, data) => {
      return httpClient.post(`tasks/${taskUid}/attachments`, data, {
        headers: { "Content-Type": "multipart/form-data" },
        timeout: 15000,
      });
    },

    getTaskAllAttachments: (taskUid) => {
      return httpClient.get(`tasks/${taskUid}/attachments`);
    },
  },
};

export default APIKit;
