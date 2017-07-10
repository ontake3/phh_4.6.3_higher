//高階関数
function myHigerFunction () {
    console.log('miHigerFunction');

    return outsideFunction;
}
//(普通の)関数
function outsideFunction() {
    console.log('outsideFunction')
}

let returnValue = myHigerFunction();
returnValue ();