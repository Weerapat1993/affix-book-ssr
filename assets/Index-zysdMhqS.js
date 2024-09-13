import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-CGi1hEqW.js";
import { Carousel, Card, FloatButton, Typography } from "antd";
import { B as BookList } from "./BookList-BB3lA080.js";
import { u as usePermission } from "./FooterLayout-DpFvbPph.js";
import { Link } from "@inertiajs/react";
import { B as BookHeader } from "./BookHeader-BLlM2o2M.js";
import { I as InertiaPagination } from "./InertiaPagiantion-BG9nMLzx.js";
import { d as defaultMeta } from "./seo-B2m5Eufc.js";
import { a as asset } from "./ApplicationLogo-C5KpUhqt.js";
import { S as SeoHead } from "./SeoHead-DCf019qq.js";
import "react";
import "@ant-design/icons";
import "@radix-ui/react-toast";
import "class-variance-authority";
import "lucide-react";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
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
const SuggestBookCarousel = ({ list }) => {
  return /* @__PURE__ */ jsx(
    Carousel,
    {
      arrows: list.length !== 1,
      autoplay: list.length !== 1,
      autoplaySpeed: 5e3,
      adaptiveHeight: true,
      effect: "fade",
      dotPosition: "top",
      dots: false,
      children: list.map((book) => {
        return /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(Link, { href: `/books/${book.id}`, children: /* @__PURE__ */ jsx(BookHeader, { book, isSuggest: true }) }) }, book.id);
      })
    }
  );
};
const SuggestBookCarousel$1 = SuggestBookCarousel;
const { Title } = Typography;
function BookIndex({ books, title, suggestBooks, page }) {
  usePermission();
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
  const breadcrumbs = [
    {
      key: 1,
      title: "Home",
      href: route("home")
    },
    {
      key: 2,
      title,
      isLast: true
    }
  ];
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      breadcrumbs,
      children: [
        /* @__PURE__ */ jsx(SeoHead, { meta }),
        /* @__PURE__ */ jsx("div", { className: "pt-4 pb-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8", children: [
          suggestBooks.length ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(Title, { level: 3, children: "Suggest Manga" }),
            /* @__PURE__ */ jsx(SuggestBookCarousel$1, { list: suggestBooks }),
            /* @__PURE__ */ jsx("br", {})
          ] }) : null,
          /* @__PURE__ */ jsx(InertiaPagination, { paginateData: books, defaultPage: page }),
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
