import { jsx } from "react/jsx-runtime";
import { G as Guest } from "./GuestLayout--4oIrg0K.js";
import { Result, Button } from "antd";
import { Link } from "@inertiajs/react";
import "./ApplicationLogo-D5u203cs.js";
import "./laravelBlade-DwBdVrdx.js";
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
