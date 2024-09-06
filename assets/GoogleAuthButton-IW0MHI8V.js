import { jsx, jsxs } from "react/jsx-runtime";
import { GoogleOutlined } from "@ant-design/icons";
import { P as PrimaryButton } from "./PrimaryButton-C5ts3FGL.js";
const GoogleAuthButton = () => {
  return /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx("a", { href: route("auth.google.redirect"), children: /* @__PURE__ */ jsxs(PrimaryButton, { className: "ms-4", children: [
    /* @__PURE__ */ jsx(GoogleOutlined, {}),
    "   Sign in with Google"
  ] }) }) });
};
const GoogleAuthButton$1 = GoogleAuthButton;
export {
  GoogleAuthButton$1 as G
};
