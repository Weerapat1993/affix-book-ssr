import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { useState, useMemo, useEffect } from "react";
import { FormProvider, Controller, useFormContext, useForm as useForm$1 } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { B as Button } from "./button-DgqKUl9p.js";
import { c as cn } from "./LayoutBreadcrumb-DJY5I72l.js";
import { Slot } from "@radix-ui/react-slot";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva } from "class-variance-authority";
import { useForm } from "@inertiajs/react";
import { u as useToast } from "./AuthenticatedLayout-DBF1SR-y.js";
import { X, Search, LucideLoaderCircle, SaveIcon } from "lucide-react";
import axios from "axios";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import { I as Image } from "./image-oSgtrKRL.js";
import { CodeiumEditor } from "@codeium/react-code-editor";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-xWfuaXzT.js";
import { C as Card, c as CardContent } from "./card-D4b28bdR.js";
const Input = React.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const Textarea = React.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "textarea",
      {
        className: cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
const Label = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  LabelPrimitive.Root,
  {
    ref,
    className: cn(labelVariants(), className),
    ...props
  }
));
Label.displayName = LabelPrimitive.Root.displayName;
const Form = FormProvider;
const FormFieldContext = React.createContext(
  {}
);
const FormField = ({
  ...props
}) => {
  return /* @__PURE__ */ jsx(FormFieldContext.Provider, { value: { name: props.name }, children: /* @__PURE__ */ jsx(Controller, { ...props }) });
};
const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();
  const fieldState = getFieldState(fieldContext.name, formState);
  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }
  const { id } = itemContext;
  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState
  };
};
const FormItemContext = React.createContext(
  {}
);
const FormItem = React.forwardRef(({ className, ...props }, ref) => {
  const id = React.useId();
  return /* @__PURE__ */ jsx(FormItemContext.Provider, { value: { id }, children: /* @__PURE__ */ jsx("div", { ref, className: cn("space-y-2", className), ...props }) });
});
FormItem.displayName = "FormItem";
const FormLabel = React.forwardRef(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();
  return /* @__PURE__ */ jsx(
    Label,
    {
      ref,
      className: cn(error && "text-destructive", className),
      htmlFor: formItemId,
      ...props
    }
  );
});
FormLabel.displayName = "FormLabel";
const FormControl = React.forwardRef(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
  return /* @__PURE__ */ jsx(
    Slot,
    {
      ref,
      id: formItemId,
      "aria-describedby": !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`,
      "aria-invalid": !!error,
      ...props
    }
  );
});
FormControl.displayName = "FormControl";
const FormDescription = React.forwardRef(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField();
  return /* @__PURE__ */ jsx(
    "p",
    {
      ref,
      id: formDescriptionId,
      className: cn("text-sm text-muted-foreground", className),
      ...props
    }
  );
});
FormDescription.displayName = "FormDescription";
const FormMessage = React.forwardRef(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error == null ? void 0 : error.message) : children;
  if (!body) {
    return null;
  }
  return /* @__PURE__ */ jsx(
    "p",
    {
      ref,
      id: formMessageId,
      className: cn("text-sm font-medium text-destructive", className),
      ...props,
      children: body
    }
  );
});
FormMessage.displayName = "FormMessage";
const Sheet = SheetPrimitive.Root;
const SheetTrigger = SheetPrimitive.Trigger;
const SheetClose = SheetPrimitive.Close;
const SheetPortal = SheetPrimitive.Portal;
const SheetOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Overlay,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;
const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
);
const SheetContent = React.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ jsxs(SheetPortal, { children: [
  /* @__PURE__ */ jsx(SheetOverlay, {}),
  /* @__PURE__ */ jsxs(
    SheetPrimitive.Content,
    {
      ref,
      className: cn(sheetVariants({ side }), className),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxs(SheetPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
SheetContent.displayName = SheetPrimitive.Content.displayName;
const SheetHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    ),
    ...props
  }
);
SheetHeader.displayName = "SheetHeader";
const SheetFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    ),
    ...props
  }
);
SheetFooter.displayName = "SheetFooter";
const SheetTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold text-foreground", className),
    ...props
  }
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;
const SheetDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;
const SheetMenu = (props) => {
  const { children, renderButton, title, description } = props;
  const [open, setOpen] = useState(false);
  const renderMemoButton = useMemo(renderButton, []);
  return /* @__PURE__ */ jsxs(Sheet, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsx(SheetTrigger, { asChild: true, children: renderMemoButton }),
    /* @__PURE__ */ jsxs(SheetContent, { className: "px-0", children: [
      /* @__PURE__ */ jsxs(SheetHeader, { className: "mb-4", children: [
        title ? /* @__PURE__ */ jsx(SheetTitle, { className: "mx-4", children: title }) : null,
        description ? /* @__PURE__ */ jsx(SheetDescription, { children: description }) : null
      ] }),
      children
    ] })
  ] });
};
const ScrollArea = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  ScrollAreaPrimitive.Root,
  {
    ref,
    className: cn("relative overflow-hidden", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx(ScrollAreaPrimitive.Viewport, { className: "h-full w-full rounded-[inherit]", children }),
      /* @__PURE__ */ jsx(ScrollBar, {}),
      /* @__PURE__ */ jsx(ScrollAreaPrimitive.Corner, {})
    ]
  }
));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;
const ScrollBar = React.forwardRef(({ className, orientation = "vertical", ...props }, ref) => /* @__PURE__ */ jsx(
  ScrollAreaPrimitive.ScrollAreaScrollbar,
  {
    ref,
    orientation,
    className: cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx(ScrollAreaPrimitive.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border" })
  }
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;
const defaultProps$2 = {
  onSubmit: () => {
  }
};
const SearchImageFromText = (props) => {
  var _a, _b;
  const { onSubmit } = {
    ...defaultProps$2,
    ...props
  };
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { data, setData, processing, errors } = useForm({
    query: ""
  });
  const handleClick = (id) => {
    setSelectedImage(id);
  };
  const imgUrl = ((_b = (_a = images.filter((item) => item.id === selectedImage)) == null ? void 0 : _a[0]) == null ? void 0 : _b.image_url) || "";
  const handleSelectedImage = (e) => {
    onSubmit(imgUrl);
  };
  const handleSubmit = async (e) => {
    var _a2, _b2;
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.get(route("api.google.search"), {
        params: {
          q: data.query
        }
      });
      const dataImage = (((_b2 = (_a2 = response.data) == null ? void 0 : _a2.data) == null ? void 0 : _b2.items) || []).map((item, key) => {
        var _a3, _b3, _c, _d, _e, _f;
        return {
          id: key + 1,
          title: item.title,
          image_url: (_c = (_b3 = (_a3 = item == null ? void 0 : item.pagemap) == null ? void 0 : _a3.cse_image) == null ? void 0 : _b3[0]) == null ? void 0 : _c.src,
          thumbnail_url: (_f = (_e = (_d = item == null ? void 0 : item.pagemap) == null ? void 0 : _d.cse_thumbnail) == null ? void 0 : _e[0]) == null ? void 0 : _f.src
        };
      });
      setImages(dataImage);
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
    SheetMenu,
    {
      title: "Search Image",
      renderButton: () => /* @__PURE__ */ jsxs(Button, { size: "sm", children: [
        /* @__PURE__ */ jsx(Search, { className: "w-4 h-4 mr-2" }),
        "Search Image"
      ] }),
      children: /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex", children: [
          /* @__PURE__ */ jsx(
            Input,
            {
              type: "text",
              value: data.query,
              onChange: (e) => setData("query", e.target.value),
              placeholder: "Enter search query",
              className: "flex-grow"
            }
          ),
          /* @__PURE__ */ jsx(Button, { onClick: handleSubmit, type: "button", disabled: processing || isLoading, children: isLoading ? /* @__PURE__ */ jsx(LucideLoaderCircle, { className: "w-4 h-4 animate-spin" }) : /* @__PURE__ */ jsx(Search, { className: "w-4 h-4" }) })
        ] }),
        errors.query && /* @__PURE__ */ jsx("div", { className: "text-red-500 mt-1", children: errors.query }),
        /* @__PURE__ */ jsx(ScrollArea, { className: "h-72 w-full rounded-md border my-4", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-4", children: images.map((image, index) => /* @__PURE__ */ jsx(
          Image,
          {
            onClick: () => handleClick(image.id),
            src: image.thumbnail_url,
            alt: image.title,
            className: `w-full h-auto ${image.id === selectedImage ? "border-4 border-blue-500" : ""}`
          },
          index
        )) }) }),
        /* @__PURE__ */ jsx("div", { className: "my-4", children: /* @__PURE__ */ jsx(Input, { disabled: true, placeholder: "Link URL", size: "sm", value: imgUrl }) }),
        /* @__PURE__ */ jsx(SheetFooter, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-end gap-2", children: [
          /* @__PURE__ */ jsx(SheetClose, { asChild: true, children: /* @__PURE__ */ jsx(Button, { size: "sm", variant: "outline", children: "Cancel" }) }),
          /* @__PURE__ */ jsx(SheetClose, { asChild: true, children: /* @__PURE__ */ jsx(Button, { onClick: handleSelectedImage, size: "sm", children: "Select Image" }) })
        ] }) })
      ] })
    }
  ) });
};
const cardStyle = {
  backgroundColor: "transparent"
};
const defaultProps$1 = {
  language: "javascript",
  onChange: () => {
  },
  onChangeCapture: () => {
  }
};
const CustomCodeiumEditor = (props) => {
  const { value, onChange, onChangeCapture, language, name } = {
    ...defaultProps$1,
    ...props
  };
  const handleChange = (value2) => {
    const event = {
      target: {
        name,
        value: value2
      },
      currentTarget: {
        name,
        value: value2
      }
    };
    onChange(event);
    onChangeCapture(event);
  };
  return /* @__PURE__ */ jsxs(Tabs, { defaultValue: "code", className: "w-full", children: [
    /* @__PURE__ */ jsxs(TabsList, { children: [
      /* @__PURE__ */ jsx(TabsTrigger, { value: "code", children: "Code" }),
      /* @__PURE__ */ jsx(TabsTrigger, { value: "preview", children: "Preview" })
    ] }),
    /* @__PURE__ */ jsx(TabsContent, { value: "code", children: /* @__PURE__ */ jsx(Card, { style: cardStyle, children: /* @__PURE__ */ jsx(CardContent, { className: "mt-6", children: /* @__PURE__ */ jsx(
      CodeiumEditor,
      {
        language,
        theme: "vs-dark",
        onChange: handleChange,
        value
      }
    ) }) }) }),
    /* @__PURE__ */ jsx(TabsContent, { value: "preview", children: /* @__PURE__ */ jsx(Card, { style: cardStyle, children: /* @__PURE__ */ jsx(CardContent, { className: "mt-6", children: /* @__PURE__ */ jsx("div", { className: "rich-editor", dangerouslySetInnerHTML: { __html: value || "No Preview Available" } }) }) }) })
  ] });
};
const productSchema = z.object({
  name: z.string().min(1, "Product name is required").max(255, "Product name must be 255 characters or less"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  price: z.number().min(0, "Price must be a positive number"),
  sku: z.string().min(1, "SKU is required"),
  slug: z.string().min(1, "Slug is required"),
  img_url: z.string(),
  target_link_url: z.string().url("Must be a valid URL")
});
const defaultProps = {
  initialValues: {
    name: "",
    description: "",
    price: 0,
    sku: "",
    slug: "",
    img_url: "",
    target_link_url: ""
  }
};
const CreateProductForm = (props) => {
  const { toast } = useToast();
  const { initialValues, action, method } = {
    ...defaultProps,
    ...props
  };
  const { data, setData, post, patch, errors } = useForm(initialValues);
  const form = useForm$1({
    resolver: zodResolver(productSchema),
    defaultValues: initialValues
  });
  const handleSubmit = async (data2) => {
    if (method === "post") {
      await post(action);
    } else if (method === "patch") {
      await patch(action);
    }
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData(name, value);
  };
  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      toast({
        title: "Error",
        description: JSON.stringify(errors, null, "  "),
        variant: "destructive"
      });
    }
  }, [errors]);
  return /* @__PURE__ */ jsx(Form, { ...form, children: /* @__PURE__ */ jsxs("form", { onSubmit: form.handleSubmit(handleSubmit), className: "space-y-8", children: [
    /* @__PURE__ */ jsx(
      FormField,
      {
        control: form.control,
        name: "name",
        render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
          /* @__PURE__ */ jsx(FormLabel, { children: "ชื่อสินค้า" }),
          /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
            Input,
            {
              placeholder: "Enter product name",
              onChangeCapture: handleInputChange,
              ...field
            }
          ) }),
          /* @__PURE__ */ jsx(FormMessage, { children: errors.name })
        ] })
      }
    ),
    /* @__PURE__ */ jsx(
      FormField,
      {
        control: form.control,
        name: "description",
        render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
          /* @__PURE__ */ jsx(FormLabel, { children: "รายละเอียดสินค้า" }),
          /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
            Textarea,
            {
              className: "hidden",
              placeholder: "Enter product description",
              ...field
            }
          ) }),
          /* @__PURE__ */ jsx(
            CustomCodeiumEditor,
            {
              name: field.name,
              language: "html",
              value: field.value,
              onChange: field.onChange,
              onChangeCapture: handleInputChange
            }
          ),
          /* @__PURE__ */ jsx(FormMessage, { children: errors.description })
        ] })
      }
    ),
    /* @__PURE__ */ jsx(
      FormField,
      {
        control: form.control,
        name: "price",
        render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
          /* @__PURE__ */ jsx(FormLabel, { children: "ราคา" }),
          /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
            Input,
            {
              type: "number",
              placeholder: "Enter price",
              ...field,
              onChange: (e) => field.onChange(
                parseFloat(e.target.value)
              ),
              onChangeCapture: handleInputChange
            }
          ) }),
          /* @__PURE__ */ jsx(FormMessage, { children: errors.price })
        ] })
      }
    ),
    /* @__PURE__ */ jsx(
      FormField,
      {
        control: form.control,
        name: "sku",
        render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
          /* @__PURE__ */ jsx(FormLabel, { children: "SKU" }),
          /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { placeholder: "Enter SKU", onChangeCapture: handleInputChange, ...field }) }),
          /* @__PURE__ */ jsx(FormDescription, { children: "The Stock Keeping Unit for your product." }),
          /* @__PURE__ */ jsx(FormMessage, { children: errors.sku })
        ] })
      }
    ),
    /* @__PURE__ */ jsx(
      FormField,
      {
        control: form.control,
        name: "slug",
        render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
          /* @__PURE__ */ jsx(FormLabel, { children: "Slug" }),
          /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { placeholder: "Enter slug", onChangeCapture: handleInputChange, ...field }) }),
          /* @__PURE__ */ jsx(FormDescription, { children: "The URL-friendly version of the product name." }),
          /* @__PURE__ */ jsx(FormMessage, { children: errors.slug })
        ] })
      }
    ),
    /* @__PURE__ */ jsx(
      FormField,
      {
        control: form.control,
        name: "img_url",
        render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
          /* @__PURE__ */ jsx(FormLabel, { children: "ลิ้งค์รูปภาพลิ้นค้า" }),
          /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
            Input,
            {
              placeholder: "Enter image URL",
              onChangeCapture: handleInputChange,
              ...field
            }
          ) }),
          /* @__PURE__ */ jsx(FormMessage, { children: errors.img_url }),
          /* @__PURE__ */ jsx(
            SearchImageFromText,
            {
              onSubmit: (url) => {
                field.onChange(url);
                setData("img_url", url);
              }
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsx(
      FormField,
      {
        control: form.control,
        name: "target_link_url",
        render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
          /* @__PURE__ */ jsx(FormLabel, { children: "ลิ้งค์ไปยังหน้งสินค้า" }),
          /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
            Input,
            {
              placeholder: "Enter target link URL",
              onChangeCapture: handleInputChange,
              ...field
            }
          ) }),
          /* @__PURE__ */ jsx(FormMessage, { children: errors.target_link_url })
        ] })
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxs(Button, { type: "submit", children: [
      /* @__PURE__ */ jsx(SaveIcon, { className: "mr-2 h-4 w-4" }),
      "Save"
    ] }) })
  ] }) });
};
const ProductForm = CreateProductForm;
export {
  ProductForm as P
};
