const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

const totalBatteries = batteryBatches.reduce(
    function total(sum,number){
        return sum + number;
    })

console.log(totalBatteries);    