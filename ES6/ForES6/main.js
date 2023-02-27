// for(;;) thực thi khối lệnh một số lần xác định với một điều kiện kết thúc vòng lặp.
// for...in thực thi khối lệnh duyệt qua các thuộc tính của đối tượng
// for...of thực thi khối lệnh để lặp lại các đối tượng trong mảng , chuỗi...

function geeks() {
    let obj = {name: 'Peter', age: 25, salary: 3000};

    console.log("for(;;)")
    for (let i = 0; i <= 10; i += 2) {
        console.log(i + " ")
    }

    console.log("for...of")
    for (let i of ['Ha Noi', 20.32, 3000]) {
        console.log(i + " ")
    }

    console.log("for...in")
    for (let i in obj) {
        console.log(obj[i] + " ");
    }
}

geeks();