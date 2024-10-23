import { jsxs, jsx, Fragment as Fragment$1 } from "react/jsx-runtime";
import { Row, Col, Image, Tag, Flex, Spin, Anchor, Pagination, Card, FloatButton } from "antd";
import { a as asset, b as defaultMangaPageUrl } from "./laravelBlade-DwBdVrdx.js";
import { useState, useCallback, Fragment } from "react";
import { M as MangaLayout } from "./MangaLayout-B-n50sOT.js";
import { d as defaultMeta } from "./seo-B2m5Eufc.js";
import { S as SeoHead } from "./SeoHead-DmWXeTpm.js";
import { a as snakeOne } from "./case-CvDFCSZ_.js";
import { u as useWriterByUser } from "./useWriterByUser-Csq1RLaB.js";
import { B as BookList } from "./BookList-ZKp8cxz0.js";
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
  const [page, setPage] = useState(2);
  const maxPage = list.length;
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
        children: item.page < page ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(
            Image,
            {
              preview: false,
              alt: `Page ${item.page}`,
              src: asset(`storage/chapter-pages/${item.img_url}`),
              fallback: defaultMangaPageUrl,
              className: "w-screen h-screen object-cover object-center",
              loading: "lazy"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "my-4", children: /* @__PURE__ */ jsxs(Tag, { className: "font-bold", color: "blue-inverse", children: [
            "Page ",
            item.page,
            "/",
            maxPage
          ] }) })
        ] }) : /* @__PURE__ */ jsx(
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
const WriterList = ({ userId, bookId }) => {
  const {
    pagination,
    page,
    list,
    isLoading,
    setWriterPage
  } = useWriterByUser({ userId });
  const onPageChange = (page2) => {
    setWriterPage(page2);
  };
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsx(Flex, { justify: "end", gap: "small", className: "my-4", children: (pagination == null ? void 0 : pagination.total) ? /* @__PURE__ */ jsx(
      Pagination,
      {
        current: page,
        onChange: onPageChange,
        total: pagination.total,
        defaultPageSize: pagination.pageSize,
        align: "end"
      }
    ) : null }),
    /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(BookList, { isLoading, list: list.filter((item) => item.id !== bookId) }) })
  ] });
};
const WriterList$1 = WriterList;
function ChapterShow({ auth, chapter, allChapterList }) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
  const metaImage = `/storage/${(_c = (_b = (_a = chapter.pages) == null ? void 0 : _a.filter((item) => item.page === 1)) == null ? void 0 : _b[0]) == null ? void 0 : _c.img_url}`;
  const meta = {
    title: `Chapter ${chapter.chapter} : ${chapter.title} - Affixbook.net | เว็บไซต์อ่านหนังสือออนไลน์`,
    description: ((_d = chapter.book) == null ? void 0 : _d.synopsis) || defaultMeta.description,
    keywords: (((_e = chapter.book) == null ? void 0 : _e.categories) || []).map((key) => key.name),
    author: "",
    canonical: route("chapters.show", chapter.slug),
    image: metaImage
  };
  const breadcrumbs = [
    {
      key: 1,
      title: "Home",
      href: route("home")
    },
    {
      key: 2,
      title: (_f = chapter.book) == null ? void 0 : _f.type,
      href: route(`books.${snakeOne(((_g = chapter.book) == null ? void 0 : _g.type) || "")}`)
    },
    {
      key: 3,
      title: (_h = chapter.book) == null ? void 0 : _h.title,
      href: route(`books.show`, (_i = chapter.book) == null ? void 0 : _i.id),
      isLinkLast: true
    }
  ];
  return /* @__PURE__ */ jsxs(
    MangaLayout,
    {
      title: ((_j = chapter == null ? void 0 : chapter.book) == null ? void 0 : _j.title) || "",
      user: auth.user,
      bookId: chapter.book_id,
      defaultChapter: chapter.chapter,
      list: allChapterList || [],
      breadcrumbs,
      children: [
        /* @__PURE__ */ jsx(SeoHead, { meta }),
        /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8 pb-12", children: [
          /* @__PURE__ */ jsx(ChapterPageList$1, { list: (chapter == null ? void 0 : chapter.pages) || [] }),
          (chapter == null ? void 0 : chapter.user_id) && (chapter == null ? void 0 : chapter.book_id) ? /* @__PURE__ */ jsx(WriterList$1, { userId: chapter == null ? void 0 : chapter.user_id, bookId: chapter == null ? void 0 : chapter.book_id }) : null,
          /* @__PURE__ */ jsx(FloatButton.BackTop, {})
        ] })
      ]
    }
  );
}
export {
  ChapterShow as default
};
