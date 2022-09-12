function radianToDegree(radian) {
    if (typeof(radian) === 'number') {
       let degree = radian * (180 / Math.PI);
        degree = degree.toFixed(2);
        degree = parseFloat(degree);
        console.log(degree);
        return degree;
        
    }
    console.log('Enter a number');
    


}
let inputNumber = 12;
let inputRadian = radianToDegree(inputNumber);
