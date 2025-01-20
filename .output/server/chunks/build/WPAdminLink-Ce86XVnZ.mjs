import { useSSRContext, defineComponent } from 'vue';
import { c as _export_sfc, m as useRuntimeConfig } from './server.mjs';
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
import 'vue/server-renderer';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "WPAdminLink",
  __ssrInlineRender: true,
  props: {
    link: {}
  },
  setup(__props) {
    var _a, _b, _c, _d;
    const runtimeConfig = useRuntimeConfig();
    const defaultClient = (_c = (_b = (_a = runtimeConfig == null ? void 0 : runtimeConfig.public) == null ? void 0 : _a["graphql-client"]) == null ? void 0 : _b.clients) == null ? void 0 : _c.default;
    const gqlEndpoint = (defaultClient == null ? void 0 : defaultClient.host) ?? null;
    const wpBase = (gqlEndpoint == null ? void 0 : gqlEndpoint.replace("/graphql", "")) ?? null;
    wpBase + __props.link;
    ((_d = __props.link) == null ? void 0 : _d.startsWith("/wp-admin")) || false;
    return (_ctx, _push, _parent, _attrs) => {
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/WPAdminLink.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const WPAdminLink = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-79cc94cd"]]);

export { WPAdminLink as default };
//# sourceMappingURL=WPAdminLink-Ce86XVnZ.mjs.map
