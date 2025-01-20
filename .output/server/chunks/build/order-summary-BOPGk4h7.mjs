import { p as useRoute, j as useAuth, d as useHelpers, o as useI18n, q as useSeoMeta, b as _sfc_main$8, e as __nuxt_component_10, _ as __nuxt_component_0, f as _sfc_main$a } from './server.mjs';
import { _ as __nuxt_component_3, a as __nuxt_component_5 } from './DownloadableItems-Bcon5mmn.mjs';
import { defineComponent, ref, computed, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { O as OrderStatusEnum } from './default-B9XN3iLS.mjs';
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
  __name: "order-summary",
  __ssrInlineRender: true,
  setup(__props) {
    const { query, params, name } = useRoute();
    const { customer } = useAuth();
    const { formatDate, formatPrice } = useHelpers();
    const { t } = useI18n();
    const order = ref(null);
    ref(query.fetch_delay === "true");
    const isLoaded = ref(false);
    const errorMessage = ref("");
    const isGuest = computed(() => {
      var _a;
      return !((_a = customer.value) == null ? void 0 : _a.email);
    });
    const isSummaryPage = computed(() => name === "order-summary");
    const isCheckoutPage = computed(() => name === "order-received");
    const orderIsNotCompleted = computed(() => {
      var _a;
      return ((_a = order.value) == null ? void 0 : _a.status) !== OrderStatusEnum.COMPLETED;
    });
    const hasDiscount = computed(() => {
      var _a;
      return !!parseFloat(((_a = order.value) == null ? void 0 : _a.rawDiscountTotal) || "0");
    });
    const downloadableItems = computed(() => {
      var _a, _b;
      return ((_b = (_a = order.value) == null ? void 0 : _a.downloadableItems) == null ? void 0 : _b.nodes) || [];
    });
    useSeoMeta({
      title() {
        return isSummaryPage.value ? t("messages.shop.orderSummary") : t("messages.shop.orderReceived");
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LoadingIcon = _sfc_main$8;
      const _component_NuxtLink = __nuxt_component_10;
      const _component_Icon = __nuxt_component_0;
      const _component_OrderStatusLabel = __nuxt_component_3;
      const _component_NuxtImg = _sfc_main$a;
      const _component_DownloadableItems = __nuxt_component_5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full min-h-[600px] flex items-center p-4 text-stone-800 md:bg-white md:rounded-xl md:mx-auto md:shadow-lg md:my-24 md:mt-8 md:max-w-3xl md:p-16 flex-col" }, _attrs))}>`);
      if (!unref(isLoaded)) {
        _push(ssrRenderComponent(_component_LoadingIcon, { class: "flex-1" }, null, _parent));
      } else {
        _push(`<!--[-->`);
        if (unref(order)) {
          _push(`<div class="w-full">`);
          if (unref(isSummaryPage)) {
            _push(`<div class="flex items-center gap-4">`);
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: "/my-account?tab=orders",
              class: "inline-flex items-center justify-center p-2 border rounded-md",
              title: "Back to orders",
              "aria-label": "Back to orders"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(_component_Icon, { name: "ion:chevron-back-outline" }, null, _parent2, _scopeId));
                } else {
                  return [
                    createVNode(_component_Icon, { name: "ion:chevron-back-outline" })
                  ];
                }
              }),
              _: 1
            }, _parent));
            _push(`<h1 class="text-xl font-semibold">${ssrInterpolate(_ctx.$t("messages.shop.orderSummary"))}</h1></div>`);
          } else if (unref(isCheckoutPage)) {
            _push(`<!--[--><div class="flex items-center justify-between w-full mb-2"><h1 class="text-xl font-semibold">${ssrInterpolate(_ctx.$t("messages.shop.orderReceived"))}</h1>`);
            if (unref(orderIsNotCompleted)) {
              _push(`<button type="button" class="inline-flex items-center justify-center p-2 bg-white border rounded-md" title="Refresh order" aria-label="Refresh order">`);
              _push(ssrRenderComponent(_component_Icon, { name: "ion:refresh-outline" }, null, _parent));
              _push(`</button>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div><p>${ssrInterpolate(_ctx.$t("messages.shop.orderThanks"))}</p><!--]-->`);
          } else {
            _push(`<!---->`);
          }
          _push(`<hr class="my-8"></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(order) && !unref(isGuest)) {
          _push(`<div class="flex-1 w-full"><div class="flex items-start justify-between"><div class="w-[21%]"><div class="mb-2 text-xs text-stone-400 uppercase">${ssrInterpolate(_ctx.$t("messages.shop.order"))}</div><div class="leading-none">#${ssrInterpolate(unref(order).databaseId)}</div></div><div class="w-[21%]"><div class="mb-2 text-xs text-stone-400 uppercase">${ssrInterpolate(_ctx.$t("messages.general.date"))}</div><div class="leading-none">${ssrInterpolate(unref(formatDate)(unref(order).date))}</div></div><div class="w-[21%]"><div class="mb-2 text-xs text-stone-400 uppercase">${ssrInterpolate(_ctx.$t("messages.general.status"))}</div>`);
          if (unref(order).status) {
            _push(ssrRenderComponent(_component_OrderStatusLabel, { order: unref(order) }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="w-[21%]"><div class="mb-2 text-xs text-stone-400 uppercase">${ssrInterpolate(_ctx.$t("messages.general.paymentMethod"))}</div><div class="leading-none">${ssrInterpolate(unref(order).paymentMethodTitle)}</div></div></div>`);
          if (unref(order).lineItems) {
            _push(`<!--[--><hr class="my-8"><div class="grid gap-2"><!--[-->`);
            ssrRenderList(unref(order).lineItems.nodes, (item) => {
              var _a, _b, _c, _d;
              _push(`<div class="flex items-center justify-between gap-8">`);
              if ((_a = item.product) == null ? void 0 : _a.node) {
                _push(ssrRenderComponent(_component_NuxtLink, {
                  to: `/product/${item.product.node.slug}`
                }, {
                  default: withCtx((_, _push2, _parent2, _scopeId) => {
                    var _a2, _b2, _c2, _d2, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D;
                    if (_push2) {
                      _push2(ssrRenderComponent(_component_NuxtImg, {
                        class: "w-16 h-16 rounded-xl",
                        src: ((_c2 = (_b2 = (_a2 = item.variation) == null ? void 0 : _a2.node) == null ? void 0 : _b2.image) == null ? void 0 : _c2.sourceUrl) || ((_e = (_d2 = item.product.node) == null ? void 0 : _d2.image) == null ? void 0 : _e.sourceUrl) || "/images/placeholder.png",
                        alt: ((_h = (_g = (_f = item.variation) == null ? void 0 : _f.node) == null ? void 0 : _g.image) == null ? void 0 : _h.altText) || ((_j = (_i = item.product.node) == null ? void 0 : _i.image) == null ? void 0 : _j.altText) || "Product image",
                        title: ((_m = (_l = (_k = item.variation) == null ? void 0 : _k.node) == null ? void 0 : _l.image) == null ? void 0 : _m.title) || ((_o = (_n = item.product.node) == null ? void 0 : _n.image) == null ? void 0 : _o.title) || "Product image",
                        width: "64",
                        height: "64",
                        loading: "lazy"
                      }, null, _parent2, _scopeId));
                    } else {
                      return [
                        createVNode(_component_NuxtImg, {
                          class: "w-16 h-16 rounded-xl",
                          src: ((_r = (_q = (_p = item.variation) == null ? void 0 : _p.node) == null ? void 0 : _q.image) == null ? void 0 : _r.sourceUrl) || ((_t = (_s = item.product.node) == null ? void 0 : _s.image) == null ? void 0 : _t.sourceUrl) || "/images/placeholder.png",
                          alt: ((_w = (_v = (_u = item.variation) == null ? void 0 : _u.node) == null ? void 0 : _v.image) == null ? void 0 : _w.altText) || ((_y = (_x = item.product.node) == null ? void 0 : _x.image) == null ? void 0 : _y.altText) || "Product image",
                          title: ((_B = (_A = (_z = item.variation) == null ? void 0 : _z.node) == null ? void 0 : _A.image) == null ? void 0 : _B.title) || ((_D = (_C = item.product.node) == null ? void 0 : _C.image) == null ? void 0 : _D.title) || "Product image",
                          width: "64",
                          height: "64",
                          loading: "lazy"
                        }, null, 8, ["src", "alt", "title"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent));
              } else {
                _push(`<!---->`);
              }
              _push(`<div class="flex-1 leading-tight">${ssrInterpolate(item.variation ? (_c = (_b = item.variation) == null ? void 0 : _b.node) == null ? void 0 : _c.name : (_d = item.product) == null ? void 0 : _d.node.name)}</div><div class="text-sm text-stone-600">Qty. ${ssrInterpolate(item.quantity)}</div><span class="text-sm font-semibold">${ssrInterpolate(unref(formatPrice)(item.total))}</span></div>`);
            });
            _push(`<!--]--></div><!--]-->`);
          } else {
            _push(`<!---->`);
          }
          _push(`<hr class="my-8">`);
          if (unref(downloadableItems).length && !unref(orderIsNotCompleted)) {
            _push(`<div>`);
            _push(ssrRenderComponent(_component_DownloadableItems, { "downloadable-items": unref(downloadableItems) }, null, _parent));
            _push(`<hr class="my-8"></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div><div class="flex justify-between"><span>${ssrInterpolate(_ctx.$t("messages.shop.subtotal"))}</span><span>${ssrInterpolate(unref(order).subtotal)}</span></div><div class="flex justify-between"><span>${ssrInterpolate(_ctx.$t("messages.general.tax"))}</span><span>${ssrInterpolate(unref(order).totalTax)}</span></div><div class="flex justify-between"><span>${ssrInterpolate(_ctx.$t("messages.general.shipping"))}</span><span>${ssrInterpolate(unref(order).shippingTotal)}</span></div>`);
          if (unref(hasDiscount)) {
            _push(`<div class="flex justify-between text-primary"><span>${ssrInterpolate(_ctx.$t("messages.shop.discount"))}</span><span>- ${ssrInterpolate(unref(order).discountTotal)}</span></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<hr class="my-8"><div class="flex justify-between"><span class>${ssrInterpolate(_ctx.$t("messages.shop.total"))}</span><span class="font-semibold">${ssrInterpolate(unref(order).total)}</span></div></div></div>`);
        } else if (unref(errorMessage)) {
          _push(`<div class="flex flex-col items-center justify-center flex-1 w-full gap-4 text-center">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "ion:sad-outline",
            size: "96",
            class: "text-stone-700"
          }, null, _parent));
          _push(`<h1 class="text-xl font-semibold">Error</h1>`);
          if (unref(errorMessage)) {
            _push(`<div class="text-sm text-red-500">${unref(errorMessage) ?? ""}</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/pages/order-summary.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=order-summary-BOPGk4h7.mjs.map
