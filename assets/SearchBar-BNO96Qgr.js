import { jsx, jsxs } from "react/jsx-runtime";
import { SearchOutlined, ArrowRightOutlined, HeartFilled } from "@ant-design/icons";
import { useForm, Link } from "@inertiajs/react";
import { AutoComplete, Input, Space, Flex, Image, Tag, Typography } from "antd";
import { useCallback, useState, useMemo } from "react";
import { l as getSearch } from "../ssr.js";
import { a as useAppSelector, b as useAppDispatch } from "./FooterLayout-BaEYPs1Z.js";
import { useDebounce } from "react-use";
import { a as asset, d as defaultBookCoverUrl } from "./laravelBlade-DwBdVrdx.js";
const useSearch = () => {
  const data = useAppSelector((state) => state.searchReducer.data);
  const isFetch = useAppSelector((state) => state.searchReducer.isFetch);
  const isLoading = useAppSelector((state) => state.searchReducer.isLoading);
  const error = useAppSelector((state) => state.searchReducer.error);
  const dispatch = useAppDispatch();
  const refetch = useCallback(async (props) => {
    const action = await dispatch(getSearch(props));
    return action;
  }, []);
  return {
    data,
    isFetch,
    isLoading,
    error,
    refetch
  };
};
const { Text } = Typography;
const Title = (props) => /* @__PURE__ */ jsxs(Flex, { align: "center", justify: "space-between", children: [
  props.title,
  /* @__PURE__ */ jsx(Link, { href: route("search", props.keyword || ""), children: /* @__PURE__ */ jsx(ArrowRightOutlined, {}) })
] });
const renderItem = (book) => ({
  value: book.title,
  label: /* @__PURE__ */ jsx(Link, { href: route("search", book.title || ""), children: /* @__PURE__ */ jsxs(Flex, { className: "p-2 mr-6", style: { borderRadius: 5 }, children: [
    /* @__PURE__ */ jsx("div", { style: { width: 60 }, children: /* @__PURE__ */ jsx(
      Image,
      {
        src: asset(`storage/${book.img_url}`),
        preview: false,
        fallback: defaultBookCoverUrl,
        style: { width: 60, borderRadius: 5 },
        className: "justify-start"
      }
    ) }),
    /* @__PURE__ */ jsxs(Flex, { className: "py-1 px-4", wrap: true, children: [
      /* @__PURE__ */ jsx(Text, { style: { width: 300 }, ellipsis: true, className: "font-bold", children: book.title }),
      book.active_followings_count ? /* @__PURE__ */ jsx(Tag, { style: { height: 22 }, icon: /* @__PURE__ */ jsx(HeartFilled, {}), color: "error", children: book.active_followings_count || "" }) : null,
      /* @__PURE__ */ jsx(Tag, { style: { height: 22 }, color: "success", children: "Published" })
    ] })
  ] }) })
});
const defaultProps = {
  size: "middle",
  defaultValue: ""
};
const SearchBar = (props) => {
  const propsWithDefault = {
    ...defaultProps,
    ...props
  };
  const { size, defaultValue, isMenu } = propsWithDefault;
  const [keyword, setKeyword] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");
  useDebounce(
    () => {
      if (keyword) {
        refetch({ keyword });
      }
      setDebouncedValue(keyword);
    },
    1e3,
    [keyword]
  );
  useForm();
  const { isLoading, refetch, data } = useSearch();
  const onChange = ({ currentTarget }) => {
    setKeyword((currentTarget == null ? void 0 : currentTarget.value) || "");
  };
  const mangas = (data == null ? void 0 : data.Manga) || [];
  const novels = (data == null ? void 0 : data.Novel) || [];
  const mangaList = mangas.length ? [
    {
      label: /* @__PURE__ */ jsx(Title, { title: "Manga List", keyword: debouncedValue }),
      options: mangas.map((book) => renderItem(book))
    }
  ] : [];
  const novelList = novels.length ? [
    {
      label: /* @__PURE__ */ jsx(Title, { title: "Novel List", keyword: debouncedValue }),
      options: novels.map((book) => renderItem(book))
    }
  ] : [];
  const options = useMemo(() => {
    return debouncedValue ? [
      ...mangaList,
      ...novelList
    ] : [];
  }, [mangas, novels, debouncedValue]);
  return /* @__PURE__ */ jsx("div", { className: "my-auto", children: isMenu ? /* @__PURE__ */ jsx(
    AutoComplete,
    {
      popupClassName: "certain-category-search-dropdown",
      popupMatchSelectWidth: 480,
      style: { width: 240 },
      options,
      size: "large",
      children: /* @__PURE__ */ jsx(
        Input,
        {
          placeholder: "Search",
          allowClear: true,
          prefix: /* @__PURE__ */ jsx(SearchOutlined, {}),
          size,
          variant: "filled",
          onChange
        }
      )
    }
  ) : /* @__PURE__ */ jsx(Space.Compact, { children: /* @__PURE__ */ jsx(
    Input,
    {
      placeholder: "Search",
      allowClear: true,
      prefix: /* @__PURE__ */ jsx(SearchOutlined, {}),
      size,
      variant: "filled",
      onChange,
      defaultValue
    }
  ) }) });
};
const SearchBar$1 = SearchBar;
export {
  SearchBar$1 as S,
  useSearch as u
};
