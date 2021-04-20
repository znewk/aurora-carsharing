let cart = JSON.parse(localStorage.getItem('userCart'))
console.log(cart)

let car = $('#car')

for(i=0; i < cart.length; i++){
    car.append(`
        <span>${cart[i].carBrand}</span>
        <hr>
    `)
}