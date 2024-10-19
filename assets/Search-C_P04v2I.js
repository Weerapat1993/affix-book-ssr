import { jsxs, jsx } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-DBF1SR-y.js";
import { Head } from "@inertiajs/react";
import { u as useSearch, S as SearchBar } from "./SearchBar-sJ5Ct-wl.js";
import { B as BookList } from "./BookList-ZKp8cxz0.js";
import { Empty, Spin, Card, Typography } from "antd";
import { B as BannerAdvertising } from "./BannerAdvertising-BVHjhyzk.js";
import "react";
import "./ApplicationLogo-D5u203cs.js";
import "./laravelBlade-DwBdVrdx.js";
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
import "@radix-ui/react-toast";
import "class-variance-authority";
import "./image-oSgtrKRL.js";
import "react-image-fallback";
import "@radix-ui/react-aspect-ratio";
import "./math-rflY_aJU.js";
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
        /* @__PURE__ */ jsx("div", { className: "pt-4 pb-12", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs(BannerAdvertising, { children: [
          isEmpty ? /* @__PURE__ */ jsx(Empty, { image: Empty.PRESENTED_IMAGE_SIMPLE }) : null,
          /* @__PURE__ */ jsx(
            "div",
            {
              className: `text-center overflow-hidden ${isLoading ? "block" : "hidden"}`,
              style: { maxHeight: isLoading ? 60 : 0, transition: "max-height 0.5s ease-in-out 0.5s" },
              children: /* @__PURE__ */ jsx(Spin, { size: "large" })
            }
          ),
          mangas.length ? /* @__PURE__ */ jsxs(Card, { className: "my-4", children: [
            /* @__PURE__ */ jsx(Title, { level: 3, children: "Manga List" }),
            /* @__PURE__ */ jsx(BookList, { list: mangas })
          ] }) : null,
          novels.length ? /* @__PURE__ */ jsxs(Card, { className: "my-4", children: [
            /* @__PURE__ */ jsx(Title, { level: 3, children: "Novel List" }),
            /* @__PURE__ */ jsx(BookList, { list: novels })
          ] }) : null
        ] }) }) })
      ]
    }
  );
}
export {
  Search as default
};
