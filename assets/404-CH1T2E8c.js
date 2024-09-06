import { jsx } from "react/jsx-runtime";
import { G as Guest } from "./GuestLayout-D4uodc1Y.js";
import { Result, Button } from "antd";
import { Link } from "@inertiajs/react";
import "./ApplicationLogo-Bn7DjPlp.js";
function Error404(props) {
  return /* @__PURE__ */ jsx(Guest, { children: /* @__PURE__ */ jsx(
    Result,
    {
      status: "404",
      title: "404",
      subTitle: "Sorry, the page you visited does not exist.",
      extra: /* @__PURE__ */ jsx(Link, { href: "/", children: /* @__PURE__ */ jsx(Button, { type: "primary", children: "กลับไปหน้าหลัก" }) })
    }
  ) });
}
export {
  Error404 as default
};
