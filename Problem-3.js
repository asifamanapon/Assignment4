function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity) {
    const dieselPrice = 114;
    const petrolPrice = 130;
    const octanePrice = 135;

    if (dieselQuantity > 0 || petrolQuantity > 0 || octaneQuantity > 0) {
        const dieselTotalPrice = dieselPrice * dieselQuantity;
        const petrolTotalPrice = petrolPrice * petrolQuantity;
        const octaneTotalPrice = octanePrice * octaneQuantity;
        const totalOilPrice = dieselTotalPrice + petrolTotalPrice + octaneTotalPrice;
        return totalOilPrice;
    }
    else {
        console.log('Enter oil quantity in litre');
    }
}

var functionCall = oilPrice(-343, -535, -343);
console.log(functionCall);
