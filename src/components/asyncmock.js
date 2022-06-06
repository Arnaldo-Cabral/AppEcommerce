const products = [
    { 
        id: '1', 
        name: 'Samsung S22', 
        price: 150000, 
        img:'/images/samsung-s22.jpeg', 
        category: 'celular',
        description:' Celular de alta Gama mejor que el Iphone según Samsung',
        stock: 5
    },
    { 
        id: '2', 
        name: 'Iphone 12', 
        price: 200000, 
        img:'/images/iphone12.jpg', 
        category: 'celular',
        description:'Caro pero el mejor, no lo dudes',
        stock: 2
    },
    { 
        id: '3', 
        name: 'Asus gamer', 
        price: 250000, 
        img:'https://geekculture.co/wp-content/uploads/2019/08/ROG-laptops-2019-1.jpg', 
        category: 'notebook',
        description:'Especial para LOL o Fornite',
        stock: 3
    },
    { 
        id: '4', 
        name: 'MacPro M1', 
        price: 300000, 
        img:'/images/MACBOOK-PRO-14-M1.jpg', 
        category: 'notebook',
        description:'dale especial para programar',
        stock: 5
    },
    { 
        id: '5', 
        name: 'Apple iPad', 
        price: 150000, 
        img:'/images/Apple-iPad.jpg', 
        category: 'tablet',
        description:'La mejor',
        stock: 4
    },
    { 
        id: '6', 
        name: 'Lenovo Yoga', 
        price: 50000, 
        img:'https://i0.wp.com/clipset.com/wp-content/uploads/2019/09/Lenovo-Yoga-C940_14inch_Mica_front_facing.jpg?fit=2234%2C1500&ssl=1', 
        category: 'tablet',
        description:'Lo mejor de Lenovo, combina teclado y touch',
        stock: 6
    },
    { 
        id: '7', 
        name: 'Play Station 5',  
        price: 205000, 
        img:'https://www.robotina.us/__export/1615144605805/sites/debate/img/2021/03/07/ps5-digital-edition-sony.jpg_349127161.jpg',
        category: 'consola',
        description:'PS 5 incluye PlayStation Plus 12 meses',
        stock: 7
    },
    { 
        id: '8', 
        name: 'Xbox Serie X', 
        price: 185000, 
        img:'https://as01.epimg.net/meristation/imagenes/2020/11/09/noticias/1604924589_050302_1604924886_sumario_normal.jpg',
        category: 'consola',
        description:'Serie X Special Edition 3 juegos a elección',
        stock: 7
    }
    
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsById = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise(resolve => {
        setTimeout (() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}