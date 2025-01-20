import { _ as _sfc_main$5, a as _sfc_main$4, b as _sfc_main$b, c as _sfc_main$3, d as __nuxt_component_4 } from './ProductGrid-BjVVtYCf.mjs';
import { defineComponent, ref, watch, unref, useSSRContext } from 'vue';
import { ssrInterpolate, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { w as useProducts, d as useHelpers, n as useAppConfig, p as useRoute, h as useHead } from './server.mjs';
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
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const { setProducts, updateProductList } = useProducts();
    useHelpers();
    const { storeSettings } = useAppConfig();
    const route = useRoute();
    const slug = route.params.slug;
    ref([]);
    const isLoading = ref(true);
    watch(
      () => route.query,
      () => {
        if (route.name !== "product-category-slug") return;
        updateProductList();
      }
    );
    useHead({
      title: "Products",
      meta: [{ hid: "description", name: "description", content: "Products" }]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Filters = _sfc_main$5;
      const _component_ProductResultCount = _sfc_main$4;
      const _component_OrderByDropdown = _sfc_main$b;
      const _component_ShowFilterTrigger = _sfc_main$3;
      const _component_ProductGrid = __nuxt_component_4;
      _push(`<!--[--><div class="container capitalize mt-10"><h1>${ssrInterpolate(unref(slug))}</h1></div><div class="container flex items-start gap-16">`);
      if (unref(storeSettings).showFilters) {
        _push(ssrRenderComponent(_component_Filters, { "hide-categories": true }, null, _parent));
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
      if (!unref(isLoading)) {
        _push(ssrRenderComponent(_component_ProductGrid, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(isLoading)) {
        _push(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse w-full"><!--[-->`);
        ssrRenderList(3, (n) => {
          _push(`<div class="bg-white rounded-lg p-6 shadow-sm"><div class="aspect-square mb-4 bg-gray-200 rounded-lg"></div><div class="h-8 bg-gray-200 rounded mb-4"></div><div class="space-y-2 mb-4"><div class="h-4 bg-gray-200 rounded w-3/4"></div><div class="h-4 bg-gray-200 rounded w-full"></div><div class="h-4 bg-gray-200 rounded w-2/3"></div></div><div class="flex items-center justify-between"><div class="h-6 w-24 bg-gray-200 rounded"></div><div class="h-10 w-10 bg-gray-200 rounded-full"></div></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/pages/product-category/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-odhYM9Qz.mjs.map
