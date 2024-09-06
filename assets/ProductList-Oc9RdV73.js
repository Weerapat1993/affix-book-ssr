import { jsxs, jsx } from "react/jsx-runtime";
import { message, Card, Button, Row, Col } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { u as useCart } from "./useCart-D3twppGD.js";
import { Link } from "@inertiajs/react";
const { Meta } = Card;
const ProductCard = ({ item }) => {
  const { addProductToCart } = useCart();
  const [messageApi, contextHolder] = message.useMessage();
  const key = "updatable";
  const addToCart = (item2) => {
    messageApi.open({
      key,
      type: "loading",
      content: "Loading..."
    });
    setTimeout(() => {
      addProductToCart(item2);
      messageApi.open({
        key,
        type: "success",
        content: `Added "${item2.name}" to cart!`,
        duration: 2
      });
    }, 1e3);
  };
  return /* @__PURE__ */ jsxs(
    Card,
    {
      hoverable: true,
      style: { width: 250 },
      cover: /* @__PURE__ */ jsx(Link, { href: `/products/${item.id}`, children: /* @__PURE__ */ jsx(
        "img",
        {
          alt: "example",
          src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        }
      ) }),
      actions: [
        /* @__PURE__ */ jsx(
          Button,
          {
            type: "text",
            size: "large",
            icon: /* @__PURE__ */ jsx(ShoppingCartOutlined, {}),
            onClick: () => addToCart(item),
            children: "Add to cart"
          }
        )
      ],
      children: [
        contextHolder,
        /* @__PURE__ */ jsx(Meta, { title: item.name, description: `฿ ${item.price}` })
      ]
    }
  );
};
const ProductList = ({ list }) => /* @__PURE__ */ jsx(Row, { gutter: [16, 16], children: (list || []).map((item) => /* @__PURE__ */ jsx(Col, { sm: 24, md: 12, lg: 8, xl: 6, children: /* @__PURE__ */ jsx(ProductCard, { item }) }, item.id)) });
const ProductList$1 = ProductList;
export {
  ProductList$1 as P
};
