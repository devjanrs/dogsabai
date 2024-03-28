let show = true;
const menuContent = document.querySelector('.content');
const menuToggle = menuContent.querySelector('.menu-toggle');

menuToggle.addEventListener("click", () => {

    menuContent.classList.toggle('on', show);
    show = !show;

});

var products = [
    {
        "photo": "imgs/camisa1.webp",
        "name": "Logo Minimalista Centro| Flat-coated Retriever",
        "price1": "R$ 89,00",
        "price2": "R$69,90",
        "link": "https://reserva.ink/dogsabai/product/sabai-sabai-logo-minimalista-centro-flat-coated-retriever",
        "card": "3x de R$ 23,30 sem juros",
    },
    {
        "photo": "imgs/camisa2.webp",
        "name": "Friday",
        "price1": "R$ 89,00",
        "price2": "R$69,90",
        "link": "https://reserva.ink/dogsabai/product/friday-6b0f7dc5-935a-4851-8f5e-d6a8a58f2ed0",
        "card": "3x de R$ 23,30 sem juros",
    },
    {
        "photo": "imgs/camisa3.webp",
        "name": "Boss Doesn't do Anything",
        "price1": "R$ 89,00",
        "price2": "R$69,90",
        "link": "https://reserva.ink/dogsabai/product/boss-doesn-t-do-anything",
        "card": "3x de R$ 23,30 sem juros",
    },
    {
        "photo": "imgs/camisa4.webp",
        "name": "Sabai-Sabai Logo Minimalista Centro | Golden Retriever",
        "price1": "R$ 89,00",
        "price2": "R$69,90",
        "link": "https://reserva.ink/dogsabai/product/sabai-sabai-logo-minimalista-centro-golden-retriever",
        "card": "3x de R$ 23,30 sem juros",
    },
    {
        "photo": "imgs/camisa5.webp",
        "name": "Sabai-Sabai Logo Minimalista Canto | Flat-coated Retriever",
        "price1": "R$ 89,00",
        "price2": "R$69,90",
        "link": "https://reserva.ink/dogsabai/product/sabai-sabai-logo-minimalista-canto-flat-coated-retriever#reviews_container",
        "card": "3x de R$ 23,30 sem juros",
    },
    {
        "photo": "imgs/camisa6.webp",
        "name": "Sabai-Sabai Logo Minimalista Canto | Golden Retriever",
        "price1": "R$ 89,00",
        "price2": "R$69,90",
        "link": "https://reserva.ink/dogsabai/product/sabai-sabai-logo-minimalista-canto-golden-retriever",
        "card": "3x de R$ 23,30 sem juros",
    },
    {
        "photo": "imgs/camisa7.webp",
        "name": "Don't Worry",
        "price1": "R$ 89,00",
        "price2": "R$69,90",
        "link": "https://reserva.ink/dogsabai/product/don-t-worry-42555825-dec6-44fe-b698-cfbe1f864048",
        "card": "3x de R$ 23,30 sem juros",
    },
    {
        "photo": "imgs/camisa8.webp",
        "name": "Fruits of the Spirit | Centro",
        "price1": "R$ 89,00",
        "price2": "R$69,90",
        "link": "https://reserva.ink/onekingdom/product/fruits-of-the-spirit-centro",
        "card": "3x de R$ 23,30 sem juros",
    },
];

const bancodedados = {
    data() {
        return {
            products: window.products
        }
    }
};

Vue.createApp(bancodedados).mount('#base');
