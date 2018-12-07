export class User {
    constructor(
        public id?: string,
        public email?: string,
        public password?: string,
        public firstname?: string,
        public lastname?: string,
        public fund?: number
    ) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
        this.fund = fund;
    }
}