export class Command {
    constructor(
        public userId: string,
        public articleId: string,
        public totalPrice: number,
        public dateCommand: number,
        public state: boolean
    ) {}
}
