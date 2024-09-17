import { jsx, jsxs } from "react/jsx-runtime";
import { C as ChapterForm } from "./ChapterForm-DbqbV3J1.js";
import { A as Authenticated } from "./AuthenticatedLayout-B4iinvfv.js";
import { a as snakeOne } from "./case-CvDFCSZ_.js";
import { Head } from "@inertiajs/react";
import "@headlessui/react";
import "./FormInput-DY6TuaZo.js";
import "./InputLabel-CaoVq05r.js";
import "./TextInput-DQL-42yE.js";
import "react";
import "antd";
import "@ant-design/icons";
import "./laravelBlade-DwBdVrdx.js";
import "axios";
import "is-hotkey";
import "slate-react";
import "slate";
import "slate-history";
import "is-url";
import "./UploadInput-BeCvrvnD.js";
import "react-use";
import "./mark-B_-F7f3x.js";
import "@emotion/css";
import "./FooterLayout-BaEYPs1Z.js";
import "../ssr.js";
import "react-dom/server";
import "@inertiajs/react/server";
import "react-redux";
import "@reduxjs/toolkit";
import "@reduxjs/toolkit/query";
import "@ant-design/cssinjs";
import "dayjs";
import "dayjs/plugin/relativeTime.js";
import "./ApplicationLogo-D5u203cs.js";
import "@radix-ui/react-toast";
import "class-variance-authority";
import "lucide-react";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "case";
import "pluralize";
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
  const breadcrumbs = [
    {
      key: 1,
      title: "Home",
      href: route("home")
    },
    {
      key: 2,
      title: book.type,
      href: route(`books.${snakeOne(book.type)}`)
    },
    {
      key: 3,
      title: book.title,
      href: route(`books.show`, book.id)
    },
    {
      key: 4,
      title: "สร้างตอนใหม่",
      isLast: true
    }
  ];
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      breadcrumbs,
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
