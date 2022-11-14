
const dishes = [
    {
        name: 'EggPlant Parmesan',
        vegetarian: true
    },
    {
        name: 'Spaghetti & Meatballs',
        vegetarian: false
    },
    {
        name: 'Carbonara',
        vegetarian: false
    },
    {
        name: 'Brazilian Feijoada',
        vegetarian: false
    },
    {
        name: 'Green salad',
        vegetarian: true
    }
]


const vegetarianOptions = dishes.filter((food) => food.vegetarian === true)

console.log(vegetarianOptions)
