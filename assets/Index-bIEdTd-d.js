import { jsxs, jsx } from "react/jsx-runtime";
import { Button, FloatButton } from "antd";
import { PlusOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import "react";
import "../ssr.js";
import { Link, Head } from "@inertiajs/react";
import { P as ProductList } from "./ProductList-Oc9RdV73.js";
import { A as Authenticated } from "./AuthenticatedLayout-CWsw7_3p.js";
import "react-dom/server";
import "@inertiajs/react/server";
import "react-redux";
import "@reduxjs/toolkit";
import "@reduxjs/toolkit/query";
import "axios";
import "@ant-design/cssinjs";
import "./useCart-D3twppGD.js";
import "react-use";
import "./FooterLayout-DOY91SPS.js";
import "dayjs";
import "dayjs/plugin/relativeTime.js";
import "./ApplicationLogo-Bn7DjPlp.js";
function ProductIndex({ auth, products }) {
  const list = products.data || [];
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight", children: "Product List" }),
      actions: /* @__PURE__ */ jsx(Link, { href: route("products.create"), children: /* @__PURE__ */ jsx(Button, { size: "small", type: "primary", icon: /* @__PURE__ */ jsx(PlusOutlined, {}), children: "Create" }) }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Product List" }),
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8", children: [
          list.length ? /* @__PURE__ */ jsx(ProductList, { list }) : null,
          /* @__PURE__ */ jsx(Link, { href: route("carts.index"), children: /* @__PURE__ */ jsx(FloatButton, { type: "primary", icon: /* @__PURE__ */ jsx(ShoppingCartOutlined, {}) }) })
        ] }) })
      ]
    }
  );
}
export {
  ProductIndex as default
};
