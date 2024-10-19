import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useCallback, useMemo, useEffect } from "react";
import { useForm } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import { F as FormInput } from "./FormInput-DY6TuaZo.js";
import { Upload, Image, Button, Progress, message, Row, Col, Modal, Affix, Flex, Space, Card, Radio, FloatButton } from "antd";
import { I as InputError } from "./TextInput-DQL-42yE.js";
import { I as InputLabel } from "./InputLabel-CaoVq05r.js";
import { DeleteOutlined, LoadingOutlined, PlusOutlined, FileImageOutlined, BoldOutlined, ItalicOutlined, UnderlineOutlined, LineOutlined, LineHeightOutlined, FontSizeOutlined, CodeOutlined, MessageOutlined, AlignLeftOutlined, AlignCenterOutlined, AlignRightOutlined, EditOutlined, SaveOutlined } from "@ant-design/icons";
import { g as getMeta, d as defaultBookCoverUrl, a as asset, s as strRandom } from "./laravelBlade-DwBdVrdx.js";
import axios from "axios";
import isHotkey from "is-hotkey";
import { useSlate, useSlateStatic, withReact, Slate, Editable } from "slate-react";
import { Editor, Element, Transforms, createEditor } from "slate";
import { withHistory } from "slate-history";
import isUrl from "is-url";
import { U as UploadInput, E as EnumMethod$1 } from "./UploadInput-BeCvrvnD.js";
import { E as Element$1, L as Leaf, f as fixValue, h as headingTwoCenter, p as paragraphCenter, d as divider } from "./mark-B_-F7f3x.js";
import { u as usePermission } from "./LayoutBreadcrumb-DJY5I72l.js";
var EnumMethod = /* @__PURE__ */ ((EnumMethod2) => {
  EnumMethod2["POST"] = "POST";
  EnumMethod2["PATCH"] = "PATCH";
  return EnumMethod2;
})(EnumMethod || {});
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt10M = file.size / 1024 / 1024 < 10;
  if (!isLt10M) {
    message.error("Image must smaller than 10MB!");
  }
  return isJpgOrPng && isLt10M;
};
const MangaPageInput = ({ onChangeData, onChangeFile, name, value, action, method, storageFolder, chapterId, page, label, chapter, bookId }) => {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [imageUrl, setImageUrl] = useState(value);
  const [errorMessage, setErrorMessage] = useState("");
  const isHaveAvatar = Boolean(imageUrl);
  const onChange = (info) => {
    const file = info == null ? void 0 : info.fileList[0].originFileObj;
    if (onChangeFile) {
      onChangeFile(file);
    }
  };
  const onRemove = () => {
    setImageUrl("");
  };
  const uploadButton = /* @__PURE__ */ jsxs("button", { style: { border: 0, background: "none", width: 340, height: 520 }, type: "button", children: [
    loading ? /* @__PURE__ */ jsx(LoadingOutlined, {}) : /* @__PURE__ */ jsx(PlusOutlined, {}),
    /* @__PURE__ */ jsx("div", { style: { marginTop: 8 }, children: "Upload" })
  ] });
  const uploadImage = async (options) => {
    var _a, _b;
    const { onSuccess, onError, file, onProgress } = options;
    const fmData = new FormData();
    const config = {
      headers: { "content-type": "multipart/form-data" },
      onUploadProgress: (event) => {
        const percent = Math.floor(event.loaded / event.total * 100);
        setProgress(percent);
        if (percent === 100) {
          setTimeout(() => setProgress(0), 1e3);
        }
        onProgress({ percent: event.loaded / event.total * 100 });
      }
    };
    if (chapterId) {
      fmData.append("chapter_id", chapterId);
    }
    if (bookId) {
      fmData.append("book_id", bookId);
    }
    fmData.append("chapter", chapter);
    fmData.append("page", page);
    fmData.append(name, file);
    try {
      setProgress(10);
      setLoading(true);
      setIsSuccess(false);
      setErrorMessage("");
      let res;
      if (method === "PATCH") {
        res = await axios.patch(
          action,
          fmData,
          config
        );
      } else {
        res = await axios.post(
          action,
          fmData,
          config
        );
      }
      onSuccess("Ok");
      const { data } = res.data;
      const imgUrl = data.img_url || "";
      setImageUrl(imgUrl);
      onChangeData(data);
      setIsSuccess(true);
      setLoading(false);
    } catch (err) {
      onError({ err });
      setErrorMessage(((_b = (_a = err == null ? void 0 : err.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || "");
      setLoading(false);
    }
  };
  const progressBarStatus = progress === 100 && !errorMessage ? {} : {
    status: errorMessage ? "exception" : "active"
  };
  const progressBarProps = {
    size: "small",
    percent: progress,
    ...progressBarStatus
  };
  return /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
    label ? /* @__PURE__ */ jsx(InputLabel, { className: "mb-2", value: label }) : null,
    /* @__PURE__ */ jsxs(
      Upload,
      {
        accept: "image/png, image/jpeg",
        customRequest: uploadImage,
        name,
        listType: "picture",
        className: `manga-page ${isSuccess ? "success-upload" : ""} ${errorMessage ? "error-upload" : ""}`,
        showUploadList: false,
        action: route("profile.api.upload_avatar"),
        beforeUpload,
        onChange,
        multiple: false,
        maxCount: 1,
        headers: {
          "X-CSRF-TOKEN": getMeta("csrf-token")
        },
        children: [
          isHaveAvatar ? /* @__PURE__ */ jsx(
            Image,
            {
              preview: false,
              fallback: defaultBookCoverUrl,
              src: asset(`storage/${storageFolder}/${imageUrl}`),
              alt: "image",
              style: { width: "100%" }
            }
          ) : uploadButton,
          isHaveAvatar ? /* @__PURE__ */ jsx("div", { className: "absolute top-4 right-4", children: /* @__PURE__ */ jsx(Button, { className: "bg-transparent hover:bg-transparent", onClick: onRemove, icon: /* @__PURE__ */ jsx(DeleteOutlined, {}), danger: true, type: "dashed", shape: "circle" }) }) : null
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "h-4 w-10/12 mx-auto", children: progress > 0 ? /* @__PURE__ */ jsx(Progress, { ...progressBarProps }) : null }),
    /* @__PURE__ */ jsx("div", { className: "h-6", children: /* @__PURE__ */ jsx(InputError, { message: errorMessage }) })
  ] });
};
const MangaForm = (props) => {
  const { initialValues, chapterId } = props;
  const { data, setData, processing, errors, recentlySuccessful } = useForm(initialValues);
  const mangaPageProps = {
    bookId: initialValues == null ? void 0 : initialValues.book_id,
    chapterId,
    chapter: initialValues.chapter
  };
  const handleChangeImage = (responseData) => {
    setData("img_url", responseData.img_url);
    const newList = {
      ...data.list,
      [responseData.id]: responseData
    };
    setData("list", newList);
  };
  const arrData = Array.from(Object.entries(data.list), ([_, value]) => value);
  const arrPages = Array.from({ length: arrData.length + 1 }, (_, i) => i + 1);
  return /* @__PURE__ */ jsx(Row, { gutter: [16, 16], children: arrPages.map((page) => {
    const itemData = arrData.find((item) => item.page === page);
    return /* @__PURE__ */ jsx(Col, { className: "text-center", sm: 24, md: 12, lg: 8, children: /* @__PURE__ */ jsx(
      MangaPageInput,
      {
        label: `Page ${page}`,
        name: "manga_page_file",
        method: EnumMethod.POST,
        action: route("pages.api.upload.manga"),
        onChangeData: handleChangeImage,
        value: (itemData == null ? void 0 : itemData.img_url) || "",
        storageFolder: "chapter-pages",
        page,
        ...mangaPageProps
      }
    ) }, page);
  }) });
};
const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
};
const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format);
  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};
