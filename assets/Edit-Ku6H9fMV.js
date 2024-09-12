import { jsx, jsxs } from "react/jsx-runtime";
import { C as ChapterForm } from "./ChapterForm-BhlC0a5B.js";
import { A as Authenticated } from "./AuthenticatedLayout-xi7jErZC.js";
import { CaretLeftOutlined } from "@ant-design/icons";
import { Head } from "@inertiajs/react";
import { Button } from "antd";
import "@headlessui/react";
import "./FormInput-DY6TuaZo.js";
import "./InputLabel-CaoVq05r.js";
import "./TextInput-DQL-42yE.js";
import "react";
import "./ApplicationLogo-Bn7DjPlp.js";
import "axios";
import "is-hotkey";
import "slate-react";
import "slate";
import "slate-history";
import "is-url";
import "./UploadInput-DJ1h9Ebd.js";
import "react-use";
import "./mark-BCJfS3To.js";
import "@emotion/css";
import "./FooterLayout-fQGOwEQH.js";
import "../ssr.js";
import "react-dom/server";
import "@inertiajs/react/server";
import "react-redux";
import "@reduxjs/toolkit";
import "@reduxjs/toolkit/query";
import "@ant-design/cssinjs";
import "dayjs";
import "dayjs/plugin/relativeTime.js";
const EditChapterForm = ({ book, languages, chapter, allChaptersByBookId }) => {
  const bookType = (book == null ? void 0 : book.type) || "Manga";
  const listButtons = (allChaptersByBookId || []).map((item) => item.chapter);
  const max = Math.max(...listButtons);
  const initialValues = {
    id: chapter.id,
    chapter: chapter.chapter,
    title: chapter.title,
    status: chapter.status,
    book_id: chapter.book_id,
    language_id: chapter.language_id,
    pages: chapter.pages,
    novel_content: chapter.novel_content || []
  };
  return /* @__PURE__ */ jsx(
    ChapterForm,
    {
      bookType,
      type: "update",
      initialValues,
      languages,
      bookId: chapter.book_id,
      chapterId: chapter.id,
      listButtons,
      max
    }
  );
};
const ChapterEdit = ({ book, chapter, allChaptersByBookId, languages }) => {
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight", children: "Edit Chapter" }),
      actions: /* @__PURE__ */ jsx(Button, { onClick: () => window.history.back(), type: "default", icon: /* @__PURE__ */ jsx(CaretLeftOutlined, {}), children: "Back" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Edit Chapter" }),
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx(
          EditChapterForm,
          {
            book,
            languages,
            chapter,
            allChaptersByBookId
          }
        ) }) })
      ]
    }
  );
};
export {
  ChapterEdit as default
};
