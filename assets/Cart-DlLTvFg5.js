import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-CWsw7_3p.js";
import { Head } from "@inertiajs/react";
import { Card, Row, Col, Popconfirm, Button, Table, Flex, Tooltip, message, Radio, Space, Input, Divider, Typography } from "antd";
import { u as useCart } from "./useCart-D3twppGD.js";
import { useState, Fragment as Fragment$1, useEffect } from "react";
import { DeleteOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import "./ApplicationLogo-Bn7DjPlp.js";
import "./FooterLayout-DOY91SPS.js";
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
const CartTable = () => {
  const { carts, removeProductInCart } = useCart();
  const t = (name) => name;
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const data = carts.map((item) => ({
    key: item.product_id,
    name: item.name,
    price: item.price,
    qty: item.qty,
    total: item.price * item.qty
  }));
  const columns = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
      sorter: (a, b) => a.name - b.name
    },
    {
      title: "Price",
      key: "price",
      width: "100px",
      render: (_, item) => /* @__PURE__ */ jsx(Flex, { wrap: true, gap: "small", children: /* @__PURE__ */ jsxs("b", { children: [
        "฿ ",
        item.price
      ] }) })
    },
    {
      title: "QTY",
      key: "qty",
      dataIndex: "qty",
      width: "100px",
      align: "center"
    },
    {
      title: "Total",
      key: "total",
      width: "100px",
      render: (_, item) => /* @__PURE__ */ jsx(Flex, { wrap: true, gap: "small", children: /* @__PURE__ */ jsxs("b", { children: [
        "฿ ",
        item.total
      ] }) })
    },
    {
      title: "Action",
      key: "action",
      width: "120px",
      render: (_, item) => /* @__PURE__ */ jsx(Flex, { wrap: true, gap: "small", children: /* @__PURE__ */ jsx(
        Popconfirm,
        {
          title: "Delete the product",
          description: "Are you sure to delete this product?",
          onConfirm: () => confirmByRow(item.key),
          onCancel: () => null,
          okText: t("form.btn.yes"),
          cancelText: t("form.btn.no"),
          children: /* @__PURE__ */ jsx(Tooltip, { title: t("form.btn.delete"), children: /* @__PURE__ */ jsx(Button, { shape: "circle", type: "primary", danger: true, icon: /* @__PURE__ */ jsx(DeleteOutlined, {}) }) })
        }
      ) })
    }
  ];
  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const deleteCompleted = (keys) => {
    setLoading(true);
    setTimeout(() => {
      removeProductInCart(keys);
      message.success("Delete product completed!");
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1e3);
  };
  const confirm = (e) => {
    deleteCompleted(selectedRowKeys);
  };
  const confirmByRow = (id) => {
    deleteCompleted([id]);
  };
  const cancel = (e) => {
    message.error("Cancel delete product!");
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange
  };
  const hasSelected = selectedRowKeys.length > 0;
  return /* @__PURE__ */ jsxs(Card, { title: "Cart Items", children: [
    /* @__PURE__ */ jsx("div", { style: { marginBottom: 16 }, children: /* @__PURE__ */ jsx(Row, { children: /* @__PURE__ */ jsx(Col, { span: 24, children: hasSelected ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        Popconfirm,
        {
          title: "Delete the product",
          description: "Are you sure to delete this product?",
          onConfirm: confirm,
          onCancel: cancel,
          okText: t("form.btn.yes"),
          cancelText: t("form.btn.no"),
          children: /* @__PURE__ */ jsx(Button, { type: "primary", danger: true, icon: /* @__PURE__ */ jsx(DeleteOutlined, {}), disabled: !hasSelected, loading, children: t("form.btn.delete") })
        }
      ),
      /* @__PURE__ */ jsx("span", { style: { marginLeft: 8 }, children: hasSelected ? `Selected ${selectedRowKeys.length} items` : "" })
    ] }) : null }) }) }),
    /* @__PURE__ */ jsx(Table, { rowSelection, columns, dataSource: data, scroll: { x: 200 } })
  ] });
};
const CartTable$1 = CartTable;
const { Text } = Typography;
const { Search } = Input;
const CartSummary = (props) => {
  const [selectDiscountType, setSelectDiscountType] = useState("coupon");
  const {
    allPrice,
    discount,
    totalPrice,
    isCanUse,
    currentCode,
    contextHolder,
    isUsePoint,
    searchCodeCoupon,
    deleteCoupon,
    setUsePoint
  } = useCart();
  const [point, setPoint] = useState(isUsePoint ? discount : 0);
  const onSearch = (code) => {
    searchCodeCoupon(code);
  };
  const onSelectDiscountType = ({ target: { value } }) => {
    setSelectDiscountType(value);
  };
  const onSetPoint = (e) => {
    const value = e.target.value;
    setPoint(parseInt(value));
  };
  const handleUsePoint = () => {
    setUsePoint(point);
  };
  const currency = "THB";
  return /* @__PURE__ */ jsxs(
    Card,
    {
      title: "Cart Summary",
      actions: [
        /* @__PURE__ */ jsx(
          Button,
          {
            type: "primary",
            size: "large",
            icon: /* @__PURE__ */ jsx(ShoppingCartOutlined, {}),
            onClick: () => null,
            disabled: allPrice <= 0,
            children: "Checkout"
          }
        )
      ],
      children: [
        contextHolder,
        /* @__PURE__ */ jsxs(Flex, { vertical: true, gap: "middle", children: [
          /* @__PURE__ */ jsx("center", { children: /* @__PURE__ */ jsxs(Radio.Group, { onChange: onSelectDiscountType, defaultValue: "coupon", buttonStyle: "solid", children: [
            /* @__PURE__ */ jsx(Radio.Button, { value: "coupon", children: "Coupon" }),
            /* @__PURE__ */ jsx(Radio.Button, { value: "point", children: "Point" })
          ] }) }),
          selectDiscountType === "coupon" ? /* @__PURE__ */ jsx(Fragment$1, { children: isCanUse || isUsePoint ? /* @__PURE__ */ jsxs(Space.Compact, { style: { width: "100%" }, children: [
            /* @__PURE__ */ jsx(Input, { size: "large", disabled: true, value: isUsePoint ? `${discount} pts` : currentCode }),
            /* @__PURE__ */ jsx(Button, { size: "large", onClick: deleteCoupon, type: "primary", danger: true, children: isUsePoint ? /* @__PURE__ */ jsx("span", { children: "ลบ Point" }) : /* @__PURE__ */ jsx("span", { children: "ลบคูปอง" }) })
          ] }) : /* @__PURE__ */ jsx(
            Search,
            {
              placeholder: "ใส่โค้ด",
              allowClear: true,
              enterButton: "ใช้คูปอง",
              size: "large",
              onSearch
            }
          ) }) : /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsxs(Space.Compact, { style: { width: "100%" }, children: [
            /* @__PURE__ */ jsx(Input, { type: "number", size: "large", defaultValue: point, value: point, onChange: onSetPoint }),
            /* @__PURE__ */ jsx(Button, { size: "large", onClick: handleUsePoint, type: "primary", children: "ใช้ Point" })
          ] }) })
        ] }),
        /* @__PURE__ */ jsx(Divider, {}),
        /* @__PURE__ */ jsxs(Row, { gutter: [8, 8], children: [
          /* @__PURE__ */ jsx(Col, { span: 12, children: /* @__PURE__ */ jsx(Text, { children: "All Price" }) }),
          /* @__PURE__ */ jsx(Col, { span: 12, style: { textAlign: "right" }, children: /* @__PURE__ */ jsxs(Text, { children: [
            allPrice,
            " ",
            currency
          ] }) }),
          discount > 0 ? /* @__PURE__ */ jsxs(Fragment$1, { children: [
            /* @__PURE__ */ jsx(Col, { span: 12, children: /* @__PURE__ */ jsx(Text, { type: "danger", children: "Discount" }) }),
            /* @__PURE__ */ jsx(Col, { span: 12, style: { textAlign: "right" }, children: /* @__PURE__ */ jsxs(Text, { type: "danger", children: [
              "- ",
              discount,
              " ",
              currency
            ] }) })
          ] }) : null,
          /* @__PURE__ */ jsx(Col, { span: 12, children: /* @__PURE__ */ jsx(Text, { style: { fontWeight: "bold" }, children: "Total Price" }) }),
          /* @__PURE__ */ jsx(Col, { span: 12, style: { textAlign: "right" }, children: /* @__PURE__ */ jsxs(Text, { style: { fontWeight: "bold" }, children: [
            totalPrice,
            " ",
            currency
          ] }) })
        ] })
      ]
    }
  );
};
const CartSummary$1 = CartSummary;
function Cart({ auth }) {
  const { getDataFromLocalStorage } = useCart();
  useEffect(() => {
    getDataFromLocalStorage();
  }, []);
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      user: auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight", children: "Cart" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Dashboard" }),
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs(Row, { gutter: [16, 16], children: [
          /* @__PURE__ */ jsx(Col, { xs: 24, md: 16, children: /* @__PURE__ */ jsx(CartTable$1, {}) }),
          /* @__PURE__ */ jsx(Col, { xs: 24, md: 8, children: /* @__PURE__ */ jsx(CartSummary$1, {}) })
        ] }) }) })
      ]
    }
  );
}
export {
  Cart as default
};
