const products = [
    { 
        id: '1', 
        name: 'Samsung S22', 
        price: 150000, 
        img:'./images/samsung-s22.png', 
    },
    { 
        id: '2', 
        name: 'Iphone 12', 
        price: 200000, 
        img:'./images/iphone12.jpg', 
    },
    { 
        id: '3', 
        name: 'Asus gamer', 
        price: 250000, 
        img:'./images/asus_tuf_gamer.jpg', 
    },
    { 
        id: '4', 
        name: 'MacPro M1', 
        price: 300000, 
        img:'./images/MACBOOK-PRO-14-M1.jpg', 
    },
    { 
        id: '5', 
        name: 'Apple iPad', 
        price: 150000, 
        img:'./images/Apple-iPad.jpg', 
    },
    { 
        id: '6', 
        name: 'Tablet Lenovo Yoga', 
        price: 50000, 
        img:'./images/tabletLenovoYoga.jpg', 
    }
    
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}