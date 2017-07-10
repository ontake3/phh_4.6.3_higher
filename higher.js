//高階関数
function arrayWalk(date, f) {
    for (var key in date) {
        f (date[key], key);
    }
}

//コールバック関数
function showElement(value, key){
    console.log(key + ':' + value);
}

var ary = [1, 2, 4, 8, 16];
//arrayWalk(ary.showElement);
ary.forEach (showElement);
