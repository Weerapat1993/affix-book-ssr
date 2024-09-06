import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-CWsw7_3p.js";
import { Space, Card, Image, Typography, Row, Col, Empty, Divider, FloatButton } from "antd";
import { Link } from "@inertiajs/react";
import { a as asset, d as defaultBookCoverUrl } from "./ApplicationLogo-Bn7DjPlp.js";
import { d as dateHuman } from "./FooterLayout-DOY91SPS.js";
import { S as SearchBar } from "./SearchBar-CO0tNPFY.js";
import { S as SuggestBookCarousel } from "./SuggestBookCarousel-DjQ287cR.js";
import { S as SeoHead } from "./SeoHead-BEko9LA3.js";
import { d as defaultMeta } from "./seo-B2m5Eufc.js";
import "react";
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
import "./BookHeader-rnSloSRH.js";
const { Meta } = Card;
const { Text } = Typography;
const LatestBookCard = ({ item, joinKey }) => {
  var _a, _b, _c;
  const meta = {
    title: ((_a = item == null ? void 0 : item.book) == null ? void 0 : _a.title) || "",
    description: /* @__PURE__ */ jsxs(Space, { className: "gap-0", direction: "vertical", children: [
      /* @__PURE__ */ jsxs(Text, { ellipsis: true, children: [
        "Ch.",
        item.chapter,
        " ",
        item.title
      ] }),
      /* @__PURE__ */ jsx(Text, { type: "success", ellipsis: true, children: dateHuman(item.published_at) })
    ] })
  };
  return /* @__PURE__ */ jsx(Link, { href: route("chapters.show", item.slug), children: /* @__PURE__ */ jsx(
    Card,
    {
      style: { width: "auto", background: "transparent" },
      bordered: false,
      cover: /* @__PURE__ */ jsx(
        Image,
        {
          preview: false,
          alt: (_b = item == null ? void 0 : item.book) == null ? void 0 : _b.title,
          src: asset(`storage/${(_c = item == null ? void 0 : item.book) == null ? void 0 : _c.img_url}`),
          style: { height: 280, width: "100%", borderRadius: 10 },
          className: "object-cover",
          fallback: defaultBookCoverUrl
        }
      ),
      size: "small",
      children: /* @__PURE__ */ jsx(Meta, { ...meta })
    }
  ) });
};
const LatestBookList = ({ list, joinKey }) => (list || []).length ? /* @__PURE__ */ jsx(Row, { gutter: [8, 8], children: (list || []).map((item) => /* @__PURE__ */ jsx(Col, { xs: 12, sm: 8, md: 6, lg: 4, children: /* @__PURE__ */ jsx(LatestBookCard, { joinKey, item }) }, item.id)) }) : /* @__PURE__ */ jsx("div", { style: { padding: "30px 0" }, children: /* @__PURE__ */ jsx(Empty, { image: Empty.PRESENTED_IMAGE_SIMPLE }) });
const LatestBookList$1 = LatestBookList;
const { Title } = Typography;
function Welcome({ mangas, novels, suggestBooks }) {
  const latestMangaList = mangas || [];
  const latestNovelList = novels || [];
  const meta = {
    ...defaultMeta,
    canonical: asset(route("home"))
  };
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      header: /* @__PURE__ */ jsx(SearchBar, { size: "large", isMenu: true }),
      children: [
        /* @__PURE__ */ jsx(SeoHead, { meta }),
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8", children: [
          suggestBooks.length ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(Title, { level: 3, children: "Suggest Books" }),
            /* @__PURE__ */ jsx(SuggestBookCarousel, { list: suggestBooks }),
            /* @__PURE__ */ jsx("br", {})
          ] }) : null,
          /* @__PURE__ */ jsx(Title, { level: 3, children: "Latest Manga" }),
          /* @__PURE__ */ jsx(LatestBookList$1, { joinKey: "manga", list: latestMangaList }),
          /* @__PURE__ */ jsx(Divider, {}),
          /* @__PURE__ */ jsx(Title, { level: 3, children: "Latest Novel" }),
          /* @__PURE__ */ jsx(LatestBookList$1, { joinKey: "novel", list: latestNovelList }),
          /* @__PURE__ */ jsx(FloatButton.BackTop, {})
        ] }) })
      ]
    }
  );
}
export {
  Welcome as default
};
