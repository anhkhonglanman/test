class user {
    protected name: string;
    protected email: string;
    public role: number;

    constructor(name: string, email: string, role: number) {
        this.name = name;
        this.email = email;
        this.role = role;
    }
    getInfo(): string{
        return ` Name : ${this.name}, email : ${this.email}, role : ${this.role} `
    }
    isAdmin(): string{
        if(this.role === 1) {
            return 'là admin'
        } else if(this.role === 2) {
            return 'là người dùng bình thường'
        } else {
            return 'who are you'
        }
    }
    set setName(name: string) {
        this.name = name
    }
    set setEmail(email: string) {
        this.email = email
    }
    set setRole(role: number) {
        this.role = role
    }
}

const user1 = new user ("Nguyen van A", "A@gmail.com", 1);
console.log(user1.getInfo());
console.log(user1.isAdmin());

user1.setName = 'Tran thi B';
user1.setEmail = 'B@gmail.com';
user1.setRole = 2;
console.log(user1.getInfo());
console.log(user1.isAdmin());

