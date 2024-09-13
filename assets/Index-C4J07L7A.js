import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-CGi1hEqW.js";
import { useForm, Head } from "@inertiajs/react";
import { C as Card } from "./Card-Dj6_F9pc.js";
import { A as AdminHeader, C as CardHeader } from "./AdminHeader-DX9Wtd6V.js";
import { useState, useEffect } from "react";
import { Form, Table, Space, Select, Button, Tag, Flex } from "antd";
import { g as getUserList } from "../ssr.js";
import { a as useAppSelector, b as useAppDispatch, u as usePermission } from "./FooterLayout-DpFvbPph.js";
import { usePrevious } from "react-use";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import "./ApplicationLogo-C5KpUhqt.js";
import "@radix-ui/react-toast";
import "class-variance-authority";
import "lucide-react";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "react-dom/server";
import "@inertiajs/react/server";
import "react-redux";
import "@reduxjs/toolkit";
import "@reduxjs/toolkit/query";
import "axios";
import "@ant-design/cssinjs";
import "dayjs";
import "dayjs/plugin/relativeTime.js";
const useUserList = (props) => {
  const { page, pageSize, total } = props;
  const list = useAppSelector((state) => state.userReducer.list);
  const isFetch = useAppSelector((state) => state.userReducer.isFetch);
  const isLoading = useAppSelector((state) => state.userReducer.isLoading);
  const error = useAppSelector((state) => state.userReducer.error);
  const dispatch = useAppDispatch();
  const [pageState, setPage] = useState(page);
  const [pagination, setPagination] = useState({
    current: page,
    pageSize,
    total
  });
  const prevPage = usePrevious(pageState);
  useEffect(() => {
    if (!isFetch || prevPage !== pageState) {
      refetch({ page: pageState });
    }
  }, [prevPage, pageState]);
  const refetch = async (props2) => {
    const action = await dispatch(getUserList(props2));
    const { data } = action.payload;
    setPagination({
      current: (data == null ? void 0 : data.current_page) || 1,
      pageSize: (data == null ? void 0 : data.per_page) || 1,
      total: (data == null ? void 0 : data.total) || 0
    });
    return action;
  };
  return {
    list,
    pagination,
    pageState,
    isFetch,
    isLoading,
    error,
    refetch,
    setPagination,
    setPage
  };
};
const tagRender = (props) => {
  const { label, value, closable, onClose } = props;
  const onPreventMouseDown = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return /* @__PURE__ */ jsx(
    Tag,
    {
      color: "blue",
      onMouseDown: onPreventMouseDown,
      closable,
      onClose,
      style: { marginInlineEnd: 4 },
      children: label
    }
  );
};
const defaultProps = {
  defaultPage: 1,
  pageSize: 10,
  total: 0,
  roles: []
};
const UserApiList = (props) => {
  const { isUser } = usePermission();
  const [form] = Form.useForm();
  const propsWithDefaults = {
    ...defaultProps,
    ...props
  };
  const { defaultPage, pageSize, total, roles: roleNames } = propsWithDefaults;
  const { isLoading, list, pagination, refetch, setPage } = useUserList({ page: defaultPage, pageSize, total });
  const initialValues = {
    user_id: 0,
    roles: []
  };
  const { data, post, patch, reset, setData, processing, errors, recentlySuccessful } = useForm(initialValues);
  const prevSuccess = usePrevious(recentlySuccessful);
  const handleChange = (values) => {
    setData("roles", values);
  };
  const options = roleNames.map((role) => ({
    value: role,
    label: role
  }));
  useEffect(() => {
    if (prevSuccess !== recentlySuccessful && recentlySuccessful && !prevSuccess) {
      refetch({ page: pagination.current });
      setData("user_id", 0);
    }
  }, [recentlySuccessful]);
  const onSubmit = async (e) => {
    e.preventDefault();
    await post(route("admin.users.sync.role"));
  };
  const onEdit = (id) => {
    if (data.user_id === id) {
      setData("user_id", 0);
    } else {
      setData("user_id", id);
    }
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (name) => name,
      width: "20%"
    },
    {
      title: "Email",
      dataIndex: "email"
    },
    {
      title: "Roles",
      key: "roles",
      dataIndex: "roles",
      render: (_, { id, roles = [] }) => /* @__PURE__ */ jsx(Fragment, { children: data.user_id === id ? /* @__PURE__ */ jsx(
        Form,
        {
          onSubmitCapture: onSubmit,
          form,
          initialValues,
          children: /* @__PURE__ */ jsxs(Space.Compact, { style: { width: "100%" }, children: [
            /* @__PURE__ */ jsx(
              Select,
              {
                mode: "multiple",
                name: "roles",
                tagRender,
                style: { width: "100%" },
                defaultValue: roles.map((role) => role.name),
                placeholder: "Roles",
                onChange: handleChange,
                options
              }
            ),
            /* @__PURE__ */ jsx(Button, { htmlType: "submit", disabled: processing, type: "primary", children: "Save" })
          ] })
        }
      ) : /* @__PURE__ */ jsx(Fragment, { children: roles.map((role) => {
        let color = "";
        switch (role.name) {
          case "admin":
            color = "geekblue";
            break;
          case "writer":
            color = "success";
            break;
          default:
            color = "blue";
        }
        return /* @__PURE__ */ jsx(Tag, { color, children: role.name }, role.id);
      }) }) })
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => {
        const disabled = isUser(record.id);
        return /* @__PURE__ */ jsxs(Flex, { wrap: true, gap: "small", children: [
          /* @__PURE__ */ jsx(Button, { disabled, onClick: () => onEdit(record.id), icon: /* @__PURE__ */ jsx(EditOutlined, {}), type: "primary", shape: "circle", size: "small" }),
          /* @__PURE__ */ jsx(Button, { disabled, icon: /* @__PURE__ */ jsx(DeleteOutlined, {}), type: "primary", shape: "circle", size: "small", danger: true })
        ] });
      }
    }
  ];
  const handleTableChange = (pagination2, filters, sorter) => {
    if (Object.keys(pagination2).length > 0) {
      setPage(pagination2.current);
    }
  };
  return /* @__PURE__ */ jsx(
    Table,
    {
      columns,
      rowKey: (record) => record.id,
      dataSource: list,
      pagination,
      loading: isLoading,
      onChange: handleTableChange
    }
  );
};
const UserApiList$1 = UserApiList;
function AdminUserIndex({ auth, roles }) {
  const roleNames = roles.map((role) => role.name);
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight", children: "User List" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "User List" }),
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsx(AdminHeader, {}),
          /* @__PURE__ */ jsxs(Card, { children: [
            /* @__PURE__ */ jsx(CardHeader, { className: "mb-4", title: "User List" }),
            /* @__PURE__ */ jsx(UserApiList$1, { defaultPage: 1, pageSize: 1, roles: roleNames })
          ] })
        ] }) })
      ]
    }
  );
}
export {
  AdminUserIndex as default
};
