import { jsxs, jsx } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-DBF1SR-y.js";
import { Head } from "@inertiajs/react";
import { Flex, Pagination, Card, FloatButton, Typography } from "antd";
import { B as BookList } from "./BookList-ZKp8cxz0.js";
import { t as createDefaultDataByUserId, v as setPageByUserId, w as getWriterBookListPublic } from "../ssr.js";
import { a as useAppSelector, b as useAppDispatch } from "./LayoutBreadcrumb-DJY5I72l.js";
import { useEffect, useCallback } from "react";
import { usePrevious } from "react-use";
import { U as UserProfileHeader } from "./UserProfileHeader-D1ITc6VY.js";
import "./ApplicationLogo-D5u203cs.js";
import "./laravelBlade-DwBdVrdx.js";
import "@ant-design/icons";
import "@radix-ui/react-toast";
import "class-variance-authority";
import "lucide-react";
import "react-dom/server";
import "@inertiajs/react/server";
import "react-redux";
import "@reduxjs/toolkit";
import "@reduxjs/toolkit/query";
import "axios";
import "@ant-design/cssinjs";
import "dayjs";
import "dayjs/plugin/relativeTime.js";
import "@radix-ui/react-slot";
import "clsx";
import "tailwind-merge";
import "antd-img-crop";
const useWriterByUser = ({ userId }) => {
  const isFetch = useAppSelector((state) => {
    var _a, _b;
    return (_b = (_a = state.writerReducer.keys) == null ? void 0 : _a[userId]) == null ? void 0 : _b.isFetch;
  });
  const isLoading = useAppSelector((state) => {
    var _a, _b;
    return (_b = (_a = state.writerReducer.keys) == null ? void 0 : _a[userId]) == null ? void 0 : _b.isLoading;
  });
  const error = useAppSelector((state) => {
    var _a, _b;
    return (_b = (_a = state.writerReducer.keys) == null ? void 0 : _a[userId]) == null ? void 0 : _b.error;
  });
  const pagination = useAppSelector((state) => {
    var _a, _b;
    return (_b = (_a = state.writerReducer.keys) == null ? void 0 : _a[userId]) == null ? void 0 : _b.pagination;
  });
  const page = useAppSelector((state) => {
    var _a, _b, _c;
    return (_c = (_b = (_a = state.writerReducer.keys) == null ? void 0 : _a[userId]) == null ? void 0 : _b.pagination) == null ? void 0 : _c.page;
  });
  const pages = useAppSelector((state) => {
    var _a, _b;
    return (_b = (_a = state.writerReducer.keys) == null ? void 0 : _a[userId]) == null ? void 0 : _b.pages;
  });
  const dispatch = useAppDispatch();
  const prevPage = usePrevious(page);
  const isPageHasChange = prevPage !== page && prevPage !== void 0;
  const isNotCreatePage = !(pages == null ? void 0 : pages[page]);
  useEffect(() => {
    dispatch(createDefaultDataByUserId({ userId }));
  }, []);
  useEffect(() => {
    if (isFetch === false) {
      refetch({ page, userId });
    } else if (isPageHasChange && isNotCreatePage && isFetch) {
      refetch({ page, userId });
    }
  }, [page, userId]);
  const setWriterPage = useCallback((page2) => {
    dispatch(setPageByUserId({ page: page2, userId }));
  }, []);
  const refetch = async (props) => {
    const action = await dispatch(getWriterBookListPublic(props));
    return action;
  };
  const list = (pages == null ? void 0 : pages[pagination == null ? void 0 : pagination.page]) || [];
  const lastPage = (pagination == null ? void 0 : pagination.lastPage) || 1;
  return {
    list,
    lastPage,
    pagination,
    page,
    isFetch,
    isLoading,
    error,
    refetch,
    setWriterPage
  };
};
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
