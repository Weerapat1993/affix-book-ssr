import { jsx, jsxs } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-DBF1SR-y.js";
import { useForm, Head } from "@inertiajs/react";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-D4b28bdR.js";
import { I as InertiaPagination } from "./InertiaPagiantion-BG9nMLzx.js";
import { L as Loading, T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell, S as Switch, A as AlertMessage } from "./switch-DsLdrmTc.js";
import { I as Image } from "./image-oSgtrKRL.js";
import { B as Button } from "./button-DgqKUl9p.js";
import { Link2Icon, LucideLoaderCircle, Trash2Icon } from "lucide-react";
import { a as getBannerList, u as updateBannerById, r as removeBannerById } from "../ssr.js";
import { a as useAppSelector, b as useAppDispatch } from "./LayoutBreadcrumb-DJY5I72l.js";
import axios from "axios";
import { useState, useEffect } from "react";
import { a as asset } from "./laravelBlade-DwBdVrdx.js";
import "./ApplicationLogo-D5u203cs.js";
import "antd";
import "@ant-design/icons";
import "@radix-ui/react-toast";
import "class-variance-authority";
import "react-use";
import "@radix-ui/react-alert-dialog";
import "@radix-ui/react-switch";
import "react-image-fallback";
import "@radix-ui/react-slot";
import "react-dom/server";
import "@inertiajs/react/server";
import "react-redux";
import "@reduxjs/toolkit";
import "@reduxjs/toolkit/query";
import "@ant-design/cssinjs";
import "dayjs";
import "dayjs/plugin/relativeTime.js";
import "clsx";
import "tailwind-merge";
const useBannerTable = (banners) => {
  const keys = useAppSelector((state) => state.bannerReducer.keys);
  const listIds = useAppSelector((state) => state.bannerReducer.listIds);
  const dispatch = useAppDispatch();
  const { delete: deleteMethod } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    getBanners(banners);
  }, []);
  const handleDelete = (id) => {
    deleteMethod(route("admin.banners.destroy", id), {
      onStart: () => setIsLoading(true),
      onSuccess: () => removeBanner(id),
      onFinish: () => setIsLoading(false)
    });
  };
  const handleChangeStatus = async (banner, bool) => {
    var _a;
    const status = bool ? "Published" : "Draft";
    try {
      const res = await axios({
        method: "patch",
        url: route("admin.banners.update.status", banner.id),
        data: {
          status
        }
      });
      const dataResponse = (_a = res.data) == null ? void 0 : _a.data;
      dispatch(updateBannerById(dataResponse));
    } catch (e) {
      console.error(e);
    }
  };
  const getBanners = (banners2) => {
    dispatch(getBannerList(banners2));
  };
  const removeBanner = (id) => {
    dispatch(removeBannerById(id));
  };
  const list = listIds.map((key) => keys[key]);
  return {
    list,
    isLoading,
    handleChangeStatus,
    handleDelete
  };
};
const BannerTable = (props) => {
  const { list: bannerList } = props;
  const { isLoading, list, handleChangeStatus, handleDelete } = useBannerTable(bannerList);
  return /* @__PURE__ */ jsx(Loading, { isLoading, children: /* @__PURE__ */ jsxs(Table, { children: [
    /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
      /* @__PURE__ */ jsx(TableHead, { className: "w-[60px]", children: "ID" }),
      /* @__PURE__ */ jsx(TableHead, { className: "w-[80px]", children: "Image" }),
      /* @__PURE__ */ jsx(TableHead, { children: "Ttile" }),
      /* @__PURE__ */ jsx(TableHead, { className: "w-[120px]", children: "Links" }),
      /* @__PURE__ */ jsx(TableHead, { className: "w-[60px]", children: "Publish" }),
      /* @__PURE__ */ jsx(TableHead, { className: "w-[120px]", children: "Actions" })
    ] }) }),
    /* @__PURE__ */ jsx(TableBody, { children: list.map((banner) => {
      const imgUrl = (banner.img_url || "").includes("http") ? banner.img_url : asset(`storage/${banner.img_url}`);
      const links = Object.keys(banner.target_links).map((key) => banner.target_links[key]);
      return /* @__PURE__ */ jsxs(TableRow, { children: [
        /* @__PURE__ */ jsx(TableCell, { children: banner.id }),
        /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx(Image, { className: "object-cover", src: imgUrl, alt: banner.name, width: 60, height: 60 }) }),
        /* @__PURE__ */ jsx(TableCell, { children: banner.title }),
        /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: links.map((url, key) => /* @__PURE__ */ jsx("a", { href: url, children: /* @__PURE__ */ jsx(Button, { variant: "outline", size: "icon", children: /* @__PURE__ */ jsx(Link2Icon, { className: "w-4 h-4" }) }) }, key)) }) }),
        /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx(
          Switch,
          {
            checked: banner.status === "Published",
            onCheckedChange: (bool) => handleChangeStatus(banner, bool)
          }
        ) }),
        /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: /* @__PURE__ */ jsx(
          AlertMessage,
          {
            loading: isLoading,
            title: "Delete Banner",
            description: "Are you sure you want to delete this banner?",
            customOkButton: /* @__PURE__ */ jsxs(Button, { variant: "destructive", onClick: () => handleDelete(banner.id), children: [
              isLoading ? /* @__PURE__ */ jsx(LucideLoaderCircle, { className: "h-4 w-4 mr-2 animate-spin" }) : /* @__PURE__ */ jsx(Trash2Icon, { className: "h-4 w-4 mr-2" }),
              "Delete"
            ] }),
            renderButton: () => /* @__PURE__ */ jsx(Button, { size: "sm", variant: "destructive", children: /* @__PURE__ */ jsx(Trash2Icon, { className: "h-4 w-4" }) })
          }
        ) }) })
      ] }, banner.id);
    }) })
  ] }) });
};
const BannerTable$1 = BannerTable;
function BannerIndex({ auth, banners }) {
  const breadcrumbs = [
    {
      key: 1,
      title: "Home",
      href: route("home")
    },
    {
      key: 2,
      title: "Banners",
      isLast: true
    }
  ];
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      breadcrumbs,
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Banner List" }),
        /* @__PURE__ */ jsx("div", { className: "pb-12", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs(Card, { className: "my-4", children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Banner List" }) }),
          /* @__PURE__ */ jsxs(CardContent, { children: [
            /* @__PURE__ */ jsx(
              InertiaPagination,
              {
                url: route("admin.products.index"),
                paginateData: banners,
                defaultPage: banners.current_page
              }
            ),
            /* @__PURE__ */ jsx(BannerTable$1, { list: banners.data || [] })
          ] })
        ] }) }) })
      ]
    }
  );
}
export {
  BannerIndex as default
};
