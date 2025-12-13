function add(a,b){
    console.log(a+b);
}
function add(a,b){
    console.log(a-b);
}
add(1,2);
add(3,4,5); 

//callback function(a funtion takes another function as argument)
let temp1=function(){
    console.log("Hello");
};
setTimeout(temp1,2000);