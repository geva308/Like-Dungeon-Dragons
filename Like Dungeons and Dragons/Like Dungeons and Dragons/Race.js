var Race = /** @class */ (function () {
    function Race(rs1, d1, rs2, d2, or) {
        this.R_S1 = rs1;
        this.R_S2 = rs2;
        this.RSD1 = d1;
        this.RSD2 = d2;
        this.ORIGIN = or;
    }
    Object.defineProperty(Race.prototype, "ORIGIN", {
        get: function () {
            return this.origin;
        },
        set: function (o) {
            this.origin = o;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Race.prototype, "RSD2", {
        get: function () {
            return this.rsd2;
        },
        set: function (x) {
            this.rsd2 = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Race.prototype, "RSD1", {
        get: function () {
            return this.rsd1;
        },
        set: function (x) {
            this.rsd1 = x;
        },
        enumerable: true,
        configurable: true
    });
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
    return Race;
}());
//# sourceMappingURL=Race.js.map