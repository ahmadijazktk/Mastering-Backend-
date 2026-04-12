var arr = [1, 2, 3, 4, 5];
var newarr = arr.find(function(value){
    if (value == 7) {return true}
    else{return "nothing here"}
})
console.log(newarr);