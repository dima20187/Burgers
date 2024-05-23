import { CHIKEN } from "../Image/imageChiken/Chiken"

const { SHRIPKING, TILZITERKING
    ,CHIKENBURGER,CHIKENTARTAR
    ,CEZARKING,FISHBURGER}=CHIKEN

export const Chiken = [{

    href:'/TilziterChiken',
    name:  'Тильзитер кинг с курицей',
    image:  TILZITERKING ,
    price: 11.40,
    about: 'Сырное золото! Хрустящая курочка под сырным соусом Пармеджано и тающий Тильзитер в золотистой корочке. А ещё...',
    quantity: 1
  
} ,  {
    href: '/ChikenTarTar',
    name: 'Чикен тар-тар',
    image: CHIKENTARTAR,
    price: 7.70,
    about:'Королевские креветки в легкой хрустящей панировке, свежий салат айсберг, ломтики сыра, маринованные огурчики и соус цезарь...',
    quantity: 1
}  , {
    href: '/ShrimpKing',
    name: 'Шримп кинг',
    image: SHRIPKING,    
    price: 10.40,
    about:'Особенный и очень вкусный бургер из хрустящей куриной котлеты, свежего нарезанного салата, кетчупа и майонеза на...',
    quantity: 1
}  , {
    href: '/ChikenBurger',
    name: 'Чикен кинг',
    image: CHIKENBURGER,
    price: 7.60,
    about:'Особенный и очень вкусный бургер из хрустящей куриной котлеты, свежего нарезанного салата, кетчупа и майонеза на...',
    quantity: 1
}  , {
    href: '/CezarKing',
    name: 'Цезарь кинг',
    image: CEZARKING,
    about:'Любители курочки оценят новинку Цезарь Кинг! Сочные хрустящие куриные наггетсы, свежий томат и листовой салат заправляются...',
    price: 5.30,
    quantity: 1
} ,  {
    href: '/FishBurger',
    name: 'Фиш бургер',
    image: FISHBURGER,
    price: 9.30,
    about:'Любители рыбки оценят новинку Фиш Бургер! Сочные хрустящие рыбные наггетсы, свежий томат и листовой салат заправляются...',
    quantity: 1
}
]