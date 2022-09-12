function radianToDegree(radian) {
    if (typeof(radian) === 'number') {
       var degree = radian * (180 / Math.PI);
        degree = degree.toFixed(2);
        degree = parseFloat(degree);
        console.log(degree);
        return degree;
        
    }
    console.log('Enter a number');
    


}
var inputNumber = 12;
var inputRadian = radianToDegree(inputNumber);
