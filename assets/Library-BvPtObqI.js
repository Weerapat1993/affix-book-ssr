import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-xi7jErZC.js";
import { Head, Link } from "@inertiajs/react";
import { Flex, Button, Divider, FloatButton, Typography } from "antd";
import { B as BookList } from "./BookList-Dvxi3-FX.js";
import { UserAddOutlined } from "@ant-design/icons";
import { u as usePermission } from "./FooterLayout-fQGOwEQH.js";
import "react";
import "./ApplicationLogo-Bn7DjPlp.js";
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
const { Title, Paragraph } = Typography;
function Library({ mangas, novels }) {
  const { isRole } = usePermission();
  const mangaList = ((mangas == null ? void 0 : mangas.data) || []).map((item) => item.book);
  const novelList = ((novels == null ? void 0 : novels.data) || []).map((item) => item.book);
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight", children: "My Library" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "My Library" }),
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8", children: [
          !isRole("writer") ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("div", { className: "app-card", children: /* @__PURE__ */ jsxs(Flex, { className: "flex-col", align: "center", justify: "center", wrap: true, gap: "middle", children: [
              /* @__PURE__ */ jsx(Title, { level: 2, children: "เป็นนักเขียนกับเรา" }),
              /* @__PURE__ */ jsx(Paragraph, { className: "font-bold", style: { fontSize: 18 }, children: "เปลี่ยนจินตนาการเป็นงานเขียนง่ายๆ" }),
              /* @__PURE__ */ jsx(Link, { href: route("writer.register"), children: /* @__PURE__ */ jsx(
                Button,
                {
                  type: "primary",
                  icon: /* @__PURE__ */ jsx(UserAddOutlined, {}),
                  size: "large",
                  children: 'สมัครเป็น "นักเขียน" กับเรา'
                }
              ) })
            ] }) }),
            /* @__PURE__ */ jsx(Divider, {})
          ] }) : null,
          /* @__PURE__ */ jsx(Title, { level: 3, children: "Liked Manga List" }),
          /* @__PURE__ */ jsx(BookList, { list: mangaList }),
          /* @__PURE__ */ jsx(Divider, {}),
          /* @__PURE__ */ jsx(Title, { level: 3, children: "Liked Novel List" }),
          /* @__PURE__ */ jsx(BookList, { list: novelList }),
          /* @__PURE__ */ jsx(FloatButton.BackTop, {})
        ] }) })
      ]
    }
  );
}
export {
  Library as default
};
