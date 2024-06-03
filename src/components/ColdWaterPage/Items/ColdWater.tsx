import { WATER } from "../../../Assets/ImageWater"

const {PEPSI, MIRANDA, SEVENUP,
    PERPSIMAX, LIPTONLEMON, GREENLIPTON,
     APPLEJUICE, AQUAMINERAL, MULTIFRUCT 
   } = WATER

export const Water = [{
        id: new Date().toISOString(),
        name: 'PEPSI® \n 0,5 Л',
        image: PEPSI,
        price: 3.90,
        quantity: 1
    },{
        id: new Date().toISOString(),
        name: 'MIRINDA® \n 0,5 Л',
        image: MIRANDA,
        price: 3.90,
        quantity: 1
    },{
        id: new Date().toISOString(),
        name: '7UP® \n 0,5 Л',
        image: SEVENUP,
        price: 3.90,
        quantity: 1
    },{
        id: new Date().toISOString(),
        name: 'PEPSI MAX \n 0,5 Л',
        image: PERPSIMAX,
        price: 3.90,
        quantity: 1
    },{
        id: new Date().toISOString(),
        name: 'ЛИПТОН С ЛИМОНОМ \n 0,5 Л',
        image: LIPTONLEMON,
        price: 1.82,
        quantity: 1
    },{
        id: new Date().toISOString(),
        name: 'ЛИПТОН ЗЕЛЕНЫЙ \n 0,5 Л',
        image: GREENLIPTON,
        price: 1.82,
        quantity: 1
    },{
        id: new Date().toISOString(),
        name: 'СОК ЯБЛОЧНЫЙ \n 0,2 Л',
        image: APPLEJUICE,
        price: 1.06,
        quantity: 1
    },{
        id: new Date().toISOString(),
        name: 'Aqua \n Mineral \n 0,5 Л',
        image: AQUAMINERAL,
        price: 1.50,
        quantity: 1
    },{
        id: new Date().toISOString(),
        name: 'Сок \nМультифруктовый \n 0,3 Л',
        image: MULTIFRUCT,
        price: 1.10,
        quantity: 1
    },
];