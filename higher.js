//高階関数
function myHigerFunction () {
    console.log('miHigerFunction');

    return outsideFunction;
}
//(普通の)関数
function outsideFunction(value) {
    console.log('value :' + value);
}

//let returnValue = myHigherFunction ();
//returnFunction ('引数だよ');

myHigerFunction() ('引数だよ');