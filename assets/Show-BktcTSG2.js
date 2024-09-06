import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Button, Modal } from "antd";
import { CaretLeftOutlined, EditOutlined, DeleteOutlined, ExclamationCircleFilled } from "@ant-design/icons";
import "react";
import "../ssr.js";
import { useForm, Link, Head } from "@inertiajs/react";
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
const { confirm } = Modal;
function ProductShow({ auth, product }) {
  const list = [product];
  const { delete: deleteMethod } = useForm();
  const showDeleteConfirm = () => {
    confirm({
      title: "Delete Product",
      icon: /* @__PURE__ */ jsx(ExclamationCircleFilled, {}),
      content: "Are you sure delete this product?",
      okText: "Yes",
      okType: "danger",
      okButtonProps: {
        type: "primary"
      },
      cancelText: "No",
      onOk() {
        deleteMethod(route("products.destroy", product.id));
      },
      onCancel() {
      }
    });
  };
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      user: auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight", children: product.name }),
      actions: /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(Link, { href: route("products.index"), children: /* @__PURE__ */ jsx(Button, { type: "default", icon: /* @__PURE__ */ jsx(CaretLeftOutlined, {}), children: "Back" }) }),
        "   ",
        /* @__PURE__ */ jsx(Link, { href: route("products.edit", product.id), children: /* @__PURE__ */ jsx(Button, { type: "primary", icon: /* @__PURE__ */ jsx(EditOutlined, {}), children: "Edit" }) }),
        "   ",
        /* @__PURE__ */ jsx(Button, { onClick: showDeleteConfirm, type: "primary", danger: true, icon: /* @__PURE__ */ jsx(DeleteOutlined, {}), children: "Delete" })
      ] }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Product List" }),
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8", children: list.length ? /* @__PURE__ */ jsx(ProductList, { list }) : null }) })
      ]
    }
  );
}
export {
  ProductShow as default
};
