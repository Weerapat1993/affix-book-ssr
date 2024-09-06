import { jsx } from "react/jsx-runtime";
const Card = (props) => {
  const { children, className } = props;
  return /* @__PURE__ */ jsx("div", { className: `p-4 sm:p-8 bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg mb-8 ${className}`, children });
};
const Card$1 = Card;
export {
  Card$1 as C
};
