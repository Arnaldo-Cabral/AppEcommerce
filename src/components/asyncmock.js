const products = [
    { 
        id: '1', 
        name: 'Samsung S22', 
        price: 150000, 
        img:'https://i.blogs.es/e2df15/samsung-galaxy-s22-5g-letsgodigital-00/1366_2000.jpeg', 
    },
    { 
        id: '2', 
        name: 'Iphone 12', 
        price: 200000, 
        img:'https://www.teknogaste.com/wp-content/uploads/2020/09/1-25.jpg', 
    },
    { 
        id: '3', 
        name: 'Asus gamer', 
        price: 250000, 
        img:'https://geekculture.co/wp-content/uploads/2019/08/ROG-laptops-2019-1.jpg', 
    },
    { 
        id: '4', 
        name: 'MacPro M1', 
        price: 300000, 
        img:'https://www.alltechng.com/wp-content/uploads/2020/11/maxresdefault-234.jpg', 
    },
    { 
        id: '5', 
        name: 'Apple iPad', 
        price: 150000, 
        img:'https://cdn.macstories.net/img_2276-1621295326905.jpeg', 
    },
    { 
        id: '6', 
        name: 'Tablet Lenovo Yoga', 
        price: 50000, 
        img:'https://i0.wp.com/clipset.com/wp-content/uploads/2019/09/Lenovo-Yoga-C940_14inch_Mica_front_facing.jpg?fit=2234%2C1500&ssl=1', 
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}