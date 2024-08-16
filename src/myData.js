let prods = [
    {
        id : 1,
        name : "apple",
        price: 3,
        catid : 1,
    },
    {
        id : 2,
        name : "banana",
        price: 5,
        catid : 1,
    },
    {
        id : 3,
        name : "peach",
        price: 4,
        catid : 1,
    },
    {
        id : 4,
        name : "bisli",
        price: 3,
        catid : 2,
    },
    {
        id : 5,
        name : "bamba",
        price: 8,
        catid : 2,
    },
    {
        id : 6,
        name : "cheaps",
        price: 7,
        catid : 2,
    },
    {
        id : 7,
        name : "xl",
        price: 10,
        catid : 3,
    },
    {
        id : 8,
        name : "water",
        price: 9,
        catid : 3,
    },
]

export function getProducts() {
    return prods
}

export function getProductsByCategory(id){
    return prods.filter(prod => prod.catid == id);
}

