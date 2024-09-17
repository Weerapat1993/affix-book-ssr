import { jsx, jsxs } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-B4iinvfv.js";
import { useForm, Link, Head } from "@inertiajs/react";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-CGqfjoc9.js";
import { L as Loading, T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell, S as Switch, A as AlertMessage } from "./switch-BBFEzuUP.js";
import { I as Image } from "./image-oSgtrKRL.js";
import { B as Button } from "./button-2M4O-Avv.js";
import { EditIcon, LucideLoaderCircle, Trash2Icon, PlusIcon } from "lucide-react";
import { n as numberWithCommas } from "./math-rflY_aJU.js";
import { h as getProductList, i as updateProductById, j as removeProductById } from "../ssr.js";
import { a as useAppSelector, b as useAppDispatch } from "./FooterLayout-BaEYPs1Z.js";
import axios from "axios";
import { useState, useEffect } from "react";
import { a as asset } from "./laravelBlade-DwBdVrdx.js";
import { I as InertiaPagination } from "./InertiaPagiantion-BG9nMLzx.js";
import "./ApplicationLogo-D5u203cs.js";
import "antd";
import "@ant-design/icons";
import "@radix-ui/react-toast";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "@radix-ui/react-alert-dialog";
import "react-use";
import "@radix-ui/react-switch";
import "react-image-fallback";
import "react-dom/server";
import "@inertiajs/react/server";
import "react-redux";
import "@reduxjs/toolkit";
import "@reduxjs/toolkit/query";
import "@ant-design/cssinjs";
import "dayjs";
import "dayjs/plugin/relativeTime.js";
const useProductTable = (products) => {
  const keys = useAppSelector((state) => state.productReducer.keys);
  const listIds = useAppSelector((state) => state.productReducer.listIds);
  const dispatch = useAppDispatch();
  const { delete: deleteMethod } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    getProducts(products);
  }, []);
  const handleDelete = (id) => {
    deleteMethod(route("admin.products.destroy", id), {
      onStart: () => setIsLoading(true),
      onSuccess: () => removeProduct(id),
      onFinish: () => setIsLoading(false)
    });
  };
  const handleChangeStatus = async (product, bool) => {
    var _a;
    const status = bool ? "Published" : "Draft";
    try {
      const res = await axios({
        method: "patch",
        url: route("admin.products.update.status", product.id),
        data: {
          status
        }
      });
      const dataResponse = (_a = res.data) == null ? void 0 : _a.data;
      dispatch(updateProductById(dataResponse));
    } catch (e) {
      console.error(e);
    }
  };
  const getProducts = (products2) => {
    dispatch(getProductList(products2));
  };
  const removeProduct = (id) => {
    dispatch(removeProductById(id));
  };
  const list = listIds.map((key) => keys[key]);
  return {
    list,
    isLoading,
    handleChangeStatus,
    handleDelete
  };
};
const ProductTable = (props) => {
  const { list: productList } = props;
  const { isLoading, list, handleChangeStatus, handleDelete } = useProductTable(productList);
  return /* @__PURE__ */ jsx(Loading, { isLoading, children: /* @__PURE__ */ jsxs(Table, { children: [
    /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
      /* @__PURE__ */ jsx(TableHead, { className: "w-[60px]", children: "ID" }),
      /* @__PURE__ */ jsx(TableHead, { className: "w-[80px]", children: "Image" }),
      /* @__PURE__ */ jsx(TableHead, { className: "w-[120px]", children: "SKU" }),
      /* @__PURE__ */ jsx(TableHead, { children: "Name" }),
      /* @__PURE__ */ jsx(TableHead, { className: "w-[120px]", children: "Price" }),
      /* @__PURE__ */ jsx(TableHead, { className: "w-[60px]", children: "Publish" }),
      /* @__PURE__ */ jsx(TableHead, { className: "w-[120px]", children: "Actions" })
    ] }) }),
    /* @__PURE__ */ jsx(TableBody, { children: list.map((product) => {
      const imgUrl = (product.img_url || "").includes("http") ? product.img_url : asset(`storage/${product.img_url}`);
      return /* @__PURE__ */ jsxs(TableRow, { children: [
        /* @__PURE__ */ jsx(TableCell, { children: product.id }),
        /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx(Link, { href: route("products.slug.show", product.slug), children: /* @__PURE__ */ jsx(Image, { className: "object-cover", src: imgUrl, alt: product.name, width: 60, height: 60 }) }) }),
        /* @__PURE__ */ jsx(TableCell, { children: product.sku }),
        /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx(Link, { className: "underline", href: route("admin.products.show", product.id), children: product.name }) }),
        /* @__PURE__ */ jsx(TableCell, { className: "text-red-600 font-bold", children: numberWithCommas(product.price) }),
        /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx(
          Switch,
          {
            checked: product.status === "Published",
            onCheckedChange: (bool) => handleChangeStatus(product, bool)
          }
        ) }),
        /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2", children: [
          /* @__PURE__ */ jsx(Link, { href: route("admin.products.edit", product.id), children: /* @__PURE__ */ jsx(Button, { size: "sm", children: /* @__PURE__ */ jsx(EditIcon, { className: "w-4 h-4" }) }) }),
          /* @__PURE__ */ jsx(
            AlertMessage,
            {
              loading: isLoading,
              title: "Delete Product",
              description: "Are you sure you want to delete this product?",
              customOkButton: /* @__PURE__ */ jsxs(Button, { variant: "destructive", onClick: () => handleDelete(product.id), children: [
                isLoading ? /* @__PURE__ */ jsx(LucideLoaderCircle, { className: "h-4 w-4 mr-2 animate-spin" }) : /* @__PURE__ */ jsx(Trash2Icon, { className: "h-4 w-4 mr-2" }),
                "Delete"
              ] }),
              renderButton: () => /* @__PURE__ */ jsx(Button, { size: "sm", variant: "destructive", children: /* @__PURE__ */ jsx(Trash2Icon, { className: "h-4 w-4" }) })
            }
          )
        ] }) })
      ] }, product.id);
    }) })
  ] }) });
};
const ProductTable$1 = ProductTable;
function ProductIndex({ auth, products }) {
  const breadcrumbs = [
    {
      key: 1,
      title: "Home",
      href: route("home")
    },
    {
      key: 2,
      title: "Products",
      href: route("admin.products.index"),
      isLast: true
    }
  ];
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      breadcrumbs,
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Product List" }),
        /* @__PURE__ */ jsx("div", { className: "pb-12", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs(Card, { className: "my-4", children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { children: [
            "Product List",
            /* @__PURE__ */ jsx("div", { className: "float-right", children: /* @__PURE__ */ jsx(Link, { href: route("admin.products.create"), children: /* @__PURE__ */ jsxs(Button, { size: "sm", children: [
              /* @__PURE__ */ jsx(PlusIcon, { className: "w-4 h-4 mr-2" }),
              "Create"
            ] }) }) })
          ] }) }),
          /* @__PURE__ */ jsxs(CardContent, { children: [
            /* @__PURE__ */ jsx(
              InertiaPagination,
              {
                url: route("admin.products.index"),
                paginateData: products,
                defaultPage: products.current_page
              }
            ),
            /* @__PURE__ */ jsx(ProductTable$1, { list: products.data || [] })
          ] })
        ] }) }) })
      ]
    }
  );
}
export {
  ProductIndex as default
};
