import { jsx, jsxs } from "react/jsx-runtime";
import { c as cn, A as Authenticated } from "./AuthenticatedLayout-CGi1hEqW.js";
import { useForm, Link, Head } from "@inertiajs/react";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-BpCz7qRD.js";
import * as React from "react";
import React__default, { useMemo, useEffect, useState } from "react";
import { I as Image } from "./image-iMv3VhFF.js";
import { b as buttonVariants, B as Button } from "./button-D3nFvdUy.js";
import { LucideLoaderCircle, EditIcon, Trash2Icon, PlusIcon } from "lucide-react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { usePrevious } from "react-use";
import { n as numberWithCommas } from "./math-rflY_aJU.js";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { f as getProductList, u as updateProductById, r as removeProductById } from "../ssr.js";
import { a as useAppSelector, b as useAppDispatch } from "./FooterLayout-DpFvbPph.js";
import axios from "axios";
import { a as asset } from "./ApplicationLogo-C5KpUhqt.js";
import { I as InertiaPagination } from "./InertiaPagiantion-BG9nMLzx.js";
import "antd";
import "@ant-design/icons";
import "@radix-ui/react-toast";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "react-image-fallback";
import "react-dom/server";
import "@inertiajs/react/server";
import "react-redux";
import "@reduxjs/toolkit";
import "@reduxjs/toolkit/query";
import "@ant-design/cssinjs";
import "dayjs";
import "dayjs/plugin/relativeTime.js";
const Table = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ jsx(
  "table",
  {
    ref,
    className: cn("w-full caption-bottom text-sm", className),
    ...props
  }
) }));
Table.displayName = "Table";
const TableHeader = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("thead", { ref, className: cn("[&_tr]:border-b", className), ...props }));
TableHeader.displayName = "TableHeader";
const TableBody = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "tbody",
  {
    ref,
    className: cn("[&_tr:last-child]:border-0", className),
    ...props
  }
));
TableBody.displayName = "TableBody";
const TableFooter = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "tfoot",
  {
    ref,
    className: cn(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      className
    ),
    ...props
  }
));
TableFooter.displayName = "TableFooter";
const TableRow = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "tr",
  {
    ref,
    className: cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className
    ),
    ...props
  }
));
TableRow.displayName = "TableRow";
const TableHead = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "th",
  {
    ref,
    className: cn(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      className
    ),
    ...props
  }
));
TableHead.displayName = "TableHead";
const TableCell = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "td",
  {
    ref,
    className: cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className),
    ...props
  }
));
TableCell.displayName = "TableCell";
const TableCaption = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "caption",
  {
    ref,
    className: cn("mt-4 text-sm text-muted-foreground", className),
    ...props
  }
));
TableCaption.displayName = "TableCaption";
const AlertDialog = AlertDialogPrimitive.Root;
const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
const AlertDialogPortal = AlertDialogPrimitive.Portal;
const AlertDialogOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AlertDialogPrimitive.Overlay,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;
const AlertDialogContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxs(AlertDialogPortal, { children: [
  /* @__PURE__ */ jsx(AlertDialogOverlay, {}),
  /* @__PURE__ */ jsx(
    AlertDialogPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      ),
      ...props
    }
  )
] }));
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;
const AlertDialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    ),
    ...props
  }
);
AlertDialogHeader.displayName = "AlertDialogHeader";
const AlertDialogFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    ),
    ...props
  }
);
AlertDialogFooter.displayName = "AlertDialogFooter";
const AlertDialogTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AlertDialogPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold", className),
    ...props
  }
));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;
const AlertDialogDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AlertDialogPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName;
const AlertDialogAction = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AlertDialogPrimitive.Action,
  {
    ref,
    className: cn(buttonVariants(), className),
    ...props
  }
));
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;
const AlertDialogCancel = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AlertDialogPrimitive.Cancel,
  {
    ref,
    className: cn(
      buttonVariants({ variant: "outline" }),
      "mt-2 sm:mt-0",
      className
    ),
    ...props
  }
));
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;
const defaultProps = {
  onSubmit: () => null,
  renderButton: () => null,
  title: "Title",
  description: "",
  children: null,
  loading: false,
  okTitle: "OK",
  customOkButton: null
};
function AlertMessage(props) {
  const [open, setOpen] = React__default.useState(false);
  const { renderButton, title, description, onSubmit, loading, okTitle, customOkButton } = {
    ...defaultProps,
    ...props
  };
  const renderMemoButton = useMemo(() => renderButton(), []);
  const prevLoading = usePrevious(loading);
  const handleOk = async (e) => {
    e.preventDefault();
    await onSubmit();
  };
  useEffect(() => {
    if (prevLoading && !loading) {
      setOpen(false);
    }
  }, [loading]);
  return /* @__PURE__ */ jsxs(AlertDialog, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsx(AlertDialogTrigger, { asChild: true, children: renderMemoButton }),
    /* @__PURE__ */ jsxs(AlertDialogContent, { children: [
      /* @__PURE__ */ jsxs(AlertDialogHeader, { children: [
        /* @__PURE__ */ jsx(AlertDialogTitle, { children: title }),
        description && /* @__PURE__ */ jsx(AlertDialogDescription, { children: description })
      ] }),
      /* @__PURE__ */ jsxs(AlertDialogFooter, { children: [
        /* @__PURE__ */ jsx(AlertDialogCancel, { children: "Cancel" }),
        customOkButton ? customOkButton : /* @__PURE__ */ jsx(AlertDialogAction, { onClick: handleOk, children: loading ? /* @__PURE__ */ jsx(LucideLoaderCircle, { className: "w-4 h-4 animate-spin" }) : okTitle })
      ] })
    ] })
  ] });
}
const Loading = ({ isLoading, children, className }) => {
  return /* @__PURE__ */ jsxs("div", { className: `relative ${className} ${isLoading ? "bg-secondary opacity-20" : ""}`, children: [
    children,
    isLoading ? /* @__PURE__ */ jsx("div", { className: "absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2", children: /* @__PURE__ */ jsx(LucideLoaderCircle, { className: "animate-spin" }) }) : null
  ] });
};
const Switch = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SwitchPrimitives.Root,
  {
    className: cn(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className
    ),
    ...props,
    ref,
    children: /* @__PURE__ */ jsx(
      SwitchPrimitives.Thumb,
      {
        className: cn(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
Switch.displayName = SwitchPrimitives.Root.displayName;
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
