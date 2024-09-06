import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { A as ApplicationLogo } from "./ApplicationLogo-Bn7DjPlp.js";
import { useForm, Link } from "@inertiajs/react";
import { u as usePermission, H as HamburgerMenuDrawer, N as NotificationButton, F as FooterLayout } from "./FooterLayout-DOY91SPS.js";
import { StickyContainer, Sticky } from "react-sticky";
import { Descriptions, Space, Button, Select, Flex, Typography, Modal } from "antd";
import { LeftOutlined, RightOutlined, EditOutlined, DeleteOutlined, ExclamationCircleFilled } from "@ant-design/icons";
const { Link: TextLink } = Typography;
const { confirm } = Modal;
const PageDrawer = ({ list, defaultChapter, bookId, title }) => {
  var _a, _b, _c;
  const { get, delete: deleteMethod } = useForm();
  const { isUser } = usePermission();
  const defaultSlug = (_b = (_a = list.filter((item) => item.book_id === bookId && item.chapter === defaultChapter)) == null ? void 0 : _a[0]) == null ? void 0 : _b.slug;
  const gotoLink = (slug) => {
    get(route("chapters.show", slug));
  };
  const pageLink = (chapter2) => {
    var _a2;
    const chapterData = (_a2 = list.filter((item) => item.book_id === bookId && item.chapter === chapter2)) == null ? void 0 : _a2[0];
    if (chapterData) {
      gotoLink(chapterData.slug);
    }
  };
  const options = list.map((item) => ({
    label: `Chapter ${item.chapter} : ${item.title}`,
    value: item.slug,
    disabled: item.chapter === defaultChapter
  }));
  const chapter = ((_c = list.filter((item) => item.chapter === defaultChapter)) == null ? void 0 : _c[0]) || {};
  const maxChapter = Math.max(...list.map((item) => item.chapter));
  const isPrevButton = defaultChapter - 1 <= 0;
  const isNextButton = defaultChapter + 1 > maxChapter;
  const showDeleteConfirm = () => {
    confirm({
      title: "Delete Chapter",
      icon: /* @__PURE__ */ jsx(ExclamationCircleFilled, {}),
      content: "คุณต้องการลบ Chapter นี้หรือไม่?",
      okText: "Yes",
      okType: "danger",
      okButtonProps: {
        type: "primary"
      },
      cancelText: "No",
      onOk() {
        deleteMethod(route("chapters.destroy", chapter.id));
      },
      onCancel() {
      }
    });
  };
  const items = [
    {
      key: 1,
      label: "Title",
      children: /* @__PURE__ */ jsx(Link, { href: route("books.show", bookId), children: /* @__PURE__ */ jsx(TextLink, { children: title }) })
    },
    {
      key: 1,
      label: `Chapter ${chapter.chapter}`,
      children: chapter.title
    }
  ];
  return /* @__PURE__ */ jsx(HamburgerMenuDrawer, { title: "Page Menu", children: /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
    /* @__PURE__ */ jsx(
      Descriptions,
      {
        column: 1,
        items,
        size: "small"
      }
    ),
    /* @__PURE__ */ jsxs(Space.Compact, { className: "m-4", children: [
      /* @__PURE__ */ jsx(
        Button,
        {
          disabled: isPrevButton,
          onClick: () => pageLink(defaultChapter - 1),
          icon: /* @__PURE__ */ jsx(LeftOutlined, {}),
          type: "primary",
          size: "large"
        }
      ),
      /* @__PURE__ */ jsx(
        Select,
        {
          defaultValue: defaultSlug,
          style: {
            width: `240px`
          },
          options,
          onChange: gotoLink,
          size: "large"
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          disabled: isNextButton,
          onClick: () => pageLink(defaultChapter + 1),
          icon: /* @__PURE__ */ jsx(RightOutlined, {}),
          iconPosition: "end",
          type: "primary",
          size: "large"
        }
      )
    ] }),
    isUser(chapter.user_id) ? /* @__PURE__ */ jsxs(Flex, { justify: "center", wrap: true, gap: "small", children: [
      /* @__PURE__ */ jsx(Link, { href: route("chapters.edit", chapter.slug), children: /* @__PURE__ */ jsx(Button, { size: "large", type: "primary", icon: /* @__PURE__ */ jsx(EditOutlined, {}), children: "Edit" }) }),
      /* @__PURE__ */ jsx(Button, { size: "large", onClick: showDeleteConfirm, type: "primary", danger: true, icon: /* @__PURE__ */ jsx(DeleteOutlined, {}), children: "Delete" })
    ] }) : null
  ] }) });
};
const PageDrawer$1 = PageDrawer;
function MangaLayout({
  user,
  list,
  defaultChapter,
  bookId,
  children,
  title
}) {
  const { isAuth } = usePermission();
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-gray-100 dark:bg-gray-900", children: /* @__PURE__ */ jsxs(StickyContainer, { children: [
    /* @__PURE__ */ jsx(Sticky, { topOffset: 80, children: ({ style }) => /* @__PURE__ */ jsx(
      "nav",
      {
        style,
        className: "bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 z-10",
        children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between h-16", children: [
          /* @__PURE__ */ jsx("div", { className: "flex", children: /* @__PURE__ */ jsx("div", { className: "shrink-0 flex items-center", children: /* @__PURE__ */ jsx(Link, { href: "/", children: /* @__PURE__ */ jsx(ApplicationLogo, { size: 36, className: "block h-9 w-auto fill-current text-gray-800 dark:text-gray-200" }) }) }) }),
          /* @__PURE__ */ jsx("div", { className: "hidden sm:flex sm:items-center space-x-2 sm:-my-px sm:ms-6", children: !isAuth ? /* @__PURE__ */ jsx(
            PageDrawer$1,
            {
              list,
              bookId,
              defaultChapter,
              title
            }
          ) : /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(
              PageDrawer$1,
              {
                list,
                bookId,
                defaultChapter,
                title
              }
            ),
            /* @__PURE__ */ jsx(NotificationButton, {})
          ] }) }),
          /* @__PURE__ */ jsxs(Flex, { gap: "small", className: "items-center sm:hidden", children: [
            /* @__PURE__ */ jsx(
              PageDrawer$1,
              {
                list,
                bookId,
                defaultChapter,
                title
              }
            ),
            /* @__PURE__ */ jsx(NotificationButton, {})
          ] })
        ] }) })
      }
    ) }),
    /* @__PURE__ */ jsx("main", { className: "min-h-screen", children }),
    /* @__PURE__ */ jsx(FooterLayout, {})
  ] }) });
}
export {
  MangaLayout as M
};
