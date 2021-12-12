(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.myLib = {}));
})(this, (function (exports) { 'use strict';

  const hello = () => {
    console.log('hello world');
  };

  hello();

  const world = 'world';

  exports.world = world;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
