import { jsx } from "react/jsx-runtime";
import { Carousel } from "antd";
import { Link } from "@inertiajs/react";
import { B as BookHeader } from "./BookHeader-BQBIQLL2.js";
const SuggestBookCarousel = ({ list }) => {
  return /* @__PURE__ */ jsx(
    Carousel,
    {
      arrows: list.length !== 1,
      autoplay: list.length !== 1,
      autoplaySpeed: 5e3,
      adaptiveHeight: true,
      effect: "fade",
      dotPosition: "top",
      dots: false,
      children: list.map((book) => {
        return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Link, { href: `/books/${book.id}`, children: /* @__PURE__ */ jsx(BookHeader, { book, isSuggest: true }) }) }, book.id);
      })
    }
  );
};
const SuggestBookCarousel$1 = SuggestBookCarousel;
export {
  SuggestBookCarousel$1 as S
};
