import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-xi7jErZC.js";
import { Head } from "@inertiajs/react";
import { u as useSearch, S as SearchBar } from "./SearchBar-HW8qhniD.js";
import { B as BookList } from "./BookList-Dvxi3-FX.js";
import { Empty, Spin, Divider, Typography } from "antd";
import "react";
import "./ApplicationLogo-Bn7DjPlp.js";
import "./FooterLayout-fQGOwEQH.js";
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
const { Title } = Typography;
function Search(props) {
  const { keyword, categories } = props;
  const { data, isLoading } = useSearch();
  const mangas = ((data == null ? void 0 : data.Manga) || []).slice(0, 5);
  const novels = ((data == null ? void 0 : data.Novel) || []).slice(0, 5);
  const isEmpty = mangas.length + novels.length === 0;
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      header: /* @__PURE__ */ jsx(SearchBar, { size: "large", defaultValue: keyword }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Search" }),
        /* @__PURE__ */ jsx("div", { className: "pt-4 pb-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8", children: [
          isEmpty ? /* @__PURE__ */ jsx(Empty, { image: Empty.PRESENTED_IMAGE_SIMPLE }) : null,
          /* @__PURE__ */ jsx(
            "div",
            {
              className: `text-center overflow-hidden ${isLoading ? "block" : "hidden"}`,
              style: { maxHeight: isLoading ? 60 : 0, transition: "max-height 0.5s ease-in-out 0.5s" },
              children: /* @__PURE__ */ jsx(Spin, { size: "large" })
            }
          ),
          mangas.length ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(Title, { level: 3, children: "Manga List" }),
            /* @__PURE__ */ jsx(BookList, { list: mangas }),
            /* @__PURE__ */ jsx(Divider, {})
          ] }) : null,
          novels.length ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(Title, { level: 3, children: "Novel List" }),
            /* @__PURE__ */ jsx(BookList, { list: novels }),
            /* @__PURE__ */ jsx(Divider, {})
          ] }) : null
        ] }) })
      ]
    }
  );
}
export {
  Search as default
};