const MarkButton = ({ format, icon }) => {
  const editor = useSlate();
  const type = isMarkActive(editor, format) ? "primary" : "default";
  return /* @__PURE__ */ jsx(
    Button,
    {
      icon,
      type,
      onMouseDown: (event) => {
        event.preventDefault();
        toggleMark(editor, format);
      }
    }
  );
};
const LIST_TYPES = ["numbered-list", "bulleted-list"];
const isBlockActive = (editor, format, blockType = "type") => {
  const { selection } = editor;
  if (!selection) return false;
  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: (n) => !Editor.isEditor(n) && Element.isElement(n) && n[blockType] === format
    })
  );
  return !!match;
};
const toggleBlock = (editor, format) => {
  const isActive = isBlockActive(
    editor,
    format,
    TEXT_ALIGN_TYPES.includes(format) ? "align" : "type"
  );
  const isList = LIST_TYPES.includes(format);
  Transforms.unwrapNodes(editor, {
    match: (n) => !Editor.isEditor(n) && Element.isElement(n) && LIST_TYPES.includes(n.type) && !TEXT_ALIGN_TYPES.includes(format),
    split: true
  });
  let newProperties;
  if (TEXT_ALIGN_TYPES.includes(format)) {
    newProperties = {
      align: isActive ? void 0 : format
    };
  } else {
    newProperties = {
      type: isActive ? "paragraph" : isList ? "list-item" : format
    };
  }
  Transforms.setNodes(editor, newProperties);
  if (!isActive && isList) {
    const block = { type: format, children: [] };
    Transforms.wrapNodes(editor, block);
  }
};
const TEXT_ALIGN_TYPES = ["left", "center", "right"];
const BlockButton = ({ format, icon, title }) => {
  const editor = useSlate();
  const type = isBlockActive(
    editor,
    format,
    TEXT_ALIGN_TYPES.includes(format) ? "align" : "type"
  ) ? "primary" : "default";
  return /* @__PURE__ */ jsx(
    Button,
    {
      icon: title ? null : icon,
      type,
      onMouseDown: (event) => {
        event.preventDefault();
        toggleBlock(editor, format);
      },
      children: title
    }
  );
};
const imageExtensions = [
  "ase",
  "art",
  "bmp",
  "blp",
  "cd5",
  "cit",
  "cpt",
  "cr2",
  "cut",
  "dds",
  "dib",
  "djvu",
  "egt",
  "exif",
  "gif",
  "gpl",
  "grf",
  "icns",
  "ico",
  "iff",
  "jng",
  "jpeg",
  "jpg",
  "jfif",
  "jp2",
  "jps",
  "lbm",
  "max",
  "miff",
  "mng",
  "msp",
  "nitf",
  "ota",
  "pbm",
  "pc1",
  "pc2",
  "pc3",
  "pcf",
  "pcx",
  "pdn",
  "pgm",
  "PI1",
  "PI2",
  "PI3",
  "pict",
  "pct",
  "pnm",
  "pns",
  "ppm",
  "psb",
  "psd",
  "pdd",
  "psp",
  "px",
  "pxm",
  "pxr",
  "qfx",
  "raw",
  "rle",
  "sct",
  "sgi",
  "rgb",
  "int",
  "bw",
  "tga",
  "tiff",
  "tif",
  "vtf",
  "xbm",
  "xcf",
  "xpm",
  "3dv",
  "amf",
  "ai",
  "awg",
  "cgm",
  "cdr",
  "cmx",
  "dxf",
  "e2d",
  "egt",
  "eps",
  "fs",
  "gbr",
  "odg",
  "svg",
  "stl",
  "vrml",
  "x3d",
  "sxd",
  "v2d",
  "vnd",
  "wmf",
  "emf",
  "art",
  "xar",
  "png",
  "webp",
  "jxr",
  "hdp",
  "wdp",
  "cur",
  "ecw",
  "iff",
  "lbm",
  "liff",
  "nrrd",
  "pam",
  "pcx",
  "pgf",
  "sgi",
  "rgb",
  "rgba",
  "bw",
  "int",
  "inta",
  "sid",
  "ras",
  "sun",
  "tga"
];
const insertImage = (editor, url) => {
  const text = { text: "" };
  const image = { type: "image", url, children: [text] };
  Transforms.insertNodes(editor, image);
  Transforms.insertNodes(editor, {
    type: "paragraph",
    children: [{ text: "" }]
  });
};
const InsertImageButton = ({ bookId, chapter }) => {
  const editor = useSlateStatic();
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data, setData } = useForm({
    file_url: "",
    from: "",
    to: "",
    file_name: "",
    bookId
  });
  const chapterPath = chapter ? `/Ch_${chapter}` : "";
  const showModal = useCallback(() => {
    setIsModalOpen(!isModalOpen);
  }, [isModalOpen]);
  const handleOk = async () => {
    if (data.file_url) {
      try {
        setIsLoading(true);
        const res = await axios({
          method: "POST",
          url: route("api.upload.transfer"),
          data
        });
        insertImage(editor, asset(`storage/${res.data.data}`));
        setIsModalOpen(false);
        setData({
          file_url: "",
          from: "",
          to: "",
          file_name: "",
          bookId
        });
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    }
  };
  const handleChangeUrl = useCallback((url) => {
    const fileName = `${chapter}_${strRandom(12)}.webp`;
    setData({
      file_url: url,
      from: `tmp/${url}`,
      to: `upload/novels/${bookId}${chapterPath}`,
      file_name: fileName,
      bookId
    });
  }, [chapter, bookId, chapterPath]);
  const handleCancel = useCallback(() => {
    setData({
      file_url: "",
      from: "",
      to: "",
      file_name: "",
      bookId
    });
    setIsModalOpen(false);
  }, []);
  const isDisabled = !Boolean(data.file_url);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Button,
      {
        icon: /* @__PURE__ */ jsx(FileImageOutlined, {}),
        onClick: showModal,
        type: isModalOpen ? "primary" : "default"
      }
    ),
    /* @__PURE__ */ jsx(
      Modal,
      {
        title: "Upload Image",
        open: isModalOpen,
        onOk: handleOk,
        onCancel: handleCancel,
        footer: [
          /* @__PURE__ */ jsx(Button, { onClick: handleCancel, children: "Cancel" }, "back"),
          /* @__PURE__ */ jsx(
            Button,
            {
              disabled: isDisabled,
              loading: isLoading,
              type: "primary",
              onClick: handleOk,
              children: "OK"
            },
            "submit"
          )
        ],
        children: /* @__PURE__ */ jsx(
          UploadInput,
          {
            name: "cover_file",
            method: EnumMethod$1.POST,
            action: route("api.upload.store"),
            onChangeUrl: handleChangeUrl,
            value: data.file_url || "",
            folderName: `novels/${bookId}`
          }
        )
      }
    )
  ] });
};
const isImageUrl = (url) => {
  if (!url) return false;
  if (!isUrl(url)) return false;
  const ext = new URL(url).pathname.split(".").pop();
  return imageExtensions.includes(ext);
};
const SlateToolbar = ({ bookId, chapter }) => {
  return /* @__PURE__ */ jsx(Affix, { offsetTop: 40, children: /* @__PURE__ */ jsx(Flex, { justify: "end", children: /* @__PURE__ */ jsxs(Space.Compact, { className: " mx-2 mb-2", children: [
    /* @__PURE__ */ jsx(MarkButton, { format: "bold", icon: /* @__PURE__ */ jsx(BoldOutlined, {}) }),
    /* @__PURE__ */ jsx(MarkButton, { format: "italic", icon: /* @__PURE__ */ jsx(ItalicOutlined, {}) }),
    /* @__PURE__ */ jsx(MarkButton, { format: "underline", icon: /* @__PURE__ */ jsx(UnderlineOutlined, {}) }),
    /* @__PURE__ */ jsx(InsertImageButton, { bookId, chapter }),
    /* @__PURE__ */ jsx(BlockButton, { format: "divider", icon: /* @__PURE__ */ jsx(LineOutlined, {}) }),
    /* @__PURE__ */ jsx(BlockButton, { format: "heading-one", icon: /* @__PURE__ */ jsx(LineHeightOutlined, {}) }),
    /* @__PURE__ */ jsx(BlockButton, { format: "heading-two", icon: /* @__PURE__ */ jsx(FontSizeOutlined, {}) }),
    /* @__PURE__ */ jsx(BlockButton, { format: "block-code", icon: /* @__PURE__ */ jsx(CodeOutlined, {}) }),
    /* @__PURE__ */ jsx(BlockButton, { format: "block-quote", icon: /* @__PURE__ */ jsx(MessageOutlined, {}) }),
    /* @__PURE__ */ jsx(BlockButton, { format: "left", icon: /* @__PURE__ */ jsx(AlignLeftOutlined, {}) }),
    /* @__PURE__ */ jsx(BlockButton, { format: "center", icon: /* @__PURE__ */ jsx(AlignCenterOutlined, {}) }),
    /* @__PURE__ */ jsx(BlockButton, { format: "right", icon: /* @__PURE__ */ jsx(AlignRightOutlined, {}) })
  ] }) }) });
};
const withImages = (editor) => {
  const { insertData, isVoid } = editor;
  editor.isVoid = (element) => {
    return element.type === "image" ? true : isVoid(element);
  };
  editor.insertData = (data) => {
    const text = data.getData("text/plain");
    const { files } = data;
    if (files && files.length > 0) {
      for (const file of files) {
        const reader = new FileReader();
        const [mime] = file.type.split("/");
        if (mime === "image") {
          reader.addEventListener("load", () => {
            const url = reader.result;
            insertImage(editor, url);
          });
          reader.readAsDataURL(file);
        }
      }
    } else if (isImageUrl(text)) {
      insertImage(editor, text);
    } else {
      insertData(data);
    }
  };
  return editor;
};
const HOTKEYS = {
  "Control+b": "bold",
  "Control+i": "italic",
  "Control+u": "underline",
  "Control+`": "code",
  "Control+q": "block-quote"
};
const SlateEditor = ({ initialValue, onChange, bookId, chapter }) => {
  const [isFirstRender, setIsFirstRender] = useState(false);
  const [value, setValue] = useState([]);
  const renderElement = useCallback((props) => /* @__PURE__ */ jsx(Element$1, { ...props }), []);
  const renderLeaf = useCallback((props) => /* @__PURE__ */ jsx(Leaf, { ...props }), []);
  const editor = useMemo(() => withImages(withHistory(withReact(createEditor()))), []);
  const handleChange = useCallback((value2) => {
    const isAstChange = editor.operations.some(
      (op) => "set_selection" !== op.type
    );
    if (isAstChange) {
      const newValue = fixValue(value2);
      setValue(newValue);
      if (onChange) {
        onChange(newValue);
      }
    }
  }, []);
  useEffect(() => {
    if (!isFirstRender) {
      setIsFirstRender(true);
    }
  }, []);
  if (!isFirstRender) return null;
  return /* @__PURE__ */ jsx(
    Slate,
    {
      editor,
      initialValue: fixValue(initialValue),
      onChange: (value2) => handleChange(value2),
      children: /* @__PURE__ */ jsxs(Card, { size: "small", children: [
        /* @__PURE__ */ jsx(SlateToolbar, { bookId, chapter }),
        /* @__PURE__ */ jsx(
          Editable,
          {
            renderElement,
            renderLeaf,
            placeholder: "Enter some content...",
            spellCheck: true,
            autoFocus: true,
            className: "px-2 b-none outline-none",
            style: { fontSize: 18 },
            onKeyDown: (event) => {
              for (const hotkey in HOTKEYS) {
                if (isHotkey(hotkey, event)) {
                  event.preventDefault();
                  const mark = HOTKEYS[hotkey];
                  toggleMark(editor, mark);
                }
              }
            }
          }
        )
      ] })
    }
  );
};
const ChapterForm = ({ bookType, type, initialValues, chapterId, languages, listButtons, max, bookId }) => {
  const { user } = usePermission();
  const [isEditChapter, setIsEditChapter] = useState(false);
  const { data, post, patch, reset, setData, processing, errors, recentlySuccessful } = useForm(initialValues);
  const onChangeStatus = ({ target: { value } }) => {
    setData("status", value);
  };
  const onChangeLanguageId = ({ target: { value } }) => {
    setData("language_id", parseInt(value));
  };
  const languageOptions = languages.map((lng) => ({
    label: lng.name,
    value: lng.id
  }));
  const statusOptions = [
    { label: "Draft", value: "Draft" },
    { label: "Published", value: "Published", disabled: type === "create" && bookType !== "Novel" }
  ];
  const defaultContent = !initialValues.novel_content.length ? [
    headingTwoCenter({ text: "Chapter" })
  ] : [];
  const initialEditorValue = chapterId ? [
    ...defaultContent,
    ...initialValues.novel_content
  ] : [
    headingTwoCenter({ text: `Chapter ${max + 1}` }),
    paragraphCenter({ text: "ชื่อเรื่อง", bold: true }),
    paragraphCenter({ text: `By. ${user.name || ""}` }),
    divider
  ];
  const submit = (e) => {
    e.preventDefault();
    switch (type) {
      case "create":
        post(route("chapters.store"));
        break;
      case "update":
        patch(route("chapters.update", chapterId));
        break;
    }
  };
  const mangaFormInitialValue = {
    // page: 1,
    img_url: null,
    // chapter_id: parseInt(chapterId),
    book_id: bookId,
    chapter: initialValues.chapter,
    list: initialValues.pages.reduce((pre, cur) => (pre[cur.id] = cur, pre), {})
  };
  const lastButton = type === "update" ? [] : [Math.floor(max) + 1];
  const arrPages = [
    ...listButtons,
    ...lastButton
  ];
  const isNovel = bookType === "Novel";
  return /* @__PURE__ */ jsxs(Card, { children: [
    !isEditChapter ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(InputLabel, { className: "mb-2", value: "Chapter" }),
      /* @__PURE__ */ jsxs(Flex, { wrap: true, gap: "small", children: [
        arrPages.map((chapter) => {
          let disabledChapterBtn;
          switch (type) {
            case "create":
              disabledChapterBtn = chapter <= max;
              break;
            case "update":
              disabledChapterBtn = chapter !== initialValues.chapter;
              break;
          }
          return /* @__PURE__ */ jsx(
            Button,
            {
              disabled: disabledChapterBtn,
              type: "primary",
              shape: "circle",
              children: chapter
            },
            chapter
          );
        }),
        /* @__PURE__ */ jsx(
          Button,
          {
            icon: /* @__PURE__ */ jsx(EditOutlined, {}),
            onClick: () => setIsEditChapter(true),
            type: "primary",
            children: "แก้ไขเลขตอน"
          }
        )
      ] })
    ] }) : null,
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "mt-6 space-y-6", children: [
      isEditChapter ? /* @__PURE__ */ jsx(
        FormInput,
        {
          label: "Chapter",
          type: "number",
          name: "chapter",
          value: data.chapter,
          onChange: (e) => setData("chapter", parseInt(e.target.value)),
          required: true,
          isFocused: true,
          errorMessage: errors.chapter
        }
      ) : null,
      /* @__PURE__ */ jsx(
        FormInput,
        {
          label: "Title",
          type: "text",
          name: "title",
          value: data.title,
          onChange: (e) => setData("title", e.target.value),
          required: true,
          isFocused: true,
          errorMessage: errors.title
        }
      ),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { className: "mb-2", htmlFor: "language_id", value: "Language" }),
        /* @__PURE__ */ jsx(
          Radio.Group,
          {
            name: "language_id",
            options: languageOptions,
            onChange: onChangeLanguageId,
            value: data.language_id,
            optionType: "button",
            buttonStyle: "solid",
            size: "large"
          }
        ),
        /* @__PURE__ */ jsx(InputError, { className: "mt-2", message: errors.language_id })
      ] }),
      initialValues.status === "Published" ? null : /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { className: "mb-2", htmlFor: "status", value: "Status" }),
        /* @__PURE__ */ jsx(
          Radio.Group,
          {
            name: "status",
            options: statusOptions,
            onChange: onChangeStatus,
            value: data.status,
            optionType: "button",
            buttonStyle: "solid",
            size: "large"
          }
        ),
        /* @__PURE__ */ jsx(InputError, { className: "mt-2", message: errors.status })
      ] }),
      isNovel ? /* @__PURE__ */ jsx(
        SlateEditor,
        {
          initialValue: initialEditorValue,
          onChange: (value) => setData("novel_content", value),
          bookId,
          chapter: initialValues.chapter
        }
      ) : null,
      chapterId && !isNovel ? /* @__PURE__ */ jsx(MangaForm, { initialValues: mangaFormInitialValue, chapterId }) : null,
      /* @__PURE__ */ jsx(Affix, { offsetBottom: 50, children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-4", children: [
        /* @__PURE__ */ jsx(
          Button,
          {
            htmlType: "submit",
            icon: /* @__PURE__ */ jsx(SaveOutlined, {}),
            size: "large",
            type: "primary",
            loading: processing,
            disabled: processing,
            children: "Save"
          }
        ),
        /* @__PURE__ */ jsx(
          Transition,
          {
            show: recentlySuccessful,
            enter: "transition ease-in-out",
            enterFrom: "opacity-0",
            leave: "transition ease-in-out",
            leaveTo: "opacity-0",
            children: /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Saved." })
          }
        )
      ] }) }),
      /* @__PURE__ */ jsx(FloatButton.BackTop, {})
    ] })
  ] });
};
export {
  ChapterForm as C
};
