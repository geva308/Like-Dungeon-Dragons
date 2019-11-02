class Stats {
    private hp: number = 0;
    private def: number = 0;
    private atk: number = 0;
    private exp: number = 0;
    private exp_lvup: number = 10;
    private lvl: number = 1;

    constructor(health: number, def: number, atk: number) {
        this.HP = health;
        this.DEF = def;
        this.ATK = atk;
    }


    public print(): string {
        return ("Stats:\n\nHP: " + this.HP + "\nDEF: " + this.DEF + "\nATK: " + this.ATK + "\nLevel: " + this.LVL + "\n")
    }

    public set ATK(atk: number) {
        this.atk += atk;
    }
    public get ATK(): number {
        return this.atk
    }

    public set DEF(def: number) {
        this.def += def;
    }
    public get DEF(): number {
        return this.def
    }

    public set HP(hp: number) {
        this.hp += hp;
    }
    public get HP(): number {
        return this.hp
    }

    public set EXP_LVUP(x: number) {
        this.exp_lvup += x;
    }
    public get EXP_LVUP(): number {
        return this.exp_lvup
    }

    public set EXP(x: number) {
        this.exp += x;
    }
    public get EXP(): number {
        return this.exp
    }

    public set LVL(x: number) {
        this.lvl += x;
    }
    public get LVL(): number {
        return this.lvl
    }


}