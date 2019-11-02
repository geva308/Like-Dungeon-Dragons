var Race = /** @class */ (function () {
    function Race() {
        this.resist = new Array();
    }
    Object.defineProperty(Race.prototype, "R_S1", {
        get: function () {
            return this.race_skill1;
        },
        set: function (skill) {
            this.race_skill1 = skill;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Race.prototype, "R_S2", {
        get: function () {
            return this.race_skill2;
        },
        set: function (skill) {
            this.race_skill2 = skill;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Race.prototype, "RES", {
        get: function () {
            return this.resist;
        },
        enumerable: true,
        configurable: true
    });
    Race.prototype.addRES = function (res) {
        this.RES.push(res);
    };
    return Race;
}());
//# sourceMappingURL=Demon.js.map