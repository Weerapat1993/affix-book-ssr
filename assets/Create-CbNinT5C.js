import { jsxs, jsx } from "react/jsx-runtime";
import { useForm, Link, Head } from "@inertiajs/react";
import { P as PrimaryButton } from "./PrimaryButton-C5ts3FGL.js";
import { Transition } from "@headlessui/react";
import { F as FormInput } from "./FormInput-DY6TuaZo.js";
import { A as Authenticated } from "./AuthenticatedLayout-CWsw7_3p.js";
import { CaretLeftOutlined } from "@ant-design/icons";
import { Button } from "antd";
import "./InputLabel-CaoVq05r.js";
import "./TextInput-DQL-42yE.js";
import "react";
import "./ApplicationLogo-Bn7DjPlp.js";
import "./FooterLayout-DOY91SPS.js";
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
const CreateProductForm = () => {
  const initialValues = {
    name: "",
    price: 0,
    stock: 1
  };
  const { data, post, reset, setData, processing, errors, recentlySuccessful } = useForm(initialValues);
  const submit = (e) => {
    e.preventDefault();
    post(route("products.store"));
  };
  return /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "mt-6 space-y-6", children: [
    /* @__PURE__ */ jsx(
      FormInput,
      {
        label: "Name",
        type: "text",
        value: data.name,
        onChange: (e) => setData("name", e.target.value),
        required: true,
        isFocused: true,
        errorMessage: errors.name
      }
    ),
    /* @__PURE__ */ jsx(
      FormInput,
      {
        label: "Price",
        value: data.price,
        type: "number",
        onChange: (e) => setData("price", parseInt(e.target.value)),
        required: true,
        isFocused: true,
        errorMessage: errors.price
      }
    ),
    /* @__PURE__ */ jsx(
      FormInput,
      {
        label: "Stock",
        value: data.stock,
        type: "number",
        onChange: (e) => setData("stock", parseInt(e.target.value)),
        required: true,
        isFocused: true,
        errorMessage: errors.stock
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
      /* @__PURE__ */ jsx(PrimaryButton, { disabled: processing, children: "Save" }),
      /* @__PURE__ */ jsx(
        Transition,
        {
          show: recentlySuccessful,
          enter: "transition ease-in-out",
          enterFrom: "opacity-0",
          leave: "transition ease-in-out",
          leaveTo: "opacity-0",
          children: /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Saved." })
        }
      )
    ] })
  ] });
};
const CreateProductForm$1 = CreateProductForm;
function ProductCreate({ auth }) {
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      user: auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight", children: "Create Product" }),
      actions: /* @__PURE__ */ jsx(Link, { href: route("products.index"), children: /* @__PURE__ */ jsx(Button, { type: "default", icon: /* @__PURE__ */ jsx(CaretLeftOutlined, {}), children: "Back" }) }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Create Product" }),
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx(CreateProductForm$1, {}) }) })
      ]
    }
  );
}
export {
  ProductCreate as default
};
