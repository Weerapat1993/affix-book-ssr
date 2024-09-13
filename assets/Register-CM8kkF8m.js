import { jsxs, jsx } from "react/jsx-runtime";
import { G as Guest } from "./GuestLayout-D2V4ZYsg.js";
import { useForm, Head } from "@inertiajs/react";
import { G as GoogleAuthButton } from "./GoogleAuthButton-IW0MHI8V.js";
import "./ApplicationLogo-C5KpUhqt.js";
import "antd";
import "@ant-design/icons";
import "./PrimaryButton-C5ts3FGL.js";
function Register() {
  useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
  });
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Register" }),
    /* @__PURE__ */ jsx("div", { className: "my-4", children: /* @__PURE__ */ jsx(GoogleAuthButton, {}) })
  ] });
}
export {
  Register as default
};
