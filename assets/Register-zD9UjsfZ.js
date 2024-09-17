import { jsxs, jsx } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-B4iinvfv.js";
import { SmileOutlined, UserAddOutlined, CheckCircleOutlined } from "@ant-design/icons";
import { useForm, Head } from "@inertiajs/react";
import { Form, Result, Space, Input, Button, Typography } from "antd";
import { useState } from "react";
import "./ApplicationLogo-D5u203cs.js";
import "./laravelBlade-DwBdVrdx.js";
import "./FooterLayout-BaEYPs1Z.js";
import "../ssr.js";
import "react-dom/server";
import "@inertiajs/react/server";
import "react-redux";
import "@reduxjs/toolkit";
import "@reduxjs/toolkit/query";
import "axios";
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
const { Text, Paragraph } = Typography;
function WriterRegister(props) {
  const { setData, post, processing, errors } = useForm({ mention: "" });
  Form.useForm();
  const [isReset, setIsReset] = useState(false);
  const isError = Boolean(errors.mention);
  const formProps = isError && !isReset ? {
    validateStatus: "error",
    help: errors.mention
  } : processing ? {
    validateStatus: "validating",
    hasFeedback: true
  } : {};
  const onFinish = (values) => {
    setIsReset(false);
    post(route("writer.store"));
  };
  const onFinishFailed = (errorInfo) => {
    console.error("Failed:", errorInfo);
  };
  const onMentionChange = (e) => {
    setIsReset(true);
    setData("mention", `@${e.currentTarget.value}`);
  };
  return /* @__PURE__ */ jsxs(Authenticated, { children: [
    /* @__PURE__ */ jsx(Head, { title: `สมัครเป็น "นักเขียน"` }),
    /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx(
      Result,
      {
        icon: /* @__PURE__ */ jsx(SmileOutlined, {}),
        title: "มาเป็นนักเขียนกับเรากันเถอะ !",
        extra: [
          /* @__PURE__ */ jsx(
            Form,
            {
              initialValues: { mention: "" },
              onFinish,
              onFinishFailed,
              autoComplete: "off",
              children: /* @__PURE__ */ jsx(
                Form.Item,
                {
                  name: "mention",
                  ...formProps,
                  rules: [
                    { pattern: new RegExp(/^[a-zA-Z0-9]*$/), message: "No Space or Special Characters Allowed" },
                    { required: true, message: "Please input your mention!" }
                  ],
                  children: /* @__PURE__ */ jsxs(Space.Compact, { children: [
                    /* @__PURE__ */ jsx(
                      Input,
                      {
                        prefix: "@",
                        placeholder: "mention",
                        onChange: onMentionChange
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      Button,
                      {
                        icon: /* @__PURE__ */ jsx(UserAddOutlined, {}),
                        type: "primary",
                        htmlType: "submit",
                        loading: processing,
                        children: "Submit"
                      }
                    )
                  ] })
                }
              )
            }
          )
        ],
        children: /* @__PURE__ */ jsxs("div", { className: "desc", children: [
          /* @__PURE__ */ jsx(Paragraph, { children: /* @__PURE__ */ jsx(
            Text,
            {
              strong: true,
              style: {
                fontSize: 16
              },
              children: 'สิทธิพิเศษเมื่อคุณได้เป็น "นักเขียน"'
            }
          ) }),
          /* @__PURE__ */ jsxs(Paragraph, { children: [
            /* @__PURE__ */ jsx(CheckCircleOutlined, { className: "site-result-demo-error-icon text-lime-500" }),
            "   สามารถอัพโหลดนิยาย และมังงะ ได้สูงสุดวันละ 1 ตอน"
          ] }),
          /* @__PURE__ */ jsxs(Paragraph, { children: [
            /* @__PURE__ */ jsx(CheckCircleOutlined, { className: "site-result-demo-error-icon text-lime-500" }),
            "   พยายามอัพโหลดอย่างสม่ำเสมอ"
          ] }),
          /* @__PURE__ */ jsxs(Paragraph, { children: [
            /* @__PURE__ */ jsx(CheckCircleOutlined, { className: "site-result-demo-error-icon text-lime-500" }),
            '   เรื่องที่สามารถลงได้ต้องไม่มี "ลิขสิทธิ์" ในไทย'
          ] })
        ] })
      }
    ) }) })
  ] });
}
export {
  WriterRegister as default
};
