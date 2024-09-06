import { jsx, jsxs } from "react/jsx-runtime";
import { Image, Button, Divider, Typography } from "antd";
import { b as defaultMangaPageUrl } from "./ApplicationLogo-Bn7DjPlp.js";
import { DeleteOutlined } from "@ant-design/icons";
import { css } from "@emotion/css";
import axios from "axios";
import { useState } from "react";
import { Transforms } from "slate";
import { useSlateStatic, ReactEditor } from "slate-react";
const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = /* @__PURE__ */ jsx("strong", { children });
  }
  if (leaf.code) {
    children = /* @__PURE__ */ jsx("code", { children });
  }
  if (leaf.italic) {
    children = /* @__PURE__ */ jsx("em", { children });
  }
  if (leaf.underline) {
    children = /* @__PURE__ */ jsx("u", { children });
  }
  return /* @__PURE__ */ jsx("span", { ...attributes, children });
};
const SlateImage = ({ attributes, children, element, readOnly }) => {
  const editor = useSlateStatic();
  const [isLoading, setIsLoading] = useState(false);
  const path = ReactEditor.findPath(editor, element);
  const style = { textAlign: element.align };
  const handleRemoveImage = async () => {
    var _a, _b;
    const { url } = element;
    const storageUrl = (_a = url.split("storage")) == null ? void 0 : _a[1].slice(1);
    try {
      setIsLoading(true);
      const res = await axios({
        method: "DELETE",
        url: route("api.upload.destroy"),
        data: {
          url: storageUrl
        }
      });
      if (((_b = res.data) == null ? void 0 : _b.data) === "OK") {
        Transforms.removeNodes(editor, { at: path });
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };
  return /* @__PURE__ */ jsxs("div", { style, ...attributes, children: [
    children,
    readOnly ? /* @__PURE__ */ jsx(
      Image,
      {
        src: element.url,
        preview: false,
        fallback: defaultMangaPageUrl
      }
    ) : /* @__PURE__ */ jsxs(
      "div",
      {
        contentEditable: false,
        className: css`
                position: relative;
                width: 100%;
            `,
        children: [
          /* @__PURE__ */ jsx(
            Image,
            {
              src: element.url,
              preview: false,
              fallback: defaultMangaPageUrl,
              loading: "lazy"
            }
          ),
          /* @__PURE__ */ jsx(
            Button,
            {
              danger: true,
              type: "primary",
              shape: "circle",
              icon: /* @__PURE__ */ jsx(DeleteOutlined, {}),
              onClick: handleRemoveImage,
              loading: isLoading,
              className: css`
                    display: inline;
                    position: absolute;
                    top: 0.5em;
                    left: 0.5em;
                    background-color: white;
                `
            }
          )
        ]
      }
    )
  ] });
};
const { Title } = Typography;
const Element = (props) => {
  const { attributes, children, element } = props;
  const style = { textAlign: element.align };
  switch (element.type) {
    case "block-code":
      return /* @__PURE__ */ jsx("blockquote", { className: "chat-message", style, ...attributes, children });
    case "block-quote":
      return /* @__PURE__ */ jsx("blockquote", { className: "speech-bubble", style, ...attributes, children });
    case "divider":
      return /* @__PURE__ */ jsx(Divider, { style, ...attributes, children });
    case "bulleted-list":
      return /* @__PURE__ */ jsx("ul", { style, ...attributes, children });
    case "heading-one":
      return /* @__PURE__ */ jsx(Title, { level: 1, style, ...attributes, children });
    case "heading-two":
      return /* @__PURE__ */ jsx(Title, { level: 2, style, ...attributes, children });
    case "list-item":
      return /* @__PURE__ */ jsx("li", { style, ...attributes, children });
    case "numbered-list":
      return /* @__PURE__ */ jsx("ol", { style, ...attributes, children });
    case "image":
      return /* @__PURE__ */ jsx(SlateImage, { ...props });
    default:
      return /* @__PURE__ */ jsx("p", { style, ...attributes, children });
  }
};
const fixValue = (value) => value.map((item, key) => ({
  ...item,
  children: ((item == null ? void 0 : item.children) || []).map((i) => ({ ...i, text: i.text || " " }))
}));
const markAbleCenter = (type) => (textOptions) => {
  return {
    type,
    children: [
      textOptions
    ],
    align: "center"
  };
};
const paragraphCenter = markAbleCenter("paragraph");
const headingTwoCenter = markAbleCenter("heading-two");
const divider = markAbleCenter("divider")({ text: "o" });
export {
  Element as E,
  Leaf as L,
  divider as d,
  fixValue as f,
  headingTwoCenter as h,
  paragraphCenter as p
};
