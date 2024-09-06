import { jsxs, jsx } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-CWsw7_3p.js";
import { Link } from "@inertiajs/react";
import { PlusOutlined, ReloadOutlined } from "@ant-design/icons";
import { App, Button, Divider, Flex, FloatButton } from "antd";
import { B as BookList } from "./BookList-Dvxi3-FX.js";
import { a as useAppSelector, b as useAppDispatch, u as usePermission } from "./FooterLayout-DOY91SPS.js";
import { C as CategoryFilter } from "./CategoryFilter-DQ8CAepx.js";
import { a as getBookListByType, s as setFilterCategory, b as setPage, c as clearPages } from "../ssr.js";
import { useMemo, useEffect, useCallback } from "react";
import { usePrevious } from "react-use";
import { d as defaultMeta } from "./seo-B2m5Eufc.js";
import { a as asset } from "./ApplicationLogo-Bn7DjPlp.js";
import { S as SeoHead } from "./SeoHead-BEko9LA3.js";
import "react-redux";
import "dayjs";
import "dayjs/plugin/relativeTime.js";
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
  const { isRole } = usePermission();
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
    canonical: asset(route("books.manga"))
  };
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight", children: title }),
      actions: isRole("writer") ? /* @__PURE__ */ jsx(Link, { href: route("books.create"), children: /* @__PURE__ */ jsx(Button, { size: "small", type: "primary", icon: /* @__PURE__ */ jsx(PlusOutlined, {}), children: "Create" }) }) : null,
      children: [
        /* @__PURE__ */ jsx(SeoHead, { meta }),
        /* @__PURE__ */ jsx("div", { className: "pt-4 pb-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsx(CategoryFilter, { value: categoryIds, list: categories, onChange: setBookFilterCategory }),
          /* @__PURE__ */ jsx(Divider, {}),
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
          ) }) : null,
          /* @__PURE__ */ jsx(FloatButton.BackTop, {})
        ] }) })
      ]
    }
  );
}
export {
  BookType as default
};
