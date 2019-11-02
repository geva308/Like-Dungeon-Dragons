class Race {
    private origin: string;
    private race_skill1: string;
    private race_skill2: string;
    private rsd1: number; //skill 1 dmg 
    private rsd2: number;//skill 2 dmg

    constructor(rs1: string, d1: number, rs2: string, d2: number, or: string) {
        this.R_S1 = rs1;
        this.R_S2 = rs2;
        this.RSD1 = d1;
        this.RSD2 = d2;
        this.ORIGIN = or;
    }

    public set ORIGIN(o: string) {
        this.origin = o;
    }
    public get ORIGIN(): string {
        return this.origin
    }

    public set RSD2(x: number) {
        this.rsd2 = x;
    }
    public get RSD2(): number {
        return this.rsd2
    }

    public set RSD1(x: number) {
        this.rsd1 = x;
    }
    public get RSD1(): number {
        return this.rsd1
    }

    public set R_S1(skill: string) {
        this.race_skill1 = skill;
    }
    public get R_S1(): string {
        return this.race_skill1
    }

    public set R_S2(skill: string) {
        this.race_skill2 = skill;
    }
    public get R_S2(): string {
        return this.race_skill2
    }


}