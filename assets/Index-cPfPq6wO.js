import { jsx, jsxs } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-xi7jErZC.js";
import { Head, Link } from "@inertiajs/react";
import { SearchOutlined, PlusOutlined } from "@ant-design/icons";
import { App, Input, Flex, Pagination, Button, FloatButton } from "antd";
import { B as BookList } from "./BookList-Dvxi3-FX.js";
import { i as setFlash, j as setFilterTitle, k as setPage, l as clearPages, m as getWriterBookList } from "../ssr.js";
import { a as useAppSelector, b as useAppDispatch } from "./FooterLayout-fQGOwEQH.js";
import { useEffect, useCallback, useState } from "react";
import { usePrevious, useDebounce } from "react-use";
import "./ApplicationLogo-Bn7DjPlp.js";
import "react-dom/server";
import "@inertiajs/react/server";
import "react-redux";
import "@reduxjs/toolkit";
import "@reduxjs/toolkit/query";
import "axios";
import "@ant-design/cssinjs";
import "dayjs";
import "dayjs/plugin/relativeTime.js";
const useWriterBook = ({ flash }) => {
  const { message } = App.useApp();
  const isFetch = useAppSelector((state) => state.writerReducer.isFetch);
  const isLoading = useAppSelector((state) => state.writerReducer.isLoading);
  const isFlash = useAppSelector((state) => state.writerReducer.isFlash);
  const error = useAppSelector((state) => state.writerReducer.error);
  const pagination = useAppSelector((state) => state.writerReducer.pagination);
  const page = useAppSelector((state) => state.writerReducer.pagination.page);
  const pages = useAppSelector((state) => state.writerReducer.pages);
  const title = useAppSelector((state) => state.writerReducer.filters.title);
  const dispatch = useAppDispatch();
  const prevTitle = usePrevious(title);
  const prevPage = usePrevious(page);
  const isPageHasChange = prevPage !== page && prevPage !== void 0;
  const isTitleHasChange = prevTitle !== title && prevTitle !== void 0;
  const isNotCreatePage = !(pages == null ? void 0 : pages[page]);
  useEffect(() => {
    if (flash === "refetch" && !isFlash) {
      message.success("Success");
      refetch({ page, title });
      dispatch(setFlash(true));
    } else if (!isFetch) {
      refetch({ page, title });
    } else if (isPageHasChange && isNotCreatePage) {
      refetch({ page, title });
    } else if (isTitleHasChange && page !== 1) {
      clearPagesTo(1);
    } else if (isTitleHasChange && page === 1) {
      refetch({ page, title });
    }
  }, [page, title]);
  const setWriterFilterTitle = useCallback((title2) => {
    dispatch(setFilterTitle({ title: title2 }));
  }, []);
  const setWriterPage = useCallback((page2) => {
    dispatch(setPage({ page: page2 }));
  }, []);
  const clearPagesTo = useCallback((page2) => {
    dispatch(clearPages({ page: page2 }));
  }, []);
  const refetch = async (props) => {
    const action = await dispatch(getWriterBookList(props));
    return action;
  };
  const list = (pages == null ? void 0 : pages[pagination == null ? void 0 : pagination.page]) || [];
  const lastPage = (pagination == null ? void 0 : pagination.lastPage) || 1;
  return {
    list,
    lastPage,
    pagination,
    page,
    title,
    isFetch,
    isLoading,
    error,
    refetch,
    setWriterPage,
    setWriterFilterTitle
  };
};
const SearchBookForWriter = ({ onChangeText, defaultValue }) => {
  const [title, setTitle] = useState(defaultValue);
  useDebounce(
    () => {
      if (onChangeText) {
        onChangeText(title);
      }
    },
    1e3,
    [title]
  );
  const onSearchChange = ({ currentTarget }) => {
    setTitle((currentTarget == null ? void 0 : currentTarget.value) || "");
  };
  return /* @__PURE__ */ jsx(
    Input,
    {
      placeholder: "Writer Search",
      allowClear: true,
      prefix: /* @__PURE__ */ jsx(SearchOutlined, {}),
      size: "large",
      variant: "filled",
      onChange: onSearchChange,
      defaultValue
    }
  );
};
const SearchBookForWriter$1 = SearchBookForWriter;
function WriterIndex(props) {
  const { flash } = props;
  const {
    pagination,
    page,
    list,
    isLoading,
    title,
    setWriterPage,
    setWriterFilterTitle
  } = useWriterBook({
    flash: flash.message
  });
  const onPageChange = (page2) => {
    setWriterPage(page2);
  };
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      header: /* @__PURE__ */ jsx(
        SearchBookForWriter$1,
        {
          defaultValue: title,
          onChangeText: setWriterFilterTitle
        }
      ),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Book List" }),
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxs(Flex, { justify: "end", gap: "small", className: "my-4", children: [
            pagination.total ? /* @__PURE__ */ jsx(
              Pagination,
              {
                current: page,
                onChange: onPageChange,
                total: pagination.total,
                defaultPageSize: pagination.pageSize,
                align: "end"
              }
            ) : null,
            /* @__PURE__ */ jsx(Link, { href: route("books.create"), children: /* @__PURE__ */ jsx(Button, { type: "primary", icon: /* @__PURE__ */ jsx(PlusOutlined, {}), children: "Create" }) })
          ] }),
          /* @__PURE__ */ jsx(BookList, { isLoading, list }),
          /* @__PURE__ */ jsx(FloatButton.BackTop, {})
        ] }) })
      ]
    }
  );
}
export {
  WriterIndex as default
};
