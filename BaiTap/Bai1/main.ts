import {Person} from "./model/Person";
import {PersonManager} from "./manager/PersonManager";
import {Worker} from "./model/Worker";


let input = require('readline-sync');
let personManager :PersonManager = new PersonManager();

function showMainMenu {
    let choice = -1;
    do {
        console.log(
            `
        ---- Main Menu ----
        1.Thêm mới
        2.Hiển thị tất cả
        3.Sửa
        4.Xóa
        0.Thoát
        `
        )
        choice = +input.question('Enter Choice : ')
        switch (choice) {
            case 1:
                addPerson()
                break
            case 2:
                showPersons()
                break;
            case 3:
                break;
            case 4:
                break;
        }
    }while   (choice !== 0)
}

function addPerson() {
    console.log('-----Menu thêm mới ------')
    let id = +input.question('Enter id : ')
    let fullName = input.question('Enter full name : ');
    let sex = input.question('Enter sex');
    let age = +input.question('Enter age: ')
    let level = input.question('Enter level : ');
    let worker: Worker = new Worker(id, fullName, sex, age, level);
    console.log(worker, '47');
    personManager.add(worker);
    console.log('Thêm thành công !');
}

function showPersons() {
    console.table(personManager.showAll());
}

showMainMenu()
