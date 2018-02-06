export class Konzultant {
    constructor(
        public bankAcc?: string,
        public salt?: string,
        public password?: string,          
        public login?: string,      
        public admin?: boolean,
        public zamestnanci?: number
    ) { }
}