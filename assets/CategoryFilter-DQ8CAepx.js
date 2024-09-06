import { jsx } from "react/jsx-runtime";
import { Flex, Tag } from "antd";
const CategoryFilter = ({ list, onChange, value }) => {
  const handleClick = (id) => {
    const checked = value.includes(id);
    const nextSelectedTags = !checked ? [...value, id] : value.filter((t) => t !== id);
    if (onChange) {
      onChange(nextSelectedTags);
    }
  };
  return /* @__PURE__ */ jsx(Flex, { className: "m-2", wrap: true, gap: "small", children: list.map((item) => {
    const checked = value.includes(item.id);
    const colorActive = checked ? "rgba(79, 70, 229, 1)" : "default";
    return /* @__PURE__ */ jsx(
      Tag,
      {
        className: "cursor-pointer",
        color: colorActive,
        onClick: () => handleClick(item.id),
        children: item.name
      },
      item.id
    );
  }) });
};
const CategoryFilter$1 = CategoryFilter;
export {
  CategoryFilter$1 as C
};
