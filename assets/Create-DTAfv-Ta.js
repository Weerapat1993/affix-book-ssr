import { jsxs, jsx } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-B4iinvfv.js";
import { useForm, Head } from "@inertiajs/react";
import { Button } from "antd";
import { U as UploadInput, E as EnumMethod } from "./UploadInput-BeCvrvnD.js";
import axios from "axios";
import { a as asset, s as strRandom } from "./laravelBlade-DwBdVrdx.js";
import "react";
import "./ApplicationLogo-D5u203cs.js";
import "./FooterLayout-BaEYPs1Z.js";
import "@ant-design/icons";
import "../ssr.js";
import "react-dom/server";
import "@inertiajs/react/server";
import "react-redux";
import "@reduxjs/toolkit";
import "@reduxjs/toolkit/query";
import "@ant-design/cssinjs";
import "react-use";
import "dayjs";
import "dayjs/plugin/relativeTime.js";
import "@radix-ui/react-toast";
import "class-variance-authority";
import "lucide-react";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
function UploadCreate(props) {
  const { data, setData } = useForm({
    file_url: "",
    img_url: "",
    from: "",
    to: "",
    file_name: ""
  });
  const handleClick = async () => {
    if (data.file_url) {
      await axios({
        method: "POST",
        url: route("api.upload.transfer"),
        data
      });
      setData("file_url", "");
    }
  };
  const handleChangeUrl = (url) => {
    const fileName = `${strRandom(12)}.webp`;
    if (url) {
      setData({
        file_url: url,
        img_url: asset(`storage/upload/novels/${fileName}`),
        from: `tmp/${url}`,
        to: `upload/novels/`,
        file_name: fileName
      });
    }
  };
  const isDisabled = !Boolean(data.file_url);
  return /* @__PURE__ */ jsxs(Authenticated, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Upload Page" }),
    /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx(
        UploadInput,
        {
          name: "cover_file",
          method: EnumMethod.POST,
          action: route("api.upload.store"),
          onChangeUrl: handleChangeUrl,
          value: data.file_url || "",
          folderName: "test"
        }
      ),
      /* @__PURE__ */ jsx("div", { children: data.file_url }),
      /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx(
        Button,
        {
          disabled: isDisabled,
          onClick: handleClick,
          type: "primary",
          children: "Transfer"
        }
      ) })
    ] }) })
  ] });
}
export {
  UploadCreate as default
};
