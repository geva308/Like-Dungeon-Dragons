var Character = /** @class */ (function () {
    function Character(name, race, cl, st, item) {
        this.gold = 0;
        this.skill_points = 0;
        this.NAME = name;
        this.RACE = race;
        this.CL = cl;
        this.skill_set = new Array(race.R_S1, race.R_S2, cl.C_S1, cl.C_S2);
        this.eq_dmg = new Array(race.RSD1, race.RSD2, cl.CSD1, cl.CSD2);
        this.STATS = st;
        this.INVENTORY = new Array();
        this.EQUIPPED_ITEMS = new Array(6); //0-weapon 1-armor 2-ring 3-ring 4-wings 5-cloak
        this.addItem(item);
        this.EQUIP(item);
    }
    Object.defineProperty(Character.prototype, "SKILL_POINTS", {
        get: function () {
            return this.skill_points;
        },
        set: function (x) {
            this.skill_points += x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Character.prototype, "GOLD", {
        get: function () {
            return this.gold;
        },
        set: function (x) {
            this.gold += x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Character.prototype, "STATS", {
        get: function () {
            return this.stats;
        },
        set: function (st) {
            this.stats = st;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Character.prototype, "SKILL_SET", {
        get: function () {
            return this.skill_set;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Character.prototype, "EQ_DMG", {
        get: function () {
            return this.eq_dmg;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Character.prototype, "NAME", {
        get: function () {
            return this.name;
        },
        set: function (n) {
            this.name = n;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Character.prototype, "RACE", {
        get: function () {
            return this.race;
        },
        set: function (r) {
            this.race = r;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Character.prototype, "CL", {
        get: function () {
            return this._class;
        },
        set: function (cl) {
            this._class = cl;
        },
        enumerable: true,
        configurable: true
    });
    Character.prototype.EQUIP = function (item) {
        switch (item.TYPE) {
            case "Sword":
            case "Staff":
                if (this.EQUIPPED_ITEMS[0] != undefined) {
                    this.STATS.ATK = -(this.EQUIPPED_ITEMS[0].STATS);
                    this.EQUIPPED_ITEMS[0] = item;
                    this.STATS.ATK = item.STATS;
                    break;
                }
                else {
                    this.EQUIPPED_ITEMS[0] = item;
                    this.STATS.ATK = item.STATS;
                    break;
                }
            case "Armor":
                if (this.EQUIPPED_ITEMS[1] != undefined) {
                    this.STATS.DEF = -(this.EQUIPPED_ITEMS[1].STATS);
                    this.EQUIPPED_ITEMS[1] = item;
                    this.STATS.DEF = item.STATS;
                    break;
                }
                else {
                    this.EQUIPPED_ITEMS[1] = item;
                    this.STATS.DEF = item.STATS;
                    break;
                }
            case "Ring":
                if (this.EQUIPPED_ITEMS[2] == undefined) {
                    this.EQUIPPED_ITEMS[2] = item;
                    this.STATS.ATK = item.STATS;
                    this.STATS.DEF = item.STATS;
                    this.STATS.HP = item.STATS;
                    break;
                }
                else if (this.EQUIPPED_ITEMS[3] == undefined) {
                    this.EQUIPPED_ITEMS[3] = item;
                    this.STATS.ATK = item.STATS;
                    this.STATS.DEF = item.STATS;
                    this.STATS.HP = item.STATS;
                    break;
                }
                else {
                    var choose = +prompt("Choose which ring to take off:\n\nChosen Ring: " + item.NAME + " Stats: " + item.STATS + "\n\n1) " + this.EQUIPPED_ITEMS[2].NAME + " Stats: " + this.EQUIPPED_ITEMS[2].STATS + "\n\n2) " + this.EQUIPPED_ITEMS[3].NAME + " Stats: " + this.EQUIPPED_ITEMS[3].STATS);
                    switch (choose) {
                        case 1:
                            this.STATS.ATK = -(this.EQUIPPED_ITEMS[2].STATS);
                            this.STATS.DEF = -(this.EQUIPPED_ITEMS[2].STATS);
                            this.STATS.HP = -(this.EQUIPPED_ITEMS[2].STATS);
                            this.EQUIPPED_ITEMS[2] = undefined;
                            this.EQUIPPED_ITEMS[2] = item;
                            this.STATS.ATK = item.STATS;
                            this.STATS.DEF = item.STATS;
                            this.STATS.HP = item.STATS;
                            break;
                        case 2:
                            this.STATS.ATK = -(this.EQUIPPED_ITEMS[3].STATS);
                            this.STATS.DEF = -(this.EQUIPPED_ITEMS[3].STATS);
                            this.STATS.HP = -(this.EQUIPPED_ITEMS[3].STATS);
                            this.EQUIPPED_ITEMS[3] = undefined;
                            this.EQUIPPED_ITEMS[3] = item;
                            this.STATS.ATK = item.STATS;
                            this.STATS.DEF = item.STATS;
                            this.STATS.HP = item.STATS;
                            break;
                    }
                    break;
                }
            case "Wings":
                if (this.EQUIPPED_ITEMS[4] == undefined) {
                    this.EQUIPPED_ITEMS[4] = item;
                    this.STATS.ATK = item.STATS;
                    this.STATS.DEF = item.STATS;
                    this.STATS.HP = item.STATS;
                    break;
                }
                else {
                    this.STATS.ATK = -(this.EQUIPPED_ITEMS[4].STATS);
                    this.STATS.DEF = -(this.EQUIPPED_ITEMS[4].STATS);
                    this.STATS.HP = -(this.EQUIPPED_ITEMS[4].STATS);
                    this.EQUIPPED_ITEMS[4] = undefined;
                    this.EQUIPPED_ITEMS[4] = item;
                    this.STATS.ATK = item.STATS;
                    this.STATS.DEF = item.STATS;
                    this.STATS.HP = item.STATS;
                }
                break;
            case "Cloak":
                if (this.EQUIPPED_ITEMS[5] == undefined) {
                    this.EQUIPPED_ITEMS[5] = item;
                    this.STATS.ATK = item.STATS;
                    this.STATS.DEF = item.STATS;
                    this.STATS.HP = item.STATS;
                    break;
                }
                else {
                    this.STATS.ATK = -(this.EQUIPPED_ITEMS[5].STATS);
                    this.STATS.DEF = -(this.EQUIPPED_ITEMS[5].STATS);
                    this.STATS.HP = -(this.EQUIPPED_ITEMS[5].STATS);
                    this.EQUIPPED_ITEMS[5] = undefined;
                    this.EQUIPPED_ITEMS[5] = item;
                    this.STATS.ATK = item.STATS;
                    this.STATS.DEF = item.STATS;
                    this.STATS.HP = item.STATS;
                }
            case "Bot Weapon":
                this.EQUIPPED_ITEMS[0] = item;
                this.STATS.ATK = item.STATS;
                break;
        }
    };
    Object.defineProperty(Character.prototype, "EQUIPPED_ITEMS", {
        get: function () {
            return this.equipped_items;
        },
        set: function (arr) {
            this.equipped_items = arr;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Character.prototype, "INVENTORY", {
        get: function () {
            return this.inventory;
        },
        set: function (inv) {
            this.inventory = inv;
        },
        enumerable: true,
        configurable: true
    });
    Character.prototype.addItem = function (item) {
        var success = false;
        for (var i = 0; i < this.INVENTORY.length; i++) {
            if (this.INVENTORY[i] == undefined) {
                this.INVENTORY[i] = item;
                success = true;
                break;
            }
            else {
                continue;
            }
        }
        if (success == false) {
            this.inventory.push(item);
        }
    };
    Character.prototype.addSkill = function (skill, dmg) {
        this.skill_set.push(skill);
        this.eq_dmg.push(dmg);
    };
    Character.prototype.print_skills = function () {
        var final = "Skill set:\n\n";
        for (var i = 0; i < this.SKILL_SET.length; i++) {
            final += ((i + 1) + ") " + this.SKILL_SET[i] + " Dmg: " + this.EQ_DMG[i] + "\n");
        }
        return final;
    };
    Character.prototype.print = function () {
        return ("Character name: " + this.NAME + "\nRace: " + this.RACE.ORIGIN + "\nClass: " + this.CL.SPEC + "\n");
    };
    Character.prototype.print_items = function () {
        var items = "Inventory:\n\n";
        for (var i = 0; i < this.INVENTORY.length; i++) {
            if (this.INVENTORY[i] == undefined) {
                items += (i + 1) + ") Empty\n";
            }
            else {
                items += (i + 1) + ") " + this.INVENTORY[i].NAME + ", ";
                items += this.INVENTORY[i].STATS + "Stats: ";
                items += "\n";
            }
        }
        return items;
    };
    Character.prototype.print_merch_items = function () {
        var items = "";
        for (var i = 1; i < this.INVENTORY.length; i++) {
            if (this.INVENTORY[i] == undefined) {
                items += (i + 1) + ") Empty\n";
            }
            else {
                items += (i + 1) + ") " + this.INVENTORY[i].NAME + ", Stats: " + this.INVENTORY[i].STATS + ". Price: " + this.INVENTORY[i].PRICE + " Shmekles\n";
            }
        }
        return items;
    };
    Character.prototype.print_equipped = function () {
        var items = "Equipped Items:\n\n";
        for (var i = 0; i < this.EQUIPPED_ITEMS.length; i++) {
            if (this.EQUIPPED_ITEMS[i] == undefined) {
                items += (i + 1) + ") Empty\n";
            }
            else {
                items += (i + 1) + ") " + this.EQUIPPED_ITEMS[i].TYPE + ": " + this.EQUIPPED_ITEMS[i].NAME + ". " + this.EQUIPPED_ITEMS[i].STATS + "\n";
            }
        }
        return items;
    };
    return Character;
}());
//# sourceMappingURL=Character.js.map