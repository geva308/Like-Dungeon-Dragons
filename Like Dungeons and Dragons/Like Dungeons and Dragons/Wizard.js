var Wizard = /** @class */ (function () {
    function Wizard() {
        this.wizard_skill1 = ["Flame Strike", 60];
        this.wizard_skill2 = ["Niddles of Ice", 70];
        this.resist = new Array();
    }
    Object.defineProperty(Wizard.prototype, "Wiz_S1", {
        get: function () {
            return this.wizard_skill1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Wizard.prototype, "Wiz_S2", {
        get: function () {
            return this.wizard_skill2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Wizard.prototype, "RES", {
        get: function () {
            return this.resist;
        },
        enumerable: true,
        configurable: true
    });
    return Wizard;
}());
//# sourceMappingURL=Wizard.js.map