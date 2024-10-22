import { l as createDefaultDataByUserId, m as setPageByUserId, n as getWriterBookListPublic } from "../ssr.js";
import { a as useAppSelector, b as useAppDispatch } from "./LayoutBreadcrumb-DJY5I72l.js";
import { useEffect, useCallback } from "react";
import { usePrevious } from "react-use";
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
export {
  useWriterByUser as u
};
