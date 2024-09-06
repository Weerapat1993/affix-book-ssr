import { jsxs, jsx } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-CWsw7_3p.js";
import { Head, Link } from "@inertiajs/react";
import { Result, Button } from "antd";
import "react";
import "./ApplicationLogo-Bn7DjPlp.js";
import "./FooterLayout-DOY91SPS.js";
import "@ant-design/icons";
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
function WriterRegisterFailed(props) {
  return /* @__PURE__ */ jsxs(Authenticated, { children: [
    /* @__PURE__ */ jsx(Head, { title: `Writer Registration Failed` }),
    /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx(
      Result,
      {
        status: "error",
        title: "Submission Failed",
        subTitle: "ขออภัย เกิดข้อผิดพลาด ! ไม่สามารถดำเนินการได้ !",
        extra: [
          /* @__PURE__ */ jsx(Link, { href: route("dashboard"), children: /* @__PURE__ */ jsx(Button, { type: "primary", children: "กลับไปที่หน้า Library" }) }, "library")
        ]
      }
    ) }) })
  ] });
}
export {
  WriterRegisterFailed as default
};
