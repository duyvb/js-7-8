let arr2 = [];
function display() {
    let inp = +document.getElementById("nhapN").value;
    arr2.push(inp);
    document.getElementById("themSoChuoi").innerHTML = arr2;
}


// Bài tập Tính Tổng
function sumArray() {
    let sum = 0;
    for (let i = 0; i < arr2.length; i++) {
        sum += parseInt(arr2[i]);
    }
    document.getElementById("tong").innerHTML = sum;

}

// Đếm số dương 
function demso() {
    let dem = 0;
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] > 0) {
            dem++;
        }
    }
    document.getElementById("demSo").innerHTML = dem;
}




// Bài tập tìm số nhỏ nhất 
function soNho() {

    let minInNumbers = Math.min.apply(Math, arr2);

    document.getElementById("soNhoNhat").innerHTML = minInNumbers;
}




// tìm số dương nhỏ nhất 

function duongNho() {
    let Min1 = -1;
    for (let i = 0; i < arr2.length; i++) {
        if ((Min1 == -1 || Min1 > arr2[i]) && arr2[i] > 0) {
            Min1 = arr2[i];
        }
    }
    document.getElementById("soDuongNhoNhat").innerHTML = Min1;
}


// Tìm số chắn cuối cùng 
function sochan() {
    let lastNumber = arr2;
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] % 2 === 0) {
            lastNumber = arr2[i];
        }
    }
    document.getElementById("timSo").innerHTML = lastNumber;
}


// sắp xếp tăng dần

var score = arr2;
function compare() {
    score.sort((value, index) => {
        if (index > value) {
            return -1;
        }
        else {
            return 0;
        }
    });
    document.getElementById("tangDan").innerHTML = score;
}








// tìm số nguyên tố đầu tiên
function findFirstPrime() {
    for (let i = 0; i < arr2.length; i++) {
        if (isPrime(arr2[i])) {
            return arr2[i];
            break;
        }
    }
    return -1;
}

function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    document.getElementById("soNguyenTo").innerHTML = num ;
}






// đếm só nguyên
let arr3 = [];
function themVao() {
    let inp1 = +document.getElementById("soN").value;
    arr3.push(inp1);
    document.getElementById("themSoMang").innerHTML = arr3;
}

function soNguyen() {
    let count = 0;
    for (let i = 0; i < arr3.length; i++) {
        if (Number.isInteger(arr3[i])) {
            count++;
        }
    }
    document.getElementById("demSoNguyen").innerHTML = count;
}





// so sánh số âm với số dương

let arr = [];
function choSoVao() {
    let inp2 = +document.getElementById("choN").value;
    arr.push(inp2);
    document.getElementById("choSoMang").innerHTML = arr;
}

function soArr() {
    let kq = '';
    let so_duong = 0;
    let so_am = 0;
    for (i = 0; i < arr.length; i++) {

        // Đếm số dương trong mảng
        if (arr[i] > 0 && Number.isInteger(arr[i])) {
            so_duong++;
        }

        // Đếm số âm trong mảng
        if (arr[i] < 0 && Number.isInteger(arr[i])) {
            so_am++;
        }

    }

    // // Kiểm tra kêt quả 
    if (so_duong > so_am) {
        kq = 'Số dương > số âm'

    } else if (so_duong < so_am) {
        kq = 'Số dương < số âm'

    } else {
        kq = 'Số dương = số âm'
    }

    document.getElementById("tinhSoSanh").innerHTML = kq;


}


















