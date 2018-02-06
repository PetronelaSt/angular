export class Zamestnanec {
    constructor(
        public workplace?: string,
        public startDate?: Date,
        public address?: string,
        public consultantId?: number,        
        public secondConsultantId?: number,
        public phone?: string
    ) { }
}