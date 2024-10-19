import { jsxs, jsx } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-DBF1SR-y.js";
import { a as asset } from "./laravelBlade-DwBdVrdx.js";
import { UserOutlined } from "@ant-design/icons";
import { Head, Link } from "@inertiajs/react";
import { List, Avatar } from "antd";
import "react";
import "./ApplicationLogo-D5u203cs.js";
import "./LayoutBreadcrumb-DJY5I72l.js";
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
import "@radix-ui/react-slot";
import "lucide-react";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-toast";
import "class-variance-authority";
function WriterList(props) {
  const { users } = props;
  const data = users.map((user) => ({
    id: user.id,
    name: user.name,
    avatar: user.avatar_url,
    mention: user.mention
  }));
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight", children: "รายชื่อนักเขียน" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: `รายชื่อนักเขียน` }),
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx(
          List,
          {
            itemLayout: "horizontal",
            dataSource: data,
            renderItem: (item, index) => /* @__PURE__ */ jsx(List.Item, { children: /* @__PURE__ */ jsx(
              List.Item.Meta,
              {
                avatar: /* @__PURE__ */ jsx(Avatar, { src: asset(`storage/avatar/${item.avatar}`), icon: /* @__PURE__ */ jsx(UserOutlined, {}) }),
                title: /* @__PURE__ */ jsx(Link, { href: route("writer.mention", item.mention), children: item.name }),
                description: "Writer"
              }
            ) })
          }
        ) }) })
      ]
    }
  );
}
export {
  WriterList as default
};
