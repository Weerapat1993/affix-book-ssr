import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useCallback, useEffect } from "react";
import { DeleteOutlined, LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Row, Col, Upload, Image, Button, Progress, message } from "antd";
import { d as defaultBookCoverUrl, a as asset } from "./ApplicationLogo-Bn7DjPlp.js";
import axios from "axios";
import { usePrevious } from "react-use";
var EnumMethod = /* @__PURE__ */ ((EnumMethod2) => {
  EnumMethod2["POST"] = "POST";
  EnumMethod2["PATCH"] = "PATCH";
  return EnumMethod2;
})(EnumMethod || {});
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};
const UploadInput = ({ onChangeUrl, onChangeFile, name, value, action, method, folderName }) => {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(value);
  const prevValue = usePrevious(value);
  const isHaveAvatar = Boolean(imageUrl);
  const onChange = useCallback((info) => {
    const file = info == null ? void 0 : info.fileList[0].originFileObj;
    if (onChangeFile) {
      onChangeFile(file);
    }
  }, []);
  const onRemove = useCallback(() => {
    setImageUrl("");
  }, []);
  useEffect(() => {
    console.log(prevValue, value);
    if (prevValue && value === "") {
      onRemove();
    }
  }, [value]);
  const uploadButton = /* @__PURE__ */ jsxs("button", { style: { border: 0, background: "none", width: 190, height: 240 }, type: "button", children: [
    loading ? /* @__PURE__ */ jsx(LoadingOutlined, {}) : /* @__PURE__ */ jsx(PlusOutlined, {}),
    /* @__PURE__ */ jsx("div", { style: { marginTop: 8 }, children: "Upload" })
  ] });
  const uploadImage = async (options) => {
    const { onSuccess, onError, file, onProgress } = options;
    const fmData = new FormData();
    const config = {
      headers: { "content-type": "multipart/form-data" },
      onUploadProgress: (event) => {
        const percent = Math.floor(event.loaded / event.total * 100);
        setProgress(percent);
        if (percent === 100) {
          setTimeout(() => setProgress(0), 1e3);
        }
        onProgress({ percent: event.loaded / event.total * 100 });
      }
    };
    fmData.append(name, file);
    fmData.append("folder_name", folderName);
    fmData.append("old_file_url", `${imageUrl}`);
    try {
      setLoading(true);
      let res;
      if (method === "PATCH") {
        res = await axios.patch(
          action,
          fmData,
          config
        );
      } else {
        res = await axios.post(
          action,
          fmData,
          config
        );
      }
      onSuccess("Ok");
      setImageUrl(res.data.data);
      onChangeUrl(res.data.data);
      setLoading(false);
    } catch (err) {
      onError({ err });
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsx(Row, { children: /* @__PURE__ */ jsxs(Col, { className: "mx-auto", children: [
    /* @__PURE__ */ jsxs(
      Upload,
      {
        accept: "image/png, image/jpeg",
        customRequest: uploadImage,
        name,
        listType: "picture",
        className: "book-cover",
        showUploadList: false,
        action,
        beforeUpload,
        onChange,
        multiple: false,
        maxCount: 1,
        children: [
          isHaveAvatar ? /* @__PURE__ */ jsx(
            Image,
            {
              preview: false,
              fallback: defaultBookCoverUrl,
              src: asset(`storage/tmp/${imageUrl}`),
              alt: "image",
              style: { width: "100%" }
            }
          ) : uploadButton,
          isHaveAvatar ? /* @__PURE__ */ jsx("div", { className: "absolute top-4 right-4", children: /* @__PURE__ */ jsx(Button, { className: "bg-transparent hover:bg-transparent", onClick: onRemove, icon: /* @__PURE__ */ jsx(DeleteOutlined, {}), danger: true, type: "dashed", shape: "circle" }) }) : null
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "h-4", children: progress > 0 ? /* @__PURE__ */ jsx(Progress, { percent: progress }) : null })
  ] }) });
};
const UploadInput$1 = UploadInput;
export {
  EnumMethod as E,
  UploadInput$1 as U
};
