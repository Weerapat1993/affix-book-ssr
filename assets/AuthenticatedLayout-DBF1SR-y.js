import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import * as React from "react";
import React__default, { useState } from "react";
import { A as ApplicationLogo } from "./ApplicationLogo-D5u203cs.js";
import { Link } from "@inertiajs/react";
import { c as cn, u as usePermission, N as NotificationButton, H as HamburgerMenuDrawer, L as LayoutBreadcrumb, F as FooterLayout } from "./LayoutBreadcrumb-DJY5I72l.js";
import { Dropdown, Flex, theme } from "antd";
import { EditOutlined, TeamOutlined, UserOutlined, LogoutOutlined } from "@ant-design/icons";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva } from "class-variance-authority";
import { X } from "lucide-react";
function NavLink({ active = false, className = "", children, ...props }) {
  return /* @__PURE__ */ jsx(
    Link,
    {
      ...props,
      className: "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none " + (active ? "border-indigo-400 text-indigo-400 focus:border-indigo-700 " : "border-transparent text-primary-foreground hover:text-indigo-400 hover:border-primary focus:text-indigo-400 focus:border-indigo-700 ") + className,
      children
    }
  );
}
const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1e6;
let count = 0;
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}
const toastTimeouts = /* @__PURE__ */ new Map();
const addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId
    });
  }, TOAST_REMOVE_DELAY);
  toastTimeouts.set(toastId, timeout);
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT)
      };
    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === action.toast.id ? { ...t, ...action.toast } : t
        )
      };
    case "DISMISS_TOAST": {
      const { toastId } = action;
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast2) => {
          addToRemoveQueue(toast2.id);
        });
      }
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === toastId || toastId === void 0 ? {
            ...t,
            open: false
          } : t
        )
      };
    }
    case "REMOVE_TOAST":
      if (action.toastId === void 0) {
        return {
          ...state,
          toasts: []
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId)
      };
  }
};
const listeners = [];
let memoryState = { toasts: [] };
function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}
function toast({ ...props }) {
  const id = genId();
  const update = (props2) => dispatch({
    type: "UPDATE_TOAST",
    toast: { ...props2, id }
  });
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });
  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      }
    }
  });
  return {
    id,
    dismiss,
    update
  };
}
function useToast() {
  const [state, setState] = React.useState(memoryState);
  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);
  return {
    ...state,
    toast,
    dismiss: (toastId) => dispatch({ type: "DISMISS_TOAST", toastId })
  };
}
const ToastProvider = ToastPrimitives.Provider;
const ToastViewport = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Viewport,
  {
    ref,
    className: cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    ),
    ...props
  }
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;
const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
const Toast = React.forwardRef(({ className, variant, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    ToastPrimitives.Root,
    {
      ref,
      className: cn(toastVariants({ variant }), className),
      ...props
    }
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;
const ToastAction = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Action,
  {
    ref,
    className: cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      className
    ),
    ...props
  }
));
ToastAction.displayName = ToastPrimitives.Action.displayName;
const ToastClose = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Close,
  {
    ref,
    className: cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    ),
    "toast-close": "",
    ...props,
    children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
  }
));
ToastClose.displayName = ToastPrimitives.Close.displayName;
const ToastTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Title,
  {
    ref,
    className: cn("text-sm font-semibold", className),
    ...props
  }
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;
const ToastDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Description,
  {
    ref,
    className: cn("text-sm opacity-90", className),
    ...props
  }
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;
function Toaster() {
  const { toasts } = useToast();
  return /* @__PURE__ */ jsxs(ToastProvider, { children: [
    toasts.map(function({
      id,
      title,
      description,
      action,
      ...props
    }) {
      return /* @__PURE__ */ jsxs(Toast, { ...props, children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-1", children: [
          title && /* @__PURE__ */ jsx(ToastTitle, { children: title }),
          description && /* @__PURE__ */ jsx(ToastDescription, { children: description })
        ] }),
        action,
        /* @__PURE__ */ jsx(ToastClose, {})
      ] }, id);
    }),
    /* @__PURE__ */ jsx(ToastViewport, {})
  ] });
}
const { useToken } = theme;
function Authenticated({ header, actions, children, breadcrumbs }) {
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
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsx("nav", { className: "bg-primary border-b border-primary", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between h-16", children: [
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
            dropdownRender: (menu) => /* @__PURE__ */ jsx("div", { style: contentStyle, children: React__default.cloneElement(menu) }),
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
    header && /* @__PURE__ */ jsx("header", { className: "bg-secondary shadow", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex flex-row", children: [
      /* @__PURE__ */ jsx("div", { className: "flex-auto", children: header }),
      actions ? /* @__PURE__ */ jsx("div", { className: "flex-auto text-right", children: actions }) : null
    ] }) }),
    /* @__PURE__ */ jsx(LayoutBreadcrumb, { list: breadcrumbs || [] }),
    /* @__PURE__ */ jsx(Toaster, {}),
    /* @__PURE__ */ jsx("main", { className: "min-h-screen", children }),
    /* @__PURE__ */ jsx(FooterLayout, {})
  ] });
}
export {
  Authenticated as A,
  useToast as u
};
