const products = [
    { 
        id: '1', 
        name: 'Samsung S22', 
        price: 150000, 
        img:'./images/samsung-s22.png', 
        category: 'celular',
        description:' Celular de alta Gama mejor que el Iphone según Samsung',
        stock: 50
    },
    { 
        id: '2', 
        name: 'Iphone 12', 
        price: 200000, 
        img:'./images/iphone12.jpg', 
        category: 'celular',
        description:'Caro pero el mejor, no lo dudes',
        stock: 20
    },
    { 
        id: '3', 
        name: 'Asus gamer', 
        price: 250000, 
        img:'./images/asus_tuf_gamer.jpg', 
        category: 'notebook',
        description:'especial para darle los findes al LOL o Fornite',
        stock: 10
    },
    { 
        id: '4', 
        name: 'MacPro M1', 
        price: 300000, 
        img:'./images/MACBOOK-PRO-14-M1.jpg', 
        category: 'notebook',
        description:'dale especial para programar',
        stock: 5
    },
    { 
        id: '5', 
        name: 'Apple iPad', 
        price: 150000, 
        img:'./images/Apple-iPad.jpg', 
        category: 'celular',
        description:'La mejor',
        stock: 50
    },
    { 
        id: '6', 
        name: 'Tablet Lenovo Yoga', 
        price: 50000, 
        img:'./images/tabletLenovoYoga.jpg', 
        category: 'celular',
        description:'Lo mejor de Lenovo, convina teclado y touch',
        stock: 15
    }
    
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}