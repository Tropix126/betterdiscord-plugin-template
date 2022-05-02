/**
 * @name Plugin
 * @description A plugin for BetterDiscord
 * @author me
*/
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  default: () => Plugin
});
module.exports = __toCommonJS(src_exports);
var import_bdapi = require("betterdiscord/bdapi");
var { Button } = (0, import_bdapi.findModuleByProps)("BorderColors");
var Plugin = class {
  start() {
    (0, import_bdapi.showConfirmationModal)(/* @__PURE__ */ import_bdapi.React.createElement(Button, null, "Test"));
  }
};
//# sourceMappingURL=Plugin.plugin.js.map
