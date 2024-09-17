import { jsxs, jsx } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-B4iinvfv.js";
import DeleteUserForm from "./DeleteUserForm-D_5Z9ShR.js";
import UpdatePasswordForm from "./UpdatePasswordForm-BhkgNU-V.js";
import UpdateProfileInformation from "./UpdateProfileInformationForm-BsNMzuAO.js";
import { Head } from "@inertiajs/react";
import { U as UserProfileHeader } from "./UserProfileHeader-D1ITc6VY.js";
import "react";
import "./ApplicationLogo-D5u203cs.js";
import "./laravelBlade-DwBdVrdx.js";
import "antd";
import "./FooterLayout-BaEYPs1Z.js";
import "@ant-design/icons";
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
import "@radix-ui/react-toast";
import "class-variance-authority";
import "lucide-react";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "./TextInput-DQL-42yE.js";
import "./InputLabel-CaoVq05r.js";
import "@headlessui/react";
import "./PrimaryButton-C5ts3FGL.js";
import "antd-img-crop";
function Edit({ auth, mustVerifyEmail, status }) {
  return /* @__PURE__ */ jsxs(Authenticated, { children: [
    /* @__PURE__ */ jsx(Head, { title: "โปรไฟล์ของฉัน" }),
    /* @__PURE__ */ jsx(UserProfileHeader, { isMyProfile: true, user: auth.user }),
    /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6", children: [
      /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg", children: /* @__PURE__ */ jsx(
        UpdateProfileInformation,
        {
          mustVerifyEmail,
          status,
          className: "max-w-xl"
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg", children: /* @__PURE__ */ jsx(UpdatePasswordForm, { className: "max-w-xl" }) }),
      /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg", children: /* @__PURE__ */ jsx(DeleteUserForm, { className: "max-w-xl" }) })
    ] }) })
  ] });
}
export {
  Edit as default
};
