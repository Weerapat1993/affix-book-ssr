import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import React, { useState } from "react";
import { A as ApplicationLogo } from "./ApplicationLogo-Bn7DjPlp.js";
import { Link } from "@inertiajs/react";
import { u as usePermission, N as NotificationButton, H as HamburgerMenuDrawer, F as FooterLayout } from "./FooterLayout-fQGOwEQH.js";
import { Dropdown, Flex, theme } from "antd";
import { EditOutlined, TeamOutlined, UserOutlined, LogoutOutlined } from "@ant-design/icons";
function NavLink({ active = false, className = "", children, ...props }) {
  return /* @__PURE__ */ jsx(
    Link,
    {
      ...props,
      className: "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none " + (active ? "border-indigo-400 dark:border-indigo-600 text-gray-900 dark:text-gray-100 focus:border-indigo-700 " : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 focus:text-gray-700 dark:focus:text-gray-300 focus:border-gray-300 dark:focus:border-gray-700 ") + className,
      children
    }
  );
}
const { useToken } = theme;
function Authenticated({ header, actions, children }) {
  const { token } = useToken();
  const contentStyle = {
    backgroundColor: token.colorBgElevated,
    borderRadius: token.borderRadiusLG,
    boxShadow: token.boxShadowSecondary
  };
  useState(false);
  const { isRole, isAuth, user } = usePermission();
  const loginMenus = [
    {
      key: 1,
      title: "Login",
      routeName: "login",
      roles: []
    }
    // {
    //     key: 2,
    //     title: 'Register',
    //     routeName: 'register',
    //     roles: [],
    // },
  ];
  const navMenus = [
    {
      key: 1,
      title: "ห้องสมุด",
      routeName: "dashboard",
      roles: ["user"]
    },
    // {
    //     key: 2,
    //     title: 'นักเขียน',
    //     routeName: 'writer.list',
    //     roles: ['user'],
    // },
    {
      key: 3,
      title: "Manga",
      routeName: "books.manga",
      roles: []
    },
    {
      key: 4,
      title: "Novel",
      routeName: "books.novel",
      roles: []
    }
  ];
  const dropdownUserMenus = [
    {
      key: 1,
      title: "หน้านักเขียน",
      routeName: "writer.index",
      roles: ["writer"],
      icon: /* @__PURE__ */ jsx(EditOutlined, {})
    },
    {
      key: 2,
      title: "Admin",
      routeName: "admin.index",
      roles: ["admin"],
      icon: /* @__PURE__ */ jsx(TeamOutlined, {})
    },
    {
      key: 3,
      title: "โปรไฟล์ของฉัน",
      routeName: "profile.edit",
      roles: [],
      icon: /* @__PURE__ */ jsx(UserOutlined, {})
    },
    {
      key: 4,
      type: "divider",
      roles: []
    },
    {
      key: 5,
      title: "ออกจากระบบ",
      routeName: "logout",
      roles: [],
      danger: true,
      icon: /* @__PURE__ */ jsx(LogoutOutlined, {})
    }
  ];
  const dropdownItems = dropdownUserMenus.filter((item) => isRole(...item.roles)).map((item) => {
    if (item.type === "divider") {
      return item;
    }
    if (item.routeName === "logout") {
      return {
        ...item,
        label: isRole(...item.roles) ? /* @__PURE__ */ jsx(Link, { method: "post", as: "button", href: route(item.routeName), children: item.title }) : null
      };
    }
    return {
      ...item,
      label: isRole(...item.roles) ? /* @__PURE__ */ jsx(Link, { href: route(item.routeName), children: item.title }) : null
    };
  });
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gray-100 dark:bg-gray-900", children: [
    /* @__PURE__ */ jsx("nav", { className: "bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between h-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex", children: [
        /* @__PURE__ */ jsx("div", { className: "shrink-0 flex items-center", children: /* @__PURE__ */ jsx(Link, { href: "/", children: /* @__PURE__ */ jsx(ApplicationLogo, { size: 36, className: "block h-9 w-auto fill-current text-gray-800 dark:text-gray-200" }) }) }),
        /* @__PURE__ */ jsx("div", { className: "hidden space-x-8 sm:-my-px sm:ms-10 sm:flex", children: navMenus.map((item) => isRole(...item.roles) ? /* @__PURE__ */ jsx(NavLink, { href: route(item.routeName), active: route().current(item.routeName), children: item.title }, item.key) : null) }),
        /* @__PURE__ */ jsx("div", { className: "lg:hidden md:hidden sm:hidden space-x-8" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "hidden sm:flex sm:items-center space-x-2 sm:-my-px sm:ms-6", children: !isAuth ? loginMenus.map(
        (item) => isRole(...item.roles) ? /* @__PURE__ */ jsx(
          NavLink,
          {
            className: "h-full",
            href: route(
              item.routeName
            ),
            active: route().current(
              item.routeName
            ),
            children: item.title
          },
          item.key
        ) : null
      ) : /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(NotificationButton, {}),
        /* @__PURE__ */ jsx("div", { className: "ms-3 relative", children: /* @__PURE__ */ jsx(
          Dropdown,
          {
            menu: { items: dropdownItems },
            placement: "bottomRight",
            dropdownRender: (menu) => /* @__PURE__ */ jsx("div", { style: contentStyle, children: React.cloneElement(menu) }),
            arrow: true,
            children: /* @__PURE__ */ jsx("span", { className: "inline-flex rounded-md", children: /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                className: "inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-transparent hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150",
                children: [
                  (user == null ? void 0 : user.name) || "",
                  /* @__PURE__ */ jsx(
                    "svg",
                    {
                      className: "ms-2 -me-0.5 h-4 w-4",
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 20 20",
                      fill: "currentColor",
                      children: /* @__PURE__ */ jsx(
                        "path",
                        {
                          fillRule: "evenodd",
                          d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                          clipRule: "evenodd"
                        }
                      )
                    }
                  )
                ]
              }
            ) })
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsxs(Flex, { gap: "small", className: "-me-2 items-center sm:hidden", children: [
        /* @__PURE__ */ jsx(HamburgerMenuDrawer, { title: "Menu" }),
        /* @__PURE__ */ jsx(NotificationButton, {})
      ] })
    ] }) }) }),
    header && /* @__PURE__ */ jsx("header", { className: "bg-white dark:bg-gray-800 shadow", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex flex-row", children: [
      /* @__PURE__ */ jsx("div", { className: "flex-auto", children: header }),
      actions ? /* @__PURE__ */ jsx("div", { className: "flex-auto text-right", children: actions }) : null
    ] }) }),
    /* @__PURE__ */ jsx("main", { className: "min-h-screen", children }),
    /* @__PURE__ */ jsx(FooterLayout, {})
  ] });
}
export {
  Authenticated as A
};
