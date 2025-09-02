"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Greet = void 0;
// @ts-check
const Greet = () => {
    return 'Hello its git tag test ts repo v1.0.4';
};
exports.Greet = Greet;
const message = (0, exports.Greet)();
console.log(message);
