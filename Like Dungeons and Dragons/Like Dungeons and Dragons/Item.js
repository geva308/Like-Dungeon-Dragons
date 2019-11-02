var Item = /** @class */ (function () {
    function Item(name, type, stats, price) {
        this.NAME = name;
        this.TYPE = type;
        this.STATS = stats;
        this.PRICE = price;
    }
    Object.defineProperty(Item.prototype, "PRICE", {
        get: function () {
            return this.price;
        },
        set: function (x) {
            if (x >= 0) {
                this.price = x;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "TYPE", {
        get: function () {
            return this.type;
        },
        set: function (t) {
            this.type = t;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "NAME", {
        get: function () {
            return this.name;
        },
        set: function (n) {
            this.name = n;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "STATS", {
        get: function () {
            return this.bonus_stats;
        },
        set: function (stat) {
            this.bonus_stats = stat;
        },
        enumerable: true,
        configurable: true
    });
    return Item;
}());
//# sourceMappingURL=Item.js.map