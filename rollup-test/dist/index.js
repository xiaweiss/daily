import { openBlock, createElementBlock, normalizeClass } from 'vue';

function render$1(_ctx, _cache) {
  return (openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.$style.pink)
  }, "vue tpl", 2 /* CLASS */))
}

var style0$1 = {"pink":"_pink_1ul5y_2"};

const script$1 = {};

const cssModules$1 = script$1.__cssModules = {};
cssModules$1["$style"] = style0$1;

script$1.render = render$1;
script$1.__file = "src/test.vue";

function render(_ctx, _cache) {
  return (openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.$style.blue)
  }, "vue tpl 2", 2 /* CLASS */))
}

var style0 = {"blue":"_blue_8e4p9_2"};

const script = {};

const cssModules = script.__cssModules = {};
cssModules["$style"] = style0;

script.render = render;
script.__file = "src/test2.vue";

export { script$1 as test, script as test2 };
