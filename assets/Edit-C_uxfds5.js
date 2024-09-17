import { jsxs, jsx } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-B4iinvfv.js";
import { Head } from "@inertiajs/react";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-CGqfjoc9.js";
import { P as ProductForm } from "./ProductForm-C_IKBgWp.js";
import "react";
import "./ApplicationLogo-D5u203cs.js";
import "./laravelBlade-DwBdVrdx.js";
import "antd";
import "./FooterLayout-BaEYPs1Z.js";
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
import "lucide-react";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "react-hook-form";
import "@hookform/resolvers/zod";
import "zod";
import "./button-2M4O-Avv.js";
import "@radix-ui/react-label";
import "@radix-ui/react-dialog";
import "@radix-ui/react-scroll-area";
import "./image-oSgtrKRL.js";
import "react-image-fallback";
import "@codeium/react-code-editor";
import "./tabs-CBGToPcL.js";
import "@radix-ui/react-tabs";
function ProductEdit({ auth, product }) {
  const breadcrumbs = [
    {
      key: 1,
      title: "Home",
      href: route("home")
    },
    {
      key: 2,
      title: "Products",
      href: route("admin.products.index")
    },
    {
      key: 2,
      title: product.name,
      href: route("admin.products.show", product.id)
    },
    {
      key: 3,
      title: "Edit",
      href: route("admin.products.edit", product.id),
      isLast: true
    }
  ];
  const initialValues = {
    name: product.name,
    slug: product.slug,
    sku: product.sku,
    description: product.description,
    price: product.price,
    img_url: product.img_url,
    target_link_url: product.target_link_url
  };
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      breadcrumbs,
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Edit Product" }),
        /* @__PURE__ */ jsx("div", { className: "pb-12", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs(Card, { className: "my-4", children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Edit Product" }) }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(
            ProductForm,
            {
              initialValues,
              action: route("admin.products.update", product.id),
              method: "patch"
            }
          ) })
        ] }) }) })
      ]
    }
  );
}
export {
  ProductEdit as default
};
