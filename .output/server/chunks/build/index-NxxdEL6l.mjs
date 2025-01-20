import { useSSRContext, reactive, provide, mergeProps, inject, ref, computed, watch, unref, defineComponent, openBlock, createElementBlock, renderSlot, createCommentVNode, watchEffect, withCtx, createTextVNode, createElementVNode, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrInterpolate, ssrRenderComponent, ssrRenderStyle, ssrRenderList } from 'vue/server-renderer';
import { c as _export_sfc, f as _sfc_main$a, t as useLazyAsyncData, g as useAsyncGql, e as __nuxt_component_10, I as I$1 } from './server.mjs';
import { _ as _sfc_main$9 } from './ProductRow-wMvePWMi.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'graphql-request';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import 'ipx';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './ProductCard-ocl8XymJ.mjs';
import './ProductPrice-DLaqSb6r.mjs';

const _sfc_main$8 = /* @__PURE__ */ Object.assign({
  name: "Disclosure"
}, {
  __name: "Disclosure",
  __ssrInlineRender: true,
  props: {
    singleOpen: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const openStates = reactive({});
    const toggleItem = (id) => {
      if (props.singleOpen) {
        for (const key in openStates) {
          openStates[key] = key === id ? !openStates[key] : false;
        }
      } else {
        openStates[id] = !openStates[id];
      }
    };
    const registerItem = (id, initialState = false) => {
      if (!(id in openStates)) {
        openStates[id] = initialState;
      }
    };
    provide("disclosure", {
      openStates,
      toggleItem,
      registerItem
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "divide-y divide-gray/50" }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/ui/Disclosure.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const w$2 = ["width", "height", "fill", "transform"], M$2 = { key: 0 }, k$2 = /* @__PURE__ */ createElementVNode("path", { d: "M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z" }, null, -1), Z$2 = [
  k$2
], x$2 = { key: 1 }, C$2 = /* @__PURE__ */ createElementVNode("path", {
  d: "M208,96l-80,80L48,96Z",
  opacity: "0.2"
}, null, -1), S$2 = /* @__PURE__ */ createElementVNode("path", { d: "M215.39,92.94A8,8,0,0,0,208,88H48a8,8,0,0,0-5.66,13.66l80,80a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,215.39,92.94ZM128,164.69,67.31,104H188.69Z" }, null, -1), z$2 = [
  C$2,
  S$2
], L$2 = { key: 2 }, A$2 = /* @__PURE__ */ createElementVNode("path", { d: "M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z" }, null, -1), B$2 = [
  A$2
], H$1 = { key: 3 }, N$2 = /* @__PURE__ */ createElementVNode("path", { d: "M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z" }, null, -1), b$2 = [
  N$2
], E$2 = { key: 4 }, P$2 = /* @__PURE__ */ createElementVNode("path", { d: "M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" }, null, -1), V$2 = [
  P$2
], W$2 = { key: 5 }, $$2 = /* @__PURE__ */ createElementVNode("path", { d: "M210.83,98.83l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,170.34l77.17-77.17a4,4,0,1,1,5.66,5.66Z" }, null, -1), j$2 = [
  $$2
], D = {
  name: "PhCaretDown"
}, G$1 = /* @__PURE__ */ defineComponent({
  ...D,
  props: {
    weight: {
      type: String
    },
    size: {
      type: [String, Number]
    },
    color: {
      type: String
    },
    mirrored: {
      type: Boolean
    }
  },
  setup(d) {
    const s = d, c = inject("weight", "regular"), _ = inject("size", "1em"), h = inject("color", "currentColor"), u = inject("mirrored", false), l = computed(() => s.weight ?? c), r = computed(() => s.size ?? _), p = computed(() => s.color ?? h), g = computed(() => s.mirrored !== void 0 ? s.mirrored ? "scale(-1, 1)" : void 0 : u ? "scale(-1, 1)" : void 0);
    return (a, q2) => (openBlock(), createElementBlock("svg", mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: r.value,
      height: r.value,
      fill: p.value,
      transform: g.value
    }, a.$attrs), [
      renderSlot(a.$slots, "default"),
      l.value === "bold" ? (openBlock(), createElementBlock("g", M$2, Z$2)) : l.value === "duotone" ? (openBlock(), createElementBlock("g", x$2, z$2)) : l.value === "fill" ? (openBlock(), createElementBlock("g", L$2, B$2)) : l.value === "light" ? (openBlock(), createElementBlock("g", H$1, b$2)) : l.value === "regular" ? (openBlock(), createElementBlock("g", E$2, V$2)) : l.value === "thin" ? (openBlock(), createElementBlock("g", W$2, j$2)) : createCommentVNode("", true)
    ], 16, w$2));
  }
});
const _sfc_main$7 = /* @__PURE__ */ Object.assign({
  name: "DisclosureItem"
}, {
  __name: "DisclosureItem",
  __ssrInlineRender: true,
  props: {
    id: {
      type: String,
      required: true
    },
    modelValue: {
      type: Boolean,
      default: void 0
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { openStates, toggleItem, registerItem } = inject("disclosure");
    ref(null);
    const contentHeight = ref(0);
    const isOpen = computed({
      get: () => props.modelValue !== void 0 ? props.modelValue : openStates[props.id],
      set: (value) => {
        if (props.modelValue !== void 0) {
          emit("update:modelValue", value);
        } else {
          toggleItem(props.id);
        }
      }
    });
    watch(() => props.modelValue, (newValue) => {
      if (newValue !== void 0) {
        openStates[props.id] = newValue;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PhosphorIconCaretDown = G$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))} data-v-2d7588c8><button class="flex items-center justify-between w-full px-4 py-4 text-2xl font-medium text-left transition bg-white rounded-lg hover:bg-gray/10 focus:outline-none focus-visible:ring focus-visible:ring-gray focus-visible:ring-opacity-75" data-v-2d7588c8><div class="flex items-center gap-4" data-v-2d7588c8><div class="bg-gray-light w-[38px] h-[38px] flex items-center justify-center text-primary rounded-full" data-v-2d7588c8>${ssrInterpolate(__props.id)}</div>`);
      ssrRenderSlot(_ctx.$slots, "title", {}, null, _push, _parent);
      _push(`</div>`);
      _push(ssrRenderComponent(_component_PhosphorIconCaretDown, {
        class: [unref(isOpen) ? "rotate-180 transform" : "", "w-5 h-5 mr-4"]
      }, null, _parent));
      _push(`</button><div class="overflow-hidden transition-max-height" style="${ssrRenderStyle({ maxHeight: unref(isOpen) ? `${contentHeight.value}px` : "0" })}" data-v-2d7588c8><div class="px-4 pt-4 pb-2 text-sm text-gray-500" data-v-2d7588c8>`);
      ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/ui/DisclosureItem.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-2d7588c8"]]);
const _sfc_main$6 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_Disclosure = _sfc_main$8;
  const _component_DisclosureItem = __nuxt_component_1;
  const _component_PhosphorIconMagnifyingGlass = I$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center w-full md:w-fit 2xl:-ml-[200px]" }, _attrs))}><div class="py-7 bg-white rounded-t-[11px] w-fit px-7 md:w-[377px] shadow-big"><h2 class="text-[20px] font-semibold text-center">Search for your exact car!</h2></div><div class="rounded-[11px] overflow-clip w-full md:w-[427px] shadow-big"><div class="bg-white">`);
  _push(ssrRenderComponent(_component_Disclosure, { singleOpen: true }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_DisclosureItem, { id: "1" }, {
          title: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Year`);
            } else {
              return [
                createTextVNode("Year")
              ];
            }
          }),
          content: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Content `);
            } else {
              return [
                createTextVNode(" Content ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_DisclosureItem, { id: "2" }, {
          title: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Brand`);
            } else {
              return [
                createTextVNode("Brand")
              ];
            }
          }),
          content: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Content `);
            } else {
              return [
                createTextVNode(" Content ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_DisclosureItem, { id: "3" }, {
          title: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Model`);
            } else {
              return [
                createTextVNode("Model")
              ];
            }
          }),
          content: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Content `);
            } else {
              return [
                createTextVNode(" Content ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_DisclosureItem, { id: "4" }, {
          title: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Part Name`);
            } else {
              return [
                createTextVNode("Part Name")
              ];
            }
          }),
          content: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Content `);
            } else {
              return [
                createTextVNode(" Content ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_DisclosureItem, { id: "1" }, {
            title: withCtx(() => [
              createTextVNode("Year")
            ]),
            content: withCtx(() => [
              createTextVNode(" Content ")
            ]),
            _: 1
          }),
          createVNode(_component_DisclosureItem, { id: "2" }, {
            title: withCtx(() => [
              createTextVNode("Brand")
            ]),
            content: withCtx(() => [
              createTextVNode(" Content ")
            ]),
            _: 1
          }),
          createVNode(_component_DisclosureItem, { id: "3" }, {
            title: withCtx(() => [
              createTextVNode("Model")
            ]),
            content: withCtx(() => [
              createTextVNode(" Content ")
            ]),
            _: 1
          }),
          createVNode(_component_DisclosureItem, { id: "4" }, {
            title: withCtx(() => [
              createTextVNode("Part Name")
            ]),
            content: withCtx(() => [
              createTextVNode(" Content ")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><button class="flex items-center justify-center w-full py-[22px] font-semibold text-white rounded-md bg-primary text-[24px] gap-1 hover:bg-red-800 transition"> Search `);
  _push(ssrRenderComponent(_component_PhosphorIconMagnifyingGlass, {
    size: 20,
    weight: "bold",
    class: "ml-2"
  }, null, _parent));
  _push(`</button></div></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/Index/CarSearch.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_CarSearch = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "hero-content" }, _attrs))}><div class="relative h-[650px] bg-cover bg-center" style="${ssrRenderStyle({ "background-image": "url('/img/hero-bg.jpg')" })}"><div class="container relative z-10 flex items-center h-full">`);
  _push(ssrRenderComponent(_component_CarSearch, null, null, _parent));
  _push(`</div></div></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/Index/Hero.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$1]]);
const w$1 = ["width", "height", "fill", "transform"], H = { key: 0 }, M$1 = /* @__PURE__ */ createElementVNode("path", { d: "M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z" }, null, -1), A$1 = [
  M$1
], L$1 = { key: 1 }, k$1 = /* @__PURE__ */ createElementVNode("path", {
  d: "M216,128l-72,72V56Z",
  opacity: "0.2"
}, null, -1), Z$1 = /* @__PURE__ */ createElementVNode("path", { d: "M221.66,122.34l-72-72A8,8,0,0,0,136,56v64H40a8,8,0,0,0,0,16h96v64a8,8,0,0,0,13.66,5.66l72-72A8,8,0,0,0,221.66,122.34ZM152,180.69V75.31L204.69,128Z" }, null, -1), x$1 = [
  k$1,
  Z$1
], S$1 = { key: 2 }, V$1 = /* @__PURE__ */ createElementVNode("path", { d: "M221.66,133.66l-72,72A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,13.66-5.66l72,72A8,8,0,0,1,221.66,133.66Z" }, null, -1), z$1 = [
  V$1
], C$1 = { key: 3 }, B$1 = /* @__PURE__ */ createElementVNode("path", { d: "M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z" }, null, -1), N$1 = [
  B$1
], b$1 = { key: 4 }, E$1 = /* @__PURE__ */ createElementVNode("path", { d: "M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" }, null, -1), P$1 = [
  E$1
], W$1 = { key: 5 }, $$1 = /* @__PURE__ */ createElementVNode("path", { d: "M218.83,130.83l-72,72a4,4,0,0,1-5.66-5.66L206.34,132H40a4,4,0,0,1,0-8H206.34L141.17,58.83a4,4,0,0,1,5.66-5.66l72,72A4,4,0,0,1,218.83,130.83Z" }, null, -1), j$1 = [
  $$1
], R$1 = {
  name: "PhArrowRight"
}, F = /* @__PURE__ */ defineComponent({
  ...R$1,
  props: {
    weight: {
      type: String
    },
    size: {
      type: [String, Number]
    },
    color: {
      type: String
    },
    mirrored: {
      type: Boolean
    }
  },
  setup(d) {
    const l = d, c = inject("weight", "regular"), h = inject("size", "1em"), _ = inject("color", "currentColor"), u = inject("mirrored", false), s = computed(() => l.weight ?? c), r = computed(() => l.size ?? h), p = computed(() => l.color ?? _), g = computed(() => l.mirrored !== void 0 ? l.mirrored ? "scale(-1, 1)" : void 0 : u ? "scale(-1, 1)" : void 0);
    return (a, q2) => (openBlock(), createElementBlock("svg", mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: r.value,
      height: r.value,
      fill: p.value,
      transform: g.value
    }, a.$attrs), [
      renderSlot(a.$slots, "default"),
      s.value === "bold" ? (openBlock(), createElementBlock("g", H, A$1)) : s.value === "duotone" ? (openBlock(), createElementBlock("g", L$1, x$1)) : s.value === "fill" ? (openBlock(), createElementBlock("g", S$1, z$1)) : s.value === "light" ? (openBlock(), createElementBlock("g", C$1, N$1)) : s.value === "regular" ? (openBlock(), createElementBlock("g", b$1, P$1)) : s.value === "thin" ? (openBlock(), createElementBlock("g", W$1, j$1)) : createCommentVNode("", true)
    ], 16, w$1));
  }
});
const _sfc_main$4 = {
  __name: "Discounts",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      data: saleProductsData,
      pending,
      error
    } = useLazyAsyncData(
      "sale-products",
      () => useAsyncGql("getProducts", {
        first: 5,
        orderby: "POPULARITY",
        where: {
          onSale: true
        }
      }).then(({ data }) => {
        var _a, _b;
        return ((_b = (_a = data.value) == null ? void 0 : _a.products) == null ? void 0 : _b.nodes) || [];
      }),
      {
        default: () => [],
        immediate: true,
        watch: false
      }
    );
    watchEffect(() => {
      if (error.value) {
        console.error("Error fetching products:", error.value);
      }
    });
    const onSaleProducts = computed(() => saleProductsData.value);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProductRow = _sfc_main$9;
      const _component_NuxtLink = __nuxt_component_10;
      const _component_PhosphorIconArrowRight = F;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "w-full py-[50px]" }, _attrs))}><div class="container"><h2 class="pb-10">AKTUÁLIS AKCIÓINK</h2>`);
      if (unref(pending)) {
        _push(`<div${ssrRenderAttrs({
          name: "fade",
          class: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[24px] pb-[35px]"
        })}>`);
        ssrRenderList(3, (i) => {
          _push(`<div class="animate-pulse"><div class="bg-stone-200 h-48 rounded-lg mb-4"></div><div class="space-y-3"><div class="h-4 bg-stone-200 rounded w-3/4"></div><div class="h-4 bg-stone-200 rounded w-1/2"></div><div class="h-4 bg-stone-200 rounded w-1/4"></div></div></div>`);
        });
        _push(`</div>`);
      } else {
        _push(`<!--[-->`);
        if (unref(error)) {
          _push(`<div class="text-center text-red-600 pb-[35px]">Failed to load products. Please try again later.</div>`);
        } else {
          _push(ssrRenderComponent(_component_ProductRow, {
            products: unref(onSaleProducts),
            class: "pb-[35px]"
          }, null, _parent));
        }
        _push(`<!--]-->`);
      }
      _push(`<div class="flex gap-[10px] items-center justify-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/products",
        class: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Tovább az teljes étlapra `);
          } else {
            return [
              createTextVNode(" Tovább az teljes étlapra ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_PhosphorIconArrowRight, null, null, _parent));
      _push(`</div></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/Index/Discounts.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const w = ["width", "height", "fill", "transform"], M = { key: 0 }, k = /* @__PURE__ */ createElementVNode("path", { d: "M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z" }, null, -1), A = [
  k
], Z = { key: 1 }, x = /* @__PURE__ */ createElementVNode("path", {
  d: "M176,128,96,208V48Z",
  opacity: "0.2"
}, null, -1), C = /* @__PURE__ */ createElementVNode("path", { d: "M181.66,122.34l-80-80A8,8,0,0,0,88,48V208a8,8,0,0,0,13.66,5.66l80-80A8,8,0,0,0,181.66,122.34ZM104,188.69V67.31L164.69,128Z" }, null, -1), S = [
  x,
  C
], V = { key: 2 }, z = /* @__PURE__ */ createElementVNode("path", { d: "M181.66,133.66l-80,80A8,8,0,0,1,88,208V48a8,8,0,0,1,13.66-5.66l80,80A8,8,0,0,1,181.66,133.66Z" }, null, -1), L = [
  z
], B = { key: 3 }, N = /* @__PURE__ */ createElementVNode("path", { d: "M180.24,132.24l-80,80a6,6,0,0,1-8.48-8.48L167.51,128,91.76,52.24a6,6,0,0,1,8.48-8.48l80,80A6,6,0,0,1,180.24,132.24Z" }, null, -1), b = [
  N
], E = { key: 4 }, P = /* @__PURE__ */ createElementVNode("path", { d: "M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z" }, null, -1), W = [
  P
], $ = { key: 5 }, j = /* @__PURE__ */ createElementVNode("path", { d: "M178.83,130.83l-80,80a4,4,0,0,1-5.66-5.66L170.34,128,93.17,50.83a4,4,0,0,1,5.66-5.66l80,80A4,4,0,0,1,178.83,130.83Z" }, null, -1), R = [
  j
], q = {
  name: "PhCaretRight"
}, G = /* @__PURE__ */ defineComponent({
  ...q,
  props: {
    weight: {
      type: String
    },
    size: {
      type: [String, Number]
    },
    color: {
      type: String
    },
    mirrored: {
      type: Boolean
    }
  },
  setup(d) {
    const l = d, c = inject("weight", "regular"), _ = inject("size", "1em"), h = inject("color", "currentColor"), u = inject("mirrored", false), s = computed(() => l.weight ?? c), r = computed(() => l.size ?? _), p = computed(() => l.color ?? h), g = computed(() => l.mirrored !== void 0 ? l.mirrored ? "scale(-1, 1)" : void 0 : u ? "scale(-1, 1)" : void 0);
    return (a, D2) => (openBlock(), createElementBlock("svg", mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: r.value,
      height: r.value,
      fill: p.value,
      transform: g.value
    }, a.$attrs), [
      renderSlot(a.$slots, "default"),
      s.value === "bold" ? (openBlock(), createElementBlock("g", M, A)) : s.value === "duotone" ? (openBlock(), createElementBlock("g", Z, S)) : s.value === "fill" ? (openBlock(), createElementBlock("g", V, L)) : s.value === "light" ? (openBlock(), createElementBlock("g", B, b)) : s.value === "regular" ? (openBlock(), createElementBlock("g", E, W)) : s.value === "thin" ? (openBlock(), createElementBlock("g", $, R)) : createCommentVNode("", true)
    ], 16, w));
  }
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "SearchSection",
  __ssrInlineRender: true,
  setup(__props) {
    const topBrands = [
      "audi",
      "bmw",
      "citroen",
      "ford",
      "honda",
      "hyundai",
      "kia",
      "landrover",
      "mazda",
      "mercedes",
      "mitsubishi",
      "nissan",
      "opel",
      "peugeot",
      "renault",
      "seat",
      "skoda",
      "toyota",
      "volkswagen",
      "volvo"
    ];
    const brandsByLetter = {
      A: [
        "Audi",
        "Aixam",
        "Alfa Romeo",
        "AMC",
        "Aston Martin",
        "Austin",
        "Acura",
        "Alpine",
        "ARO",
        "Artega",
        "Asia",
        "Autobianchi",
        "AC",
        "Aiways",
        "Alpina",
        "Addax MTN",
        "Alke"
      ],
      B: [
        "BMW",
        "Bedford",
        "Bentley",
        "BMC",
        "Buick",
        "Brilliance",
        "Bugatti",
        "Borgward",
        "Bellier",
        "BYD",
        "Bertone",
        "Bee Bee",
        "Bollore"
      ],
      C: [
        "Cadillac",
        "Casalini",
        "Checker",
        "Chevrolet",
        "Chrysler",
        "Citroen",
        "Crosley",
        "Changan",
        "Carbodies",
        "Chery",
        "Asia",
        "Caterham",
        "Cupra",
        "Chatenet"
      ]
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$a;
      const _component_PhosphorIconCaretRight = G;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "container px-4 py-16 bg-white" }, _attrs))} data-v-1c602bbc><div class="mx-auto space-y-[50px] max-w-7xl" data-v-1c602bbc><h2 class="mb-6 text-2xl font-bold" data-v-1c602bbc>Search by brand</h2><div class="flex flex-wrap gap-[24px] mb-8 justify-between" data-v-1c602bbc><!--[-->`);
      ssrRenderList(topBrands, (brand) => {
        _push(`<div class="w-[71px] h-[71px] card" data-v-1c602bbc>`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: `/img/car-logos/${brand}.svg`,
          alt: brand,
          class: "w-auto h-8 max-w-8"
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--><div class="px-10 h-[71px] card" data-v-1c602bbc><span class="text-gray-600" data-v-1c602bbc>All brands</span>`);
      _push(ssrRenderComponent(_component_PhosphorIconCaretRight, { class: "ml-2 text-gray-600" }, null, _parent));
      _push(`</div></div><div class="divide-y divide-gray" data-v-1c602bbc><div class="pb-6" data-v-1c602bbc><h3 class="mb-4 text-xl font-extrabold text-primary" data-v-1c602bbc>A</h3><div class="flex flex-wrap gap-x-14 gap-y-[25px]" data-v-1c602bbc><!--[-->`);
      ssrRenderList(brandsByLetter.A, (brand) => {
        _push(`<span class="text-gray-600 transition-colors duration-200 cursor-pointer hover:text-primary" data-v-1c602bbc>${ssrInterpolate(brand)}</span>`);
      });
      _push(`<!--]--></div></div><div class="py-6" data-v-1c602bbc><h3 class="mb-4 text-xl font-extrabold text-primary" data-v-1c602bbc>B</h3><div class="flex flex-wrap gap-x-14 gap-y-[25px]" data-v-1c602bbc><!--[-->`);
      ssrRenderList(brandsByLetter.B, (brand) => {
        _push(`<span class="text-gray-600 transition-colors duration-200 cursor-pointer hover:text-primary" data-v-1c602bbc>${ssrInterpolate(brand)}</span>`);
      });
      _push(`<!--]--></div></div><div class="pt-6" data-v-1c602bbc><h3 class="mb-4 text-xl font-extrabold text-primary" data-v-1c602bbc>C</h3><div class="flex flex-wrap gap-x-14 gap-y-[25px]" data-v-1c602bbc><!--[-->`);
      ssrRenderList(brandsByLetter.C, (brand) => {
        _push(`<span class="text-gray-600 transition-colors duration-200 cursor-pointer hover:text-primary" data-v-1c602bbc>${ssrInterpolate(brand)}</span>`);
      });
      _push(`<!--]--></div></div></div><h2 class="mb-6 text-xl font-bold text-center sm:text-2xl sm:text-left" data-v-1c602bbc> Search by category </h2><div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6" data-v-1c602bbc><!--[-->`);
      ssrRenderList(8, (i) => {
        _push(`<div class="flex items-center justify-center gap-4 p-2 sm:p-4 card" data-v-1c602bbc>`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: `/img/categories/cat-${i}.svg`,
          alt: `Category ${i}`,
          class: "w-12 h-12 sm:w-16 sm:h-16 md:w-[70px] md:h-[70px]"
        }, null, _parent));
        _push(`<span class="text-sm text-center text-gray-600 sm:text-base" data-v-1c602bbc>Lorem Ipsum</span></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/Index/SearchSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-1c602bbc"]]);
const _sfc_main$2 = {
  __name: "AboutSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$a;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "flex flex-col md:flex-row" }, _attrs))} data-v-29d63148><div class="flex flex-col md:w-1/2" data-v-29d63148><div class="p-8 text-white bg-primary lg:p-20" data-v-29d63148><div class="container mx-auto" data-v-29d63148><h2 class="mb-8 text-2xl font-bold" data-v-29d63148>Acarparts: The Premier Car Parts Dealership</h2><p class="" data-v-29d63148> When it comes to finding top-quality car parts in Poland, look no further than Acarparts. As the leading car parts dealership in the country, Acarparts has earned its reputation for excellence through a commitment to quality, customer satisfaction, and a vast selection of products. </p></div></div><div class="relative flex-grow p-8 text-white lg:p-20 bg-dark" data-v-29d63148>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/about-bg-tire.png",
        alt: "Tire",
        class: "absolute inset-0 object-cover w-full h-full"
      }, null, _parent));
      _push(`<div class="container relative z-10 mx-auto" data-v-29d63148><h3 class="mb-8 text-xl font-semibold" data-v-29d63148>Why Choose Acarparts?</h3><ul class="space-y-4" data-v-29d63148><li data-v-29d63148><strong class="font-semibold" data-v-29d63148>1. Unmatched Selection:</strong> Whether you&#39;re looking for engine components, brake systems, filters, or any other car part, Acarparts has you covered. Our extensive inventory ensures that you can find exactly what you need, no matter the make or model of your vehicle. </li><li data-v-29d63148><strong class="font-semibold" data-v-29d63148>2. Quality Assurance:</strong> At Acarparts, we understand that your vehicle&#39;s performance and safety depend on the quality of its parts. That&#39;s why we only stock products from trusted manufacturers known for their durability and reliability. </li><li data-v-29d63148><strong class="font-semibold" data-v-29d63148>3. Competitive Pricing:</strong> We believe that premium car parts shouldn&#39;t come with a premium price tag. Our competitive pricing structure ensures that you get the best value for your money without compromising on quality. </li><li data-v-29d63148><strong class="font-semibold" data-v-29d63148>4. Expert Customer Service:</strong> Our knowledgeable and friendly customer service team is always ready to assist you. Whether you need help finding the right part or have questions about installation, we are here to provide expert advice and support. </li><li data-v-29d63148><strong class="font-semibold" data-v-29d63148>5. Convenient Online Shopping:</strong> Shopping for car parts has never been easier. Our user-friendly webshop allows you to browse, compare, and purchase parts from the comfort of your home. With fast shipping and easy returns, we make sure that you get your parts quickly and hassle-free. </li><li data-v-29d63148><strong class="font-semibold" data-v-29d63148>6. Trusted by Car Enthusiasts and Professionals Alike:</strong> From individual car enthusiasts to professional mechanics, Acarparts is the trusted source for car parts across Poland. Our commitment to quality and service has made us a favorite in the automotive community. </li></ul><p class="mt-8" data-v-29d63148> Discover the Acarparts difference today and experience why we are the best car parts dealership in Poland. Visit our webshop and find the perfect parts to keep your vehicle running smoothly and efficiently. </p></div></div></div><div class="relative md:w-1/2" data-v-29d63148>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/about-bg.jpg",
        alt: "Car parts background",
        class: "absolute inset-0 object-cover w-full h-full"
      }, null, _parent));
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/AboutSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-29d63148"]]);
const _sfc_main$1 = {
  __name: "BlogSection",
  __ssrInlineRender: true,
  setup(__props) {
    const posts = [
      {
        title: "How to Easily Find the Right Car Part Online with Acarparts",
        description: "Navigating the world of car parts can be daunting. Our step-by-step guide shows you how to quickly and easily find the exact car parts you need using Acarparts' user-friendly webshop.",
        link: "/",
        imgSrc: "/blog-1.jpg"
      },
      {
        title: "Why Quality Matters: The Benefits of Choosing Premium Car Parts",
        description: "Not all car parts are created equal. Learn why investing in high-quality car parts from Acarparts can save you time, money, and ensure your vehicle stays in optimal condition.",
        link: "/",
        imgSrc: "/blog-2.jpg"
      },
      {
        title: "Top 5 Must-Have Car Parts for Every Vehicle Owner",
        description: "Ensuring your vehicle runs smoothly requires the right parts. Discover the top five essential car parts every vehicle owner should have on hand to maintain peak performance and safety.",
        link: "/",
        imgSrc: "/blog-3.jpg"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$a;
      const _component_NuxtLink = __nuxt_component_10;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "container py-[50px]" }, _attrs))}><h2 class="mb-[25px] text-2xl lg:text-left text-center leading-[160%] font-semibold">Latest Blogpost</h2><div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[24px]"><!--[-->`);
      ssrRenderList(posts, (post) => {
        _push(`<div class="rounded-[10px] overflow-hidden shadow-big flex flex-col"><div class="h-[181px] w-full relative overflow-hidden">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          class: "absolute inset-0 object-cover w-full h-full",
          src: "/img/blog" + post.imgSrc
        }, null, _parent));
        _push(`</div><div class="p-[25px] bg-white flex flex-col gap-[15px] flex-1"><h3 class="text-xl font-semibold">${ssrInterpolate(post.title)}</h3><div class="h-[1px] bg-gray/50 w-full"></div><p class="text-sm leading-[160%] flex-1">${ssrInterpolate(post.description)}</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: post.link,
          class: "flex items-center justify-center px-[25px] py-[15px] text-white rounded-[7px] text-sm bg-primary hover:bg-red-800 transition"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Read More`);
            } else {
              return [
                createTextVNode("Read More")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/Index/BlogSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Hero = __nuxt_component_0;
  const _component_Discounts = _sfc_main$4;
  const _component_SearchSection = __nuxt_component_2;
  const _component_AboutSection = __nuxt_component_3;
  const _component_BlogSection = _sfc_main$1;
  _push(`<main${ssrRenderAttrs(_attrs)} data-v-fcdf7404>`);
  _push(ssrRenderComponent(_component_Hero, null, null, _parent));
  _push(ssrRenderComponent(_component_Discounts, null, null, _parent));
  _push(ssrRenderComponent(_component_SearchSection, null, null, _parent));
  _push(ssrRenderComponent(_component_AboutSection, null, null, _parent));
  _push(ssrRenderComponent(_component_BlogSection, null, null, _parent));
  _push(`</main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-fcdf7404"]]);

export { index as default };
//# sourceMappingURL=index-NxxdEL6l.mjs.map
