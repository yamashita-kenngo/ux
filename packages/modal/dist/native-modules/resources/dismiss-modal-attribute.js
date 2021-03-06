var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customAttribute } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { findModal } from './modal-util';
var DismissModalAttribute = /** @class */ (function () {
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
        var modal = findModal(this.element);
        if (modal !== null) {
            modal.dismiss();
        }
    };
    DismissModalAttribute = __decorate([
        inject(Element),
        customAttribute('dismiss-modal')
    ], DismissModalAttribute);
    return DismissModalAttribute;
}());
export { DismissModalAttribute };
