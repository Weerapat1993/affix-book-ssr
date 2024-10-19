import { jsx, jsxs } from "react/jsx-runtime";
import { usePage, Head } from "@inertiajs/react";
import { B as BookForm, E as EnumType } from "./BookForm-DL-Fhx38.js";
import { A as Authenticated } from "./AuthenticatedLayout-DBF1SR-y.js";
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
import "./LayoutBreadcrumb-DJY5I72l.js";
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
import "@radix-ui/react-slot";
import "lucide-react";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-toast";
import "class-variance-authority";
const CreateBookForm = ({ categories }) => {
  const user = usePage().props.auth.user;
  const initialValues = {
    type: "Manga",
    title: "",
    synopsis: "",
    categories: [],
    status: "Draft",
    img_url: null,
    user_id: user.id
  };
  return /* @__PURE__ */ jsx(
    BookForm,
    {
      type: EnumType.create,
      initialValues,
      categories
    }
  );
};
const CreateBookForm$1 = CreateBookForm;
function BookCreate({ categories }) {
  const breadcrumbs = [
    {
      key: 1,
      title: "Home",
      href: route("home")
    },
    {
      key: 2,
      title: "หน้านักเขียน",
      href: route(`writer.index`)
    },
    {
      key: 3,
      title: "Create",
      isLast: true
    }
  ];
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      breadcrumbs,
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Create Book" }),
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx(CreateBookForm$1, { categories }) }) })
      ]
    }
  );
}
export {
  BookCreate as default
};
