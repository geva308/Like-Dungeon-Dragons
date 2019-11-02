class Item {
    private name: string;
    private type: string;
    private bonus_stats: number;
    private price: number;

    constructor(name: string, type: string, stats: number, price?: number) {
        this.NAME = name;
        this.TYPE = type;
        this.STATS = stats;
        this.PRICE = price;
    }

    public set PRICE(x: number) {
        if (x >= 0) {
            this.price = x;
        }
    }
    public get PRICE(): number {
        return this.price
    }

    public set TYPE(t: string) {
        this.type = t;
    }
    public get TYPE(): string {
        return this.type
    }

    public set NAME(n: string) {
        this.name = n;
    }
    public get NAME(): string {
        return this.name
    }

    public set STATS(stat: number) {
        this.bonus_stats = stat;
    }
    public get STATS(): number {
        return this.bonus_stats
    }
}