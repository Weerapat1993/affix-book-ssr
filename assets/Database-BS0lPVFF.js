import { jsxs, jsx } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-B4iinvfv.js";
import { useForm, Head } from "@inertiajs/react";
import { useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import { u as useUploadFile } from "./useUploadFile-Px7fVPI-.js";
import Case from "case";
import { p as pascalOne, s as snakeMany, a as snakeOne } from "./case-CvDFCSZ_.js";
import { A as AdminHeader, C as CardHeader } from "./AdminHeader-ExHnE0gF.js";
import { Card, Upload, Button, Tabs, Collapse } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { g as getMeta } from "./laravelBlade-DwBdVrdx.js";
import "./ApplicationLogo-D5u203cs.js";
import "./FooterLayout-BaEYPs1Z.js";
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
import "pluralize";
import "./Card-Dj6_F9pc.js";
const useDatabaseMigration = () => {
  const model = (modelName, migrationData = []) => `<?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Factories\\HasFactory;
use Illuminate\\Database\\Eloquent\\Model;

class ${pascalOne(modelName)} extends Model
{
    use HasFactory;

    protected $table = '${snakeMany(modelName)}';
    protected $fillable = [
        ${migrationData.reduce((pre, item) => {
    return `${pre}'${item.name}',
        `;
  }, "")}
    ];
}`;
  const migration = (modelName, migrationData = []) => `<?php

use Illuminate\\Database\\Migrations\\Migration;
use Illuminate\\Database\\Schema\\Blueprint;
use Illuminate\\Support\\Facades\\Schema;
${migrationData.reduce((pre, item) => {
    const isFk = item.type === "foreignIdFor";
    const importModel = (name) => `use App\\Models\\${Case.pascal(name)};`;
    if (isFk) {
      const fkName = item.name.slice(0, -3);
      return `${pre}${importModel(fkName)}
`;
    } else {
      return pre;
    }
  }, "")}

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('${snakeMany(modelName)}', function (Blueprint $table) {
            $table->id();
            ${migrationData.reduce((pre, item) => {
    const nullable = item.nullable ? "->nullable()" : "";
    const primary = item.primary ? "->primary()" : "";
    const unique = item.unique ? "->unique()" : "";
    const length = item.length ? `, ${item.length}` : "";
    const isFk = item.type === "foreignIdFor";
    const fkName = item.name.slice(0, -3);
    const modelClass = isFk ? `${Case.pascal(fkName)}::class, ` : "";
    const constrained = isFk ? `->constrained()` : "";
    const arrow = `${primary}${nullable}${unique}${constrained}`;
    return `${pre}$table->${item.type}(${modelClass}'${item.name}'${length})${arrow};
            `;
  }, "")}
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('${snakeMany(modelName)}');
    }
};`;
  const routes = (modelName, migrationData = []) => `<?php
use App\\Http\\Controllers\\${pascalOne(modelName)}Controller;

Route::controller(${pascalOne(modelName)}Controller::class)->middleware(['auth', 'verified'])->group(function () {
    Route::get('/${snakeMany(modelName)}', 'index')->name('${snakeMany(modelName)}.index');
    Route::post('/${snakeMany(modelName)}', 'store')->name('${snakeMany(modelName)}.store');
    Route::get('/${snakeMany(modelName)}/create', 'create')->name('${snakeMany(modelName)}.create');
    Route::get('/${snakeMany(modelName)}/{${snakeOne(modelName)}}', 'show')->name('${snakeMany(modelName)}.show');
    Route::get('/${snakeMany(modelName)}/{${snakeOne(modelName)}}/edit', 'edit')->name('${snakeMany(modelName)}.edit');
    Route::patch('/${snakeMany(modelName)}/{${snakeOne(modelName)}}', 'update')->name('${snakeMany(modelName)}.update');
    Route::delete('/${snakeMany(modelName)}/{${snakeOne(modelName)}}', 'destroy')->name('${snakeMany(modelName)}.destroy');
});`;
  const controller = (modelName, migrationData = []) => `<?php

namespace App\\Http\\Controllers;

use Illuminate\\Http\\Request;
use Illuminate\\Http\\RedirectResponse;
use App\\Http\\Requests\\Store${pascalOne(modelName)}Request;
use App\\Http\\Requests\\Update${pascalOne(modelName)}Request;
use Inertia\\Inertia;
use Inertia\\Response;
use App\\Models\\${pascalOne(modelName)};

class ${pascalOne(modelName)}Controller extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $${snakeMany(modelName)} = ${pascalOne(modelName)}::paginate(10);

        return Inertia::render('${pascalOne(modelName)}/Index', [
            '${snakeMany(modelName)}' => $${snakeMany(modelName)},
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('${pascalOne(modelName)}/Create');
    }

    /**
     * Display the specified resource.
     */
    public function show(${pascalOne(modelName)} $${snakeOne(modelName)}): Response
    {
        return Inertia::render('${pascalOne(modelName)}/Show', ['${snakeOne(modelName)}' => $${snakeOne(modelName)}]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Store${pascalOne(modelName)}Request $request): RedirectResponse
    {
        $validated = $request->validated();
        ${pascalOne(modelName)}::create($request->all());
        return Redirect::route('${snakeMany(modelName)}.index');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(${pascalOne(modelName)} $${snakeOne(modelName)}): Response {
        return Inertia::render('${pascalOne(modelName)}/Edit', ['$${snakeOne(modelName)}' => $${snakeOne(modelName)}]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Update${pascalOne(modelName)}Request $request, ${pascalOne(modelName)} $${snakeOne(modelName)}): RedirectResponse
    {
        $validated = $request->validated();
        $${snakeOne(modelName)}->update($request->all());
        return Redirect::route('${snakeMany(modelName)}.show', $${snakeOne(modelName)}->id);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(${pascalOne(modelName)} $${snakeOne(modelName)}): RedirectResponse
    {
        $${snakeOne(modelName)}->delete();
        return Redirect::route('${snakeMany(modelName)}.index');
    }
}`;
  const validationRequest = (modelName, migrationData = [], classname) => `<?php

namespace App\\Http\\Requests;

use Illuminate\\Foundation\\Http\\FormRequest;

class ${classname}${pascalOne(modelName)}Request extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \\Illuminate\\Contracts\\Validation\\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            ${migrationData.reduce((pre, item) => {
    const nullable = item.nullable ? "|nullable" : "|required";
    const length = item.length ? `|max:${item.length}` : "";
    const unique = item.unique ? `|unique:${snakeMany(modelName)}` : "";
    const isDate = item.type === "timestamp";
    const isNumeric = item.type === "integer";
    const integer = isNumeric ? "|numeric" : "";
    const date = isDate ? "|date" : "";
    const validate = `${nullable}${date}${integer}${length}${unique}`;
    return `${pre}'${item.name}' => '${(validate || "|").slice(1)}',
            `;
  }, "")}
        ];
    }
}`;
  const storeRequest = (modelName, data = []) => validationRequest(modelName, data, "Store");
  const updateRequest = (modelName, data = []) => validationRequest(modelName, data, "Update");
  return {
    model,
    migration,
    routes,
    controller,
    storeRequest,
    updateRequest
  };
};
const { Panel } = Collapse;
function Database({ auth }) {
  const { handleFileUpload, data: responseData, handleReset, contextHolder, beforeUpload } = useUploadFile(route("admin.excel.database_import"));
  const { data, post, reset, setData, processing, errors } = useForm({
    excel_file: null
  });
  const { migration, model, routes, controller, storeRequest, updateRequest } = useDatabaseMigration();
  const [activeTabKey, setActiveTabKey] = useState(10);
  const onTabChange = (key) => {
    setActiveTabKey(key);
  };
  const csrfToken = getMeta("csrf-token");
  const submit = (e) => {
    e.preventDefault();
    post(route("admin.excel.database_import"), {
      onFinish: () => reset("excel_file")
    });
  };
  const copyBlockDefaultProps = {
    showLineNumbers: true,
    startingLineNumber: 1,
    wrapLines: false,
    theme: dracula,
    codeBlock: false
  };
  const tabs = Object.keys((responseData == null ? void 0 : responseData.data) || []).map((key, value) => {
    var _a;
    return {
      label: key,
      value,
      modelName: key,
      migrationData: (((_a = responseData == null ? void 0 : responseData.data) == null ? void 0 : _a[key]) || []).filter((item) => Boolean(item.name))
    };
  });
  const tabInsideTitle = [
    {
      key: 10,
      label: "Migration"
    },
    {
      key: 11,
      label: "Model"
    },
    {
      key: 12,
      label: "Route"
    },
    {
      key: 13,
      label: "Controller"
    },
    {
      key: 14,
      label: "Store Request"
    },
    {
      key: 15,
      label: "Update Request"
    }
  ];
  const tabInside = [
    {
      key: 10,
      label: "Migration",
      functionName: migration
    },
    {
      key: 11,
      label: "Model",
      functionName: model
    },
    {
      key: 12,
      label: "Route",
      functionName: routes
    },
    {
      key: 13,
      label: "Controller",
      functionName: controller
    },
    {
      key: 14,
      label: "Store Request",
      functionName: storeRequest
    },
    {
      key: 15,
      label: "Update Request",
      functionName: updateRequest
    }
  ];
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      user: auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight", children: "Database" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Database" }),
        contextHolder,
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsx(AdminHeader, {}),
          /* @__PURE__ */ jsxs(Card, { children: [
            /* @__PURE__ */ jsx(CardHeader, { title: "Excel Database Migration" }),
            /* @__PURE__ */ jsxs(
              "form",
              {
                onSubmit: submit,
                action: "/a/excel/database",
                method: "POST",
                encType: "multipart/form-data",
                children: [
                  /* @__PURE__ */ jsx("input", { type: "hidden", name: "_token", value: csrfToken }),
                  /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
                    Upload,
                    {
                      name: "excel_file",
                      onChange: handleFileUpload,
                      beforeUpload,
                      action: route("admin.excel.database_import"),
                      accept: ".xls, .xlsx",
                      children: /* @__PURE__ */ jsx(Button, { icon: /* @__PURE__ */ jsx(UploadOutlined, {}), children: "Click to Upload" })
                    }
                  ) })
                ]
              }
            )
          ] }),
          responseData ? /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(
            Tabs,
            {
              tabPosition: "left",
              items: tabs.map(({ label, value, migrationData, modelName }) => {
                var _a, _b;
                return {
                  label,
                  key: value,
                  children: /* @__PURE__ */ jsx(
                    Card,
                    {
                      style: { width: "100%" },
                      tabList: tabInsideTitle,
                      activeTabKey,
                      onTabChange,
                      tabProps: {
                        size: "middle"
                      },
                      children: /* @__PURE__ */ jsx(Collapse, { defaultActiveKey: ["1"], children: /* @__PURE__ */ jsx(Panel, { header: "Code", children: /* @__PURE__ */ jsx(
                        CopyBlock,
                        {
                          ...copyBlockDefaultProps,
                          language: "php",
                          text: (_b = (_a = tabInside.filter((item) => item.key === activeTabKey)) == null ? void 0 : _a[0]) == null ? void 0 : _b.functionName(modelName, migrationData)
                        }
                      ) }, "1") })
                    }
                  )
                };
              })
            }
          ) }) : null
        ] }) })
      ]
    }
  );
}
export {
  Database as default
};
