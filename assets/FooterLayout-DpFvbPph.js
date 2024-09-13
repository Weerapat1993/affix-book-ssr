import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { BookOutlined, BellOutlined, LoginOutlined, EditOutlined, TeamOutlined, UserOutlined, HomeOutlined, BookFilled, LogoutOutlined } from "@ant-design/icons";
import { usePage, Link, useForm } from "@inertiajs/react";
import { List, Avatar, Tag, Dropdown, Empty, Divider, Row, Button, Badge, theme, Typography, Drawer, Menu, Col, Flex } from "antd";
import React__default, { useState, useEffect, useCallback } from "react";
import { h as getNotificationList } from "../ssr.js";
import { useDispatch, useSelector } from "react-redux";
import { usePrevious } from "react-use";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
import { a as asset } from "./ApplicationLogo-C5KpUhqt.js";
const usePermission = () => {
  var _a, _b, _c;
  const { auth } = usePage().props;
  const isRole = (...roleNames) => {
    const countCheck = roleNames.reduce((pre, roleName) => {
      var _a2;
      const isEqual = (((_a2 = auth == null ? void 0 : auth.user) == null ? void 0 : _a2.roles) || []).filter((item) => item.name === roleName).length > 0;
      return pre + (isEqual ? 1 : 0);
    }, 0);
    return countCheck === roleNames.length;
  };
  const isPermission = (permissionName) => {
    var _a2;
    return (((_a2 = auth == null ? void 0 : auth.user) == null ? void 0 : _a2.permissions) || []).filter((item) => item.name === permissionName).length > 0;
  };
  const isUser = (userId) => {
    var _a2;
    return ((_a2 = auth == null ? void 0 : auth.user) == null ? void 0 : _a2.id) === userId;
  };
  const isAuth = Boolean(auth.user);
  const isGuest = !Boolean(auth.user);
  return {
    user: auth.user,
    isRole,
    isPermission,
    isUser,
    isAuth,
    isGuest,
    roles: (_b = (_a = auth == null ? void 0 : auth.user) == null ? void 0 : _a.roles) == null ? void 0 : _b.map((item) => item.name),
    permissions: (((_c = auth == null ? void 0 : auth.user) == null ? void 0 : _c.permissions) || []).map((item) => item.name)
  };
};
const useAppDispatch = () => useDispatch();
const useAppSelector = useSelector;
const useNotification = (props) => {
  const { page, pageSize, total } = props;
  const list = useAppSelector((state) => state.notificationReducer.list);
  const isFetch = useAppSelector((state) => state.notificationReducer.isFetch);
  const isLoading = useAppSelector((state) => state.notificationReducer.isLoading);
  const error = useAppSelector((state) => state.notificationReducer.error);
  const dispatch = useAppDispatch();
  const [isFirstRender, setFirstRender] = useState(false);
  const [pagination, setPagination] = useState({
    current: page,
    pageSize,
    total
  });
  const prevPage = usePrevious(pagination.current);
  useEffect(() => {
    if ((!isFetch || prevPage !== pagination.current) && isFirstRender) {
      refetch({ page: pagination.current });
    }
  }, [prevPage, pagination.current, isFirstRender]);
  const refetch = useCallback(async (props2) => {
    const action = await dispatch(getNotificationList(props2));
    const { data } = action.payload;
    setPagination({
      current: (data == null ? void 0 : data.current_page) || 1,
      pageSize: (data == null ? void 0 : data.per_page) || 1,
      total: (data == null ? void 0 : data.total) || 0
    });
    return action;
  }, [pagination.current]);
  const onCheckOpen = useCallback(() => {
    if (!isFirstRender) {
      setFirstRender(true);
      refetch({ page: pagination.current });
    }
  }, [isFirstRender]);
  return {
    list,
    pagination,
    isFetch,
    isLoading,
    error,
    refetch,
    setPagination,
    onCheckOpen
  };
};
dayjs.extend(relativeTime);
const dateHuman = (dateTime) => {
  return dateTime ? dayjs(dateTime).fromNow() : null;
};
const { useToken } = theme;
const { Text } = Typography;
const UserNotificationButton = () => {
  const { token } = useToken();
  const { isLoading, list, onCheckOpen } = useNotification({ page: 1, pageSize: 10, total: 10 });
  const contentStyle = {
    backgroundColor: token.colorBgElevated,
    borderRadius: token.borderRadiusLG,
    width: 360,
    boxShadow: token.boxShadowSecondary
  };
  const listItems = list.map((notification) => {
    var _a, _b, _c;
    return {
      key: notification.id,
      avatar: asset(`storage/${(_a = notification == null ? void 0 : notification.book) == null ? void 0 : _a.img_url}`),
      title: notification.title,
      description: dateHuman(notification == null ? void 0 : notification.published_at),
      routeName: notification.route_name,
      params: notification.params,
      isNovel: ((_b = notification == null ? void 0 : notification.book) == null ? void 0 : _b.type) === "Novel",
      type: ((_c = notification == null ? void 0 : notification.book) == null ? void 0 : _c.type) || "Manga"
    };
  });
  const items = listItems.map((itemData) => ({
    ...itemData,
    label: /* @__PURE__ */ jsx(
      List,
      {
        loading: isLoading,
        itemLayout: "horizontal",
        dataSource: [itemData],
        renderItem: (item, index) => /* @__PURE__ */ jsx(Link, { href: route(item.routeName, item.params), children: /* @__PURE__ */ jsx(List.Item, { children: /* @__PURE__ */ jsx(
          List.Item.Meta,
          {
            avatar: /* @__PURE__ */ jsx(Avatar, { src: item.avatar, icon: /* @__PURE__ */ jsx(BookOutlined, {}) }),
            title: /* @__PURE__ */ jsx(Text, { style: { width: 300 }, ellipsis: true, children: item.title }),
            description: /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(Tag, { color: item.isNovel ? "success" : "warning", children: item.type }),
              item.description
            ] })
          }
        ) }) })
      }
    )
  }));
  return /* @__PURE__ */ jsx(
    Dropdown,
    {
      onOpenChange: onCheckOpen,
      menu: { items },
      placement: "bottomRight",
      dropdownRender: (menu) => /* @__PURE__ */ jsxs("div", { style: contentStyle, children: [
        items.length ? React__default.cloneElement(menu) : /* @__PURE__ */ jsx("div", { style: { paddingTop: 30 }, children: /* @__PURE__ */ jsx(Empty, { image: Empty.PRESENTED_IMAGE_SIMPLE }) }),
        /* @__PURE__ */ jsx(Divider, { className: "m-0" }),
        /* @__PURE__ */ jsx(Row, { className: "p-2 justify-center", children: /* @__PURE__ */ jsx(Button, { type: "link", children: "Show more notification" }) })
      ] }),
      arrow: true,
      children: /* @__PURE__ */ jsx(Badge, { size: "small", dot: true, count: items.length, overflowCount: 9, children: /* @__PURE__ */ jsx(Button, { type: "primary", shape: "circle", icon: /* @__PURE__ */ jsx(BellOutlined, {}) }) })
    }
  );
};
const NotificationButton = () => {
  const { isAuth } = usePermission();
  return isAuth ? /* @__PURE__ */ jsx(UserNotificationButton, {}) : null;
};
const NotificationButton$1 = NotificationButton;
const HamburgerMenu = ({ onClick }) => {
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick,
      className: "inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out",
      children: /* @__PURE__ */ jsx(
        "svg",
        {
          className: "h-6 w-6",
          stroke: "currentColor",
          fill: "none",
          viewBox: "0 0 24 24",
          children: /* @__PURE__ */ jsx(
            "path",
            {
              className: "inline-flex",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2",
              d: "M4 6h16M4 12h16M4 18h16"
            }
          )
        }
      )
    }
  );
};
const HamburgerMenuDrawer = ({ title, children }) => {
  const [open, setOpen] = React__default.useState(false);
  const { get, post } = useForm();
  const { isAuth, isRole } = usePermission();
  const showLoading = () => {
    setOpen(true);
  };
  const userMenu = [
    {
      key: 4,
      title: "หน้านักเขียน",
      routeName: "writer.index",
      roles: ["writer"],
      icon: /* @__PURE__ */ jsx(EditOutlined, {})
    },
    {
      key: 5,
      title: "Admin",
      routeName: "admin.index",
      roles: ["admin"],
      icon: /* @__PURE__ */ jsx(TeamOutlined, {})
    },
    {
      key: 6,
      title: "โปรไฟล์ของฉัน",
      routeName: "profile.edit",
      roles: [],
      icon: /* @__PURE__ */ jsx(UserOutlined, {})
    }
  ];
  const baseMenu = [
    {
      key: 1,
      title: "ห้องสมุด",
      routeName: "dashboard",
      icon: /* @__PURE__ */ jsx(HomeOutlined, {}),
      roles: ["user"]
    },
    // {
    //     key: 2,
    //     title: 'นักเขียน',
    //     routeName: 'writer.list',
    //     icon: <UserOutlined />,
    //     roles: ['user'],
    // },
    {
      key: 3,
      title: "Manga",
      routeName: "books.manga",
      icon: /* @__PURE__ */ jsx(BookFilled, {}),
      roles: []
    },
    {
      key: 4,
      title: "Novel",
      routeName: "books.novel",
      icon: /* @__PURE__ */ jsx(BookOutlined, {}),
      roles: []
    }
  ];
  const baseMenuItem = baseMenu.filter((item) => isRole(...item.roles)).map((item) => ({
    key: route(item.routeName),
    label: item.title,
    icon: item.icon,
    onClick: () => get(route(item.routeName))
  }));
  const userMenuItem = userMenu.filter((item) => isRole(...item.roles)).map((item) => ({
    key: route(item.routeName),
    label: item.title,
    icon: item.icon,
    onClick: () => get(route(item.routeName))
  }));
  const guestMenuItems = [
    // { type: 'divider' },
    ...baseMenuItem,
    { type: "divider" },
    { key: route("login"), icon: /* @__PURE__ */ jsx(LoginOutlined, {}), label: "Login", onClick: () => get(route("login")) }
    // { key: route('register'), icon: <UserAddOutlined />, label: 'Register', onClick: () => get(route('register')) },
  ];
  const userMenuItems = [
    // { type: 'divider' },
    ...baseMenuItem,
    { type: "divider" },
    ...userMenuItem,
    { type: "divider" },
    { key: "4", icon: /* @__PURE__ */ jsx(LogoutOutlined, {}), label: "Logout", onClick: () => post(route("logout")) }
  ];
  const menuItems = isAuth ? userMenuItems : guestMenuItems;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(HamburgerMenu, { onClick: showLoading }),
    /* @__PURE__ */ jsxs(
      Drawer,
      {
        closable: true,
        destroyOnClose: true,
        title: /* @__PURE__ */ jsx("p", { children: title }),
        placement: "right",
        open,
        onClose: () => setOpen(false),
        bodyStyle: { padding: "0px" },
        children: [
          children,
          /* @__PURE__ */ jsx(
            Menu,
            {
              mode: "inline",
              className: "bg-transparent",
              items: menuItems
            }
          )
        ]
      }
    )
  ] });
};
const HamburgerMenuDrawer$1 = HamburgerMenuDrawer;
const FooterLayout = () => {
  return /* @__PURE__ */ jsx("footer", { className: "bg-primary h-16", children: /* @__PURE__ */ jsx("div", { className: "flex h-full items-center max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 text-background", children: /* @__PURE__ */ jsxs(Row, { className: "w-full", children: [
    /* @__PURE__ */ jsx(Col, { flex: 12, children: "© Copyright 2024. Created by Affix" }),
    /* @__PURE__ */ jsx(Col, { flex: "auto" }),
    /* @__PURE__ */ jsx(Col, { flex: 6, children: /* @__PURE__ */ jsx(Flex, { justify: "end", wrap: true, gap: "small", children: /* @__PURE__ */ jsx(Link, { href: route("about"), children: "About Us" }) }) })
  ] }) }) });
};
const FooterLayout$1 = FooterLayout;
export {
  FooterLayout$1 as F,
  HamburgerMenuDrawer$1 as H,
  NotificationButton$1 as N,
  useAppSelector as a,
  useAppDispatch as b,
  dateHuman as d,
  usePermission as u
};
