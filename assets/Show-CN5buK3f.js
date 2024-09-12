import { jsx, jsxs } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-xi7jErZC.js";
import { Link } from "@inertiajs/react";
import { List, Avatar, Divider, Button, FloatButton, Typography } from "antd";
import { B as BookHeader } from "./BookHeader-BQBIQLL2.js";
import { d as dateHuman, u as usePermission } from "./FooterLayout-fQGOwEQH.js";
import { a as asset } from "./ApplicationLogo-Bn7DjPlp.js";
import { UserOutlined, PlusOutlined } from "@ant-design/icons";
import { S as SeoHead } from "./SeoHead-BEko9LA3.js";
import "react";
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
const ChapterBookList = ({ list, book }) => {
  return /* @__PURE__ */ jsx(
    List,
    {
      dataSource: list,
      renderItem: (item, index) => {
        var _a, _b, _c;
        return /* @__PURE__ */ jsxs(List.Item, { children: [
          /* @__PURE__ */ jsx(
            List.Item.Meta,
            {
              avatar: /* @__PURE__ */ jsx(
                Avatar,
                {
                  src: asset(`storage/avatar/${((_a = book == null ? void 0 : book.user) == null ? void 0 : _a.avatar_url) || ""}`),
                  icon: /* @__PURE__ */ jsx(UserOutlined, {})
                }
              ),
              title: /* @__PURE__ */ jsxs(Link, { href: route("chapters.show", item.slug), children: [
                "Chapter ",
                item.chapter,
                " : ",
                item.title
              ] }),
              description: `${((_b = item == null ? void 0 : item.language) == null ? void 0 : _b.flag) || ""} ${((_c = book == null ? void 0 : book.user) == null ? void 0 : _c.name) || ""}`
            }
          ),
          (item == null ? void 0 : item.published_at) ? /* @__PURE__ */ jsx("div", { children: dateHuman(item.published_at) }) : /* @__PURE__ */ jsx("div", { children: "(DRAFT)" })
        ] });
      }
    }
  );
};
const ChapterBookList$1 = ChapterBookList;
const { Title } = Typography;
function BookShow({ book }) {
  const { isRole, isUser } = usePermission();
  const chapterField = isRole("writer") && isUser(book.user_id) ? "chapters" : "publish_chapters";
  const chapters = (book == null ? void 0 : book[chapterField]) || [];
  const meta = {
    title: `${book.title} - Affixbook.net | เว็บไซต์อ่านหนังสือออนไลน์`,
    description: (book == null ? void 0 : book.synopsis) || "",
    keywords: ((book == null ? void 0 : book.categories) || []).map((key) => key.name),
    author: "",
    canonical: asset(route("books.show", book.id))
  };
  return /* @__PURE__ */ jsxs(Authenticated, { children: [
    /* @__PURE__ */ jsx(SeoHead, { meta }),
    /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx(BookHeader, { book }),
      /* @__PURE__ */ jsx(Divider, { orientation: "left" }),
      isUser(book.user_id) ? /* @__PURE__ */ jsx("div", { className: "text-right m-4", children: /* @__PURE__ */ jsx(Link, { href: route("chapters.create", book.id), children: /* @__PURE__ */ jsx(Button, { type: "primary", icon: /* @__PURE__ */ jsx(PlusOutlined, {}), children: "Add Chapter" }) }) }) : null,
      chapters.length ? /* @__PURE__ */ jsx(Title, { level: 3, children: "Chapters" }) : null,
      /* @__PURE__ */ jsx(ChapterBookList$1, { book, list: chapters })
    ] }) }),
    /* @__PURE__ */ jsx(FloatButton.BackTop, {})
  ] });
}
export {
  BookShow as default
};
