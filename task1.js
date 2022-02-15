let fun1=function(){
    console.log("Arun");
    return 5;
}

let fun2=function(fun1){
    let a=fun1();
    console.log(a);
}
fun2(fun1);