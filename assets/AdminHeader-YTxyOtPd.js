import { jsxs, jsx } from "react/jsx-runtime";
import { Flex, Button } from "antd";
import { C as Card } from "./Card-Dj6_F9pc.js";
import { Link } from "@inertiajs/react";
import { TeamOutlined, DatabaseOutlined } from "@ant-design/icons";
const defaultProps = {
  title: "",
  children: null,
  className: ""
};
const CardHeader = (props) => {
  const propsWithDefault = {
    ...defaultProps,
    ...props
  };
  const { children, title, className } = propsWithDefault;
  return /* @__PURE__ */ jsxs("header", { children: [
    /* @__PURE__ */ jsx("h2", { className: `text-lg font-medium text-gray-900 dark:text-gray-100 ${className}`, children: title }),
    children
  ] });
};
const CardHeader$1 = CardHeader;
const AdminHeader = () => {
  return /* @__PURE__ */ jsxs(Card, { children: [
    /* @__PURE__ */ jsx(CardHeader$1, { title: "Tools", className: "mb-4" }),
    /* @__PURE__ */ jsxs(Flex, { wrap: true, gap: "small", children: [
      /* @__PURE__ */ jsx(Link, { href: route("admin.index"), children: /* @__PURE__ */ jsx(Button, { icon: /* @__PURE__ */ jsx(TeamOutlined, {}), type: "default", children: "Admin Page" }) }),
      /* @__PURE__ */ jsx(Link, { href: route("admin.users.index"), children: /* @__PURE__ */ jsx(Button, { icon: /* @__PURE__ */ jsx(DatabaseOutlined, {}), type: "default", children: "User Table" }) }),
      /* @__PURE__ */ jsx(Link, { href: route("admin.database"), children: /* @__PURE__ */ jsx(Button, { icon: /* @__PURE__ */ jsx(DatabaseOutlined, {}), type: "default", children: "Database" }) })
    ] })
  ] });
};
const AdminHeader$1 = AdminHeader;
export {
  AdminHeader$1 as A,
  CardHeader$1 as C
};
