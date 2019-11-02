class Character {
    private name: string;
    private race: Race;
    private _class: Class;
    private stats: Stats;
    private equipped_items: Item[];
    private inventory: Item[];
    private skill_set: Array<string>;
    private eq_dmg: Array<number>;
    private gold: number = 0;
    private skill_points: number = 0;


    constructor(name: string, race: Race, cl: Class, st: Stats, item: Item) {
        this.NAME = name;
        this.RACE = race;
        this.CL = cl;
        this.skill_set = new Array<string>(race.R_S1, race.R_S2, cl.C_S1, cl.C_S2);
        this.eq_dmg = new Array<number>(race.RSD1, race.RSD2, cl.CSD1, cl.CSD2);
        this.STATS = st;
        this.INVENTORY = new Array<Item>();
        this.EQUIPPED_ITEMS = new Array<Item>(6);//0-weapon 1-armor 2-ring 3-ring 4-wings 5-cloak
        this.addItem(item);
        this.EQUIP(item);
    }

    public set SKILL_POINTS(x: number) {
        this.skill_points += x;
    }
    public get SKILL_POINTS(): number {
        return this.skill_points
    }

    public set GOLD(x: number) {
        this.gold += x;
    }
    public get GOLD(): number {
        return this.gold
    }

    public set STATS(st: Stats) {
        this.stats = st;
    }
    public get STATS(): Stats {
        return this.stats
    }

    public get SKILL_SET(): string[] {
        return this.skill_set
    }

    public get EQ_DMG(): number[] {
        return this.eq_dmg
    }

    public set NAME(n: string) {
        this.name = n;
    }
    public get NAME(): string {
        return this.name
    }

    public set RACE(r: Race) {
        this.race = r;
    }
    public get RACE(): Race {
        return this.race
    }

    public set CL(cl: Class) {
        this._class = cl;
    }
    public get CL(): Class {
        return this._class
    }

    public EQUIP(item: Item) {
        switch (item.TYPE) {
            case "Sword":
            case "Staff":
                if (this.EQUIPPED_ITEMS[0] != undefined) {
                    this.STATS.ATK = -(this.EQUIPPED_ITEMS[0].STATS);
                    this.EQUIPPED_ITEMS[0] = item;
                    this.STATS.ATK = item.STATS;
                    break
                }
                else {
                    this.EQUIPPED_ITEMS[0] = item;
                    this.STATS.ATK = item.STATS;
                    break
                }
            case "Armor":
                if (this.EQUIPPED_ITEMS[1] != undefined) {
                    this.STATS.DEF = -(this.EQUIPPED_ITEMS[1].STATS);
                    this.EQUIPPED_ITEMS[1] = item;
                    this.STATS.DEF = item.STATS;
                    break
                }
                else {
                    this.EQUIPPED_ITEMS[1] = item;
                    this.STATS.DEF = item.STATS;
                    break
                }
            case "Ring":
                if (this.EQUIPPED_ITEMS[2] == undefined) {
                    this.EQUIPPED_ITEMS[2] = item;
                    this.STATS.ATK = item.STATS;
                    this.STATS.DEF = item.STATS;
                    this.STATS.HP = item.STATS;
                    break
                }
                else if (this.EQUIPPED_ITEMS[3] == undefined) {
                    this.EQUIPPED_ITEMS[3] = item;
                    this.STATS.ATK = item.STATS;
                    this.STATS.DEF = item.STATS;
                    this.STATS.HP = item.STATS;
                    break
                }
                else {
                    let choose: number = +prompt("Choose which ring to take off:\n\nChosen Ring: " + item.NAME + " Stats: " + item.STATS + "\n\n1) " + this.EQUIPPED_ITEMS[2].NAME + " Stats: " + this.EQUIPPED_ITEMS[2].STATS + "\n\n2) " + this.EQUIPPED_ITEMS[3].NAME + " Stats: " + this.EQUIPPED_ITEMS[3].STATS);
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
                            break
                        case 2:
                            this.STATS.ATK = -(this.EQUIPPED_ITEMS[3].STATS);
                            this.STATS.DEF = -(this.EQUIPPED_ITEMS[3].STATS);
                            this.STATS.HP = -(this.EQUIPPED_ITEMS[3].STATS);
                            this.EQUIPPED_ITEMS[3] = undefined;
                            this.EQUIPPED_ITEMS[3] = item;
                            this.STATS.ATK = item.STATS;
                            this.STATS.DEF = item.STATS;
                            this.STATS.HP = item.STATS;
                            break
                    }
                    break
                }
            case "Wings":
                if (this.EQUIPPED_ITEMS[4] == undefined) {
                    this.EQUIPPED_ITEMS[4] = item;
                    this.STATS.ATK = item.STATS;
                    this.STATS.DEF = item.STATS;
                    this.STATS.HP = item.STATS;
                    break
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
                break
            case "Cloak":
                if (this.EQUIPPED_ITEMS[5] == undefined) {
                    this.EQUIPPED_ITEMS[5] = item;
                    this.STATS.ATK = item.STATS;
                    this.STATS.DEF = item.STATS;
                    this.STATS.HP = item.STATS;
                    break
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
                break
        }
    }

    public set EQUIPPED_ITEMS(arr: Item[]) {
        this.equipped_items = arr;
    }
    public get EQUIPPED_ITEMS(): Item[] {
        return this.equipped_items
    }

    public set INVENTORY(inv: Item[]) {
        this.inventory = inv;
    }
    public get INVENTORY(): Item[] {
        return this.inventory
    }

    public addItem(item: Item) {
        let success: boolean = false;
        for (let i = 0; i < this.INVENTORY.length; i++) {
            if (this.INVENTORY[i] == undefined) {
                this.INVENTORY[i] = item;
                success = true;
                break
            }
            else {
                continue
            }
        }
        if (success == false) {
            this.inventory.push(item);
        }
    }

    public addSkill(skill: string, dmg: number) {
        this.skill_set.push(skill);
        this.eq_dmg.push(dmg);
    }

    public print_skills(): string {
        let final: string = "Skill set:\n\n";
        for (let i = 0; i < this.SKILL_SET.length; i++) {
            final += ((i + 1) + ") " + this.SKILL_SET[i] + " Dmg: " + this.EQ_DMG[i] + "\n");
        }
        return final
    }

    public print(): string {
        return ("Character name: " + this.NAME + "\nRace: " + this.RACE.ORIGIN + "\nClass: " + this.CL.SPEC + "\n");
    }

    public print_items(): string {
        let items: string = "Inventory:\n\n";
        for (let i = 0; i < this.INVENTORY.length; i++) {
            if (this.INVENTORY[i] == undefined) {
                items += (i + 1) + ") Empty\n";
            }
            else {
                items += (i + 1) + ") " + this.INVENTORY[i].NAME + ", ";
                items += this.INVENTORY[i].STATS + "Stats: ";
                items += "\n";
            }
        }
        return items
    }

    public print_merch_items(): string {
        let items: string = "";
        for (let i = 1; i < this.INVENTORY.length; i++) {
            if (this.INVENTORY[i] == undefined) {
                items += (i + 1) + ") Empty\n";
            }
            else {
            items += (i + 1) + ") " + this.INVENTORY[i].NAME + ", Stats: " + this.INVENTORY[i].STATS + ". Price: " + this.INVENTORY[i].PRICE + " Shmekles\n";
            }
        }
        return items
    }

    public print_equipped(): string {
        let items: string = "Equipped Items:\n\n";
        for (let i = 0; i < this.EQUIPPED_ITEMS.length; i++) {
            if (this.EQUIPPED_ITEMS[i] == undefined) {
                items += (i + 1) + ") Empty\n";
            }
            else {
                items += (i + 1) + ") " + this.EQUIPPED_ITEMS[i].TYPE + ": " + this.EQUIPPED_ITEMS[i].NAME + ". " + this.EQUIPPED_ITEMS[i].STATS + "\n";
            }
        }
        return items
    }
}