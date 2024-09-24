import { jsxs, jsx } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-B4iinvfv.js";
import { Head, Link } from "@inertiajs/react";
import { Result, Button } from "antd";
import "react";
import "./ApplicationLogo-D5u203cs.js";
import "./laravelBlade-DwBdVrdx.js";
import "./FooterLayout-BaEYPs1Z.js";
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
import "@radix-ui/react-toast";
import "class-variance-authority";
import "lucide-react";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
function ChapterCreateLimit(props) {
  return /* @__PURE__ */ jsxs(Authenticated, { children: [
    /* @__PURE__ */ jsx(Head, { title: `Chapter Create Limit` }),
    /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx(
      Result,
      {
        status: "error",
        title: "ขออภัย คุณยังไม่สามารถเขียนตอนใหม่ได้ !",
        subTitle: "ขณะนี้คุณได้ถึงลิมิตสูงสุดของวันแล้ว โปรดรออีกครั้งในวันถัดไป !",
        extra: [
          /* @__PURE__ */ jsx(Link, { href: route("writer.index"), children: /* @__PURE__ */ jsx(Button, { type: "primary", children: "กลับไปที่หน้านักเขียน" }) }, "writer")
        ]
      }
    ) }) })
  ] });
}
export {
  ChapterCreateLimit as default
};