import { jsx } from "react/jsx-runtime";
import { Flex } from "antd";
const getMeta = (metaName) => {
  const metas = document.getElementsByTagName("meta");
  for (let i = 0; i < metas.length; i++) {
    if (metas[i].getAttribute("name") === metaName) {
      return metas[i].getAttribute("content");
    }
  }
  return "";
};
const asset = (filename) => {
  return getMeta("asset") + filename;
};
const strRandom = (length) => {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
};
const defaultBookCoverUrl = asset(`images/default_cover_book.webp`);
const defaultMangaPageUrl = asset(`images/default_manga_page.webp`);
const defaultUserProfileCoverUrl = asset(`images/default_user_profile_cover.webp`);
const defaultImagePlaceholderUrl = asset(`images/placeholder.svg`);
const ApplicationLogo = (props) => {
  return /* @__PURE__ */ jsx(Flex, { align: "center", wrap: true, gap: "samll", children: /* @__PURE__ */ jsx("img", { src: asset(`/images/logo/affix_book_${props.size}px.png`) }) });
};
const ApplicationLogo$1 = ApplicationLogo;
export {
  ApplicationLogo$1 as A,
  asset as a,
  defaultMangaPageUrl as b,
  defaultImagePlaceholderUrl as c,
  defaultBookCoverUrl as d,
  defaultUserProfileCoverUrl as e,
  getMeta as g,
  strRandom as s
};
