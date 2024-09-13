import { jsx } from "react/jsx-runtime";
import { c as defaultImagePlaceholderUrl } from "./ApplicationLogo-C5KpUhqt.js";
import ReactImageFallback from "react-image-fallback";
const Image = (props) => {
  return /* @__PURE__ */ jsx(
    ReactImageFallback,
    {
      fallbackImage: defaultImagePlaceholderUrl,
      ...props
    }
  );
};
const Image$1 = Image;
export {
  Image$1 as I
};
