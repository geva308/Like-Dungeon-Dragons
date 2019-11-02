var Stats = /** @class */ (function () {
    function Stats(health, def, atk) {
        this.hp = 0;
        this.def = 0;
        this.atk = 0;
        this.exp = 0;
        this.exp_lvup = 10;
        this.lvl = 1;
        this.HP = health;
        this.DEF = def;
        this.ATK = atk;
    }
    Stats.prototype.print = function () {
        return ("Stats:\n\nHP: " + this.HP + "\nDEF: " + this.DEF + "\nATK: " + this.ATK + "\nLevel: " + this.LVL + "\n");
    };
    Object.defineProperty(Stats.prototype, "ATK", {
        get: function () {
            return this.atk;
        },
        set: function (atk) {
            this.atk += atk;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stats.prototype, "DEF", {
        get: function () {
            return this.def;
        },
        set: function (def) {
            this.def += def;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stats.prototype, "HP", {
        get: function () {
            return this.hp;
        },
        set: function (hp) {
            this.hp += hp;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stats.prototype, "EXP_LVUP", {
        get: function () {
            return this.exp_lvup;
        },
        set: function (x) {
            this.exp_lvup += x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stats.prototype, "EXP", {
        get: function () {
            return this.exp;
        },
        set: function (x) {
            this.exp += x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stats.prototype, "LVL", {
        get: function () {
            return this.lvl;
        },
        set: function (x) {
            this.lvl += x;
        },
        enumerable: true,
        configurable: true
    });
    return Stats;
}());
//# sourceMappingURL=Stats.js.map