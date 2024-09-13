import { jsxs, jsx } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-CGi1hEqW.js";
import { Head, Link } from "@inertiajs/react";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-BpCz7qRD.js";
import { B as Button } from "./button-D3nFvdUy.js";
import { ArrowLeftIcon } from "lucide-react";
import { P as ProductForm } from "./ProductForm-DyT8y6_V.js";
import "react";
import "./ApplicationLogo-C5KpUhqt.js";
import "antd";
import "./FooterLayout-DpFvbPph.js";
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
import "@radix-ui/react-toast";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "react-hook-form";
import "@hookform/resolvers/zod";
import "zod";
import "@radix-ui/react-label";
import "@radix-ui/react-dialog";
import "@radix-ui/react-scroll-area";
import "./image-iMv3VhFF.js";
import "react-image-fallback";
import "@codeium/react-code-editor";
import "./tabs-DW2RBqRA.js";
import "@radix-ui/react-tabs";
function ProductCreate({ auth }) {
  const breadcrumbs = [
    {
      key: 1,
      title: "Home",
      href: route("home")
    },
    {
      key: 2,
      title: "Product",
      href: route("admin.products.index")
    },
    {
      key: 3,
      title: "Create",
      href: route("admin.products.create"),
      isLast: true
    }
  ];
  const initialValues = {
    name: "",
    slug: "",
    sku: "",
    description: "",
    price: 0,
    img_url: "",
    target_link_url: ""
  };
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      breadcrumbs,
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Create Product" }),
        /* @__PURE__ */ jsx("div", { className: "pb-12", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs(Card, { className: "my-4", children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { children: [
            "Create Product",
            /* @__PURE__ */ jsx("div", { className: "float-right", children: /* @__PURE__ */ jsx(Link, { href: route("admin.products.index"), children: /* @__PURE__ */ jsxs(Button, { size: "sm", children: [
              /* @__PURE__ */ jsx(ArrowLeftIcon, { className: "w-4 h-4 mr-2" }),
              "Back"
            ] }) }) })
          ] }) }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(
            ProductForm,
            {
              initialValues,
              action: route("admin.products.store"),
              method: "post"
            }
          ) })
        ] }) }) })
      ]
    }
  );
}
export {
  ProductCreate as default
};
