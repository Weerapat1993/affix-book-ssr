import { jsxs, jsx } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-DBF1SR-y.js";
import { ReloadOutlined } from "@ant-design/icons";
import { App, Typography, Card as Card$1, Flex, Button, FloatButton } from "antd";
import { B as BookList } from "./BookList-ZKp8cxz0.js";
import { a as useAppSelector, b as useAppDispatch, u as usePermission } from "./LayoutBreadcrumb-DJY5I72l.js";
import { C as CategoryFilter } from "./CategoryFilter-DQ8CAepx.js";
import { d as getBookListByType, s as setFilterCategory, e as setPage, f as clearPages } from "../ssr.js";
import { useMemo, useEffect, useCallback } from "react";
import { usePrevious } from "react-use";
import { d as defaultMeta } from "./seo-B2m5Eufc.js";
import { S as SeoHead } from "./SeoHead-DmWXeTpm.js";
import { C as Card } from "./card-D4b28bdR.js";
import "./ApplicationLogo-D5u203cs.js";
import "./laravelBlade-DwBdVrdx.js";
import "@inertiajs/react";
import "@radix-ui/react-toast";
import "class-variance-authority";
import "lucide-react";
import "react-redux";
import "dayjs";
import "dayjs/plugin/relativeTime.js";
import "@radix-ui/react-slot";
import "clsx";
import "tailwind-merge";
import "react-dom/server";
import "@inertiajs/react/server";
import "@reduxjs/toolkit";
import "@reduxjs/toolkit/query";
import "axios";
import "@ant-design/cssinjs";
const useBookList = ({ key, flash }) => {
  const { message } = App.useApp();
  const isLoading = useAppSelector((state) => {
    var _a, _b;
    return (_b = (_a = state.bookReducer.keys) == null ? void 0 : _a[key]) == null ? void 0 : _b.isLoading;
  });
  const isFetch = useAppSelector((state) => {
    var _a, _b;
    return (_b = (_a = state.bookReducer.keys) == null ? void 0 : _a[key]) == null ? void 0 : _b.isFetch;
  });
  const error = useAppSelector((state) => {
    var _a, _b;
    return (_b = (_a = state.bookReducer.keys) == null ? void 0 : _a[key]) == null ? void 0 : _b.error;
  });
  const categoryIds = useAppSelector((state) => {
    var _a, _b;
    return (_b = (_a = state.bookReducer.keys) == null ? void 0 : _a[key]) == null ? void 0 : _b.filters.categoryIds;
  });
  const pagination = useAppSelector((state) => {
    var _a, _b;
    return (_b = (_a = state.bookReducer.keys) == null ? void 0 : _a[key]) == null ? void 0 : _b.pagination;
  });
  const pages = useAppSelector((state) => {
    var _a, _b;
    return (_b = (_a = state.bookReducer.keys) == null ? void 0 : _a[key]) == null ? void 0 : _b.pages;
  });
  const page = useAppSelector((state) => {
    var _a, _b;
    return (_b = (_a = state.bookReducer.keys) == null ? void 0 : _a[key]) == null ? void 0 : _b.pagination.page;
  });
  const dispatch = useAppDispatch();
  const categoryIdsToString = (categoryIds || []).toString();
  const prevPage = usePrevious(page);
  const prevCategoryIds = usePrevious(categoryIdsToString);
  const allPages = useMemo(() => {
    let list2 = [];
    const pageState = (pagination == null ? void 0 : pagination.page) || 1;
    for (let i = 0; i < pageState; i++) {
      const listData = (pages == null ? void 0 : pages[i + 1]) || [];
      list2 = [
        ...list2,
        ...listData
      ];
    }
    return list2;
  }, [pages]);
  const isPageHasChange = prevPage !== page && prevPage !== void 0;
  const isCategoryHasChange = prevCategoryIds !== categoryIdsToString && prevCategoryIds !== void 0;
  const isNotCreatePage = !(pages == null ? void 0 : pages[page]);
  useEffect(() => {
    if (flash === "refetch") {
      message.success("Success");
      refetch({ key, categoryIds, page: page || 1 });
    } else if (!isFetch) {
      refetch({ key, categoryIds, page: page || 1 });
    } else if (isPageHasChange && isNotCreatePage) {
      refetch({ key, categoryIds, page: page || 1 });
    } else if (isCategoryHasChange && page !== 1) {
      clearPagesTo(1);
    } else if (isCategoryHasChange && page === 1) {
      refetch({ key, categoryIds, page });
    }
  }, [key, page, categoryIdsToString, flash]);
  const refetch = async (props) => {
    const action = await dispatch(getBookListByType(props));
    return action;
  };
  const setBookFilterCategory = useCallback((categoryIds2) => {
    dispatch(setFilterCategory({ key, categoryIds: categoryIds2 }));
  }, [key]);
  const setBookPage = useCallback((page2) => {
    dispatch(setPage({ key, page: page2 }));
  }, [key]);
  const clearPagesTo = useCallback((page2) => {
    dispatch(clearPages({ key, page: page2 }));
  }, [key]);
  const list = allPages || [];
  const lastPage = (pagination == null ? void 0 : pagination.lastPage) || 1;
  return {
    page,
    isLoading,
    isFetch,
    list,
    error,
    pagination,
    refetch,
    categoryIds: categoryIds || [],
    lastPage,
    setBookPage,
    setBookFilterCategory
  };
};
const defaultProps = {
  currentPage: 1,
  pageSize: 12,
  total: 0
};
function BookType(props) {
  const defaultWithProps = {
    ...defaultProps,
    ...props
  };
  const { title, categories, type, flash } = defaultWithProps;
  usePermission();
  const { list, isLoading, lastPage, page, setBookPage, categoryIds, setBookFilterCategory } = useBookList({
    key: type,
    flash: flash.message
  });
  const onLoadMore = () => {
    setBookPage(page + 1);
  };
  const isLoadMoreDisabled = page >= lastPage;
  const meta = {
    title: `${title} - ${defaultMeta.title}`,
    description: defaultMeta.description,
    keywords: [
      "Book",
      "Manga",
      "Novel",
      "Comic",
      "Oneshot"
    ],
    author: "",
    canonical: route("books.manga")
  };
  const breadcrumbs = [
    {
      key: 1,
      title: "Home",
      href: route("home")
    },
    {
      key: 2,
      title,
      isLast: true
    }
  ];
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      breadcrumbs,
      children: [
        /* @__PURE__ */ jsx(SeoHead, { meta }),
        /* @__PURE__ */ jsx("div", { className: "pt-4 pb-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsx(Typography.Title, { level: 3, children: title }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap lg:flex-nowrap flex-row-reverse gap-4", children: [
            /* @__PURE__ */ jsx("div", { className: "flex flex-col flex-none lg:w-64 w-full", children: /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CategoryFilter, { value: categoryIds, list: categories, onChange: setBookFilterCategory }) }) }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-col flex-auto", children: /* @__PURE__ */ jsxs(Card$1, { children: [
              /* @__PURE__ */ jsx(BookList, { list }),
              !isLoadMoreDisabled ? /* @__PURE__ */ jsx(Flex, { className: "my-4", justify: "center", gap: "small", children: /* @__PURE__ */ jsx(
                Button,
                {
                  type: "primary",
                  onClick: onLoadMore,
                  icon: /* @__PURE__ */ jsx(ReloadOutlined, {}),
                  loading: isLoading,
                  disabled: isLoadMoreDisabled,
                  children: "Load More"
                }
              ) }) : null
            ] }) })
          ] }),
          /* @__PURE__ */ jsx(FloatButton.BackTop, {})
        ] }) })
      ]
    }
  );
}
export {
  BookType as default
};
