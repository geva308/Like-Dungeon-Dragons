var DragonSlayer = /** @class */ (function () {
    function DragonSlayer() {
        this.slayer_skill1 = ["Force of Dragons", 80];
        this.slayer_skill2 = ["Attack from Below", 70];
        this.resist = new Array();
    }
    Object.defineProperty(DragonSlayer.prototype, "DS_S1", {
        get: function () {
            return this.slayer_skill1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DragonSlayer.prototype, "DS_S2", {
        get: function () {
            return this.slayer_skill2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DragonSlayer.prototype, "RES", {
        get: function () {
            return this.resist;
        },
        enumerable: true,
        configurable: true
    });
    return DragonSlayer;
}());
//# sourceMappingURL=DragonSlayer.js.map