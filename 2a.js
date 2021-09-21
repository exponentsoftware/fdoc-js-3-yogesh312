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
//a. Create a function called ***signUp*** which allows user to add to the collection. If user exists, inform the user that he has already an account.
// b. Create a function called ***signIn*** which allows user to sign in to the application

//part a
function signUp(addUser){
    let exist = false;
    for(let user of users){
        if(user.email==addUser.email){
            console.log("user exist")
            return exist = true;
        }
    }
    if(exist!=true){
        users.push(addUser);
        console.log("account succesfully created")
    }
}
//detail of a existing user
addUser = {
    _id: 'ghderc',
    username: 'Thomas',
    email: 'thomas@thomas.com',
    password: '123333',
    createdAt:'17/05/2019 10:00 AM',
    isLoggedIn: false
}
signUp(addUser); //working fine

//b part
function signIn(email, password) {
    for(user of users) {
        if(user.email == email && user.password == password) {
            console.log("signed In");
            break;
        }else {
            console.log("User doesn't exist");
            break;
        }
    }
}

signIn('alex@alex.com',123123); //these details are correct one
//try different details for testing