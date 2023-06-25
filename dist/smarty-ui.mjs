import { defineComponent, createVNode, resolveComponent, openBlock, createElementBlock, withCtx, createTextVNode } from "vue";
const __uno = "";
const props = {
  color: {
    type: String,
    default: "blue"
  },
  icon: {
    type: String,
    default: ""
  },
  size: {
    type: String,
    default: "medium"
  },
  round: {
    type: Boolean,
    default: false
  },
  plain: {
    type: Boolean,
    default: false
  }
};
const MyButton = defineComponent({
  name: "SButton",
  props,
  setup(props2, {
    slots
  }) {
    const size = {
      small: {
        x: "2",
        y: "1",
        text: "sm"
      },
      medium: {
        x: "3",
        y: "1.5",
        text: "base"
      },
      large: {
        x: "4",
        y: "2",
        text: "lg"
      }
    };
    return () => createVNode("button", {
      "class": `
          py-2 
          px-4 
          font-semibold 
          rounded-lg 
          shadow-md 
          text-white 
          bg-${props2.color}-500 
          hover:bg-${props2.color}-700 
          py-${size[props2.size].y}
          border-none 
          cursor-pointer 
          m-1
          `
    }, [props2.icon !== "" ? createVNode("i", {
      "class": `i-ic-baseline-${props2.icon} p-3`
    }, null) : "", slots.default ? slots.default() : ""]);
  }
});
const _sfc_main = {
  name: "SFCButton"
};
const _export_sfc = (sfc, props2) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props2) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1 = /* @__PURE__ */ createTextVNode("\u84DD\u8272\u6309\u94AE");
const _hoisted_2 = /* @__PURE__ */ createTextVNode("\u7EFF\u8272\u6309\u94AE");
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u7070\u8272\u6309\u94AE");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u9EC4\u8272\u6309\u94AE");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u7EA2\u8272\u6309\u94AE");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_SButton = resolveComponent("SButton");
  return openBlock(), createElementBlock("div", null, [
    createVNode(_component_SButton, { color: "blue" }, {
      default: withCtx(() => [
        _hoisted_1
      ]),
      _: 1
    }),
    createVNode(_component_SButton, { color: "green" }, {
      default: withCtx(() => [
        _hoisted_2
      ]),
      _: 1
    }),
    createVNode(_component_SButton, { color: "gray" }, {
      default: withCtx(() => [
        _hoisted_3
      ]),
      _: 1
    }),
    createVNode(_component_SButton, { color: "yellow" }, {
      default: withCtx(() => [
        _hoisted_4
      ]),
      _: 1
    }),
    createVNode(_component_SButton, { color: "red" }, {
      default: withCtx(() => [
        _hoisted_5
      ]),
      _: 1
    })
  ]);
}
const SFCButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const JSXButton = defineComponent({
  name: "JSXButton",
  render() {
    return createVNode("button", null, [createTextVNode("JSX Button")]);
  }
});
const entry = {
  install(app) {
    app.component(MyButton.name, MyButton);
    app.component(SFCButton.name, SFCButton);
    app.component(JSXButton.name, JSXButton);
  }
};
export {
  JSXButton,
  MyButton,
  SFCButton,
  entry as default
};
