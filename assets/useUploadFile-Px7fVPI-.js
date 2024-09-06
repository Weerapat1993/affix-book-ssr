import { useState, useCallback } from "react";
import axios from "axios";
import { message } from "antd";
const useUploadFile = (url) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [error, setError] = useState("");
  const [data, setData] = useState("");
  const [isUploading, setUploading] = useState(false);
  const handleReset = () => {
    setData("");
    setError("");
  };
  const beforeUpload = useCallback((file) => {
    return false;
  }, []);
  const handleFileUpload = useCallback((event) => {
    const isXlsx = event.file.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
    if (!isXlsx) {
      messageApi.error(`${event.file.name} is not a excel file`);
      return isXlsx;
    }
    if (!event.file.status && !isUploading) {
      setUploading(true);
      const file = event.fileList[0].originFileObj;
      const formData = new FormData();
      formData.append("excel_file", file);
      axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then((response) => {
        setData(response.data);
        messageApi.success(`${event.file.name} file uploaded successfully`);
        setUploading(false);
      }).catch((error2) => {
        setError(error2);
        messageApi.error(`${event.file.name} file upload failed.`);
        setUploading(false);
      });
    } else if (event.file.status === "removed") {
      setData("");
      setUploading(false);
      setError("");
    }
  }, [data, error, isUploading]);
  return {
    data,
    error,
    handleFileUpload,
    handleReset,
    beforeUpload,
    contextHolder
  };
};
export {
  useUploadFile as u
};
