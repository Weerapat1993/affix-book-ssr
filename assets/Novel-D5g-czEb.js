import { jsx, jsxs } from "react/jsx-runtime";
import { Card, FloatButton } from "antd";
import { M as MangaLayout } from "./MangaLayout-B-n50sOT.js";
import { useState, useMemo, useCallback, useEffect } from "react";
import { createEditor } from "slate";
import { withReact, Slate, Editable } from "slate-react";
import { withHistory } from "slate-history";
import { E as Element, L as Leaf, f as fixValue, h as headingTwoCenter, p as paragraphCenter, d as divider } from "./mark-B_-F7f3x.js";
import { d as defaultMeta } from "./seo-B2m5Eufc.js";
import { S as SeoHead } from "./SeoHead-DmWXeTpm.js";
import { a as asset } from "./laravelBlade-DwBdVrdx.js";
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
import "@emotion/css";
const SlateResult = ({ initialValue }) => {
  const [isFirstRender, setIsFirstRender] = useState(false);
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);
  const renderElement = useCallback((props) => /* @__PURE__ */ jsx(Element, { readOnly: true, ...props }), []);
  const renderLeaf = useCallback((props) => /* @__PURE__ */ jsx(Leaf, { readOnly: true, ...props }), []);
  useEffect(() => {
    if (!isFirstRender) {
      setIsFirstRender(true);
    }
  }, []);
  if (!isFirstRender) return null;
  return /* @__PURE__ */ jsx(Slate, { editor, initialValue: fixValue(initialValue), children: /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(
    Editable,
    {
      renderElement,
      renderLeaf,
      placeholder: "Enter some content...",
      spellCheck: true,
      autoFocus: true,
      className: "b-none outline-none",
      readOnly: true,
      style: { fontSize: 18 }
    }
  ) }) });
};
const SlateResult$1 = SlateResult;
const emptyEditorValue = [
  paragraphCenter({ text: "No data" })
];
function ChapterNovelShow({ auth, chapter, allChapterList }) {
  var _a, _b, _c, _d, _e, _f;
  const metaImage = asset(`storage/${(_b = (_a = chapter.pages) == null ? void 0 : _a.filter((item) => item.page === 1)) == null ? void 0 : _b[0].img_url}`);
  const meta = {
    title: `Chapter ${chapter.chapter} : ${chapter.title} - Affixbook.net | เว็บไซต์อ่านหนังสือออนไลน์`,
    description: ((_c = chapter.book) == null ? void 0 : _c.synopsis) || defaultMeta.description,
    keywords: (((_d = chapter.book) == null ? void 0 : _d.categories) || []).map((key) => key.name),
    author: "",
    canonical: route("chapters.show", chapter.slug),
    image: metaImage
  };
  const novelContent = chapter.novel_content || [];
  const defaultEditorValue = [
    headingTwoCenter({
      text: `Chapter ${chapter.chapter}`
    }),
    paragraphCenter({
      text: chapter.title,
      bold: true
    }),
    paragraphCenter({
      text: `By. ${((_e = chapter.user) == null ? void 0 : _e.name) || ""}`
    }),
    divider
  ];
  const initialEditorValue = !novelContent.length ? [
    ...defaultEditorValue,
    ...emptyEditorValue
  ] : [
    ...defaultEditorValue,
    ...novelContent
  ];
  return /* @__PURE__ */ jsxs(
    MangaLayout,
    {
      title: ((_f = chapter == null ? void 0 : chapter.book) == null ? void 0 : _f.title) || "",
      user: auth.user,
      bookId: chapter.book_id,
      defaultChapter: chapter.chapter,
      list: allChapterList || [],
      children: [
        /* @__PURE__ */ jsx(SeoHead, { meta }),
        /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8 pb-12", children: [
          /* @__PURE__ */ jsx(SlateResult$1, { initialValue: initialEditorValue }),
          /* @__PURE__ */ jsx(FloatButton.BackTop, {})
        ] })
      ]
    }
  );
}
export {
  ChapterNovelShow as default
};
