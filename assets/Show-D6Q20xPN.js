import { jsx, jsxs } from "react/jsx-runtime";
import { c as cn, A as Authenticated } from "./AuthenticatedLayout-CGi1hEqW.js";
import { Head, Link } from "@inertiajs/react";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-BpCz7qRD.js";
import { Edit2Icon } from "lucide-react";
import { I as Image } from "./image-iMv3VhFF.js";
import { cva } from "class-variance-authority";
import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { n as numberWithCommas } from "./math-rflY_aJU.js";
import { a as asset } from "./ApplicationLogo-C5KpUhqt.js";
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-DW2RBqRA.js";
import { u as usePermission } from "./FooterLayout-DpFvbPph.js";
import { Button } from "antd";
import "@ant-design/icons";
import "@radix-ui/react-toast";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "react-image-fallback";
import "@radix-ui/react-tabs";
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
const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({ className, variant, ...props }) {
  return /* @__PURE__ */ jsx("div", { className: cn(badgeVariants({ variant }), className), ...props });
}
const Separator = React.forwardRef(
  ({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ jsx(
    SeparatorPrimitive.Root,
    {
      ref,
      decorative,
      orientation,
      className: cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      ),
      ...props
    }
  )
);
Separator.displayName = SeparatorPrimitive.Root.displayName;
const AspectRatio = AspectRatioPrimitive.Root;
function ProductShow({ auth, product }) {
  const { isRole } = usePermission();
  const breadcrumbs = [
    {
      key: 1,
      title: "Home",
      href: route("home")
    },
    {
      key: 2,
      title: product.name,
      href: route("admin.products.show", product.id),
      isLast: true
    }
  ];
  const imgUrl = (product.img_url || "").includes("http") ? product.img_url : asset(`storage/${product.img_url}`);
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      breadcrumbs,
      children: [
        /* @__PURE__ */ jsx(Head, { title: `${product.name} - Product Details` }),
        /* @__PURE__ */ jsx("div", { className: "pb-12", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs(Card, { className: "my-4", children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex justify-between items-center", children: [
            /* @__PURE__ */ jsx("span", { children: product.name }),
            isRole("admin") ? /* @__PURE__ */ jsx(Link, { href: route("admin.products.edit", product.id), children: /* @__PURE__ */ jsx(Button, { icon: /* @__PURE__ */ jsx(Edit2Icon, { className: "w-4 h-4" }), type: "primary", children: "Edit" }) }) : null
          ] }) }),
          /* @__PURE__ */ jsxs(CardContent, { children: [
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [
              /* @__PURE__ */ jsx(AspectRatio, { ratio: 1 / 1, children: /* @__PURE__ */ jsx("a", { href: product.target_link_url, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx(Image, { className: "w-full rounded-lg shadow-lg", src: imgUrl, alt: product.name }) }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold mb-4", children: "รายละเอียดสินค้า" }),
                /* @__PURE__ */ jsx(Separator, { className: "my-4" }),
                /* @__PURE__ */ jsx("div", { className: "space-y-2", children: /* @__PURE__ */ jsxs("p", { children: [
                  /* @__PURE__ */ jsx("strong", { children: "ราคา : " }),
                  /* @__PURE__ */ jsx("span", { className: "text-red-600 font-bold", children: numberWithCommas(product.price) }),
                  " บาท"
                ] }) }),
                /* @__PURE__ */ jsx(Separator, { className: "my-4" }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold mb-2", children: "Tags" }),
                  /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: ((product == null ? void 0 : product.tags) || []).map((tag, index) => /* @__PURE__ */ jsx(Badge, { variant: "secondary", children: tag }, index)) })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx("a", { href: product.target_link_url, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx(Button, { type: "primary", children: "ไปที่หน้าร้านค้า" }) }) })
              ] })
            ] }),
            /* @__PURE__ */ jsx(Separator, { className: "my-4" }),
            /* @__PURE__ */ jsxs(Tabs, { defaultValue: "description", className: "w-full", children: [
              /* @__PURE__ */ jsxs(TabsList, { children: [
                /* @__PURE__ */ jsx(TabsTrigger, { value: "description", children: "Description" }),
                /* @__PURE__ */ jsx(TabsTrigger, { value: "review", children: "Reviews" })
              ] }),
              /* @__PURE__ */ jsx(TabsContent, { value: "description", children: /* @__PURE__ */ jsx("div", { className: "rich-editor", dangerouslySetInnerHTML: { __html: product.description } }) }),
              /* @__PURE__ */ jsx(TabsContent, { value: "review", children: "Reviews" })
            ] })
          ] })
        ] }) }) })
      ]
    }
  );
}
export {
  ProductShow as default
};
