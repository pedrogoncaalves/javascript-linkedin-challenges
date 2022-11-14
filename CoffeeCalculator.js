



function coffeeCalculator(order) {
   let totalOrders = order.map((value) => value * 1.25)
    return ` O valor da conta é de $ ${totalOrders.reduce((prev, curr) => prev + curr)}`


}
console.log(coffeeCalculator([2, 3, 4, 5, 6]))