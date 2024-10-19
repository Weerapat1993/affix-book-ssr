import { jsxs, jsx } from "react/jsx-runtime";
import { Row, Col, Image, Flex, Spin, Anchor, FloatButton } from "antd";
import { a as asset, b as defaultMangaPageUrl } from "./laravelBlade-DwBdVrdx.js";
import { useState, useCallback } from "react";
import { M as MangaLayout } from "./MangaLayout-C4_oFL-E.js";
import { d as defaultMeta } from "./seo-B2m5Eufc.js";
import { S as SeoHead } from "./SeoHead-DmWXeTpm.js";
import { a as snakeOne } from "./case-CvDFCSZ_.js";
import "./ApplicationLogo-D5u203cs.js";
import "@inertiajs/react";
import "./LayoutBreadcrumb-DJY5I72l.js";
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
import "@radix-ui/react-slot";
import "lucide-react";
import "clsx";
import "tailwind-merge";
import "react-sticky";
import "react-share-kit";
import "case";
import "pluralize";
const ChapterPageList = ({ list }) => {
  const [page, setPage] = useState(1);
  const items = list.slice(0, page).map((item) => ({
    key: `page-${item.page}`,
    href: `#page-${item.page}`,
    title: ` `
  }));
  const onLastPage = useCallback((key) => {
    const currentPage = parseInt(key.slice(6));
    if (currentPage > page - 5) {
      setPage(currentPage + 5);
    }
  }, [page]);
  return /* @__PURE__ */ jsxs(Row, { className: "mt-4", children: [
    /* @__PURE__ */ jsx(Col, { span: 23, children: list.slice(0, page).map((item) => /* @__PURE__ */ jsx(
      "div",
      {
        id: `page-${item.page}`,
        className: "text-center",
        children: item.page < page ? /* @__PURE__ */ jsx(
          Image,
          {
            preview: false,
            alt: `Page ${item.page}`,
            src: asset(`storage/chapter-pages/${item.img_url}`),
            fallback: defaultMangaPageUrl,
            className: "w-screen h-screen object-cover object-center",
            loading: "lazy"
          }
        ) : /* @__PURE__ */ jsx(
          Flex,
          {
            justify: "center",
            align: "middle",
            style: { height: Math.floor(item.height / 2) },
            children: /* @__PURE__ */ jsx(Spin, { size: "large" })
          }
        )
      },
      item.id
    )) }),
    /* @__PURE__ */ jsx(Col, { className: "hidden sm:block", span: 1, children: /* @__PURE__ */ jsx(
      Anchor,
      {
        replace: true,
        offsetTop: 70,
        items,
        onChange: onLastPage
      }
    ) })
  ] });
};
const ChapterPageList$1 = ChapterPageList;
function ChapterShow({ auth, chapter, allChapterList }) {
  var _a, _b, _c, _d, _e, _f, _g;
  const meta = {
    title: `Chapter ${chapter.chapter} - ${chapter.title} - Affixbook.net | เว็บไซต์อ่านหนังสือออนไลน์`,
    description: ((_a = chapter.book) == null ? void 0 : _a.synopsis) || defaultMeta.description,
    keywords: (((_b = chapter.book) == null ? void 0 : _b.categories) || []).map((key) => key.name),
    author: "",
    canonical: route("chapters.show", chapter.slug)
  };
  const breadcrumbs = [
    {
      key: 1,
      title: "Home",
      href: route("home")
    },
    {
      key: 2,
      title: (_c = chapter.book) == null ? void 0 : _c.type,
      href: route(`books.${snakeOne(((_d = chapter.book) == null ? void 0 : _d.type) || "")}`)
    },
    {
      key: 3,
      title: (_e = chapter.book) == null ? void 0 : _e.title,
      href: route(`books.show`, (_f = chapter.book) == null ? void 0 : _f.id),
      isLinkLast: true
    }
  ];
  return /* @__PURE__ */ jsxs(
    MangaLayout,
    {
      title: ((_g = chapter == null ? void 0 : chapter.book) == null ? void 0 : _g.title) || "",
      user: auth.user,
      bookId: chapter.book_id,
      defaultChapter: chapter.chapter,
      list: allChapterList || [],
      breadcrumbs,
      children: [
        /* @__PURE__ */ jsx(SeoHead, { meta }),
        /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8 pb-12", children: [
          /* @__PURE__ */ jsx(ChapterPageList$1, { list: chapter.pages || [] }),
          /* @__PURE__ */ jsx(FloatButton.BackTop, {})
        ] })
      ]
    }
  );
}
export {
  ChapterShow as default
};
