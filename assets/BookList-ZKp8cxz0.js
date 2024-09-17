import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Card, Image, Avatar, Row, Col, Spin, Empty } from "antd";
import { Link } from "@inertiajs/react";
import { a as asset, d as defaultBookCoverUrl } from "./laravelBlade-DwBdVrdx.js";
import { UserOutlined } from "@ant-design/icons";
const { Meta } = Card;
const BookCard = ({ item }) => {
  var _a, _b, _c;
  return /* @__PURE__ */ jsx(Link, { href: `/books/${item.id}`, children: /* @__PURE__ */ jsx(
    Card,
    {
      className: "bg-primary-foreground w-auto",
      bordered: false,
      cover: /* @__PURE__ */ jsx(
        Image,
        {
          preview: false,
          alt: item.title,
          src: asset(`storage/${item.img_url}`),
          style: { height: 200, width: "100%" },
          className: "object-cover rounded-lg",
          fallback: defaultBookCoverUrl
        }
      ),
      size: "small",
      children: /* @__PURE__ */ jsx(
        Meta,
        {
          title: item.title,
          description: /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(Avatar, { className: "mr-2", size: 24, src: asset(`storage/avatar/${(_a = item == null ? void 0 : item.user) == null ? void 0 : _a.avatar_url}`), icon: /* @__PURE__ */ jsx(UserOutlined, {}) }),
            /* @__PURE__ */ jsx(Link, { href: route("writer.mention", (_b = item == null ? void 0 : item.user) == null ? void 0 : _b.mention), children: (_c = item == null ? void 0 : item.user) == null ? void 0 : _c.name })
          ] })
        }
      )
    }
  ) });
};
const BookList = ({ list, isLoading }) => (list || []).length ? /* @__PURE__ */ jsx(Row, { gutter: [8, 8], children: isLoading ? /* @__PURE__ */ jsx(Col, { className: "text-center", span: 24, children: /* @__PURE__ */ jsx(Spin, { size: "large" }) }) : (list || []).map((item) => /* @__PURE__ */ jsx(Col, { xs: 12, sm: 8, md: 6, lg: 4, children: /* @__PURE__ */ jsx(BookCard, { item }) }, item.id)) }) : /* @__PURE__ */ jsx("div", { style: { padding: "30px 0" }, children: /* @__PURE__ */ jsx(Empty, { image: Empty.PRESENTED_IMAGE_SIMPLE }) });
const BookList$1 = BookList;
export {
  BookList$1 as B
};
