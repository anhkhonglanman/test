let input = require('readline-sync')

function checkNumber () {
    let choice = -1;
    do {
        console.log(
            `
            ---menu---
            1. Nhập số
            2. In số lẻ từ a tới b
            3. Tổng các số từ a ới b
            4. Tính S
            0. thoát
            `
        )
        choice = +input.question('Enter Choice: ')
        switch (choice) {
            case 1:
                addNumber();
                break;
            case 2:
                daySoAB();
                break;
            case 3:
                TongAB()
                break;
            case 4:
                TinhS()
                break;
            case 5:
                break;

        }
    } while (choice !== 0)
}

function addNumber() {
    console.log(`--- Số cần tìm là ---`)
    let num = +input.question("Enter your number : ");
    if (num % 2 === 0) {
        console.log('số chẵn')
    } else {
        console.log('số lẻ')
    }
}

function daySoAB() {
    console.log(`--- dãy số ---`)
    let a = +input.question("Enter number a: ");
    let b = +input.question("Enter number b: ");
    for (let i = a; i <= b; i++) {
        if(i % 2 == 1) {
            console.log(i);
        }
    }
}

function TongAB() {
    console.log(`--- tổng số từ a tới b ---`)
    let a = +input.question("Enter number a: ");
    let b = +input.question("Enter number b: ");
    let sum = 0;

    for (let i = a; i <= b; i++) {
        sum += i
    }
    console.log(sum)
}
function TinhS() {
    console.log(` Tính S `)
    let n = +input.question("Enter number N:");
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += (i*(i+1));
    }
    console.log(sum)
}


checkNumber()


