export class Item {
    constructor(public name: string,
        public image: string,
        public stats: StatModifier[],
        public displayType:  'conceptual' | 'classic') { }    
}

export class StatModifier {
    constructor(public modifier: number,
        public stat: Stat | null,
        public comment: string) { }
}

export class Stat {
    constructor(public name: string,
        public color: string) { }
}

export class StatColors {
    static INT: string = '#4798a8';
    static PSY: string = '#523f89';
    static FYS: string = '#993550';
    static MOT: string = '#e5b934';
    static Misc: string = '#9a998f';
}