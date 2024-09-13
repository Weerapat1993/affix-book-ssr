import { jsxs, jsx } from "react/jsx-runtime";
import { g as getMeta, a as asset, e as defaultUserProfileCoverUrl } from "./ApplicationLogo-C5KpUhqt.js";
import { UserOutlined, LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Upload, Avatar, Progress, message, Typography } from "antd";
import { useState } from "react";
import ImgCrop from "antd-img-crop";
import axios from "axios";
import { usePage } from "@inertiajs/react";
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
const AvatarInput = () => {
  const user = usePage().props.auth.user;
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(user.avatar_url);
  const isHaveAvatar = Boolean(imageUrl);
  const uploadButton = /* @__PURE__ */ jsxs("button", { style: { border: 0, background: "none" }, type: "button", children: [
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
    fmData.append("_token", getMeta("csrf-token"));
    fmData.append("avatar_file", file);
    try {
      setLoading(true);
      const res = await axios.post(
        route("profile.api.upload_avatar"),
        fmData,
        config
      );
      onSuccess("Ok");
      setImageUrl(res.data.data);
      setLoading(false);
    } catch (err) {
      onError({ err });
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
    /* @__PURE__ */ jsx(ImgCrop, { rotationSlider: true, children: /* @__PURE__ */ jsx(
      Upload,
      {
        accept: "image/png, image/jpeg",
        customRequest: uploadImage,
        name: "avatar_file",
        listType: "picture-circle",
        className: "avatar-uploader",
        showUploadList: false,
        action: route("profile.api.upload_avatar"),
        beforeUpload,
        maxCount: 1,
        headers: {
          "X-CSRF-TOKEN": getMeta("csrf-token")
        },
        children: isHaveAvatar ? /* @__PURE__ */ jsx(Avatar, { src: asset(`storage/avatar/${imageUrl}`), size: 95, icon: /* @__PURE__ */ jsx(UserOutlined, {}) }) : uploadButton
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "h-4", children: progress > 0 ? /* @__PURE__ */ jsx(Progress, { size: "small", percent: progress }) : null })
  ] });
};
const { Title, Text } = Typography;
const UserProfileHeader = ({ user, isMyProfile }) => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("div", { className: "user-profile-cover-relative", children: [
      /* @__PURE__ */ jsx("div", { className: "user-profile-cover-absolute", children: /* @__PURE__ */ jsx("img", { src: defaultUserProfileCoverUrl, className: "w-full", alt: "img" }) }),
      /* @__PURE__ */ jsx("div", { className: "user-profile-avatar-absolute-50 sm:hidden xs:hidden", children: isMyProfile ? /* @__PURE__ */ jsx(AvatarInput, {}) : /* @__PURE__ */ jsx(Avatar, { src: asset(`storage/avatar/${user.avatar_url}`), size: 128, icon: /* @__PURE__ */ jsx(UserOutlined, {}) }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "user-profile-avatar-relative", children: [
      /* @__PURE__ */ jsx("div", { className: "user-profile-avatar-absolute hidden sm:block xs:block sm:left-8 xs:left-8", children: isMyProfile ? /* @__PURE__ */ jsx(AvatarInput, {}) : /* @__PURE__ */ jsx(Avatar, { src: asset(`storage/avatar/${user.avatar_url}`), size: 128, icon: /* @__PURE__ */ jsx(UserOutlined, {}) }) }),
      /* @__PURE__ */ jsxs("div", { className: "user-profile-title-absolute left-8 sm:left-48 xs:left-48", children: [
        /* @__PURE__ */ jsx(Title, { level: 3, children: user.name }),
        /* @__PURE__ */ jsx(Text, { className: "text-primary", children: "Writer" })
      ] })
    ] })
  ] });
};
const UserProfileHeader$1 = UserProfileHeader;
export {
  UserProfileHeader$1 as U
};
