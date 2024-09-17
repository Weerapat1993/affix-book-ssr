import { jsx, jsxs } from "react/jsx-runtime";
import { usePage, Head } from "@inertiajs/react";
import { B as BookForm, E as EnumType } from "./BookForm-DL-Fhx38.js";
import { A as Authenticated } from "./AuthenticatedLayout-B4iinvfv.js";
import { a as snakeOne } from "./case-CvDFCSZ_.js";
import "./PrimaryButton-C5ts3FGL.js";
import "@headlessui/react";
import "./FormInput-DY6TuaZo.js";
import "./InputLabel-CaoVq05r.js";
import "./TextInput-DQL-42yE.js";
import "react";
import "antd";
import "@ant-design/icons";
import "./laravelBlade-DwBdVrdx.js";
import "axios";
import "antd/es/input/TextArea.js";
import "./CategoryFilter-DQ8CAepx.js";
import "./ApplicationLogo-D5u203cs.js";
import "./FooterLayout-BaEYPs1Z.js";
import "../ssr.js";
import "react-dom/server";
import "@inertiajs/react/server";
import "react-redux";
import "@reduxjs/toolkit";
import "@reduxjs/toolkit/query";
import "@ant-design/cssinjs";
import "react-use";
import "dayjs";
import "dayjs/plugin/relativeTime.js";
import "@radix-ui/react-toast";
import "class-variance-authority";
import "lucide-react";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "case";
import "pluralize";
const EditBookForm = ({ categories, values }) => {
  const user = usePage().props.auth.user;
  const categoryDefaultData = ((values == null ? void 0 : values.categories) || []).map((cat) => cat.id);
  const bookId = values.id;
  const initialValues = {
    type: (values == null ? void 0 : values.type) || "Manga",
    title: (values == null ? void 0 : values.title) || "",
    synopsis: (values == null ? void 0 : values.synopsis) || "",
    categories: categoryDefaultData,
    user_id: user.id,
    img_url: values.img_url,
    status: (values == null ? void 0 : values.status) || "Draft",
    cover_file: null
  };
  return /* @__PURE__ */ jsx(
    BookForm,
    {
      type: EnumType.update,
      initialValues,
      categories,
      bookId
    }
  );
};
const EditBookForm$1 = EditBookForm;
function BookEdit({ book, categories }) {
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
      title: "Edit",
      isLast: true
    }
  ];
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      breadcrumbs,
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Edit Book" }),
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx(
          EditBookForm$1,
          {
            categories,
            values: book
          }
        ) }) })
      ]
    }
  );
}
export {
  BookEdit as default
};
