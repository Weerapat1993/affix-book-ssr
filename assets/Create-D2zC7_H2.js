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
const CreateChapterForm = ({ book, bookId, languages, allChaptersByBookId }) => {
  const bookType = (book == null ? void 0 : book.type) || "Manga";
  const listButtons = (allChaptersByBookId || []).map((item) => item.chapter);
  const max = listButtons.length ? Math.max(...listButtons) : 0;
  const initialValues = {
    chapter: max + 1,
    title: "",
    status: "Draft",
    book_id: bookId,
    language_id: 1,
    pages: [],
    novel_content: []
  };
  return /* @__PURE__ */ jsx(
    ChapterForm,
    {
      bookType,
      type: "create",
      initialValues,
      languages,
      bookId,
      listButtons,
      max
    }
  );
};
const ChapterCreate = ({ book, bookId, languages, allChaptersByBookId }) => {
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight", children: "Create Chapter" }),
      actions: /* @__PURE__ */ jsx(Button, { onClick: () => window.history.back(), type: "default", icon: /* @__PURE__ */ jsx(CaretLeftOutlined, {}), children: "Back" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Create Chapter" }),
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx(
          CreateChapterForm,
          {
            book,
            languages,
            bookId: parseInt(bookId),
            allChaptersByBookId
          }
        ) }) })
      ]
    }
  );
};
export {
  ChapterCreate as default
};
