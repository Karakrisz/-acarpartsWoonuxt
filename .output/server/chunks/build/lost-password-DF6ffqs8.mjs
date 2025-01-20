import { c as _export_sfc, n as useAppConfig, v as useImage, o as useI18n, k as useRouter, p as useRoute, j as useAuth, h as useHead, e as __nuxt_component_10, b as _sfc_main$8 } from './server.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, openBlock, createBlock, ref, unref, isRef, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$3 } from './PasswordInput-B5YCbrv2.mjs';
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

const logoUrl = "/img/svg/SVG_Logo.svg";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Logo",
  __ssrInlineRender: true,
  setup(__props) {
    useAppConfig();
    useImage();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_10;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({ to: "/" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            {
              _push2(`<img${ssrRenderAttr("src", logoUrl)} alt="Logo" class="object-contain h-10"${_scopeId}>`);
            }
          } else {
            return [
              (openBlock(), createBlock("img", {
                key: 0,
                src: logoUrl,
                alt: "Logo",
                class: "object-contain h-10"
              }))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/generalElements/Logo.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ResetPassword",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const router = useRouter();
    const route = useRoute();
    useAuth();
    const password = ref("");
    const confirmPassword = ref("");
    const errorMessage = ref("");
    const isPending = ref(false);
    const isInvalidLink = ref(false);
    if (!route.query.key && !route.query.login) {
      router.push("/my-account?action=forgotPassword");
    }
    useHead({
      title: t("messages.account.resetPassword")
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Logo = _sfc_main$2;
      const _component_PasswordInput = _sfc_main$3;
      const _component_NuxtLink = __nuxt_component_10;
      const _component_LoadingIcon = _sfc_main$8;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-lg mx-auto my-16 min-h-[600px] lg:my-24" }, _attrs))} data-v-66e5ed8b><div class="flex flex-col items-center" data-v-66e5ed8b>`);
      _push(ssrRenderComponent(_component_Logo, { class: "mb-6 scale-125" }, null, _parent));
      _push(`<h1 class="text-xl font-semibold lg:text-3xl" data-v-66e5ed8b>${ssrInterpolate(_ctx.$t("messages.account.resetPassword"))}</h1></div><form class="mt-6 flex flex-col" data-v-66e5ed8b><label for="password" class="mb-4" data-v-66e5ed8b>${ssrInterpolate(_ctx.$t("messages.account.newPassword"))} <span class="text-red-500" data-v-66e5ed8b>*</span><br data-v-66e5ed8b>`);
      _push(ssrRenderComponent(_component_PasswordInput, {
        id: "password",
        className: " border rounded-lg w-full p-3 px-4 bg-white",
        modelValue: unref(password),
        "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
        placeholder: "New Password",
        required: true
      }, null, _parent));
      _push(`</label><label for="confirmPassword" class="mb-4" data-v-66e5ed8b>${ssrInterpolate(_ctx.$t("messages.account.confirmNewPassword"))} <span class="text-red-500" data-v-66e5ed8b>*</span><br data-v-66e5ed8b>`);
      _push(ssrRenderComponent(_component_PasswordInput, {
        id: "confirmPassword",
        className: "border rounded-lg w-full p-3 px-4 bg-white",
        modelValue: unref(confirmPassword),
        "onUpdate:modelValue": ($event) => isRef(confirmPassword) ? confirmPassword.value = $event : null,
        placeholder: "Confirm Password",
        required: true
      }, null, _parent));
      _push(`</label>`);
      if (unref(errorMessage)) {
        _push(`<div class="text-sm mb-4" data-v-66e5ed8b><span class="text-red-500" data-v-66e5ed8b>${unref(errorMessage) ?? ""}</span>`);
        if (unref(isInvalidLink)) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            class: "underline cursor-pointer pl-1",
            to: "/my-account?action=forgotPassword"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.$t("messages.account.requestNewLink"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t("messages.account.requestNewLink")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button class="flex items-center justify-center gap-4 mt-4 text-lg" data-v-66e5ed8b>`);
      if (unref(isPending)) {
        _push(ssrRenderComponent(_component_LoadingIcon, {
          stroke: "4",
          size: "16",
          color: "#fff"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<span data-v-66e5ed8b>${ssrInterpolate(_ctx.$t("messages.account.resetPassword"))}</span></button></form><div class="my-8 text-center cursor-pointer" data-v-66e5ed8b>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/my-account" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("messages.account.backToLogin"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("messages.account.backToLogin")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/forms/ResetPassword.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-66e5ed8b"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ResetPassword = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container min-h-[600px]" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_ResetPassword, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/pages/my-account/lost-password.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const lostPassword = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { lostPassword as default };
//# sourceMappingURL=lost-password-DF6ffqs8.mjs.map
