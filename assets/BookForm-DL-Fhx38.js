import { jsxs, jsx } from "react/jsx-runtime";
import { useForm } from "@inertiajs/react";
import { P as PrimaryButton } from "./PrimaryButton-C5ts3FGL.js";
import { Transition } from "@headlessui/react";
import { F as FormInput } from "./FormInput-DY6TuaZo.js";
import { Upload, Image, Button, Progress, message, Card, Radio, Select } from "antd";
import { I as InputError } from "./TextInput-DQL-42yE.js";
import { I as InputLabel } from "./InputLabel-CaoVq05r.js";
import { useState } from "react";
import { DeleteOutlined, LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { g as getMeta, d as defaultBookCoverUrl, a as asset } from "./laravelBlade-DwBdVrdx.js";
import axios from "axios";
import TextArea from "antd/es/input/TextArea.js";
import { C as CategoryFilter } from "./CategoryFilter-DQ8CAepx.js";
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
const CoverInput = ({ onChangeUrl, onChangeFile, name, value, action, method, bookId }) => {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(value);
  const isHaveAvatar = Boolean(imageUrl);
  const onChange = (info) => {
    const file = info == null ? void 0 : info.fileList[0].originFileObj;
    if (onChangeFile) {
      onChangeFile(file);
    }
  };
  const onRemove = () => {
    setImageUrl("");
  };
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
    if (bookId) {
      fmData.append("book_id", bookId);
    }
    fmData.append(name, file);
    fmData.append("old_file_url", imageUrl);
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
  return /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
    /* @__PURE__ */ jsx(InputLabel, { className: "mb-2", value: "Image Cover" }),
    /* @__PURE__ */ jsxs(
      Upload,
      {
        accept: "image/png, image/jpeg",
        customRequest: uploadImage,
        name,
        listType: "picture",
        className: "book-cover",
        showUploadList: false,
        action: route("profile.api.upload_avatar"),
        beforeUpload,
        onChange,
        multiple: false,
        maxCount: 1,
        headers: {
          "X-CSRF-TOKEN": getMeta("csrf-token")
        },
        children: [
          isHaveAvatar ? /* @__PURE__ */ jsx(
            Image,
            {
              preview: false,
              fallback: defaultBookCoverUrl,
              src: asset(`storage/${imageUrl}`),
              alt: "image",
              style: { width: "100%" }
            }
          ) : uploadButton,
          isHaveAvatar ? /* @__PURE__ */ jsx("div", { className: "absolute top-4 right-4", children: /* @__PURE__ */ jsx(Button, { className: "bg-transparent hover:bg-transparent", onClick: onRemove, icon: /* @__PURE__ */ jsx(DeleteOutlined, {}), danger: true, type: "dashed", shape: "circle" }) }) : null
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "h-4", children: progress > 0 ? /* @__PURE__ */ jsx(Progress, { percent: progress }) : null })
  ] });
};
var EnumType = /* @__PURE__ */ ((EnumType2) => {
  EnumType2["create"] = "create";
  EnumType2["update"] = "update";
  return EnumType2;
})(EnumType || {});
const defaultProps = {
  type: "create",
  categories: [],
  initialValues: {},
  bookId: 0
};
const BookForm = (props) => {
  const propsWithDefaults = {
    ...defaultProps,
    ...props
  };
  const { type, categories, initialValues, bookId } = propsWithDefaults;
  const { data, post, patch, reset, setData, processing, errors, recentlySuccessful } = useForm(initialValues);
  const submit = (e) => {
    e.preventDefault();
    switch (type) {
      case "create":
        post(route("books.store"));
        break;
      case "update":
        patch(route("books.update", bookId));
        break;
    }
  };
  const onChangeType = ({ target: { value } }) => {
    setData("type", value);
  };
  const onChangeStatus = ({ target: { value } }) => {
    setData("status", value);
  };
  const options = [
    // { label: 'Comic', value: 'Comic' },
    { label: "Manga", value: "Manga" },
    { label: "Novel", value: "Novel" }
  ];
  const statusOptions = [
    { label: "Draft", value: "Draft" },
    { label: "Published", value: "Published" }
  ];
  const selectOptions = categories.map((item) => ({
    value: item.id,
    label: item.name
  }));
  const onChangeMultiSelectCategory = (values) => {
    setData("categories", values);
  };
  const coverProps = bookId ? {
    bookId
  } : {};
  return /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "mt-6 space-y-6", children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
      CoverInput,
      {
        name: "cover_file",
        method: EnumMethod.POST,
        action: route("books.upload.cover"),
        onChangeUrl: (url) => setData("img_url", url),
        value: data.img_url || "",
        ...coverProps
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(
        Radio.Group,
        {
          name: "type",
          options,
          onChange: onChangeType,
          value: data.type,
          optionType: "button",
          buttonStyle: "solid",
          size: "large"
        }
      ),
      /* @__PURE__ */ jsx(InputError, { className: "mt-2", message: errors.type })
    ] }),
    /* @__PURE__ */ jsx(
      FormInput,
      {
        label: "ชื่อเรื่อง",
        type: "text",
        value: data.title,
        onChange: (e) => setData("title", e.target.value),
        required: true,
        isFocused: true,
        errorMessage: errors.title
      }
    ),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(InputLabel, { className: "mb-2", htmlFor: "synopsis", value: "เนื้อเรื่องย่อ" }),
      /* @__PURE__ */ jsx(
        TextArea,
        {
          size: "large",
          name: "synopsis",
          placeholder: "เนื้อเรื่องย่อ",
          autoSize: { minRows: 3, maxRows: 6 },
          value: data.synopsis,
          onChange: (e) => setData("synopsis", e.target.value)
        }
      ),
      /* @__PURE__ */ jsx(InputError, { className: "mt-2", message: errors.synopsis })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(InputLabel, { className: "mb-2", htmlFor: "categories", value: "Category" }),
      /* @__PURE__ */ jsx(
        Select,
        {
          mode: "multiple",
          allowClear: true,
          showSearch: true,
          filterOption: (input, option) => ((option == null ? void 0 : option.label) ?? "").toLowerCase().includes(input.toLowerCase()),
          style: { width: "100%" },
          placeholder: "Select Category",
          defaultValue: initialValues.categories,
          value: data.categories,
          onChange: onChangeMultiSelectCategory,
          options: selectOptions,
          size: "large"
        }
      ),
      /* @__PURE__ */ jsx(CategoryFilter, { value: data.categories, list: categories, onChange: onChangeMultiSelectCategory }),
      /* @__PURE__ */ jsx(InputError, { className: "mt-2", message: errors.categories })
    ] }),
    initialValues.status === "Published" ? null : /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(
        Radio.Group,
        {
          name: "status",
          options: statusOptions,
          onChange: onChangeStatus,
          value: data.status,
          optionType: "button",
          buttonStyle: "solid",
          size: "large"
        }
      ),
      /* @__PURE__ */ jsx(InputError, { className: "mt-2", message: errors.status })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
      /* @__PURE__ */ jsx(PrimaryButton, { disabled: processing, children: "Save" }),
      /* @__PURE__ */ jsx(
        Transition,
        {
          show: recentlySuccessful,
          enter: "transition ease-in-out",
          enterFrom: "opacity-0",
          leave: "transition ease-in-out",
          leaveTo: "opacity-0",
          children: /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Saved." })
        }
      )
    ] })
  ] }) });
};
export {
  BookForm as B,
  EnumType as E
};
