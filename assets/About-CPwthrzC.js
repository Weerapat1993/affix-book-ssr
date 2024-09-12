import { jsx, jsxs } from "react/jsx-runtime";
import { C as Card } from "./Card-Dj6_F9pc.js";
import { Adsense } from "@ctrl/react-adsense";
import { S as SeoHead } from "./SeoHead-BEko9LA3.js";
import { d as defaultMeta } from "./seo-B2m5Eufc.js";
import { A as Authenticated } from "./AuthenticatedLayout-xi7jErZC.js";
import { a as asset } from "./ApplicationLogo-Bn7DjPlp.js";
import { Row, Col, Typography } from "antd";
import "@inertiajs/react";
import "react";
import "./FooterLayout-fQGOwEQH.js";
import "@ant-design/icons";
import "../ssr.js";
import "react-dom/server";
import "@inertiajs/react/server";
import "react-redux";
import "@reduxjs/toolkit";
import "@reduxjs/toolkit/query";
import "axios";
import "@ant-design/cssinjs";
import "react-use";
import "dayjs";
import "dayjs/plugin/relativeTime.js";
const googleAdsClient = "ca-pub-6981684740939123";
const AdsenseComponent = ({ slot }) => {
  return /* @__PURE__ */ jsx(
    Adsense,
    {
      className: "adsbygoogle",
      client: googleAdsClient,
      slot,
      style: { display: "block" },
      format: "auto",
      responsive: "true"
    }
  );
};
const AdsenseComponent$1 = AdsenseComponent;
const { Text, Title, Paragraph } = Typography;
function AboutPage(props) {
  const meta = {
    ...defaultMeta,
    title: `About Us - Affixbook.net | ${defaultMeta.title}`,
    canonical: asset(route("home"))
  };
  return /* @__PURE__ */ jsxs(Authenticated, { children: [
    /* @__PURE__ */ jsx(SeoHead, { meta }),
    /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs(Row, { children: [
      /* @__PURE__ */ jsxs(Col, { md: 18, sm: 24, children: [
        /* @__PURE__ */ jsx(Title, { level: 3, children: "About Us" }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Text, { children: "Affixbook คือ Online Platform สำหรับผู้ที่ต้องการเผยแพร่ & เยี่ยมชมผลงาน" }) }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Text, { children: "ทางเว็บไซต์เปิดให้บริการตั้งแค่ปี 2024 จนถึงปัจจุบัน" }) }),
        /* @__PURE__ */ jsxs(Card, { className: "my-4", children: [
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Text, { children: "เราเชื่อว่า คนที่อ่านการ์ตูน นิยายทุกคน คือเพื่อนกัน เราเติบโตด้วยการเรียนรู้ผ่านตัวละครในเรื่อง ก่อเกิดความคิดสร้างสรรค์จากเนื้อเรื่อง และงานศิลปะจากจากผลงานต่างๆ" }) }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Text, { children: "เว็บไซต์แห่งนี้เป็นเหมือนห้องสมุดที่เก็บรวบรวมเรื่องราวเหล่านั้น แบะรอคอยที่จะบอกเล่าแก่ใครสักคนหนึ่งที่เดินเข้ามา" }) }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Text, { className: "font-bold", children: "Affix Administrator" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx(Col, { className: "py-4", md: 6, sm: 24, children: /* @__PURE__ */ jsx(AdsenseComponent$1, { slot: "4777439794" }) })
    ] }) }) })
  ] });
}
export {
  AboutPage as default
};
