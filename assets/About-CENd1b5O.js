import { jsxs, jsx } from "react/jsx-runtime";
import { B as BannerAdvertising } from "./BannerAdvertising-BVHjhyzk.js";
import { C as Card } from "./Card-Dj6_F9pc.js";
import { S as SeoHead } from "./SeoHead-DmWXeTpm.js";
import { d as defaultMeta } from "./seo-B2m5Eufc.js";
import { A as Authenticated } from "./AuthenticatedLayout-B4iinvfv.js";
import { Typography } from "antd";
import "./image-oSgtrKRL.js";
import "./laravelBlade-DwBdVrdx.js";
import "react-image-fallback";
import "@radix-ui/react-aspect-ratio";
import "./math-rflY_aJU.js";
import "axios";
import "react";
import "@inertiajs/react";
import "./ApplicationLogo-D5u203cs.js";
import "./FooterLayout-BaEYPs1Z.js";
import "@ant-design/icons";
import "../ssr.js";
import "react-dom/server";
import "@inertiajs/react/server";
import "react-redux";
import "@reduxjs/toolkit";
import "@reduxjs/toolkit/query";
import "@ant-design/cssinjs";
import "react-use";
import "dayjs";
import "dayjs/plugin/relativeTime.js";
import "@radix-ui/react-toast";
import "class-variance-authority";
import "lucide-react";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
const { Text, Title } = Typography;
function AboutPage(props) {
  const meta = {
    ...defaultMeta,
    title: `About Us - Affixbook.net | ${defaultMeta.title}`,
    canonical: route("home")
  };
  return /* @__PURE__ */ jsxs(Authenticated, { children: [
    /* @__PURE__ */ jsx(SeoHead, { meta }),
    /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx(BannerAdvertising, { children: /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsx(Title, { level: 3, children: "About Us" }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Text, { children: "Affixbook คือ Online Platform สำหรับผู้ที่ต้องการเผยแพร่ & เยี่ยมชมผลงาน" }) }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Text, { children: "ทางเว็บไซต์เปิดให้บริการตั้งแค่ปี 2024 จนถึงปัจจุบัน" }) }),
      /* @__PURE__ */ jsxs(Card, { className: "bg-secondary my-4", children: [
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Text, { children: "เราเชื่อว่า คนที่อ่านการ์ตูน นิยายทุกคน คือเพื่อนกัน เราเติบโตด้วยการเรียนรู้ผ่านตัวละครในเรื่อง ก่อเกิดความคิดสร้างสรรค์จากเนื้อเรื่อง และงานศิลปะจากจากผลงานต่างๆ" }) }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Text, { children: "เว็บไซต์แห่งนี้เป็นเหมือนห้องสมุดที่เก็บรวบรวมเรื่องราวเหล่านั้น แบะรอคอยที่จะบอกเล่าแก่ใครสักคนหนึ่งที่เดินเข้ามา" }) }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Text, { className: "font-bold", children: "Affix Administrator" }) })
      ] })
    ] }) }) }) })
  ] });
}
export {
  AboutPage as default
};
