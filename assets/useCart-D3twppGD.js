import { useEffect } from "react";
import { usePrevious } from "react-use";
import { message } from "antd";
import { d as addToCartThunk, r as removeManyCarts, e as searchCoupon, u as usePoint, f as clearCoupon, h as getLocalStorage } from "../ssr.js";
import { a as useAppSelector, b as useAppDispatch } from "./FooterLayout-DOY91SPS.js";
const useCart = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const carts = useAppSelector((state) => state.cartReducer.data.products);
  const currentCode = useAppSelector((state) => state.cartReducer.data.code);
  const isUsePoint = useAppSelector((state) => state.cartReducer.data.isUsePoint);
  const prevIsUsePoint = usePrevious(isUsePoint);
  const isErrorCoupon = useAppSelector((state) => state.cartReducer.data.isErrorCoupon);
  const prevIsErrorCoupon = usePrevious(isErrorCoupon);
  const isCanUse = useAppSelector((state) => state.cartReducer.data.isCanUse);
  const prevIsCanUse = usePrevious(isCanUse);
  const discount = useAppSelector((state) => state.cartReducer.data.discount);
  const dispatch = useAppDispatch();
  const allPrice = carts.reduce((pre, cur) => pre + cur.price * cur.qty, 0);
  const totalPrice = allPrice - discount;
  const isCart = carts.length > 0;
  const key = "updatable";
  useEffect(() => {
    if (prevIsCanUse === false && isCanUse) {
      messageApi.open({
        key,
        type: "success",
        content: `คุณสามารถใช้คูปองได้ !`,
        duration: 2
      });
    }
  }, [prevIsCanUse, isCanUse]);
  useEffect(() => {
    if (prevIsErrorCoupon === false && isErrorCoupon) {
      messageApi.open({
        key,
        type: "error",
        content: `คุณไม่สามารถใช้คูปองได้ !`,
        duration: 2
      });
    }
  }, [prevIsErrorCoupon, isErrorCoupon]);
  useEffect(() => {
    if (prevIsUsePoint === false && isUsePoint) {
      messageApi.open({
        key,
        type: "success",
        content: `คุณได้ใช้ Point ไปแล้วจำนวน ${discount} Points !`,
        duration: 2
      });
    }
  }, [prevIsUsePoint, isUsePoint]);
  const addProductToCart = (productId) => {
    dispatch(addToCartThunk(productId));
  };
  const removeProductInCart = (keys) => {
    dispatch(removeManyCarts(keys));
  };
  const searchCodeCoupon = (code) => {
    if (isCart) {
      dispatch(searchCoupon(code));
    } else {
      messageApi.open({
        key,
        type: "error",
        content: `คุณยังไม่มีสินค้าในตะกร้า !`,
        duration: 2
      });
    }
  };
  const setUsePoint = (point) => {
    if (isCart) {
      dispatch(usePoint(point));
    } else {
      messageApi.open({
        key,
        type: "error",
        content: `คุณยังไม่มีสินค้าในตะกร้า !`,
        duration: 2
      });
    }
  };
  const deleteCoupon = () => {
    dispatch(clearCoupon());
  };
  const getDataFromLocalStorage = () => {
    dispatch(getLocalStorage());
  };
  return {
    carts,
    allPrice,
    discount,
    totalPrice,
    isCanUse,
    isUsePoint,
    isErrorCoupon,
    currentCode,
    contextHolder,
    addProductToCart,
    removeProductInCart,
    searchCodeCoupon,
    deleteCoupon,
    setUsePoint,
    getDataFromLocalStorage
  };
};
export {
  useCart as u
};
