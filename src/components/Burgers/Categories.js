import { Link } from "react-router-dom"
import { CATEGORIES } from "../Image/image/Categories"


const {ANGUS,ANGUSXL,BIGKING,
    VOPPERD,VOPPERDABL,VOPPERCHEESE,
    DABLPVOPPERCHEESE,TILZITERKING,BEKONGAMBURGER,
    ANGUSPARMED,ANGUSPARMERDUBL,GRANDGHEESEFRESH,
    GRANDGHEESE,GAMBURGER,SWEDISHBURGER,
    CHEESEBURGER,DUBLCHEESEBURGER}=CATEGORIES

 

export const Items  = [
    {
    href: '/Angus',
    id: new Date().toISOString(),
    name: 'Ангус Шеф',
    image: ANGUS ,
    price: 14.99,
    about:'Премиальная новинка со 100% говядиной Абердин Ангус! Невероятно нежный 150-граммовый мраморный бифштекс на...',     
    quantity: 1
  
} ,  {
    href: '/AngusXl',
    id: new Date().toISOString(),
    name: 'Ангус шуф \nXL',
    image: ANGUSXL,
    about: 'В этом красавце целых 300 граммов невероятно нежной 100% мраморной говядины Абердин Ангус, приготовленной н...',
    price: 21.39,
    quantity: 1
}  , {
    href: '/DublVopper',
    id: new Date().toISOString(),
    name: 'Двойной Воппер',
    image: VOPPERDABL,
    about: 'ВОППЕР® — это вкуснейшая приготовленная на огне 100% говядина с сочными помидорами, свежим нарезанным листовым...',    
    price: 12.59,
    quantity: 1
}  , {
    href: '/VopperD',
    id: new Date().toISOString(),
    name: 'Воппер джуниор',
    image: VOPPERD,
    about:'Приготовленный на огне бифштекс из 100% говядины, сочный помидор, свежий нарезанный салат, густой майонез, хрустящие...',
    price: 6.39,
    quantity: 1
}  , {
    href: '/BigKing',
    id: new Date().toISOString(),
    name: 'Биг Кинг',
    image: BIGKING,
    about:'Этот сэндвич по праву носит свой титул. Он составлен с истинной королевской щедростью: в нем два приготовленных на...',
    price: 7.99,
    quantity: 1
} ,  {
    href: '/VopperCheese',
    id: new Date().toISOString(),
    name: 'Воппер с сыром',
    image: VOPPERCHEESE,
    about:'Приготовленный на огне бифштекс из 100% говядины, два нежных ломтика сыра, сочные помидоры, свежий нарезанный салат, густой...',
    price: 9.89,
    quantity: 1
},{
    href: '/DublVopperCheese',
    id: new Date().toISOString(),
    name: 'Двойной воппер с сыром',
    image: DABLPVOPPERCHEESE,
    about:'Двойной ВОППЕР®с сыром - это два аппетитных, приготовленных на огне бифштекса из 100% говядины, два нежных...',
    price: 13.59,
    quantity: 1
},{
    href: '/TilzitterKing',
    id: new Date().toISOString(),
    name: 'Тильзитер Кинг',
    image: TILZITERKING,
    about:'Сыр тает. И ты тоже! Фирменный бифштекс из 100%-й говядины под одеялом из тающего Тильзитера с щедрой порцией очень сырного...',
    price: 10.99,
    quantity: 1
},{
    href: '/BekonGumBurger',
    id: new Date().toISOString(),
    name: 'Бекон Гамбургер',
    image: BEKONGAMBURGER,
    about:'Гамбургер по-новому, дымному! Мы добавили бекончик и много соуса Барбекю — получилось ароматно и сочно.',
    price: 3.00,
    quantity: 1
},{
    href: '/AngusParmed',
    id: new Date().toISOString(),
    name: 'Ангус Пармеджано',
    image: ANGUSPARMED,
    about:'Наслаждайся каждым сырным укусом! Нежный мраморный бифштекс Абердин Ангус, пикантный Пармезан и щедрая порция...',
    price: 13.89,
    quantity: 1
},{
    href: '/AngusParmedDubl',
    id: new Date().toISOString(),
    name: 'Ангус Прамеджано двойной',
    image: ANGUSPARMERDUBL,
    about:'Много сыра, ещё больше говядины! Два сочных мраморных бифштекса Абердин Ангус, пикантный Пармезан и щедрая порц...',
    price: 18.99,
    quantity: 1
},{
    href: '/GrandCheeseFresh',
    id: new Date().toISOString(),
    name: 'Грант чиз \n фреш',
    image: GRANDGHEESEFRESH,
    about:'Особенная версия Гранд Чиза — со свежими овощами. Новый бифштекс по-домашнему (к фирменной говядине мы добавили немного...',
    price: 8.29,
    quantity: 1
},{
    href: '/GumBurger',
    id: new Date().toISOString(),
    name: 'ГамБургер',
    image: GAMBURGER,
    about: 'Попробуйте наш Гамбургер: это фирменный приготовленный на огне бифштекс с одним слоем маринованных огурчиков...',
    price: 3.29,
    quantity: 1
},{
    href: '/SwidishBurger',
    id: new Date().toISOString(),
    name: 'Шведский бургер',
    image:SWEDISHBURGER,
    about: 'Шведский бургер с клюквенным соусом достоин звания высокой кухни! Сочный говяжий бифштекс, расплавленный сыр...',
    price: 9.79,
    quantity: 1
},{
    href: '/CheeseBurger',
    id: new Date().toISOString(),
    name: 'ЧизБургер',
    image: CHEESEBURGER,
    about: 'Вы не ошибетесь, выбирая Чизбургер: это фирменная приготовленная на огне говядина с ломтиком слегка расплавленного сыра,...',
    price: 3.59,
    quantity: 1
},{
    href: '/DublCheeseBurger',
    id: new Date().toISOString(),
    name: 'Двойной ЧизБургер',
    image: DUBLCHEESEBURGER,
    about: 'Два приготовленных на огне фирменных говяжьих бифштекса, два ломтика слегка расплавленного сыра, хрустящий...',
    price: 7.29,
    quantity: 1
}
]