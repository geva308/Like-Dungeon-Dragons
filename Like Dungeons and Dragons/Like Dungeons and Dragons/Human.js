var Human = /** @class */ (function () {
    function Human() {
        this.human_skill1 = ["Summon Dragon", 40];
        this.human_skill2 = ["Power Overwhelming", 60];
        this.resist = new Array();
    }
    Object.defineProperty(Human.prototype, "H_S1", {
        get: function () {
            return this.human_skill1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Human.prototype, "H_S2", {
        get: function () {
            return this.human_skill2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Human.prototype, "RES", {
        get: function () {
            return this.resist;
        },
        enumerable: true,
        configurable: true
    });
    return Human;
}());
//# sourceMappingURL=Human.js.map