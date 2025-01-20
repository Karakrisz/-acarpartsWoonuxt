import { _ as _sfc_main$5, a as _sfc_main$4, b as _sfc_main$b, c as _sfc_main$3, d as __nuxt_component_4, e as _sfc_main$1 } from './ProductGrid-BjVVtYCf.mjs';
import { defineComponent, withAsyncContext, ref, watch, unref, withCtx, createTextVNode, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { w as useProducts, p as useRoute, n as useAppConfig, d as useHelpers, g as useAsyncGql, h as useHead } from './server.mjs';
import './ProductCard-ocl8XymJ.mjs';
import './ProductPrice-DLaqSb6r.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "products",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { setProducts, updateProductList } = useProducts();
    const route = useRoute();
    const { storeSettings } = useAppConfig();
    useHelpers();
    [__temp, __restore] = withAsyncContext(() => useAsyncGql("getProducts")), __temp = await __temp, __restore();
    const allProducts = ref([]);
    const isLoading = ref(true);
    watch(
      () => route.query,
      () => {
        if (route.name !== "products") return;
        updateProductList();
      }
    );
    useHead({
      title: `Termékek`,
      meta: [{ hid: "description", name: "description", content: "Products" }]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Filters = _sfc_main$5;
      const _component_ProductResultCount = _sfc_main$4;
      const _component_OrderByDropdown = _sfc_main$b;
      const _component_ShowFilterTrigger = _sfc_main$3;
      const _component_ProductGrid = __nuxt_component_4;
      const _component_NoProductsFound = _sfc_main$1;
      if (!unref(isLoading)) {
        _push(`<div${ssrRenderAttrs(_attrs)}>`);
        if (unref(allProducts).length) {
          _push(`<div class="container flex items-start gap-16">`);
          if (unref(storeSettings).showFilters) {
            _push(ssrRenderComponent(_component_Filters, null, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="w-full"><div class="flex items-center justify-between w-full gap-4 mt-8 md:gap-8">`);
          _push(ssrRenderComponent(_component_ProductResultCount, null, null, _parent));
          if (unref(storeSettings).showOrderByDropdown) {
            _push(ssrRenderComponent(_component_OrderByDropdown, { class: "hidden md:inline-flex" }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          if (unref(storeSettings).showFilters) {
            _push(ssrRenderComponent(_component_ShowFilterTrigger, { class: "md:hidden" }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
          _push(ssrRenderComponent(_component_ProductGrid, null, null, _parent));
          _push(`</div></div>`);
        } else {
          _push(ssrRenderComponent(_component_NoProductsFound, null, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`Could not fetch products from your store. Please check your configuration.`);
              } else {
                return [
                  createTextVNode("Could not fetch products from your store. Please check your configuration.")
                ];
              }
            }),
            _: 1
          }, _parent));
        }
        _push(`</div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "container flex items-start gap-16 animate-pulse" }, _attrs))}><div class="bg-gray-200 w-[200px] h-[300px] mt-6 hidden sm:block"></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"><!--[-->`);
        ssrRenderList(3, (n) => {
          _push(`<div class="bg-white rounded-lg p-6 shadow-sm"><div class="aspect-square mb-4 bg-gray-200 rounded-lg"></div><div class="h-8 bg-gray-200 rounded mb-4"></div><div class="space-y-2 mb-4"><div class="h-4 bg-gray-200 rounded w-3/4"></div><div class="h-4 bg-gray-200 rounded w-full"></div><div class="h-4 bg-gray-200 rounded w-2/3"></div></div><div class="flex items-center justify-between"><div class="h-6 w-24 bg-gray-200 rounded"></div><div class="h-10 w-10 bg-gray-200 rounded-full"></div></div></div>`);
        });
        _push(`<!--]--></div></div>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/pages/products.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=products-D4E822Hu.mjs.map
