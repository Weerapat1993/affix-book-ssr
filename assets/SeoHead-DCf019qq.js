import { jsxs, jsx } from "react/jsx-runtime";
import { a as asset } from "./ApplicationLogo-C5KpUhqt.js";
import { Head } from "@inertiajs/react";
const SeoHead = (props) => {
  const { meta } = props;
  return /* @__PURE__ */ jsxs(Head, { title: meta.title, children: [
    meta.description ? /* @__PURE__ */ jsx("meta", { name: "description", content: meta.description }) : null,
    meta.keywords ? /* @__PURE__ */ jsx("meta", { name: "keywords", content: meta.keywords.join(",") }) : null,
    meta.author ? /* @__PURE__ */ jsx("link", { rel: "author", href: meta.author }) : null,
    meta.canonical ? /* @__PURE__ */ jsx("link", { rel: "canonical", href: meta.canonical }) : null,
    meta.canonical ? /* @__PURE__ */ jsx("meta", { property: "og:url", content: asset(meta.canonical) }) : null,
    meta.image ? /* @__PURE__ */ jsx("meta", { property: "og:image", content: asset(meta.image) }) : null,
    meta.description ? /* @__PURE__ */ jsx("meta", { property: "og:description", content: meta.description }) : null,
    /* @__PURE__ */ jsx("meta", { property: "og:title", content: meta.title }),
    /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: "Affixbook.net" }),
    /* @__PURE__ */ jsx("meta", { property: "og:see_also", content: asset("") }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary" }),
    meta.canonical ? /* @__PURE__ */ jsx("meta", { name: "twitter:url", content: asset(meta.canonical) }) : null,
    /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: meta.title }),
    meta.description ? /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: meta.description }) : null,
    meta.image ? /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: asset(meta.image) }) : null
  ] });
};
const SeoHead$1 = SeoHead;
export {
  SeoHead$1 as S
};
