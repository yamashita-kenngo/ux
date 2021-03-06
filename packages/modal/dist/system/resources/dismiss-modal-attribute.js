System.register(["aurelia-templating", "aurelia-dependency-injection", "./modal-util"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var aurelia_templating_1, aurelia_dependency_injection_1, modal_util_1, DismissModalAttribute;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (aurelia_templating_1_1) {
                aurelia_templating_1 = aurelia_templating_1_1;
            },
            function (aurelia_dependency_injection_1_1) {
                aurelia_dependency_injection_1 = aurelia_dependency_injection_1_1;
            },
            function (modal_util_1_1) {
                modal_util_1 = modal_util_1_1;
            }
        ],
        execute: function () {
            DismissModalAttribute = /** @class */ (function () {
                function DismissModalAttribute(element) {
                    this.element = element;
                }
                DismissModalAttribute.prototype.bind = function () {
                    this.element.addEventListener('click', this);
                };
                DismissModalAttribute.prototype.unbind = function () {
                    this.element.removeEventListener('click', this);
                };
                DismissModalAttribute.prototype.handleEvent = function () {
                    var modal = modal_util_1.findModal(this.element);
                    if (modal !== null) {
                        modal.dismiss();
                    }
                };
                DismissModalAttribute = __decorate([
                    aurelia_dependency_injection_1.inject(Element),
                    aurelia_templating_1.customAttribute('dismiss-modal')
                ], DismissModalAttribute);
                return DismissModalAttribute;
            }());
            exports_1("DismissModalAttribute", DismissModalAttribute);
        }
    };
});
