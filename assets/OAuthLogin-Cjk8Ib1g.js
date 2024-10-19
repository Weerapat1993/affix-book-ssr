import { jsxs, jsx } from "react/jsx-runtime";
import { G as Guest } from "./GuestLayout-Di1XimAN.js";
import { Head } from "@inertiajs/react";
import { G as GoogleAuthButton } from "./GoogleAuthButton-IW0MHI8V.js";
import "./ApplicationLogo-D5u203cs.js";
import "./laravelBlade-DwBdVrdx.js";
import "antd";
import "@ant-design/icons";
import "./PrimaryButton-C5ts3FGL.js";
function OAuthLogin({ status, canResetPassword }) {
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Log in" }),
    /* @__PURE__ */ jsx("div", { className: "my-4", children: /* @__PURE__ */ jsx(GoogleAuthButton, {}) })
  ] });
}
export {
  OAuthLogin as default
};
