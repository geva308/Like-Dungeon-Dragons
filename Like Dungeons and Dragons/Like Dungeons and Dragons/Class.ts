class Class extends Race{
    private spec: string;
    private class_skill1: string;
    private class_skill2: string;
    private csd1: number;
    private csd2: number;

    constructor(rs1: string, d1: number, rs2: string, d2: number, cs1: string, cd1: number, cs2: string, cd2: number, or: string, sp: string) {
        super(rs1, d1, rs2, d2, or);
        this.C_S1 = cs1;
        this.C_S2 = cs2;
        this.CSD1 = cd1;
        this.CSD2 = cd2;
        this.SPEC = sp;
    }

    public set SPEC(cl: string) {
        this.spec = cl;
    }
    public get SPEC(): string {
        return this.spec
    }

    public set CSD1(x: number) {
        this.csd1 = x;
    }
    public get CSD1(): number {
        return this.csd1
    }

    public set CSD2(x: number) {
        this.csd2 = x;
    }
    public get CSD2(): number {
        return this.csd2
    }

    public set C_S1(skill: string) {
        this.class_skill1 = skill;
    }
    public get C_S1(): string {
        return this.class_skill1
    }

    public set C_S2(skill: string) {
        this.class_skill2 = skill;
    }
    public get C_S2(): string {
        return this.class_skill2
    }
}