function solution(inputArray) {
    var x=0
    var y=0
    var max=-Infinity
    for(var i=0;i<inputArray.length;i++){
    x=inputArray[i]
    y=inputArray[i+1]
    if(x*y>max){
        max=x*y
    }
    }
    return max
}
console.log(solution([3,6,-2,-5,7,3]))