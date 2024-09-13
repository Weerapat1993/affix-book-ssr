import { jsx } from "react/jsx-runtime";
import { useForm } from "@inertiajs/react";
import { Pagination } from "antd";
import { useEffect } from "react";
import { usePrevious } from "react-use";
const InertiaPagination = (props) => {
  const { paginateData, defaultPage } = props;
  const { get, setData, data } = useForm({
    page: defaultPage || 1
  });
  const prevPage = usePrevious(data.page);
  const pagination = {
    pageSize: paginateData.per_page,
    total: paginateData.total,
    page: paginateData.current_page
  };
  const onPageChange = (page) => {
    setData("page", page);
  };
  useEffect(() => {
    if (prevPage !== data.page && prevPage !== void 0) {
      get(route("books.index"));
    }
  }, [data.page]);
  return pagination.total ? /* @__PURE__ */ jsx(
    Pagination,
    {
      current: defaultPage,
      onChange: onPageChange,
      total: pagination.total,
      defaultPageSize: pagination.pageSize,
      align: "end",
      className: "mb-4"
    }
  ) : null;
};
const InertiaPagination$1 = InertiaPagination;
export {
  InertiaPagination$1 as I
};
