function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function gameNumber() {
    let min = +prompt('nhap min');
    let max = +prompt('nhap max');
    ran = randomNumber(min, max);
    console.log(ran);
    let count = 0;
    // let limit = 3;
    do {
        let n = +prompt('nhap n');
        if (n === ran) {
            alert('ban da doan dung');
            break;
        } else {
            if (n < ran) {
                count++;
                alert('so da nho hon');
                if (count >= limit) {
                    alert('ban da het luot')
                }
            } else {
                count++;
                alert('so da lon hon');
                if (count >= limit) {
                    alert('ban da het luot');
                }
            }
        }
    } while (count < 0) ;


}