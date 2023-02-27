import {Person} from "./model/Person";
import {PersonManager} from "./manager/PersonManager";

let input = require('readline-sync');
let personManager: PersonManager = new PersonManager();

function main() {
    let choice = -1;
    do {
        console.log(`
        --------- Menu Chính ---------
    1.Thêm mới
    2.Hiển thị tất cả
    3.Tìm theo số báo danh
    0.Thoát
        `);
        choice = +input.question('Enter choice');
        switch (choice) {
            case 1:
                menuAdd();
                break;
            case 2:
                menuShowAll()
                break;
            case 3:
                menuShowPerson()
                break;
        }
    }while (choice != 0)
}

function menuAdd() {
    console.log(`
     -------- Menu thêm mới -------
    `)
    let id = +input.question('Enter id : ');
    let fullName = input.question('Enter full name: ');
    let exam = input.question('Enter type exam : ');
    let person = new Person(id, fullName, exam);
    personManager.add(person);
    console.log('------ Thêm thành công --------')
}

function menuShowAll() {
    console.log(`
    --------- Menu hiển thị tất ------------
    `)
    let people = personManager.findAll();
    people.map(person => {
        console.log(person.getInfo())
    })
}

function menuShowPerson() {
    let id = +input.question('Enter id : ');
    let person = personManager.findById(id);
    if(person != null) {
        console.log(person.getInfo());
    }
}

main()
