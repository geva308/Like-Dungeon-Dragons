var Elf = /** @class */ (function () {
    function Elf() {
        this.elf_skill1 = ["Summon Griffin", 30];
        this.elf_skill2 = ["Power of Nature", 40];
        this.resist = new Array();
    }
    Object.defineProperty(Elf.prototype, "E_S1", {
        get: function () {
            return this.elf_skill1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Elf.prototype, "E_S2", {
        get: function () {
            return this.elf_skill2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Elf.prototype, "RES", {
        get: function () {
            return this.resist;
        },
        enumerable: true,
        configurable: true
    });
    return Elf;
}());
//# sourceMappingURL=Elf.js.map