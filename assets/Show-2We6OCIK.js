import { jsxs, jsx } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-DBF1SR-y.js";
import { Head } from "@inertiajs/react";
import { Flex, Pagination, Card, FloatButton, Typography } from "antd";
import { B as BookList } from "./BookList-ZKp8cxz0.js";
import { u as useWriterByUser } from "./useWriterByUser-Csq1RLaB.js";
import { U as UserProfileHeader } from "./UserProfileHeader-D1ITc6VY.js";
import "react";
import "./ApplicationLogo-D5u203cs.js";
import "./laravelBlade-DwBdVrdx.js";
import "./LayoutBreadcrumb-DJY5I72l.js";
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
import "@radix-ui/react-slot";
import "lucide-react";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-toast";
import "class-variance-authority";
import "antd-img-crop";
const { Title } = Typography;
function WriterShow(props) {
  const { user } = props;
  const {
    pagination,
    page,
    list,
    isLoading,
    setWriterPage
  } = useWriterByUser({ userId: user.id });
  const onPageChange = (page2) => {
    setWriterPage(page2);
  };
  return /* @__PURE__ */ jsxs(Authenticated, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Book List" }),
    /* @__PURE__ */ jsx(UserProfileHeader, { user }),
    /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8 px-2", children: [
      /* @__PURE__ */ jsx(Title, { level: 3, children: "Projects" }),
      /* @__PURE__ */ jsx(Flex, { justify: "end", gap: "small", className: "my-4", children: (pagination == null ? void 0 : pagination.total) ? /* @__PURE__ */ jsx(
        Pagination,
        {
          current: page,
          onChange: onPageChange,
          total: pagination.total,
          defaultPageSize: pagination.pageSize,
          align: "end"
        }
      ) : null }),
      /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(BookList, { isLoading, list }) }),
      /* @__PURE__ */ jsx(FloatButton.BackTop, {})
    ] }) })
  ] });
}
export {
  WriterShow as default
};
