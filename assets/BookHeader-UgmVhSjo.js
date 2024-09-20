import { jsx, jsxs } from "react/jsx-runtime";
import { FacebookShare, TwitterShare } from "react-share-kit";
import { useEffect, useState } from "react";
import { a as asset, d as defaultBookCoverUrl } from "./laravelBlade-DwBdVrdx.js";
import { Button, Flex, Tag, Row, Col, Image, Descriptions, Space, Typography, Modal } from "antd";
import { useForm, Link } from "@inertiajs/react";
import { HeartFilled, HeartOutlined, EditOutlined, DeleteOutlined, ExclamationCircleFilled } from "@ant-design/icons";
import { b as getBookFollowing, c as clickFollowing } from "../ssr.js";
import { a as useAppSelector, b as useAppDispatch, u as usePermission } from "./FooterLayout-BaEYPs1Z.js";
const useFavoriteButton = ({ bookId, onFollow }) => {
  const isLoading = useAppSelector((state) => {
    var _a, _b;
    return (_b = (_a = state.bookFollowingReducer.keys) == null ? void 0 : _a[bookId]) == null ? void 0 : _b.isLoading;
  });
  const isFetch = useAppSelector((state) => {
    var _a, _b;
    return (_b = (_a = state.bookFollowingReducer.keys) == null ? void 0 : _a[bookId]) == null ? void 0 : _b.isFetch;
  });
  const data = useAppSelector((state) => {
    var _a, _b;
    return (_b = (_a = state.bookFollowingReducer.keys) == null ? void 0 : _a[bookId]) == null ? void 0 : _b.data;
  });
  const error = useAppSelector((state) => {
    var _a, _b;
    return (_b = (_a = state.bookFollowingReducer.keys) == null ? void 0 : _a[bookId]) == null ? void 0 : _b.error;
  });
  const dispatch = useAppDispatch();
  const isFollowing = Boolean(data == null ? void 0 : data.is_following) || false;
  useEffect(() => {
    if (!isFetch) {
      refetch({ bookId });
    }
  }, [bookId]);
  useEffect(() => {
    const num = isFollowing ? 1 : 0;
    if (isFetch && onFollow) {
      onFollow(num);
    }
  }, [isFollowing]);
  const refetch = async (props) => {
    const action = await dispatch(getBookFollowing(props));
    return action;
  };
  const onClickFollowing = (props) => {
    dispatch(clickFollowing(props));
  };
  return {
    isLoading,
    isFetch,
    isFollowing,
    data,
    error,
    onClickFollowing,
    refetch
  };
};
const FavoriteButton = (props) => {
  const { bookId, onFollow, followCount } = props;
  const { isFollowing, onClickFollowing, isFetch } = useFavoriteButton({ bookId, onFollow });
  return isFetch ? /* @__PURE__ */ jsx(
    Button,
    {
      type: isFollowing ? "primary" : "default",
      shape: "round",
      icon: isFollowing ? /* @__PURE__ */ jsx(HeartFilled, {}) : /* @__PURE__ */ jsx(HeartOutlined, {}),
      danger: true,
      onClick: () => onClickFollowing({ bookId }),
      className: !isFollowing ? "bg-transparent" : "hover:bg-transparent",
      children: followCount || null
    }
  ) : null;
};
const { Text } = Typography;
const { confirm } = Modal;
const BookHeader = ({ book, isSuggest }) => {
  var _a, _b;
  const { isUser, isRole, isAuth } = usePermission();
  const { delete: deleteMethod } = useForm();
  const showDeleteConfirm = () => {
    confirm({
      title: "Delete Book",
      icon: /* @__PURE__ */ jsx(ExclamationCircleFilled, {}),
      content: "Are you sure delete this book?",
      okText: "Yes",
      okType: "danger",
      okButtonProps: {
        type: "primary"
      },
      cancelText: "No",
      onOk() {
        deleteMethod(route("books.destroy", book.id));
      },
      onCancel() {
      }
    });
  };
  const [activeFollow, setActiveFollow] = useState(0);
  const statusTagColor = book.status === "Published" ? "success" : "warning";
  const followCount = ((book == null ? void 0 : book.active_followings_count) || 0) + activeFollow;
  const descItems = [
    {
      key: 3,
      label: "Description",
      children: /* @__PURE__ */ jsx("pre", { children: /* @__PURE__ */ jsx(Text, { className: "text-wrap", children: book.synopsis }) })
    }
  ];
  const tagItems = [
    {
      key: 3,
      label: "Tags",
      children: /* @__PURE__ */ jsx(Flex, { gap: "small", wrap: true, children: book.categories.map((item) => /* @__PURE__ */ jsx(Tag, { children: item.name }, item.id)) })
    }
  ];
  const items = [
    {
      key: 1,
      label: "Author",
      children: /* @__PURE__ */ jsx(Link, { href: route("writer.mention", ((_a = book == null ? void 0 : book.user) == null ? void 0 : _a.mention) || ""), children: /* @__PURE__ */ jsx(Text, { children: ((_b = book == null ? void 0 : book.user) == null ? void 0 : _b.name) || "" }) })
    },
    {
      key: 2,
      label: "Status",
      children: /* @__PURE__ */ jsx(Tag, { color: statusTagColor, children: book.status })
    }
  ];
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(Row, { gutter: [16, 16], children: [
    /* @__PURE__ */ jsx(Col, { md: 6, sm: 24, className: "text-center mx-auto", children: /* @__PURE__ */ jsx(
      Image,
      {
        preview: false,
        alt: book.title,
        src: asset(`storage/${book.img_url}`),
        fallback: defaultBookCoverUrl,
        style: { borderRadius: 10 }
      }
    ) }),
    /* @__PURE__ */ jsxs(Col, { md: 18, sm: 24, children: [
      /* @__PURE__ */ jsxs(Flex, { vertical: true, gap: "small", children: [
        /* @__PURE__ */ jsx(
          Descriptions,
          {
            column: 1,
            title: book.title,
            extra: isUser(book.user_id) && !isSuggest ? /* @__PURE__ */ jsxs(Space.Compact, { children: [
              /* @__PURE__ */ jsx(Link, { href: route("books.edit", book.id), children: /* @__PURE__ */ jsx(Button, { type: "primary", shape: "round", icon: /* @__PURE__ */ jsx(EditOutlined, {}) }) }),
              /* @__PURE__ */ jsx(Button, { shape: "round", onClick: showDeleteConfirm, type: "primary", danger: true, icon: /* @__PURE__ */ jsx(DeleteOutlined, {}) })
            ] }) : null,
            items
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "hidden sm:block", children: /* @__PURE__ */ jsx(
          Descriptions,
          {
            column: 1,
            size: "small",
            items: descItems
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "sm:hidden block", children: /* @__PURE__ */ jsx(
          Descriptions,
          {
            column: 1,
            size: "small",
            layout: "vertical",
            items: descItems
          }
        ) }),
        /* @__PURE__ */ jsx(
          Descriptions,
          {
            column: 1,
            items: tagItems
          }
        )
      ] }),
      /* @__PURE__ */ jsxs(Row, { className: "my-4", children: [
        /* @__PURE__ */ jsx(Col, { flex: 1, children: isAuth && !isSuggest ? /* @__PURE__ */ jsx(FavoriteButton, { followCount, bookId: book.id, onFollow: setActiveFollow }) : null }),
        /* @__PURE__ */ jsx(Col, { flex: 1, children: /* @__PURE__ */ jsxs(Flex, { className: "w-full justify-end", wrap: true, gap: "small", children: [
          /* @__PURE__ */ jsx(
            FacebookShare,
            {
              url: route("books.show", book.id),
              quote: book.title,
              hashtag: "#affixbook",
              size: 32,
              round: true
            }
          ),
          /* @__PURE__ */ jsx(
            TwitterShare,
            {
              url: route("books.show", book.id),
              title: `${book.title} ตอนใหม่มาแล้ว !!!`,
              size: 32,
              round: true
            }
          )
        ] }) })
      ] })
    ] })
  ] }) });
};
const BookHeader$1 = BookHeader;
export {
  BookHeader$1 as B
};
