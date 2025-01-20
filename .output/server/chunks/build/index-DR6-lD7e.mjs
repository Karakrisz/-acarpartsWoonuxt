import { c as _export_sfc, j as useAuth, o as useI18n, k as useRouter, d as useHelpers, u as useCart, p as useRoute, q as useSeoMeta, b as _sfc_main$8, _ as __nuxt_component_0, e as __nuxt_component_10 } from './server.mjs';
import { useSSRContext, defineAsyncComponent, defineComponent, ref, unref, mergeProps, computed, withCtx, createVNode, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderComponent, ssrRenderStyle, ssrRenderList } from 'vue/server-renderer';
import { _ as _sfc_main$1$1, a as _sfc_main$7 } from './CountrySelect-BEXsV39Z.mjs';
import { _ as _sfc_main$9 } from './PasswordInput-B5YCbrv2.mjs';
import { _ as __nuxt_component_3, a as __nuxt_component_5$1 } from './DownloadableItems-Bcon5mmn.mjs';
import { _ as _sfc_main$a } from './WishList-P506QmLo.mjs';
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
import './useWishlist-BIY00RKh.mjs';

const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "PersonalInformation",
  __ssrInlineRender: true,
  setup(__props) {
    const { viewer, customer } = useAuth();
    const { t } = useI18n();
    const loading = ref(false);
    const button = ref({ text: t("messages.account.updateDetails"), color: "bg-primary hover:bg-primary-dark" });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LoadingIcon = _sfc_main$8;
      if (unref(customer)) {
        _push(`<form${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-lg shadow" }, _attrs))}><div class="grid gap-6 p-8 md:grid-cols-2"><h3 class="text-xl font-semibold col-span-full">${ssrInterpolate(_ctx.$t("messages.account.personalInfo"))}</h3><div class="w-full"><label for="first-name">${ssrInterpolate(_ctx.$t("messages.billing.firstName"))}</label><input id="first-name"${ssrRenderAttr("value", unref(customer).firstName)} placeholder="John" autocomplete="given-name" type="text"></div><div class="w-full"><label for="last-name">${ssrInterpolate(_ctx.$t("messages.billing.lastName"))}</label><input id="last-name"${ssrRenderAttr("value", unref(customer).lastName)} placeholder="Doe" autocomplete="family-name" type="text"></div><div class="w-full"><label for="username">${ssrInterpolate(_ctx.$t("messages.account.username"))} (${ssrInterpolate(_ctx.$t("messages.general.readOnly"))})</label><input id="username"${ssrRenderAttr("value", unref(customer).username)} placeholder="johndoe" autocomplete="username" type="text" readonly></div><div class="w-full"><label for="email">${ssrInterpolate(_ctx.$t("messages.billing.email"))}</label><input id="email"${ssrRenderAttr("value", unref(customer).email)} placeholder="johndoe@email.com" autocomplete="email" type="email"></div></div><div class="bg-white backdrop-blur-sm bg-opacity-75 border-t col-span-full p-4 sticky bottom-0 rounded-b-lg"><button class="${ssrRenderClass([unref(button).color, "ml-auto button button-primary"])}"${ssrIncludeBooleanAttr(unref(loading)) ? " disabled" : ""}>`);
        if (unref(loading)) {
          _push(ssrRenderComponent(_component_LoadingIcon, {
            color: "#fff",
            size: "20"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<span>${ssrInterpolate(unref(button).text)}</span></button></div></form>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/forms/PersonalInformation.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "BillingAndShipping",
  __ssrInlineRender: true,
  setup(__props) {
    const { viewer, customer } = useAuth();
    const { t } = useI18n();
    const loading = ref(false);
    const button = ref({ text: t("messages.account.updateDetails"), color: "bg-primary hover:bg-primary-dark" });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_StateSelect = _sfc_main$1$1;
      const _component_CountrySelect = _sfc_main$7;
      const _component_LoadingIcon = _sfc_main$8;
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-lg shadow" }, _attrs))}><div class="grid p-8 gap-6 md:grid-cols-2"><h3 class="font-semibold text-xl col-span-full">${ssrInterpolate(_ctx.$t("messages.billing.billing"))}</h3><div class="w-full"><label for="billing-first-name">${ssrInterpolate(_ctx.$t("messages.billing.firstName"))}</label><input id="billing-first-name"${ssrRenderAttr("value", unref(customer).billing.firstName)} placeholder="John" autocomplete="given-name" type="text" required></div><div class="w-full"><label for="billing-last-name">${ssrInterpolate(_ctx.$t("messages.billing.lastName"))}</label><input id="billing-last-name"${ssrRenderAttr("value", unref(customer).billing.lastName)} placeholder="Doe" autocomplete="family-name" type="text" required></div><div class="w-full"><label for="billing-phone">${ssrInterpolate(_ctx.$t("messages.billing.phone"))}</label><input id="billing-phone"${ssrRenderAttr("value", unref(customer).billing.phone)} placeholder="+1 234 567 8901" autocomplete="tel" type="tel"></div><div class="w-full"><label for="billing-company">Company (${ssrInterpolate(_ctx.$t("messages.general.optional"))})</label><input id="billing-company"${ssrRenderAttr("value", unref(customer).billing.company)} placeholder="Company Name" autocomplete="organization" type="text"></div><div class="w-full"><label for="billing-address">${ssrInterpolate(_ctx.$t("messages.billing.address1"))}</label><input id="billing-address"${ssrRenderAttr("value", unref(customer).billing.address1)} placeholder="123 Main St" autocomplete="address-line1" type="text"></div><div class="w-full"><label for="billing-address-2">${ssrInterpolate(_ctx.$t("messages.billing.address2"))} (${ssrInterpolate(_ctx.$t("messages.general.optional"))})</label><input id="billing-address-2"${ssrRenderAttr("value", unref(customer).billing.address2)} placeholder="Apartment, studio, or floor" autocomplete="address-line2" type="text"></div><div class="w-full"><label for="billing-city">${ssrInterpolate(_ctx.$t("messages.billing.city"))}</label><input id="billing-city"${ssrRenderAttr("value", unref(customer).billing.city)} placeholder="New York" autocomplete="address-level2" type="text"></div><div class="w-full"><label for="billing-state">${ssrInterpolate(_ctx.$t("messages.billing.state"))} (${ssrInterpolate(_ctx.$t("messages.general.optional"))})</label>`);
      _push(ssrRenderComponent(_component_StateSelect, {
        id: "billing-state",
        modelValue: unref(customer).billing.state,
        "onUpdate:modelValue": ($event) => unref(customer).billing.state = $event,
        "default-value": unref(customer).billing.state,
        "country-code": unref(customer).billing.country
      }, null, _parent));
      _push(`</div><div class="w-full"><label for="billing-country">${ssrInterpolate(_ctx.$t("messages.billing.country"))}</label>`);
      _push(ssrRenderComponent(_component_CountrySelect, {
        id: "billing-country",
        modelValue: unref(customer).billing.country,
        "onUpdate:modelValue": ($event) => unref(customer).billing.country = $event,
        "default-value": unref(customer).billing.country
      }, null, _parent));
      _push(`</div><div class="w-full"><label for="billing-zip">${ssrInterpolate(_ctx.$t("messages.billing.zip"))}</label><input id="billing-zip"${ssrRenderAttr("value", unref(customer).billing.postcode)} placeholder="10001" autocomplete="postal-code" type="text"></div><div class="w-full col-span-full"><label for="billing-email">${ssrInterpolate(_ctx.$t("messages.billing.email"))}</label><input id="billing-email"${ssrRenderAttr("value", unref(customer).billing.email)} placeholder="johndoe@email.com" autocomplete="email" type="email" required></div></div><div class="grid p-8 gap-6 md:grid-cols-2"><h3 class="font-semibold text-xl col-span-full">${ssrInterpolate(_ctx.$t("messages.general.shipping"))}</h3><div class="w-full"><label for="shipping-first-name">${ssrInterpolate(_ctx.$t("messages.billing.firstName"))}</label><input id="shipping-first-name"${ssrRenderAttr("value", unref(customer).shipping.firstName)} placeholder="John" autocomplete="given-name" type="text" required></div><div class="w-full"><label for="shipping-last-name">${ssrInterpolate(_ctx.$t("messages.billing.lastName"))}</label><input id="shipping-last-name"${ssrRenderAttr("value", unref(customer).shipping.lastName)} placeholder="Doe" autocomplete="family-name" type="text" required></div><div class="w-full"><label for="shipping-phone">${ssrInterpolate(_ctx.$t("messages.billing.phone"))}</label><input id="shipping-phone"${ssrRenderAttr("value", unref(customer).shipping.phone)} placeholder="+1 234 567 8901" autocomplete="tel" type="tel"></div><div class="w-full"><label for="shipping-company">Company (${ssrInterpolate(_ctx.$t("messages.general.optional"))})</label><input id="shipping-company"${ssrRenderAttr("value", unref(customer).shipping.company)} placeholder="Company Name" autocomplete="organization" type="text"></div><div class="w-full"><label for="shipping-address">${ssrInterpolate(_ctx.$t("messages.billing.address1"))}</label><input id="shipping-address"${ssrRenderAttr("value", unref(customer).shipping.address1)} placeholder="O&#39;Connell Street 47" autocomplete="address-line1" type="text"></div><div class="w-full"><label for="shipping-address-2">${ssrInterpolate(_ctx.$t("messages.billing.address2"))} (${ssrInterpolate(_ctx.$t("messages.general.optional"))})</label><input id="shipping-address-2"${ssrRenderAttr("value", unref(customer).shipping.address2)} placeholder="Apartment, studio, or floor" autocomplete="address-line2" type="text"></div><div class="w-full"><label for="shipping-city">${ssrInterpolate(_ctx.$t("messages.billing.city"))}</label><input id="shipping-city"${ssrRenderAttr("value", unref(customer).shipping.city)} placeholder="New York" autocomplete="address-level2" type="text"></div><div class="w-full"><label for="shipping-state">${ssrInterpolate(_ctx.$t("messages.billing.state"))} (${ssrInterpolate(_ctx.$t("messages.general.optional"))})</label>`);
      _push(ssrRenderComponent(_component_StateSelect, {
        id: "shipping-state",
        modelValue: unref(customer).shipping.state,
        "onUpdate:modelValue": ($event) => unref(customer).shipping.state = $event,
        "default-value": unref(customer).shipping.state,
        "country-code": unref(customer).shipping.country
      }, null, _parent));
      _push(`</div><div class="w-full"><label for="shipping-country">${ssrInterpolate(_ctx.$t("messages.billing.country"))}</label>`);
      _push(ssrRenderComponent(_component_CountrySelect, {
        id: "shipping-country",
        modelValue: unref(customer).shipping.country,
        "onUpdate:modelValue": ($event) => unref(customer).shipping.country = $event,
        "default-value": (_a = unref(customer).shipping) == null ? void 0 : _a.country
      }, null, _parent));
      _push(`</div><div class="w-full"><label for="shipping-zip">${ssrInterpolate(_ctx.$t("messages.billing.zip"))}</label><input id="shipping-zip"${ssrRenderAttr("value", unref(customer).shipping.postcode)} placeholder="10001" autocomplete="postal-code" type="text"></div></div><div class="bg-white backdrop-blur-sm bg-opacity-75 border-t col-span-full p-4 sticky bottom-0 rounded-b-lg"><button class="${ssrRenderClass([unref(button).color, "ml-auto button button-primary"])}"${ssrIncludeBooleanAttr(unref(loading)) ? " disabled" : ""}>`);
      if (unref(loading)) {
        _push(ssrRenderComponent(_component_LoadingIcon, {
          color: "#fff",
          size: "20"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<span>${ssrInterpolate(unref(button).text)}</span></button></div></form>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/forms/BillingAndShipping.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ChangePassword",
  __ssrInlineRender: true,
  setup(__props) {
    const { viewer, loginUser } = useAuth();
    const { t } = useI18n();
    const password = ref({ new: "", confirm: "" });
    const loading = ref(false);
    const button = ref({ text: t("messages.account.updatePassword"), color: "bg-primary hover:bg-primary-dark" });
    const errorMessage = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PasswordInput = _sfc_main$9;
      const _component_LoadingIcon = _sfc_main$8;
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-lg shadow mt-4" }, _attrs))}><div class="grid p-8 gap-6 md:grid-cols-2"><h3 class="font-semibold text-xl col-span-full">${ssrInterpolate(_ctx.$t("messages.account.changePassword"))}</h3><input${ssrRenderAttr("value", unref(viewer).username)} type="text" name="username" autocomplete="username" style="${ssrRenderStyle({ "display": "none" })}"><div class="w-full"><label for="new-password">${ssrInterpolate(_ctx.$t("messages.account.newPassword"))}</label>`);
      _push(ssrRenderComponent(_component_PasswordInput, {
        id: "new-password",
        modelValue: unref(password).new,
        "onUpdate:modelValue": ($event) => unref(password).new = $event,
        placeholder: "••••••••••",
        type: "text",
        required: ""
      }, null, _parent));
      _push(`</div><div class="w-full"><label for="new-password-confirm">${ssrInterpolate(_ctx.$t("messages.account.confirmNewPassword"))}</label>`);
      _push(ssrRenderComponent(_component_PasswordInput, {
        id: "new-password-confirm",
        modelValue: unref(password).confirm,
        "onUpdate:modelValue": ($event) => unref(password).confirm = $event,
        placeholder: "••••••••••",
        type: "text",
        required: ""
      }, null, _parent));
      _push(`</div>`);
      if (unref(errorMessage)) {
        _push(`<div class="w-full text-sm text-red-500">${unref(errorMessage) ?? ""}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="bg-white backdrop-blur-sm bg-opacity-75 border-t col-span-full p-4 sticky bottom-0 rounded-b-lg"><button class="${ssrRenderClass([unref(button).color, "ml-auto button button-primary"])}"${ssrIncludeBooleanAttr(unref(loading)) ? " disabled" : ""}>`);
      if (unref(loading)) {
        _push(ssrRenderComponent(_component_LoadingIcon, {
          color: "#fff",
          size: "20"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<span>${ssrInterpolate(unref(button).text)}</span></button></div></form>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/forms/ChangePassword.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_PersonalInformation = _sfc_main$6;
  const _component_BillingAndShipping = _sfc_main$5;
  const _component_ChangePassword = _sfc_main$4;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid gap-8 account-form" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_PersonalInformation, null, null, _parent));
  _push(ssrRenderComponent(_component_BillingAndShipping, null, null, _parent));
  _push(ssrRenderComponent(_component_ChangePassword, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/AccountMyDetails.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "OrderList",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const { formatDate, scrollToTop } = useHelpers();
    const { getOrders, orders } = useAuth();
    if (orders.value === null) getOrders();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_OrderStatusLabel = __nuxt_component_3;
      const _component_Icon = __nuxt_component_0;
      const _component_LoadingIcon = _sfc_main$8;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-lg flex shadow min-h-[250px] p-4 md:p-12 justify-center items-center" }, _attrs))} data-v-b9be4e67>`);
      if (unref(orders) && unref(orders).length) {
        _push(`<div class="w-full" data-v-b9be4e67><table class="w-full text-left table-auto" aria-label="Order List" data-v-b9be4e67><thead data-v-b9be4e67><tr data-v-b9be4e67><th data-v-b9be4e67>${ssrInterpolate(_ctx.$t("messages.shop.order"))}</th><th data-v-b9be4e67>${ssrInterpolate(_ctx.$t("messages.general.date"))}</th><th data-v-b9be4e67>${ssrInterpolate(_ctx.$t("messages.general.status"))}</th><th class="text-right" data-v-b9be4e67>${ssrInterpolate(_ctx.$t("messages.shop.total"))}</th></tr></thead><tbody data-v-b9be4e67><!--[-->`);
        ssrRenderList(unref(orders), (order) => {
          _push(`<tr class="cursor-pointer hover:underline" data-v-b9be4e67><td class="rounded-l-lg" data-v-b9be4e67>${ssrInterpolate(order.orderNumber)}</td><td data-v-b9be4e67>${ssrInterpolate(unref(formatDate)(order.date))}</td><td data-v-b9be4e67>`);
          if (order.status) {
            _push(ssrRenderComponent(_component_OrderStatusLabel, { order }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</td><td class="text-right rounded-r-lg" data-v-b9be4e67>${ssrInterpolate(order.total)}</td></tr>`);
        });
        _push(`<!--]--></tbody></table><div class="text-center flex justify-center w-full mt-8" data-v-b9be4e67><button type="button" class="flex items-center gap-1 text-sm leading-none hover:bg-stone-50 p-2 rounded" data-v-b9be4e67><span data-v-b9be4e67>Reresh list</span>`);
        _push(ssrRenderComponent(_component_Icon, { name: "ion:refresh-outline" }, null, _parent));
        _push(`</button></div></div>`);
      } else if (unref(orders) && unref(orders).length === 0) {
        _push(`<div class="min-h-[250px] flex items-center justify-center text-stone-500 text-lg" data-v-b9be4e67>Nem található rendelés.</div>`);
      } else {
        _push(ssrRenderComponent(_component_LoadingIcon, {
          size: "24",
          stroke: "2"
        }, null, _parent));
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/OrderList.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-b9be4e67"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DownloadList",
  __ssrInlineRender: true,
  setup(__props) {
    useHelpers();
    const { getDownloads, downloads } = useAuth();
    if (downloads.value === null) getDownloads();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DownloadableItems = __nuxt_component_5$1;
      const _component_Icon = __nuxt_component_0;
      const _component_LoadingIcon = _sfc_main$8;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-lg flex shadow min-h-[250px] p-4 md:p-12 justify-center items-center" }, _attrs))}>`);
      if (unref(downloads) && unref(downloads).length) {
        _push(`<div class="w-full">`);
        _push(ssrRenderComponent(_component_DownloadableItems, { downloadableItems: unref(downloads) }, null, _parent));
        _push(`<div class="text-center flex justify-center w-full mt-8"><button type="button" class="flex items-center gap-1 text-sm leading-none hover:bg-stone-50 p-2 rounded"><span>Refresh list</span>`);
        _push(ssrRenderComponent(_component_Icon, { name: "ion:refresh-outline" }, null, _parent));
        _push(`</button></div></div>`);
      } else if (unref(downloads) && unref(downloads).length === 0) {
        _push(`<div class="min-h-[250px] flex items-center justify-center text-stone-500 text-lg">No downloads found.</div>`);
      } else {
        _push(ssrRenderComponent(_component_LoadingIcon, {
          size: "24",
          stroke: "2"
        }, null, _parent));
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/DownloadList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1_lazy = defineAsyncComponent(() => import('./LoginAndRegister-i4N7i1iL.mjs').then((c) => c.default || c));
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { logoutUser, viewer, customer, avatar, isPending } = useAuth();
    const { cart } = useCart();
    const route = useRoute();
    const activeTab = computed(() => route.query.tab || "my-details");
    const showLoader = computed(() => !cart.value);
    useSeoMeta({
      title: `My Account`
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      const _component_LoadingIcon = _sfc_main$8;
      const _component_LazyLoginAndRegister = __nuxt_component_1_lazy;
      const _component_Icon = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_10;
      const _component_AccountMyDetails = __nuxt_component_4;
      const _component_OrderList = __nuxt_component_5;
      const _component_DownloadList = _sfc_main$1;
      const _component_WishList = _sfc_main$a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container min-h-[600px]" }, _attrs))} data-v-1022ec84>`);
      if (unref(showLoader)) {
        _push(`<div class="flex flex-col min-h-[500px]" data-v-1022ec84>`);
        _push(ssrRenderComponent(_component_LoadingIcon, { class: "m-auto" }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!--[-->`);
        if (!unref(viewer)) {
          _push(ssrRenderComponent(_component_LazyLoginAndRegister, null, null, _parent));
        } else {
          _push(`<div class="flex flex-col items-start justify-between w-full lg:gap-12 mb-24 lg:flex-row" data-v-1022ec84><div class="mt-2 lg:sticky top-16 w-full lg:max-w-[260px]" data-v-1022ec84><section class="my-8 flex gap-4 items-start justify-center w-full" data-v-1022ec84>`);
          if (unref(avatar)) {
            _push(`<img${ssrRenderAttr("src", unref(avatar))} class="rounded-full aspect-square border border-white" alt="user-image" width="48" height="48" data-v-1022ec84>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="flex-1 text-balance leading-tight w-full text-ellipsis overflow-hidden" data-v-1022ec84><div class="text-lg font-semibold" data-v-1022ec84>Welcome, ${ssrInterpolate((_a = unref(viewer)) == null ? void 0 : _a.firstName)}</div>`);
          if ((_b = unref(viewer)) == null ? void 0 : _b.email) {
            _push(`<span class="text-stone-400 font-light"${ssrRenderAttr("title", (_c = unref(viewer)) == null ? void 0 : _c.email)} data-v-1022ec84>${ssrInterpolate((_d = unref(viewer)) == null ? void 0 : _d.email)}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><button class="flex text-stone-700 items-center flex-col p-2 px-4 rounded-lg hover:bg-white hover:text-red-700 lg:hidden" data-v-1022ec84>`);
          if (unref(isPending)) {
            _push(ssrRenderComponent(_component_LoadingIcon, { size: "22" }, null, _parent));
          } else {
            _push(ssrRenderComponent(_component_Icon, {
              name: "ion:log-out-outline",
              size: "22"
            }, null, _parent));
          }
          _push(`<small data-v-1022ec84>${ssrInterpolate(_ctx.$t("messages.account.logout"))}</small></button></section><hr class="my-8" data-v-1022ec84><nav class="flex text-stone-700 lg:grid flex-wrap w-full gap-1.5 my-8 min-w-[240px] lg:w-auto items-start" data-v-1022ec84>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/my-account?tab=my-details",
            class: ["flex items-center gap-4 p-2 px-4", { active: unref(activeTab) == "my-details" }]
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "ion:information-circle-outline",
                  size: "22"
                }, null, _parent2, _scopeId));
                _push2(` ${ssrInterpolate(_ctx.$t("messages.general.myDetails"))}`);
              } else {
                return [
                  createVNode(_component_Icon, {
                    name: "ion:information-circle-outline",
                    size: "22"
                  }),
                  createTextVNode(" " + toDisplayString(_ctx.$t("messages.general.myDetails")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/my-account?tab=orders",
            class: ["flex items-center gap-4 p-2 px-4", { active: unref(activeTab) == "orders" }]
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "ion:bag-check-outline",
                  size: "22"
                }, null, _parent2, _scopeId));
                _push2(` ${ssrInterpolate(_ctx.$t("messages.shop.order", 2))}`);
              } else {
                return [
                  createVNode(_component_Icon, {
                    name: "ion:bag-check-outline",
                    size: "22"
                  }),
                  createTextVNode(" " + toDisplayString(_ctx.$t("messages.shop.order", 2)), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/my-account?tab=downloads",
            class: ["flex items-center gap-4 p-2 px-4", { active: unref(activeTab) == "downloads" }]
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "ion:cloud-download-outline",
                  size: "22"
                }, null, _parent2, _scopeId));
                _push2(` ${ssrInterpolate(_ctx.$t("messages.general.downloads"))}`);
              } else {
                return [
                  createVNode(_component_Icon, {
                    name: "ion:cloud-download-outline",
                    size: "22"
                  }),
                  createTextVNode(" " + toDisplayString(_ctx.$t("messages.general.downloads")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/my-account?tab=wishlist",
            class: ["flex items-center gap-4 p-2 px-4", { active: unref(activeTab) == "wishlist" }]
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "ion:heart-outline",
                  size: "22"
                }, null, _parent2, _scopeId));
                _push2(` Kívánságlista `);
              } else {
                return [
                  createVNode(_component_Icon, {
                    name: "ion:heart-outline",
                    size: "22"
                  }),
                  createTextVNode(" Kívánságlista ")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</nav><template class="hidden lg:block" data-v-1022ec84><hr class="my-8" data-v-1022ec84><button class="flex text-stone-700 items-center gap-4 p-2 px-4 w-full rounded-lg hover:bg-white hover:text-red-700" data-v-1022ec84>`);
          if (unref(isPending)) {
            _push(ssrRenderComponent(_component_LoadingIcon, { size: "22" }, null, _parent));
          } else {
            _push(ssrRenderComponent(_component_Icon, {
              name: "ion:log-out-outline",
              size: "22"
            }, null, _parent));
          }
          _push(` ${ssrInterpolate(_ctx.$t("messages.account.logout"))}</button></template></div><main class="flex-1 w-full lg:my-8 rounded-lg max-w-screen-lg lg:sticky top-24" data-v-1022ec84>`);
          if (unref(activeTab) === "my-details") {
            _push(ssrRenderComponent(_component_AccountMyDetails, { user: unref(viewer) }, null, _parent));
          } else if (unref(activeTab) === "orders") {
            _push(ssrRenderComponent(_component_OrderList, null, null, _parent));
          } else if (unref(activeTab) === "downloads") {
            _push(ssrRenderComponent(_component_DownloadList, null, null, _parent));
          } else if (unref(activeTab) === "wishlist") {
            _push(ssrRenderComponent(_component_WishList, null, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</main></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/pages/my-account/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1022ec84"]]);

export { index as default };
//# sourceMappingURL=index-DR6-lD7e.mjs.map
