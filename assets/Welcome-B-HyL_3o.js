import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { X, Menu, ArrowRight } from "lucide-react";
import { Link } from "@inertiajs/react";
import { d as defaultMeta } from "./seo-B2m5Eufc.js";
import { S as SeoHead } from "./SeoHead-DmWXeTpm.js";
import { I as Image } from "./image-oSgtrKRL.js";
import { Button } from "antd";
import "./laravelBlade-DwBdVrdx.js";
import "react-image-fallback";
function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const meta = {
    ...defaultMeta,
    canonical: route("welcome")
  };
  const menus = [
    {
      key: 1,
      href: route("home"),
      label: "Home"
    },
    {
      key: 2,
      href: route("about"),
      label: "About"
    },
    {
      key: 3,
      href: route("books.manga"),
      label: "Manga"
    },
    {
      key: 4,
      href: route("books.novel"),
      label: "Novel"
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-green-100 font-sans", children: [
    /* @__PURE__ */ jsx(SeoHead, { meta }),
    /* @__PURE__ */ jsxs("header", { className: "bg-white p-4 md:p-6 flex justify-between items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-2xl font-bold text-gray-800", children: [
        "Affix",
        /* @__PURE__ */ jsx("span", { className: "text-purple-600", children: "Book" })
      ] }),
      /* @__PURE__ */ jsx("nav", { className: "hidden md:flex space-x-6", children: menus.map((menu) => /* @__PURE__ */ jsx(
        Link,
        {
          href: menu.href,
          className: "text-gray-600 hover:text-gray-800",
          children: menu.label
        },
        menu.key
      )) }),
      /* @__PURE__ */ jsx(Button, { className: "hidden md:block", type: "primary", children: "Sign up" }),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "md:hidden",
          onClick: () => setIsMenuOpen(!isMenuOpen),
          children: isMenuOpen ? /* @__PURE__ */ jsx(X, {}) : /* @__PURE__ */ jsx(Menu, {})
        }
      )
    ] }),
    isMenuOpen && /* @__PURE__ */ jsxs("div", { className: "md:hidden bg-white p-4", children: [
      /* @__PURE__ */ jsx("nav", { className: "flex flex-col space-y-4", children: menus.map((menu) => /* @__PURE__ */ jsx(
        Link,
        {
          href: menu.href,
          className: "text-gray-600 hover:text-gray-800",
          children: menu.label
        },
        menu.key
      )) }),
      /* @__PURE__ */ jsx(Button, { type: "primary", children: "Sign up" })
    ] }),
    /* @__PURE__ */ jsxs("main", { className: "container mx-auto px-4 md:px-6 py-12 md:py-24 flex flex-col md:flex-row items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:w-1/2 mb-8 md:mb-0", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold text-gray-800 mb-4", children: "Keep reading to improve your knowledge" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-6", children: "Bookfy is the largest online book store serving book lovers and individual customers worldwide. With thousands of available products." }),
        /* @__PURE__ */ jsx(Link, { href: route("home"), children: /* @__PURE__ */ jsxs("button", { className: "bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-700 transition duration-300 flex items-center", children: [
          "อ่านหนังสือ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 ml-2" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "md:w-1/2", children: /* @__PURE__ */ jsx(
        Image,
        {
          src: "/placeholder.svg",
          alt: "Person reading a book",
          className: "w-full h-auto"
        }
      ) })
    ] })
  ] });
}
export {
  Component as default
};
