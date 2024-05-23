import { ROLIMAGE } from "../Image/ImageRol/RolImage"

const {SHRIMPROL,FISHROL,VOPPERROL,
        TILZITERROL,CEZARROL}=ROLIMAGE

export const Shavuha = [
       { 
            href: '/ShrimpRoll',
            name: 'Шримп Ролл',
            image: SHRIMPROL,
            price: 10.40,
            about:'Ролл со вкусом Шримпа! Два приготовленных на огне сочных бифштекса, свежие овощи, много соуса — все, за что любят наш легендарный...',
            quantity: 1
        },{
            href: '/VopperRoll',
            name: 'Воппер Ролл',
            image: VOPPERROL,
            price: 9.30,
            about:'Ролл со вкусом Воппера! Два приготовленных на огне бифштекса, свежие овощи, много соуса — все, за что любят наш легендарный...',
            quantity: 1
        },{
            href: '/CezarRoll',
            name: 'Цезарь Ролл со Стрипсами',
            image: CEZARROL,
            price: 9.70,
            about:'Два сочных стрипса в хрустящей панировке в сочетании с свежим помидором и листьями салата, сыром Пармезан и фирменным...',
            quantity: 1
        },{
            href: '/TilziterRoll',
            name: 'Тильзитер Ролл',
            image: TILZITERROL,
            price: 10.40,
            about:'Завернули по-сырному: тающий Тильзитер в золотистой панировке, сочные куриные стрипсы, много сырного соуса Пармеджано,...',
            quantity: 1
        },{
            href: '/FishRoll',
            name: 'Фиш Ролл',
            image: FISHROL,
            price: 9.30,
            about:'Ролл с Рыбой! Два приготовленных на огне рыбных бифштекса, свежие овощи, много соуса — это то, за что любят наш легендарный',
            quantity: 1 
        }]