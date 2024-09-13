import { jsxs, jsx } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-CGi1hEqW.js";
import { Space, Card, Image, Typography, Row, Col, Empty, Divider, FloatButton } from "antd";
import { Link } from "@inertiajs/react";
import { a as asset, d as defaultBookCoverUrl } from "./ApplicationLogo-C5KpUhqt.js";
import { d as dateHuman } from "./FooterLayout-DpFvbPph.js";
import { S as SearchBar } from "./SearchBar-Bsy7SkUe.js";
import { S as SeoHead } from "./SeoHead-DCf019qq.js";
import { d as defaultMeta } from "./seo-B2m5Eufc.js";
import { B as BannerAdvertising } from "./BannerAdvertising-C4EVEZbP.js";
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
import "./image-iMv3VhFF.js";
import "react-image-fallback";
import "@radix-ui/react-aspect-ratio";
import "./math-rflY_aJU.js";
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
      className: "bg-primary-foreground w-auto",
      bordered: false,
      cover: /* @__PURE__ */ jsx(
        Image,
        {
          preview: false,
          alt: (_b = item == null ? void 0 : item.book) == null ? void 0 : _b.title,
          src: asset(`storage/${(_c = item == null ? void 0 : item.book) == null ? void 0 : _c.img_url}`),
          style: { height: 200, width: "100%" },
          className: "object-cover rounded-md",
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
          /* @__PURE__ */ jsx(BannerAdvertising, { children: /* @__PURE__ */ jsxs(Card, { children: [
            /* @__PURE__ */ jsx(Title, { level: 3, children: "Latest Manga" }),
            /* @__PURE__ */ jsx(LatestBookList$1, { joinKey: "manga", list: latestMangaList }),
            /* @__PURE__ */ jsx(Divider, {}),
            /* @__PURE__ */ jsx(Title, { level: 3, children: "Latest Novel" }),
            /* @__PURE__ */ jsx(LatestBookList$1, { joinKey: "novel", list: latestNovelList })
          ] }) }),
          /* @__PURE__ */ jsx(FloatButton.BackTop, {})
        ] }) })
      ]
    }
  );
}
export {
  Welcome as default
};
