var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Class = /** @class */ (function (_super) {
    __extends(Class, _super);
    function Class(rs1, d1, rs2, d2, cs1, cd1, cs2, cd2, or, sp) {
        var _this = _super.call(this, rs1, d1, rs2, d2, or) || this;
        _this.C_S1 = cs1;
        _this.C_S2 = cs2;
        _this.CSD1 = cd1;
        _this.CSD2 = cd2;
        _this.SPEC = sp;
        return _this;
    }
    Object.defineProperty(Class.prototype, "SPEC", {
        get: function () {
            return this.spec;
        },
        set: function (cl) {
            this.spec = cl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Class.prototype, "CSD1", {
        get: function () {
            return this.csd1;
        },
        set: function (x) {
            this.csd1 = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Class.prototype, "CSD2", {
        get: function () {
            return this.csd2;
        },
        set: function (x) {
            this.csd2 = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Class.prototype, "C_S1", {
        get: function () {
            return this.class_skill1;
        },
        set: function (skill) {
            this.class_skill1 = skill;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Class.prototype, "C_S2", {
        get: function () {
            return this.class_skill2;
        },
        set: function (skill) {
            this.class_skill2 = skill;
        },
        enumerable: true,
        configurable: true
    });
    return Class;
}(Race));
//# sourceMappingURL=Class.js.map