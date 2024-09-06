import { jsxs, jsx } from "react/jsx-runtime";
import { I as InputLabel } from "./InputLabel-CaoVq05r.js";
import { T as TextInput, I as InputError } from "./TextInput-DQL-42yE.js";
const FormInput = ({ label, errorMessage, ...props }) => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(InputLabel, { htmlFor: props.name, value: label }),
    /* @__PURE__ */ jsx(
      TextInput,
      {
        className: "mt-1 block w-full",
        ...props
      }
    ),
    /* @__PURE__ */ jsx(InputError, { className: "mt-2", message: errorMessage })
  ] });
};
export {
  FormInput as F
};
