import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { I as Image } from "./image-iMv3VhFF.js";
import { a as asset } from "./ApplicationLogo-C5KpUhqt.js";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { r as randomInArray } from "./math-rflY_aJU.js";
import axios from "axios";
import { useState, useEffect } from "react";
const BannerDisplay = ({ banner }) => {
  const imgUrl = (banner.img_url || "").includes("http") ? banner.img_url : asset(`storage/${banner.img_url}`);
  return /* @__PURE__ */ jsx("div", { className: "card overflow-hidden rounded-lg shadow-md transition-shadow hover:shadow-lg", children: /* @__PURE__ */ jsx(AspectRatio, { ratio: 1 / 1, children: /* @__PURE__ */ jsx("a", { href: banner.target_link_url, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx(
    Image,
    {
      src: imgUrl,
      alt: banner.title,
      className: "object-cover w-full h-full"
    }
  ) }) }) });
};
const defaultProps = {
  list: [],
  md: 3,
  sm: 2
};
const BannerList = (props) => {
  const { list, md, sm } = {
    ...defaultProps,
    ...props
  };
  const gridDesktop = `xl:flex xl:flex-col lg:flex lg:flex-col md:flex md:flex-col`;
  const gridMobile = `md:grid sm:grid md:grid-cols-${md} md:grid-cols-${md} sm:grid-cols-${sm} sm:grid-cols-${sm}`;
  return list.length ? /* @__PURE__ */ jsx("div", { className: `${gridMobile} ${gridDesktop} gap-4`, children: list.map((banner) => /* @__PURE__ */ jsx(BannerDisplay, { banner }, banner.id)) }) : null;
};
const useBannerList = ({ count }) => {
  const [bannerList, setBannerList] = useState([]);
  useEffect(() => {
    refetch(count);
  }, []);
  const refetch = async (count2) => {
    try {
      const res = await axios({
        method: "get",
        url: route("api.banners.random"),
        params: {
          count: count2 || 1
        }
      });
      const responseData = (res.data.data || []).map((item) => {
        const arrLinks = Object.keys(item.target_links).map((key) => item.target_links[key]);
        const randomTargetLinkUrl = randomInArray(arrLinks);
        return {
          ...item,
          target_link_url: randomTargetLinkUrl
        };
      });
      setBannerList(responseData);
    } catch (error) {
      console.error(error);
    }
  };
  return {
    bannerList,
    refetch
  };
};
const BannerAdvertising = ({ children }) => {
  const { bannerList } = useBannerList({ count: 2 });
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap lg:flex-nowrap flex-row-reverse gap-4", children: [
    /* @__PURE__ */ jsx("div", { className: "flex flex-col flex-none lg:w-64 w-full", children: /* @__PURE__ */ jsx(BannerList, { list: bannerList }) }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-col flex-auto w-full", children })
  ] }) });
};
const BannerAdvertising$1 = BannerAdvertising;
export {
  BannerAdvertising$1 as B
};
