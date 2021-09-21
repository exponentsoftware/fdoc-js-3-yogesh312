const users = [
    {
            _id: 'ab12ex',
            username: 'Alex',
            email: 'alex@alex.com',
            password: '123123',
            createdAt:'17/05/2019 9:00 AM',
            isLoggedIn: false
    },
    {
            _id: 'fg12cy',
            username: 'Asab',
            email: 'asab@asab.com',
            password: '123456',
            createdAt:'17/05/2019 9:30 AM',
            isLoggedIn: true
    },
    {
            _id: 'zwf8md',
            username: 'Brook',
            email: 'brook@brook.com',
            password: '123111',
            createdAt:'17/05/2019 9:45 AM',
            isLoggedIn: true
    },
    {
            _id: 'eefamr',
            username: 'Martha',
            email: 'martha@martha.com',
            password: '123222',
            createdAt:'17/05/2019 9:50 AM',
            isLoggedIn: false
    },
    {
            _id: 'ghderc',
            username: 'Thomas',
            email: 'thomas@thomas.com',
            password: '123333',
            createdAt:'17/05/2019 10:00 AM',
            isLoggedIn: false
    }
    ];

    const products = [
{
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
},
{
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
},
{
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
}
];
// a part funtion for rating product

const rateProduct = (prodName, ratingObj) => {
    for (let key in products) {
      if (products[key].name == prodName) {
        products[key].ratings.push(ratingObj);
      }
      console.log(products[key].ratings);
    }
  };
  
//rateProduct("mobile phone", { userId: "ab12ex", rate: 5 });


//part b calculate the avarage rating of the product

function avarageRating(productId){
    let currentProduct =products.filter((product)=>product._id==productId)
    if(!currentProduct.length){
        return "Product does not exist"
    }
    currentProduct = currentProduct[0];
    let ratingCount = currentProduct.ratings.length;
    if(!ratingCount){
        return "no ratings available"
    }
    let totalRating = currentProduct.ratings.reduce((sum,currentRating)=> sum+currentRating.rate,0);
    console.log(`rating of the product is ${totalRating/ratingCount}`)
}

avarageRating("eedfcf")