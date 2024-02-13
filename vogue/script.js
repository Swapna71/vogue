const wrapper =document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem")



const products=[
    {
        id: 1,
        title: 'AIR FORCE',
        price: 119,
        colors: [
            {
                code: 'yellow',
                img: 'air force.png',
            },
            {
                code: 'white',
                img: 'air_force-removebg-preview.png',
            },
        ],
    },


    {
        id: 2,
        title: 'JORDAN',
        price: 124,
        colors: [
            {
                code: 'red',
                img: 'jordanshoe-removebg-preview.png',
            },
            {
                code: 'green',
                img: 'jordan_green-removebg-preview.png',
            },
        ],
    },

    {
        id: 3,
        title: 'BLAZER',
        price: 156,
        colors: [
            {
                code: 'pink',
                img: 'white__blazzer-removebg-preview.png',
            },
            {
                code: `green`,
                img: 'green-removebg-preview.png',
            },
        ],
    },

    {
        id: 4,
        title: 'CRATER',
        price: 109,
        colors: [
            {
                code: 'grey',
                img: 'crater-removebg-preview.png',
            },
            {
                code: `white`,
                img: 'crater_women-removebg-preview.png',
            },
        ],
    },

    {
        id: 5,
        title: 'HIPPIE',
        price: 170,
        colors: [
            {
                code: 'gray',
                img: 'hippie-removebg-preview.png',
            },
            {
                code: 'greenyellow',
                img: 'green_hippie-removebg-preview.png',
            },
        ],
    },

   
]


let choosenProduct=products[0];
const currentProductImage=document.querySelector('.productImg');
const currentProductTitle=document.querySelector('.productTitle');
const currentProductPrice=document.querySelector('.productPrice');
const currentProductColors=document.querySelectorAll(".color");
const currentProductSizes=document.querySelectorAll(".size");



menuItems.forEach((item, index) => {    
    item.addEventListener("click", ()=>{
        // change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
    
        // change the choosen product
        choosenProduct=products[index];

        // change text of current product
        currentProductTitle.textContent=choosenProduct.title;
        currentProductPrice.textContent='$'+choosenProduct.price;
        currentProductImage.src=choosenProduct.colors[0].img;
    
        // assign new colors
        currentProductColors.forEach((color, index)=>{
            color.style.backgroundColor=choosenProduct.colors[index].code
        });
    });
})


currentProductColors.forEach((color, index)=>{
    color.addEventListener("click", ()=>{
        currentProductImage.src=choosenProduct.colors[index].img;
    })
})






currentProductSizes.forEach((size, index)=>{
    size.addEventListener('click', ()=>{
        currentProductSizes.forEach((size)=>{
            size.style.backgroundColor='white';
        size.style.color='black';
        })
        size.style.backgroundColor='black';
        size.style.color='white';
    })
})

const productButton=document.querySelector('.productButton')
const payment=document.querySelector(".payment");
const close=document.querySelector(".close");

productButton.addEventListener("click", () =>{
    payment.style.display="block"
})

close.addEventListener("click", () =>{
    payment.style.display="none"
})

































































