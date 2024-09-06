import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-CWsw7_3p.js";
import { useForm, Link } from "@inertiajs/react";
import { PlusOutlined } from "@ant-design/icons";
import { Pagination, Button, FloatButton, Typography } from "antd";
import { B as BookList } from "./BookList-Dvxi3-FX.js";
import { u as usePermission } from "./FooterLayout-DOY91SPS.js";
import { S as SuggestBookCarousel } from "./SuggestBookCarousel-DjQ287cR.js";
import { useEffect } from "react";
import { usePrevious } from "react-use";
import { d as defaultMeta } from "./seo-B2m5Eufc.js";
import { a as asset } from "./ApplicationLogo-Bn7DjPlp.js";
import { S as SeoHead } from "./SeoHead-BEko9LA3.js";
import "../ssr.js";
import "react-dom/server";
import "@inertiajs/react/server";
import "react-redux";
import "@reduxjs/toolkit";
import "@reduxjs/toolkit/query";
import "axios";
import "@ant-design/cssinjs";
import "dayjs";
import "dayjs/plugin/relativeTime.js";
import "./BookHeader-rnSloSRH.js";
const InertiaPagination = (props) => {
  const { paginateData, defaultPage } = props;
  const { get, setData, data } = useForm({
    page: defaultPage || 1
  });
  const prevPage = usePrevious(data.page);
  const pagination = {
    pageSize: paginateData.per_page,
    total: paginateData.total,
    page: paginateData.current_page
  };
  const onPageChange = (page) => {
    setData("page", page);
  };
  useEffect(() => {
    if (prevPage !== data.page && prevPage !== void 0) {
      get(route("books.index"));
    }
  }, [data.page]);
  return pagination.total ? /* @__PURE__ */ jsx(
    Pagination,
    {
      current: defaultPage,
      onChange: onPageChange,
      total: pagination.total,
      defaultPageSize: pagination.pageSize,
      align: "end",
      className: "mb-4"
    }
  ) : null;
};
const InertiaPagination$1 = InertiaPagination;
const { Title } = Typography;
function BookIndex({ books, title, suggestBooks, page }) {
  const { isRole } = usePermission();
  const list = books.data || [];
  const meta = {
    title: `${title} - ${defaultMeta.title}`,
    description: defaultMeta.description,
    keywords: [
      "Book",
      "Manga",
      "Novel",
      "Comic",
      "Oneshot"
    ],
    author: "",
    canonical: asset(route("books.index"))
  };
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight", children: title }),
      actions: isRole("writer") ? /* @__PURE__ */ jsx(Link, { href: route("books.create"), children: /* @__PURE__ */ jsx(Button, { size: "small", type: "primary", icon: /* @__PURE__ */ jsx(PlusOutlined, {}), children: "Create" }) }) : null,
      children: [
        /* @__PURE__ */ jsx(SeoHead, { meta }),
        /* @__PURE__ */ jsx("div", { className: "pt-4 pb-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8", children: [
          suggestBooks.length ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(Title, { level: 3, children: "Suggest Manga" }),
            /* @__PURE__ */ jsx(SuggestBookCarousel, { list: suggestBooks }),
            /* @__PURE__ */ jsx("br", {})
          ] }) : null,
          /* @__PURE__ */ jsx(InertiaPagination$1, { paginateData: books, defaultPage: page }),
          /* @__PURE__ */ jsx(BookList, { list }),
          /* @__PURE__ */ jsx(FloatButton.BackTop, {})
        ] }) })
      ]
    }
  );
}
export {
  BookIndex as default
};
