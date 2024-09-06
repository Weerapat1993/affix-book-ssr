import { jsx, jsxs } from "react/jsx-runtime";
import { usePage, Link, Head } from "@inertiajs/react";
import { B as BookForm, E as EnumType } from "./BookForm-R56bU4bD.js";
import { A as Authenticated } from "./AuthenticatedLayout-CWsw7_3p.js";
import { CaretLeftOutlined } from "@ant-design/icons";
import { Button } from "antd";
import "./PrimaryButton-C5ts3FGL.js";
import "@headlessui/react";
import "./FormInput-DY6TuaZo.js";
import "./InputLabel-CaoVq05r.js";
import "./TextInput-DQL-42yE.js";
import "react";
import "./ApplicationLogo-Bn7DjPlp.js";
import "axios";
import "antd/es/input/TextArea.js";
import "./CategoryFilter-DQ8CAepx.js";
import "./FooterLayout-DOY91SPS.js";
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
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight", children: "Create Book" }),
      actions: /* @__PURE__ */ jsx(Link, { href: route("books.index"), children: /* @__PURE__ */ jsx(Button, { type: "default", icon: /* @__PURE__ */ jsx(CaretLeftOutlined, {}), children: "Back" }) }),
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
