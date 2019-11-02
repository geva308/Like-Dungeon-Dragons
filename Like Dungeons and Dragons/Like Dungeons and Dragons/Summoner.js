var Summoner = /** @class */ (function () {
    function Summoner() {
        this.summoner_skill1 = ["Big Cats", 60];
        this.summoner_skill2 = ["Bees Bees Bees", 70];
        this.resist = new Array();
    }
    Object.defineProperty(Summoner.prototype, "Sum_S1", {
        get: function () {
            return this.summoner_skill1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Summoner.prototype, "Sum_S2", {
        get: function () {
            return this.summoner_skill2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Summoner.prototype, "RES", {
        get: function () {
            return this.resist;
        },
        enumerable: true,
        configurable: true
    });
    return Summoner;
}());
//# sourceMappingURL=Summoner.js.map