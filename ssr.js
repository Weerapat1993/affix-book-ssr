import { jsx } from "react/jsx-runtime";
import ReactDOMServer from "react-dom/server";
import { createInertiaApp } from "@inertiajs/react";
import createServer from "@inertiajs/react/server";
import { useMemo } from "react";
import { Provider } from "react-redux";
import { createSlice, buildCreateSlice, asyncThunkCreator, createAsyncThunk, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import axios from "axios";
import { createCache, extractStyle, StyleProvider } from "@ant-design/cssinjs";
import { App } from "antd";
async function resolvePageComponent(path, pages) {
  for (const p2 of Array.isArray(path) ? path : [path]) {
    const page = pages[p2];
    if (typeof page === "undefined") {
      continue;
    }
    return typeof page === "function" ? page() : page;
  }
  throw new Error(`Page not found: ${path}`);
}
function t() {
  return t = Object.assign ? Object.assign.bind() : function(t4) {
    for (var e2 = 1; e2 < arguments.length; e2++) {
      var r2 = arguments[e2];
      for (var n2 in r2) Object.prototype.hasOwnProperty.call(r2, n2) && (t4[n2] = r2[n2]);
    }
    return t4;
  }, t.apply(this, arguments);
}
var e = String.prototype.replace, r = /%20/g, n = "RFC3986", o = { default: n, formatters: { RFC1738: function(t4) {
  return e.call(t4, r, "+");
}, RFC3986: function(t4) {
  return String(t4);
} }, RFC1738: "RFC1738", RFC3986: n }, i = Object.prototype.hasOwnProperty, u = Array.isArray, a = function() {
  for (var t4 = [], e2 = 0; e2 < 256; ++e2) t4.push("%" + ((e2 < 16 ? "0" : "") + e2.toString(16)).toUpperCase());
  return t4;
}(), s = function(t4, e2) {
  for (var r2 = e2 && e2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, n2 = 0; n2 < t4.length; ++n2) void 0 !== t4[n2] && (r2[n2] = t4[n2]);
  return r2;
}, f = { arrayToObject: s, assign: function(t4, e2) {
  return Object.keys(e2).reduce(function(t5, r2) {
    return t5[r2] = e2[r2], t5;
  }, t4);
}, combine: function(t4, e2) {
  return [].concat(t4, e2);
}, compact: function(t4) {
  for (var e2 = [{ obj: { o: t4 }, prop: "o" }], r2 = [], n2 = 0; n2 < e2.length; ++n2) for (var o2 = e2[n2], i2 = o2.obj[o2.prop], a2 = Object.keys(i2), s2 = 0; s2 < a2.length; ++s2) {
    var f2 = a2[s2], c2 = i2[f2];
    "object" == typeof c2 && null !== c2 && -1 === r2.indexOf(c2) && (e2.push({ obj: i2, prop: f2 }), r2.push(c2));
  }
  return function(t5) {
    for (; t5.length > 1; ) {
      var e3 = t5.pop(), r3 = e3.obj[e3.prop];
      if (u(r3)) {
        for (var n3 = [], o3 = 0; o3 < r3.length; ++o3) void 0 !== r3[o3] && n3.push(r3[o3]);
        e3.obj[e3.prop] = n3;
      }
    }
  }(e2), t4;
}, decode: function(t4, e2, r2) {
  var n2 = t4.replace(/\+/g, " ");
  if ("iso-8859-1" === r2) return n2.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n2);
  } catch (t5) {
    return n2;
  }
}, encode: function(t4, e2, r2, n2, i2) {
  if (0 === t4.length) return t4;
  var u2 = t4;
  if ("symbol" == typeof t4 ? u2 = Symbol.prototype.toString.call(t4) : "string" != typeof t4 && (u2 = String(t4)), "iso-8859-1" === r2) return escape(u2).replace(/%u[0-9a-f]{4}/gi, function(t5) {
    return "%26%23" + parseInt(t5.slice(2), 16) + "%3B";
  });
  for (var s2 = "", f2 = 0; f2 < u2.length; ++f2) {
    var c2 = u2.charCodeAt(f2);
    45 === c2 || 46 === c2 || 95 === c2 || 126 === c2 || c2 >= 48 && c2 <= 57 || c2 >= 65 && c2 <= 90 || c2 >= 97 && c2 <= 122 || i2 === o.RFC1738 && (40 === c2 || 41 === c2) ? s2 += u2.charAt(f2) : c2 < 128 ? s2 += a[c2] : c2 < 2048 ? s2 += a[192 | c2 >> 6] + a[128 | 63 & c2] : c2 < 55296 || c2 >= 57344 ? s2 += a[224 | c2 >> 12] + a[128 | c2 >> 6 & 63] + a[128 | 63 & c2] : (c2 = 65536 + ((1023 & c2) << 10 | 1023 & u2.charCodeAt(f2 += 1)), s2 += a[240 | c2 >> 18] + a[128 | c2 >> 12 & 63] + a[128 | c2 >> 6 & 63] + a[128 | 63 & c2]);
  }
  return s2;
}, isBuffer: function(t4) {
  return !(!t4 || "object" != typeof t4 || !(t4.constructor && t4.constructor.isBuffer && t4.constructor.isBuffer(t4)));
}, isRegExp: function(t4) {
  return "[object RegExp]" === Object.prototype.toString.call(t4);
}, maybeMap: function(t4, e2) {
  if (u(t4)) {
    for (var r2 = [], n2 = 0; n2 < t4.length; n2 += 1) r2.push(e2(t4[n2]));
    return r2;
  }
  return e2(t4);
}, merge: function t2(e2, r2, n2) {
  if (!r2) return e2;
  if ("object" != typeof r2) {
    if (u(e2)) e2.push(r2);
    else {
      if (!e2 || "object" != typeof e2) return [e2, r2];
      (n2 && (n2.plainObjects || n2.allowPrototypes) || !i.call(Object.prototype, r2)) && (e2[r2] = true);
    }
    return e2;
  }
  if (!e2 || "object" != typeof e2) return [e2].concat(r2);
  var o2 = e2;
  return u(e2) && !u(r2) && (o2 = s(e2, n2)), u(e2) && u(r2) ? (r2.forEach(function(r3, o3) {
    if (i.call(e2, o3)) {
      var u2 = e2[o3];
      u2 && "object" == typeof u2 && r3 && "object" == typeof r3 ? e2[o3] = t2(u2, r3, n2) : e2.push(r3);
    } else e2[o3] = r3;
  }), e2) : Object.keys(r2).reduce(function(e3, o3) {
    var u2 = r2[o3];
    return e3[o3] = i.call(e3, o3) ? t2(e3[o3], u2, n2) : u2, e3;
  }, o2);
} }, c = Object.prototype.hasOwnProperty, l = { brackets: function(t4) {
  return t4 + "[]";
}, comma: "comma", indices: function(t4, e2) {
  return t4 + "[" + e2 + "]";
}, repeat: function(t4) {
  return t4;
} }, p = Array.isArray, h = String.prototype.split, y = Array.prototype.push, d = function(t4, e2) {
  y.apply(t4, p(e2) ? e2 : [e2]);
}, b = Date.prototype.toISOString, g = o.default, m = { addQueryPrefix: false, allowDots: false, charset: "utf-8", charsetSentinel: false, delimiter: "&", encode: true, encoder: f.encode, encodeValuesOnly: false, format: g, formatter: o.formatters[g], indices: false, serializeDate: function(t4) {
  return b.call(t4);
}, skipNulls: false, strictNullHandling: false }, v = function t3(e2, r2, n2, o2, i2, u2, a2, s2, c2, l2, y2, b2, g2, v2) {
  var j2, w2 = e2;
  if ("function" == typeof a2 ? w2 = a2(r2, w2) : w2 instanceof Date ? w2 = l2(w2) : "comma" === n2 && p(w2) && (w2 = f.maybeMap(w2, function(t4) {
    return t4 instanceof Date ? l2(t4) : t4;
  })), null === w2) {
    if (o2) return u2 && !g2 ? u2(r2, m.encoder, v2, "key", y2) : r2;
    w2 = "";
  }
  if ("string" == typeof (j2 = w2) || "number" == typeof j2 || "boolean" == typeof j2 || "symbol" == typeof j2 || "bigint" == typeof j2 || f.isBuffer(w2)) {
    if (u2) {
      var $2 = g2 ? r2 : u2(r2, m.encoder, v2, "key", y2);
      if ("comma" === n2 && g2) {
        for (var O2 = h.call(String(w2), ","), E2 = "", S2 = 0; S2 < O2.length; ++S2) E2 += (0 === S2 ? "" : ",") + b2(u2(O2[S2], m.encoder, v2, "value", y2));
        return [b2($2) + "=" + E2];
      }
      return [b2($2) + "=" + b2(u2(w2, m.encoder, v2, "value", y2))];
    }
    return [b2(r2) + "=" + b2(String(w2))];
  }
  var R2, x2 = [];
  if (void 0 === w2) return x2;
  if ("comma" === n2 && p(w2)) R2 = [{ value: w2.length > 0 ? w2.join(",") || null : void 0 }];
  else if (p(a2)) R2 = a2;
  else {
    var N2 = Object.keys(w2);
    R2 = s2 ? N2.sort(s2) : N2;
  }
  for (var T2 = 0; T2 < R2.length; ++T2) {
    var k = R2[T2], C = "object" == typeof k && void 0 !== k.value ? k.value : w2[k];
    if (!i2 || null !== C) {
      var _ = p(w2) ? "function" == typeof n2 ? n2(r2, k) : r2 : r2 + (c2 ? "." + k : "[" + k + "]");
      d(x2, t3(C, _, n2, o2, i2, u2, a2, s2, c2, l2, y2, b2, g2, v2));
    }
  }
  return x2;
}, j = Object.prototype.hasOwnProperty, w = Array.isArray, $ = { allowDots: false, allowPrototypes: false, arrayLimit: 20, charset: "utf-8", charsetSentinel: false, comma: false, decoder: f.decode, delimiter: "&", depth: 5, ignoreQueryPrefix: false, interpretNumericEntities: false, parameterLimit: 1e3, parseArrays: true, plainObjects: false, strictNullHandling: false }, O = function(t4) {
  return t4.replace(/&#(\d+);/g, function(t5, e2) {
    return String.fromCharCode(parseInt(e2, 10));
  });
}, E = function(t4, e2) {
  return t4 && "string" == typeof t4 && e2.comma && t4.indexOf(",") > -1 ? t4.split(",") : t4;
}, S = function(t4, e2, r2, n2) {
  if (t4) {
    var o2 = r2.allowDots ? t4.replace(/\.([^.[]+)/g, "[$1]") : t4, i2 = /(\[[^[\]]*])/g, u2 = r2.depth > 0 && /(\[[^[\]]*])/.exec(o2), a2 = u2 ? o2.slice(0, u2.index) : o2, s2 = [];
    if (a2) {
      if (!r2.plainObjects && j.call(Object.prototype, a2) && !r2.allowPrototypes) return;
      s2.push(a2);
    }
    for (var f2 = 0; r2.depth > 0 && null !== (u2 = i2.exec(o2)) && f2 < r2.depth; ) {
      if (f2 += 1, !r2.plainObjects && j.call(Object.prototype, u2[1].slice(1, -1)) && !r2.allowPrototypes) return;
      s2.push(u2[1]);
    }
    return u2 && s2.push("[" + o2.slice(u2.index) + "]"), function(t5, e3, r3, n3) {
      for (var o3 = n3 ? e3 : E(e3, r3), i3 = t5.length - 1; i3 >= 0; --i3) {
        var u3, a3 = t5[i3];
        if ("[]" === a3 && r3.parseArrays) u3 = [].concat(o3);
        else {
          u3 = r3.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
          var s3 = "[" === a3.charAt(0) && "]" === a3.charAt(a3.length - 1) ? a3.slice(1, -1) : a3, f3 = parseInt(s3, 10);
          r3.parseArrays || "" !== s3 ? !isNaN(f3) && a3 !== s3 && String(f3) === s3 && f3 >= 0 && r3.parseArrays && f3 <= r3.arrayLimit ? (u3 = [])[f3] = o3 : "__proto__" !== s3 && (u3[s3] = o3) : u3 = { 0: o3 };
        }
        o3 = u3;
      }
      return o3;
    }(s2, e2, r2, n2);
  }
}, R = function(t4, e2) {
  var r2 = /* @__PURE__ */ function(t5) {
    return $;
  }();
  if ("" === t4 || null == t4) return r2.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var n2 = "string" == typeof t4 ? function(t5, e3) {
    var r3, n3 = {}, o3 = (e3.ignoreQueryPrefix ? t5.replace(/^\?/, "") : t5).split(e3.delimiter, Infinity === e3.parameterLimit ? void 0 : e3.parameterLimit), i3 = -1, u3 = e3.charset;
    if (e3.charsetSentinel) for (r3 = 0; r3 < o3.length; ++r3) 0 === o3[r3].indexOf("utf8=") && ("utf8=%E2%9C%93" === o3[r3] ? u3 = "utf-8" : "utf8=%26%2310003%3B" === o3[r3] && (u3 = "iso-8859-1"), i3 = r3, r3 = o3.length);
    for (r3 = 0; r3 < o3.length; ++r3) if (r3 !== i3) {
      var a3, s3, c2 = o3[r3], l2 = c2.indexOf("]="), p2 = -1 === l2 ? c2.indexOf("=") : l2 + 1;
      -1 === p2 ? (a3 = e3.decoder(c2, $.decoder, u3, "key"), s3 = e3.strictNullHandling ? null : "") : (a3 = e3.decoder(c2.slice(0, p2), $.decoder, u3, "key"), s3 = f.maybeMap(E(c2.slice(p2 + 1), e3), function(t6) {
        return e3.decoder(t6, $.decoder, u3, "value");
      })), s3 && e3.interpretNumericEntities && "iso-8859-1" === u3 && (s3 = O(s3)), c2.indexOf("[]=") > -1 && (s3 = w(s3) ? [s3] : s3), n3[a3] = j.call(n3, a3) ? f.combine(n3[a3], s3) : s3;
    }
    return n3;
  }(t4, r2) : t4, o2 = r2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i2 = Object.keys(n2), u2 = 0; u2 < i2.length; ++u2) {
    var a2 = i2[u2], s2 = S(a2, n2[a2], r2, "string" == typeof t4);
    o2 = f.merge(o2, s2, r2);
  }
  return f.compact(o2);
};
class x {
  constructor(t4, e2, r2) {
    var n2, o2;
    this.name = t4, this.definition = e2, this.bindings = null != (n2 = e2.bindings) ? n2 : {}, this.wheres = null != (o2 = e2.wheres) ? o2 : {}, this.config = r2;
  }
  get template() {
    const t4 = `${this.origin}/${this.definition.uri}`.replace(/\/+$/, "");
    return "" === t4 ? "/" : t4;
  }
  get origin() {
    return this.config.absolute ? this.definition.domain ? `${this.config.url.match(/^\w+:\/\//)[0]}${this.definition.domain}${this.config.port ? `:${this.config.port}` : ""}` : this.config.url : "";
  }
  get parameterSegments() {
    var t4, e2;
    return null != (t4 = null == (e2 = this.template.match(/{[^}?]+\??}/g)) ? void 0 : e2.map((t5) => ({ name: t5.replace(/{|\??}/g, ""), required: !/\?}$/.test(t5) }))) ? t4 : [];
  }
  matchesUrl(t4) {
    if (!this.definition.methods.includes("GET")) return false;
    const e2 = this.template.replace(/(\/?){([^}?]*)(\??)}/g, (t5, e3, r3, n3) => {
      var o3;
      const i2 = `(?<${r3}>${(null == (o3 = this.wheres[r3]) ? void 0 : o3.replace(/(^\^)|(\$$)/g, "")) || "[^/?]+"})`;
      return n3 ? `(${e3}${i2})?` : `${e3}${i2}`;
    }).replace(/^\w+:\/\//, ""), [r2, n2] = t4.replace(/^\w+:\/\//, "").split("?"), o2 = new RegExp(`^${e2}/?$`).exec(decodeURI(r2));
    if (o2) {
      for (const t5 in o2.groups) o2.groups[t5] = "string" == typeof o2.groups[t5] ? decodeURIComponent(o2.groups[t5]) : o2.groups[t5];
      return { params: o2.groups, query: R(n2) };
    }
    return false;
  }
  compile(t4) {
    return this.parameterSegments.length ? this.template.replace(/{([^}?]+)(\??)}/g, (e2, r2, n2) => {
      var o2, i2;
      if (!n2 && [null, void 0].includes(t4[r2])) throw new Error(`Ziggy error: '${r2}' parameter is required for route '${this.name}'.`);
      if (this.wheres[r2] && !new RegExp(`^${n2 ? `(${this.wheres[r2]})?` : this.wheres[r2]}$`).test(null != (i2 = t4[r2]) ? i2 : "")) throw new Error(`Ziggy error: '${r2}' parameter '${t4[r2]}' does not match required format '${this.wheres[r2]}' for route '${this.name}'.`);
      return encodeURI(null != (o2 = t4[r2]) ? o2 : "").replace(/%7C/g, "|").replace(/%25/g, "%").replace(/\$/g, "%24");
    }).replace(this.config.absolute ? /(\.[^/]+?)(\/\/)/ : /(^)(\/\/)/, "$1/").replace(/\/+$/, "") : this.template;
  }
}
class N extends String {
  constructor(e2, r2, n2 = true, o2) {
    if (super(), this.t = null != o2 ? o2 : "undefined" != typeof Ziggy ? Ziggy : null == globalThis ? void 0 : globalThis.Ziggy, this.t = t({}, this.t, { absolute: n2 }), e2) {
      if (!this.t.routes[e2]) throw new Error(`Ziggy error: route '${e2}' is not in the route list.`);
      this.i = new x(e2, this.t.routes[e2], this.t), this.u = this.l(r2);
    }
  }
  toString() {
    const e2 = Object.keys(this.u).filter((t4) => !this.i.parameterSegments.some(({ name: e3 }) => e3 === t4)).filter((t4) => "_query" !== t4).reduce((e3, r2) => t({}, e3, { [r2]: this.u[r2] }), {});
    return this.i.compile(this.u) + function(t4, e3) {
      var r2, n2 = t4, i2 = function(t5) {
        if (!t5) return m;
        if (null != t5.encoder && "function" != typeof t5.encoder) throw new TypeError("Encoder has to be a function.");
        var e4 = t5.charset || m.charset;
        if (void 0 !== t5.charset && "utf-8" !== t5.charset && "iso-8859-1" !== t5.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var r3 = o.default;
        if (void 0 !== t5.format) {
          if (!c.call(o.formatters, t5.format)) throw new TypeError("Unknown format option provided.");
          r3 = t5.format;
        }
        var n3 = o.formatters[r3], i3 = m.filter;
        return ("function" == typeof t5.filter || p(t5.filter)) && (i3 = t5.filter), { addQueryPrefix: "boolean" == typeof t5.addQueryPrefix ? t5.addQueryPrefix : m.addQueryPrefix, allowDots: void 0 === t5.allowDots ? m.allowDots : !!t5.allowDots, charset: e4, charsetSentinel: "boolean" == typeof t5.charsetSentinel ? t5.charsetSentinel : m.charsetSentinel, delimiter: void 0 === t5.delimiter ? m.delimiter : t5.delimiter, encode: "boolean" == typeof t5.encode ? t5.encode : m.encode, encoder: "function" == typeof t5.encoder ? t5.encoder : m.encoder, encodeValuesOnly: "boolean" == typeof t5.encodeValuesOnly ? t5.encodeValuesOnly : m.encodeValuesOnly, filter: i3, format: r3, formatter: n3, serializeDate: "function" == typeof t5.serializeDate ? t5.serializeDate : m.serializeDate, skipNulls: "boolean" == typeof t5.skipNulls ? t5.skipNulls : m.skipNulls, sort: "function" == typeof t5.sort ? t5.sort : null, strictNullHandling: "boolean" == typeof t5.strictNullHandling ? t5.strictNullHandling : m.strictNullHandling };
      }(e3);
      "function" == typeof i2.filter ? n2 = (0, i2.filter)("", n2) : p(i2.filter) && (r2 = i2.filter);
      var u2 = [];
      if ("object" != typeof n2 || null === n2) return "";
      var a2 = l[e3 && e3.arrayFormat in l ? e3.arrayFormat : e3 && "indices" in e3 ? e3.indices ? "indices" : "repeat" : "indices"];
      r2 || (r2 = Object.keys(n2)), i2.sort && r2.sort(i2.sort);
      for (var s2 = 0; s2 < r2.length; ++s2) {
        var f2 = r2[s2];
        i2.skipNulls && null === n2[f2] || d(u2, v(n2[f2], f2, a2, i2.strictNullHandling, i2.skipNulls, i2.encode ? i2.encoder : null, i2.filter, i2.sort, i2.allowDots, i2.serializeDate, i2.format, i2.formatter, i2.encodeValuesOnly, i2.charset));
      }
      var h2 = u2.join(i2.delimiter), y2 = true === i2.addQueryPrefix ? "?" : "";
      return i2.charsetSentinel && (y2 += "iso-8859-1" === i2.charset ? "utf8=%26%2310003%3B&" : "utf8=%E2%9C%93&"), h2.length > 0 ? y2 + h2 : "";
    }(t({}, e2, this.u._query), { addQueryPrefix: true, arrayFormat: "indices", encodeValuesOnly: true, skipNulls: true, encoder: (t4, e3) => "boolean" == typeof t4 ? Number(t4) : e3(t4) });
  }
  p(e2) {
    e2 ? this.t.absolute && e2.startsWith("/") && (e2 = this.h().host + e2) : e2 = this.m();
    let r2 = {};
    const [n2, o2] = Object.entries(this.t.routes).find(([t4, n3]) => r2 = new x(t4, n3, this.t).matchesUrl(e2)) || [void 0, void 0];
    return t({ name: n2 }, r2, { route: o2 });
  }
  m() {
    const { host: t4, pathname: e2, search: r2 } = this.h();
    return (this.t.absolute ? t4 + e2 : e2.replace(this.t.url.replace(/^\w*:\/\/[^/]+/, ""), "").replace(/^\/+/, "/")) + r2;
  }
  current(e2, r2) {
    const { name: n2, params: o2, query: i2, route: u2 } = this.p();
    if (!e2) return n2;
    const a2 = new RegExp(`^${e2.replace(/\./g, "\\.").replace(/\*/g, ".*")}$`).test(n2);
    if ([null, void 0].includes(r2) || !a2) return a2;
    const s2 = new x(n2, u2, this.t);
    r2 = this.l(r2, s2);
    const f2 = t({}, o2, i2);
    if (Object.values(r2).every((t4) => !t4) && !Object.values(f2).some((t4) => void 0 !== t4)) return true;
    const c2 = (t4, e3) => Object.entries(t4).every(([t5, r3]) => Array.isArray(r3) && Array.isArray(e3[t5]) ? r3.every((r4) => e3[t5].includes(r4)) : "object" == typeof r3 && "object" == typeof e3[t5] && null !== r3 && null !== e3[t5] ? c2(r3, e3[t5]) : e3[t5] == r3);
    return c2(r2, f2);
  }
  h() {
    var t4, e2, r2, n2, o2, i2;
    const { host: u2 = "", pathname: a2 = "", search: s2 = "" } = "undefined" != typeof window ? window.location : {};
    return { host: null != (t4 = null == (e2 = this.t.location) ? void 0 : e2.host) ? t4 : u2, pathname: null != (r2 = null == (n2 = this.t.location) ? void 0 : n2.pathname) ? r2 : a2, search: null != (o2 = null == (i2 = this.t.location) ? void 0 : i2.search) ? o2 : s2 };
  }
  get params() {
    const { params: e2, query: r2 } = this.p();
    return t({}, e2, r2);
  }
  get routeParams() {
    return this.p().params;
  }
  get queryParams() {
    return this.p().query;
  }
  has(t4) {
    return Object.keys(this.t.routes).includes(t4);
  }
  l(e2 = {}, r2 = this.i) {
    null != e2 || (e2 = {}), e2 = ["string", "number"].includes(typeof e2) ? [e2] : e2;
    const n2 = r2.parameterSegments.filter(({ name: t4 }) => !this.t.defaults[t4]);
    return Array.isArray(e2) ? e2 = e2.reduce((e3, r3, o2) => t({}, e3, n2[o2] ? { [n2[o2].name]: r3 } : "object" == typeof r3 ? r3 : { [r3]: "" }), {}) : 1 !== n2.length || e2[n2[0].name] || !e2.hasOwnProperty(Object.values(r2.bindings)[0]) && !e2.hasOwnProperty("id") || (e2 = { [n2[0].name]: e2 }), t({}, this.v(r2), this.j(e2, r2));
  }
  v(e2) {
    return e2.parameterSegments.filter(({ name: t4 }) => this.t.defaults[t4]).reduce((e3, { name: r2 }, n2) => t({}, e3, { [r2]: this.t.defaults[r2] }), {});
  }
  j(e2, { bindings: r2, parameterSegments: n2 }) {
    return Object.entries(e2).reduce((e3, [o2, i2]) => {
      if (!i2 || "object" != typeof i2 || Array.isArray(i2) || !n2.some(({ name: t4 }) => t4 === o2)) return t({}, e3, { [o2]: i2 });
      if (!i2.hasOwnProperty(r2[o2])) {
        if (!i2.hasOwnProperty("id")) throw new Error(`Ziggy error: object passed as '${o2}' parameter is missing route model binding key '${r2[o2]}'.`);
        r2[o2] = "id";
      }
      return t({}, e3, { [o2]: i2[r2[o2]] });
    }, {});
  }
  valueOf() {
    return this.toString();
  }
}
function T(t4, e2, r2, n2) {
  const o2 = new N(t4, e2, r2, n2);
  return t4 ? o2.toString() : o2;
}
const initialState$7 = {
  loading: false,
  data: {
    token: null
  },
  error: null
};
const product = createSlice({
  name: "product",
  initialState: initialState$7,
  reducers: {
    init: () => initialState$7
  }
});
product.actions;
const productReducer = product.reducer;
const coupons = [
  {
    "id": 1,
    "campaign": "fixed_amount",
    "campaign_name": "Fixed amount",
    "category": "Coupon",
    "code": "FIX50",
    "discount": 50,
    "rules": ""
  },
  {
    "id": 2,
    "campaign": "percentage_discount",
    "campaign_name": "Percentage discount",
    "category": "Coupon",
    "code": "10PERCENT",
    "discount": 10,
    "rules": ""
  },
  {
    "id": 3,
    "campaign": "percentage_discount_by_item_category",
    "campaign_name": "Percentage discount by item category clothing",
    "category": "On Top",
    "code": "15CLOTHING",
    "discount": 15,
    "rules": "clothing"
  },
  {
    "id": 4,
    "campaign": "special_campaigns",
    "campaign_name": "Special Campaigns",
    "category": "Seasonal",
    "code": "SEASONAL300",
    "discount": 40,
    "every_price_discount": 300,
    "rules": ""
  },
  {
    "id": 5,
    "campaign": "percentage_discount_by_item_category",
    "campaign_name": "Percentage discount by item category electronics",
    "category": "On Top",
    "code": "10ELECTRONIC",
    "discount": 10,
    "rules": "electronic"
  }
];
const initialState$6 = {
  products: [],
  discount: 0,
  isCanUse: false,
  isUsePoint: false,
  isErrorCoupon: false,
  code: ""
};
const localStorageName = "cart_log";
const cart = createSlice({
  name: "cart",
  initialState: {
    data: initialState$6,
    isFetch: false
  },
  reducers: {
    getLocalStorage: (state) => {
      if (!state.isFetch) {
        const retrievedObject = localStorage.getItem(localStorageName);
        if (retrievedObject) {
          const data = JSON.parse(retrievedObject);
          state.data = data;
          state.isFetch = true;
        }
      }
    },
    addToCart: (state, action) => {
      const productId = action.payload.id;
      const isHaveProductInCart = state.data.products.filter((item) => item.product_id === productId).length > 0;
      if (isHaveProductInCart) {
        let item = state.data.products.find((i2) => i2.product_id === productId) || {};
        if (item.qty && item.qty > 0) {
          item.qty += 1;
        }
      } else {
        state.data.products = [
          ...state.data.products,
          {
            product_id: action.payload.id,
            name: action.payload.name,
            qty: 1,
            price: action.payload.price,
            category: action.payload.category
          }
        ];
      }
    },
    removeCart: (state, action) => {
      const productId = action.payload;
      const isHaveProductInCart = state.data.products.filter((item) => item.product_id === productId).length > 0;
      if (isHaveProductInCart) {
        state.data.products = state.data.products.filter((item) => item.product_id !== productId);
      }
    },
    usePoint: (state, action) => {
      const point = action.payload;
      const allPrice = state.data.products.reduce((pre, cur) => pre + cur.price * cur.qty, 0);
      const maxPoint = Math.floor(allPrice * 20 / 100);
      state.data.discount = point > maxPoint ? maxPoint : point;
      state.data.isCanUse = false;
      state.data.code = "";
      state.data.isErrorCoupon = false;
      state.data.isUsePoint = true;
      localStorage.setItem(localStorageName, JSON.stringify(state.data));
    },
    searchCoupon: (state, action) => {
      const code = action.payload;
      const coupon = coupons.find((item) => item.code === code);
      if (coupon == null ? void 0 : coupon.id) {
        const allPrice = state.data.products.reduce((pre, cur) => pre + cur.price * cur.qty, 0);
        let discount = 0;
        let rule = 0;
        switch (coupon == null ? void 0 : coupon.campaign) {
          case "fixed_amount":
            discount = (coupon == null ? void 0 : coupon.discount) || 0;
            break;
          case "percentage_discount":
            rule = allPrice * (coupon == null ? void 0 : coupon.discount) / 100;
            discount = rule;
            break;
          case "percentage_discount_by_item_category":
            const ruleType = coupon.rules;
            const ruleAllPrice = state.data.products.filter((item) => item.category === ruleType).reduce((pre, cur) => pre + cur.price * cur.qty, 0);
            rule = ruleAllPrice * (coupon == null ? void 0 : coupon.discount) / 100;
            discount = rule;
            break;
          case "special_campaigns":
            const everyPriceDiscount = (coupon == null ? void 0 : coupon.every_price_discount) || 0;
            const everyPriceDiscountMultiply = Math.floor(allPrice / everyPriceDiscount);
            rule = (coupon == null ? void 0 : coupon.discount) * everyPriceDiscountMultiply;
            discount = rule;
            break;
        }
        if (discount > 0) {
          state.data.discount = discount;
          state.data.isCanUse = true;
          state.data.code = code;
          state.data.isErrorCoupon = false;
        } else {
          state.data.isErrorCoupon = true;
          state.data.isCanUse = false;
        }
      } else {
        state.data.isErrorCoupon = true;
        state.data.isCanUse = false;
      }
      localStorage.setItem(localStorageName, JSON.stringify(state.data));
    },
    clearCoupon: (state) => {
      state.data.discount = 0;
      state.data.isCanUse = false;
      state.data.code = "";
      state.data.isErrorCoupon = false;
      state.data.isUsePoint = false;
      localStorage.setItem(localStorageName, JSON.stringify(state.data));
    }
  }
});
const {
  addToCart,
  removeCart,
  searchCoupon,
  clearCoupon,
  usePoint,
  getLocalStorage
} = cart.actions;
const removeManyCarts = (keys) => async (dispatch) => {
  keys.forEach((key) => {
    dispatch(removeCart(key));
  });
  dispatch(clearCoupon());
};
const addToCartThunk = (productId) => async (dispatch) => {
  dispatch(addToCart(productId));
  dispatch(clearCoupon());
};
const cartReducer = cart.reducer;
const createAppSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator }
});
const initialState$5 = {
  isFetch: false,
  isLoading: false,
  list: [],
  error: null
};
const user$1 = createAppSlice({
  name: "user",
  initialState: initialState$5,
  reducers: (create) => ({
    initializeUser: create.reducer((state) => {
    }),
    getUserList: create.asyncThunk(
      async (params) => {
        try {
          const res = await axios({
            url: route("admin.users.api.list"),
            method: "GET",
            params: params || {}
          });
          return (res == null ? void 0 : res.data) || {};
        } catch (e2) {
          console.error(e2);
          return e2;
        }
      },
      {
        pending: (state) => {
          state.isFetch = false;
          state.isLoading = true;
          state.error = null;
        },
        fulfilled: (state, action) => {
          var _a, _b;
          state.isFetch = true;
          state.isLoading = false;
          state.list = ((_b = (_a = action.payload) == null ? void 0 : _a.data) == null ? void 0 : _b.data) || [];
          state.error = null;
        },
        rejected: (state, action) => {
          state.isFetch = false;
          state.isLoading = false;
          state.error = action.payload;
        },
        settled: (state) => {
          state.isLoading = false;
        }
      }
    )
  })
});
const {
  initializeUser: initializeUser$2,
  getUserList
} = user$1.actions;
const userReducer = user$1.reducer;
const initialState$4 = {
  keys: {}
};
const getBookFollowing = createAsyncThunk("getBookFollowing", async (params) => {
  try {
    const res = await axios({
      url: route("api.books.following.id", params.bookId),
      method: "GET"
    });
    return (res == null ? void 0 : res.data) || {};
  } catch (e2) {
    console.error(e2);
    return e2;
  }
});
const clickFollowing = createAsyncThunk("clickFollowing", async (params) => {
  try {
    const res = await axios({
      url: route("api.books.following"),
      method: "GET",
      params: params || {}
    });
    return (res == null ? void 0 : res.data) || {};
  } catch (e2) {
    console.error(e2);
    return e2;
  }
});
const bookFollowing = createSlice({
  name: "bookFollowing",
  initialState: initialState$4,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBookFollowing.pending, (state, action) => {
      const { bookId } = action.meta.arg;
      if (state.keys[bookId]) {
        state.keys[bookId].isLoading = true;
        state.keys[bookId].error = null;
      } else {
        state.keys[bookId] = {
          isFetch: false,
          data: null,
          isLoading: true,
          error: null
        };
      }
    });
    builder.addCase(getBookFollowing.fulfilled, (state, action) => {
      const { bookId } = action.meta.arg;
      if (state.keys[bookId]) {
        state.keys[bookId].isFetch = true;
        state.keys[bookId].data = action.payload.data || null;
        state.keys[bookId].isLoading = false;
        state.keys[bookId].error = null;
      } else {
        state.keys[bookId] = {
          isFetch: true,
          data: action.payload.data || null,
          isLoading: false,
          error: null
        };
      }
    });
    builder.addCase(getBookFollowing.rejected, (state, action) => {
      const { bookId } = action.meta.arg;
      if (state.keys[bookId]) {
        state.keys[bookId].isFetch = false;
        state.keys[bookId].isLoading = false;
        state.keys[bookId].error = null;
      } else {
        state.keys[bookId] = {
          isFetch: false,
          data: null,
          isLoading: false,
          error: action.payload
        };
      }
    });
    builder.addCase(clickFollowing.pending, (state, action) => {
      const { bookId } = action.meta.arg;
      if (state.keys[bookId]) {
        state.keys[bookId].isLoading = true;
        state.keys[bookId].error = null;
      } else {
        state.keys[bookId] = {
          isFetch: false,
          data: null,
          isLoading: true,
          error: null
        };
      }
    });
    builder.addCase(clickFollowing.fulfilled, (state, action) => {
      const { bookId } = action.meta.arg;
      if (state.keys[bookId]) {
        state.keys[bookId].isFetch = true;
        state.keys[bookId].data = action.payload.data || null;
        state.keys[bookId].isLoading = false;
        state.keys[bookId].error = null;
      } else {
        state.keys[bookId] = {
          isFetch: true,
          data: action.payload.data || null,
          isLoading: false,
          error: null
        };
      }
    });
    builder.addCase(clickFollowing.rejected, (state, action) => {
      const { bookId } = action.meta.arg;
      if (state.keys[bookId]) {
        state.keys[bookId].isFetch = false;
        state.keys[bookId].isLoading = false;
        state.keys[bookId].error = null;
      } else {
        state.keys[bookId] = {
          isFetch: false,
          data: null,
          isLoading: false,
          error: action.payload
        };
      }
    });
  }
});
const bookFollowingReducer = bookFollowing.reducer;
const initialState$3 = {
  isFetch: false,
  isLoading: false,
  list: [],
  error: null
};
const user = createAppSlice({
  name: "notification",
  initialState: initialState$3,
  reducers: (create) => ({
    initializeUser: create.reducer((state) => {
    }),
    getNotificationList: create.asyncThunk(
      async (params) => {
        try {
          const res = await axios({
            url: route("api.notifications.list"),
            method: "GET",
            params: params || {}
          });
          return (res == null ? void 0 : res.data) || {};
        } catch (e2) {
          console.error(e2);
          return e2;
        }
      },
      {
        pending: (state) => {
          state.isFetch = false;
          state.isLoading = true;
          state.error = null;
        },
        fulfilled: (state, action) => {
          var _a, _b;
          state.isFetch = true;
          state.isLoading = false;
          state.list = ((_b = (_a = action.payload) == null ? void 0 : _a.data) == null ? void 0 : _b.data) || [];
          state.error = null;
        },
        rejected: (state, action) => {
          state.isFetch = false;
          state.isLoading = false;
          state.error = action.payload;
        },
        settled: (state) => {
          state.isLoading = false;
        }
      }
    )
  })
});
const {
  initializeUser: initializeUser$1,
  getNotificationList
} = user.actions;
const notificationReducer = user.reducer;
const initialState$2 = {
  isFetch: false,
  isLoading: false,
  data: null,
  error: null
};
const search = createAppSlice({
  name: "notification",
  initialState: initialState$2,
  reducers: (create) => ({
    initializeUser: create.reducer((state) => {
    }),
    getSearch: create.asyncThunk(
      async (params) => {
        try {
          const res = await axios({
            url: route("api.search.books"),
            method: "GET",
            params
          });
          return (res == null ? void 0 : res.data) || {};
        } catch (e2) {
          console.error(e2);
          return e2;
        }
      },
      {
        pending: (state) => {
          state.isFetch = false;
          state.isLoading = true;
          state.error = null;
        },
        fulfilled: (state, action) => {
          var _a;
          state.isFetch = true;
          state.isLoading = false;
          state.data = ((_a = action.payload) == null ? void 0 : _a.data) || {};
          state.error = null;
        },
        rejected: (state, action) => {
          state.isFetch = false;
          state.isLoading = false;
          state.error = action.payload;
        },
        settled: (state) => {
          state.isLoading = false;
        }
      }
    )
  })
});
const {
  initializeUser,
  getSearch
} = search.actions;
const searchReducer = search.reducer;
const defaultReduxData$1 = {
  isFetch: false,
  isLoading: false,
  isFlash: false,
  error: null,
  pages: {},
  keys: {},
  filters: {
    title: ""
  },
  pagination: {
    pageSize: 10,
    current: 1,
    total: 0,
    page: 1,
    lastPage: 1
  }
};
const initialState$1 = defaultReduxData$1;
const getWriterBookList = createAsyncThunk("getWriterBookList", async (params) => {
  try {
    const res = await axios({
      url: route("api.writer.list"),
      method: "GET",
      params
    });
    return (res == null ? void 0 : res.data) || {};
  } catch (e2) {
    console.error(e2);
    return e2;
  }
});
const getWriterBookListPublic = createAsyncThunk("getWriterBookListPublic", async (params) => {
  try {
    const res = await axios({
      url: route("api.writer.list.public", params.userId),
      method: "GET",
      params
    });
    return (res == null ? void 0 : res.data) || {};
  } catch (e2) {
    console.error(e2);
    return e2;
  }
});
const writer = createSlice({
  name: "writer",
  initialState: initialState$1,
  reducers: {
    resetFetch: (state, action) => {
      state.isFetch = false;
    },
    setFilterTitle: (state, action) => {
      const { title } = action.payload;
      state.filters.title = title || "";
    },
    setFlash: (state, action) => {
      state.isFlash = action.payload;
    },
    setPage: (state, action) => {
      const { page } = action.payload;
      state.pagination.page = page;
    },
    clearPages: (state, action) => {
      const { page } = action.payload;
      state.pagination.page = page;
      state.pages = {};
    },
    createDefaultDataByUserId: (state, action) => {
      const { userId } = action.payload;
      if (!state.keys[userId]) {
        state.keys[userId] = defaultReduxData$1;
      }
    },
    setPageByUserId: (state, action) => {
      const { page, userId } = action.payload;
      if (!state.keys[userId]) {
        state.keys[userId] = defaultReduxData$1;
      }
      state.keys[userId].pagination.page = page;
    },
    clearPagesByUserId: (state, action) => {
      const { page, userId } = action.payload;
      if (!state.keys[userId]) {
        state.keys[userId] = defaultReduxData$1;
      }
      state.keys[userId].pagination.page = page;
      state.keys[userId].pages = {};
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getWriterBookList.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getWriterBookList.fulfilled, (state, action) => {
      const { title, page } = action.meta.arg;
      const { data } = action.payload;
      state.isFetch = true;
      state.isLoading = false;
      state.error = null;
      state.filters.title = title || "";
      state.pages[page] = (data == null ? void 0 : data.data) || [];
      state.pagination.pageSize = (data == null ? void 0 : data.per_page) || 10;
      state.pagination.current = (data == null ? void 0 : data.current_page) || 1;
      state.pagination.total = (data == null ? void 0 : data.total) || 0;
      state.pagination.lastPage = data == null ? void 0 : data.last_page;
    });
    builder.addCase(getWriterBookList.rejected, (state, action) => {
      state.isFetch = false;
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(getWriterBookListPublic.pending, (state, action) => {
      const { userId } = action.meta.arg;
      if (!state.keys[userId]) {
        state.keys[userId] = defaultReduxData$1;
      }
      state.keys[userId].isLoading = true;
      state.keys[userId].error = null;
    });
    builder.addCase(getWriterBookListPublic.fulfilled, (state, action) => {
      const { title, page, userId } = action.meta.arg;
      const { data } = action.payload;
      if (!state.keys[userId]) {
        state.keys[userId] = defaultReduxData$1;
      }
      state.keys[userId].isFetch = true;
      state.keys[userId].isLoading = false;
      state.keys[userId].error = null;
      state.keys[userId].filters.title = title || "";
      state.keys[userId].pages[page] = (data == null ? void 0 : data.data) || [];
      state.keys[userId].pagination.pageSize = (data == null ? void 0 : data.per_page) || 10;
      state.keys[userId].pagination.current = (data == null ? void 0 : data.current_page) || 1;
      state.keys[userId].pagination.total = (data == null ? void 0 : data.total) || 0;
      state.keys[userId].pagination.lastPage = data == null ? void 0 : data.last_page;
    });
    builder.addCase(getWriterBookListPublic.rejected, (state, action) => {
      const { userId } = action.meta.arg;
      if (!state.keys[userId]) {
        state.keys[userId] = defaultReduxData$1;
      }
      state.keys[userId].isFetch = false;
      state.keys[userId].isLoading = false;
      state.keys[userId].error = action.payload;
    });
  }
});
const {
  resetFetch: resetFetch$1,
  setFilterTitle,
  setPage: setPage$1,
  setFlash,
  clearPages: clearPages$1,
  setPageByUserId,
  clearPagesByUserId,
  createDefaultDataByUserId
} = writer.actions;
const writerReducer = writer.reducer;
const defaultReduxData = {
  isFetch: false,
  isLoading: false,
  error: null,
  pages: {},
  filters: {
    categoryIds: []
  },
  pagination: {
    pageSize: 10,
    current: 1,
    total: 0,
    page: 1,
    lastPage: 1
  }
};
const initialState = {
  keys: {
    Manga: defaultReduxData,
    Novel: defaultReduxData,
    Comic: defaultReduxData,
    Oneshot: defaultReduxData
  }
};
const getBookListByType = createAsyncThunk("getBookListByType", async (params) => {
  try {
    const res = await axios({
      url: route("api.books.list"),
      method: "GET",
      params
    });
    return (res == null ? void 0 : res.data) || {};
  } catch (e2) {
    console.error(e2);
    return e2;
  }
});
const book = createSlice({
  name: "book",
  initialState,
  reducers: {
    resetFetch: (state, action) => {
      const { key } = action.payload;
      state.keys[key].isFetch = false;
    },
    setFilterCategory: (state, action) => {
      const { key, categoryIds } = action.payload;
      if (!state.keys[key]) {
        state.keys[key] = defaultReduxData;
      }
      state.keys[key].filters.categoryIds = categoryIds || [];
    },
    setPage: (state, action) => {
      const { key, page } = action.payload;
      if (!state.keys[key]) {
        state.keys[key] = defaultReduxData;
      }
      state.keys[key].pagination.page = page;
    },
    clearPages: (state, action) => {
      const { key, page } = action.payload;
      if (!state.keys[key]) {
        state.keys[key] = defaultReduxData;
      }
      state.keys[key].pagination.page = page;
      state.keys[key].pages = {};
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getBookListByType.pending, (state, action) => {
      const { key } = action.meta.arg;
      if (!state.keys[key]) {
        state.keys[key] = defaultReduxData;
      }
      state.keys[key].isLoading = true;
      state.keys[key].error = null;
    });
    builder.addCase(getBookListByType.fulfilled, (state, action) => {
      const { key, categoryIds, page } = action.meta.arg;
      const { data } = action.payload;
      if (!state.keys[key]) {
        state.keys[key] = defaultReduxData;
      }
      state.keys[key].isFetch = true;
      state.keys[key].isLoading = false;
      state.keys[key].error = null;
      state.keys[key].filters.categoryIds = categoryIds || [];
      state.keys[key].pages[page] = (data == null ? void 0 : data.data) || [];
      state.keys[key].pagination.pageSize = (data == null ? void 0 : data.per_page) || 10;
      state.keys[key].pagination.current = (data == null ? void 0 : data.current_page) || 1;
      state.keys[key].pagination.total = (data == null ? void 0 : data.total) || 0;
      state.keys[key].pagination.lastPage = (data == null ? void 0 : data.last_page) || 1;
    });
    builder.addCase(getBookListByType.rejected, (state, action) => {
      const { key } = action.meta.arg;
      if (!state.keys[key]) {
        state.keys[key] = defaultReduxData;
      }
      state.keys[key].isFetch = false;
      state.keys[key].isLoading = false;
      state.keys[key].error = action.payload;
    });
  }
});
const {
  resetFetch,
  setFilterCategory,
  setPage,
  clearPages
} = book.actions;
const bookReducer = book.reducer;
const store = configureStore({
  reducer: {
    productReducer,
    cartReducer,
    userReducer,
    bookFollowingReducer,
    notificationReducer,
    searchReducer,
    writerReducer,
    bookReducer
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat([])
});
setupListeners(store.dispatch);
const SsrProvider = ({ children }) => {
  const cache = useMemo(() => createCache(), []);
  extractStyle(cache);
  return /* @__PURE__ */ jsx(Provider, { store, children: /* @__PURE__ */ jsx(StyleProvider, { cache, children: /* @__PURE__ */ jsx(App, { children }) }) });
};
const appName = "Affixbook.net";
createServer(
  (page) => createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    title: (title) => `${title} - ${appName} | เว็บไซต์อ่านหนังสือออนไลน์`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, /* @__PURE__ */ Object.assign({ "./Pages/About.tsx": () => import("./assets/About-B0whmpoL.js"), "./Pages/Admin/Database.tsx": () => import("./assets/Database-Ahd9aI2P.js"), "./Pages/Admin/Index.tsx": () => import("./assets/Index-4JlaD6P1.js"), "./Pages/Admin/User/Index.tsx": () => import("./assets/Index-7zbrUwer.js"), "./Pages/Auth/ConfirmPassword.tsx": () => import("./assets/ConfirmPassword-Ck0ZZS9Q.js"), "./Pages/Auth/ForgotPassword.tsx": () => import("./assets/ForgotPassword-BGg07Ua9.js"), "./Pages/Auth/Login.tsx": () => import("./assets/Login-DGvGRmb_.js"), "./Pages/Auth/OAuthLogin.tsx": () => import("./assets/OAuthLogin-CDKQAz5y.js"), "./Pages/Auth/Register.tsx": () => import("./assets/Register-47PNJU0M.js"), "./Pages/Auth/ResetPassword.tsx": () => import("./assets/ResetPassword-CvmnzIJM.js"), "./Pages/Auth/VerifyEmail.tsx": () => import("./assets/VerifyEmail-hRbRqzL5.js"), "./Pages/Book/Create.tsx": () => import("./assets/Create-CIlgSOUq.js"), "./Pages/Book/Edit.tsx": () => import("./assets/Edit-BPioScnQ.js"), "./Pages/Book/Index.tsx": () => import("./assets/Index-qhaztuBn.js"), "./Pages/Book/Show.tsx": () => import("./assets/Show-ghyHdGks.js"), "./Pages/Book/Type.tsx": () => import("./assets/Type-50V-z8Ff.js"), "./Pages/Cart.tsx": () => import("./assets/Cart-DlLTvFg5.js"), "./Pages/Chapter/Create.tsx": () => import("./assets/Create-wfDoPQqf.js"), "./Pages/Chapter/Edit.tsx": () => import("./assets/Edit-B8_3xJ1x.js"), "./Pages/Chapter/Limit.tsx": () => import("./assets/Limit-C-dpoEd-.js"), "./Pages/Chapter/Novel.tsx": () => import("./assets/Novel-DSQOCQ5W.js"), "./Pages/Chapter/Show.tsx": () => import("./assets/Show-fEaC6J-H.js"), "./Pages/Errors/404.tsx": () => import("./assets/404-CH1T2E8c.js"), "./Pages/Library.tsx": () => import("./assets/Library-NqxjCDYm.js"), "./Pages/Product/Create.tsx": () => import("./assets/Create-CbNinT5C.js"), "./Pages/Product/Edit.tsx": () => import("./assets/Edit-C8PAPFS6.js"), "./Pages/Product/Index.tsx": () => import("./assets/Index-bIEdTd-d.js"), "./Pages/Product/Show.tsx": () => import("./assets/Show-BktcTSG2.js"), "./Pages/Profile/Edit.tsx": () => import("./assets/Edit-y1_5qav4.js"), "./Pages/Profile/Partials/DeleteUserForm.tsx": () => import("./assets/DeleteUserForm-D_5Z9ShR.js"), "./Pages/Profile/Partials/UpdatePasswordForm.tsx": () => import("./assets/UpdatePasswordForm-BhkgNU-V.js"), "./Pages/Profile/Partials/UpdateProfileInformationForm.tsx": () => import("./assets/UpdateProfileInformationForm-BsNMzuAO.js"), "./Pages/Search.tsx": () => import("./assets/Search-DLjRBn7S.js"), "./Pages/Upload/Create.tsx": () => import("./assets/Create-C_ws3Wyc.js"), "./Pages/Welcome.tsx": () => import("./assets/Welcome-BM0BxMPX.js"), "./Pages/Writer/Complete.tsx": () => import("./assets/Complete-CsIOfbf3.js"), "./Pages/Writer/Index.tsx": () => import("./assets/Index-BnHszYwJ.js"), "./Pages/Writer/List.tsx": () => import("./assets/List-nV4OK7fm.js"), "./Pages/Writer/Register.tsx": () => import("./assets/Register-pmHPOAjB.js"), "./Pages/Writer/Show.tsx": () => import("./assets/Show-DJsHQMG4.js"), "./Pages/Writer/SubmissionFailed.tsx": () => import("./assets/SubmissionFailed-CbcCiQ6X.js") })),
    setup: ({ App: App2, props }) => {
      global.route = (name, params, absolute) => T(name, params, absolute, {
        // @ts-expect-error
        ...page.props.ziggy,
        // @ts-expect-error
        location: new URL(page.props.ziggy.location)
      });
      return /* @__PURE__ */ jsx(SsrProvider, { children: /* @__PURE__ */ jsx(App2, { ...props }) });
    }
  })
);
export {
  getBookListByType as a,
  setPage as b,
  clearPages as c,
  addToCartThunk as d,
  searchCoupon as e,
  clearCoupon as f,
  getUserList as g,
  getLocalStorage as h,
  getNotificationList as i,
  getBookFollowing as j,
  clickFollowing as k,
  getSearch as l,
  setFlash as m,
  setFilterTitle as n,
  setPage$1 as o,
  clearPages$1 as p,
  getWriterBookList as q,
  removeManyCarts as r,
  setFilterCategory as s,
  createDefaultDataByUserId as t,
  usePoint as u,
  setPageByUserId as v,
  getWriterBookListPublic as w
};