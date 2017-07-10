//高階関数
function myHigerFunction (func) {
    console.log('miHigerFunction');

    func();
}
//(普通の)関数
function outsideFunction() {
    console.log('outsideFunction')
}

outsideFunction (); //関数呼び出し

myHigerFunction(outsideFunction); //関数渡し