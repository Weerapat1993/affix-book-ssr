import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-CWsw7_3p.js";
import { Head } from "@inertiajs/react";
import { C as Card } from "./Card-Dj6_F9pc.js";
import { C as CardHeader, A as AdminHeader } from "./AdminHeader-YTxyOtPd.js";
import { u as useUploadFile } from "./useUploadFile-Px7fVPI-.js";
import { UploadOutlined, DownloadOutlined } from "@ant-design/icons";
import { Form, Upload, Button, Collapse, Flex } from "antd";
import { CopyBlock, dracula } from "react-code-blocks";
import { u as usePermission } from "./FooterLayout-DOY91SPS.js";
import "react";
import "./ApplicationLogo-Bn7DjPlp.js";
import "axios";
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
const { Panel } = Collapse;
const ExcelDataImportButton = () => {
  const [form] = Form.useForm();
  const { handleFileUpload, data: responseData, contextHolder, beforeUpload } = useUploadFile("/admin/excel");
  const copyBlockDefaultProps = {
    showLineNumbers: true,
    startingLineNumber: 1,
    wrapLines: false,
    theme: dracula,
    codeBlock: false
  };
  const uploadProps = {
    name: "excel_file",
    onChange: handleFileUpload,
    maxCount: 1,
    beforeUpload,
    accept: ".xls, .xlsx"
  };
  return /* @__PURE__ */ jsx(
    Form,
    {
      form,
      layout: "vertical",
      initialValues: { excel_file: null },
      requiredMark: true,
      children: /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { title: "Excel Import Data" }),
        /* @__PURE__ */ jsxs(Form.Item, { label: "Browse your computer: (Max: 2,048KiB)", required: true, tooltip: "This is a required field", children: [
          /* @__PURE__ */ jsx(Upload, { ...uploadProps, children: /* @__PURE__ */ jsx(Button, { icon: /* @__PURE__ */ jsx(UploadOutlined, {}), children: "Excel Import File" }) }),
          contextHolder
        ] }),
        responseData ? /* @__PURE__ */ jsx(Collapse, { defaultActiveKey: ["1"], children: /* @__PURE__ */ jsx(Panel, { header: "Code", children: /* @__PURE__ */ jsx(CopyBlock, { language: "json", ...copyBlockDefaultProps, text: JSON.stringify(responseData, null, "  ") }) }, "1") }) : null
      ] })
    }
  );
};
const ExcelDataImportButton$1 = ExcelDataImportButton;
const ExportExcelButton = ({ href, children }) => {
  const onClick = () => {
    window.open(href, "_blank");
  };
  return /* @__PURE__ */ jsx(Button, { onClick, type: "primary", icon: /* @__PURE__ */ jsx(DownloadOutlined, {}), children: children || "Download" });
};
const ExportExcelButton$1 = ExportExcelButton;
function AdminIndex(props) {
  const { isRole } = usePermission();
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight", children: "Admin Page" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Admin Page" }),
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsx(AdminHeader, {}),
          isRole("admin") ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(ExcelDataImportButton$1, {}),
            /* @__PURE__ */ jsxs(Card, { children: [
              /* @__PURE__ */ jsx(CardHeader, { title: "Excel Export Data" }),
              /* @__PURE__ */ jsxs(Flex, { wrap: true, gap: "small", children: [
                /* @__PURE__ */ jsx(ExportExcelButton$1, { href: route("admin.excel.export.books"), children: "books" }),
                /* @__PURE__ */ jsx(ExportExcelButton$1, { href: route("admin.excel.export.book_categories"), children: "book_categories" }),
                /* @__PURE__ */ jsx(ExportExcelButton$1, { href: route("admin.excel.export.chapters"), children: "chapters" }),
                /* @__PURE__ */ jsx(ExportExcelButton$1, { href: route("admin.excel.export.pages"), children: "pages" })
              ] })
            ] })
          ] }) : null
        ] }) })
      ]
    }
  );
}
export {
  AdminIndex as default
};
