import { jsxs, jsx } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-CWsw7_3p.js";
import { EditOutlined } from "@ant-design/icons";
import { Head, Link } from "@inertiajs/react";
import { Result, Button } from "antd";
import "react";
import "./ApplicationLogo-Bn7DjPlp.js";
import "./FooterLayout-DOY91SPS.js";
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
function WriterRegisterComplete(props) {
  return /* @__PURE__ */ jsxs(Authenticated, { children: [
    /* @__PURE__ */ jsx(Head, { title: `สมัครเป็น "นักเขียน"` }),
    /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx(
      Result,
      {
        status: "success",
        title: `ยินดีด้วย คุณได้เป็น "นักเขียน" กับเราแล้ว !`,
        subTitle: "ร่วมเป็นส่วนหนึ่งในการสร้างสรรค์จินตนาการให้กับพวกเรา !",
        extra: [
          /* @__PURE__ */ jsx(Link, { href: route("dashboard"), children: /* @__PURE__ */ jsx(Button, { children: "กลับไปที่หน้า Library" }) }, "library"),
          /* @__PURE__ */ jsx(Link, { href: route("writer.index"), children: /* @__PURE__ */ jsx(Button, { icon: /* @__PURE__ */ jsx(EditOutlined, {}), type: "primary", children: "ไปที่หน้านักเขียน" }) }, "writer")
        ]
      }
    ) }) })
  ] });
}
export {
  WriterRegisterComplete as default
};
