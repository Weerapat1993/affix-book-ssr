import { jsx, jsxs } from "react/jsx-runtime";
import { C as ChapterForm } from "./ChapterForm--UT-C7PE.js";
import { A as Authenticated } from "./AuthenticatedLayout-B4iinvfv.js";
import { a as snakeOne } from "./case-CvDFCSZ_.js";
import { Head } from "@inertiajs/react";
import "react";
import "@headlessui/react";
import "./FormInput-DY6TuaZo.js";
import "./InputLabel-CaoVq05r.js";
import "./TextInput-DQL-42yE.js";
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
      title: `Ch. ${chapter.chapter}`,
      href: route(`chapters.show`, chapter.slug)
    },
    {
      key: 5,
      title: "Edit",
      isLast: true
    }
  ];
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      breadcrumbs,
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
