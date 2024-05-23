import React from 'react'
import {BrowserRouter, Route, Routes, } from 'react-router-dom'
import { AboutUs } from '../HeaderComponents/AboutUs';
import { Angus } from '../Burgers/BurgerPage/Angus';
import { Main } from '../HeaderComponents/Main'
import { Korzina } from '../Korzina/Korzina';

import { AngusXl } from '../Burgers/BurgerPage/AngusXl';
import { DublVopper } from '../Burgers/BurgerPage/DublVopper';
import { VopperD } from '../Burgers/BurgerPage/VopperD';
import { VopperCheese } from '../Burgers/BurgerPage/VopperCheese';
import { BigKing } from '../Burgers/BurgerPage/BigKing';
import { TilzitterKing } from '../Burgers/BurgerPage/TilzitterKing';
import { DublVopperCheese } from '../Burgers/BurgerPage/DublVopperCheese';
import { AngusParmed } from '../Burgers/BurgerPage/AngusParmed';
import { BekonGumburger } from '../Burgers/BurgerPage/BekonGumburger';
import { AngusParmedDubl } from '../Burgers/BurgerPage/AngusParmedDubl';
import { GrandCheeseFresh } from '../Burgers/BurgerPage/GrandCheeseFresh';
import { SwedishBurger } from '../Burgers/BurgerPage/SwedishBurger';
import { CheeseBurger } from '../Burgers/BurgerPage/CheeseBurger';
import { DublCheeseBurger } from '../Burgers/BurgerPage/DublCheeseBurger';
import { GumBurger } from '../Burgers/BurgerPage/GumBurger';

import { TilziterChiken} from '../Burgers/BurgerChikenPage/TilziterChiken';
import { ShrimpKing } from '../Burgers/BurgerChikenPage/ShrimpKing';
import { ChikenTarTar } from '../Burgers/BurgerChikenPage/ChikenTarTar';
import { ChikenBurger } from '../Burgers/BurgerChikenPage/ChikenBurger';
import { FishBurger } from '../Burgers/BurgerChikenPage/FishBurger';
import { CezarKing } from '../Burgers/BurgerChikenPage/CezarBurger';

import { ShrimpRoll } from '../Burgers/Rolls/ShrimpRoll';
import { TilziterRoll } from '../Burgers/Rolls/TilziterRoll';
import { CezarRoll } from '../Burgers/Rolls/CezarRoll';
import { VopperRoll } from '../Burgers/Rolls/VopperRoll';
import { FishRoll } from '../Burgers/Rolls/FishRoll';


const Navigate = () => {
  return (
    <div>
      
      <Routes>    
      <Route exact path='/' Component={Main}/>
      <Route exact path='/About' Component={AboutUs}/>
      <Route exact path='k' Component={Korzina}/>
    </Routes>

    <Routes>
      <Route exact path='/Angus' Component={Angus}/>
      <Route exact path='/AngusXl' Component={AngusXl}/>
      <Route exact path='/DublVopper' Component={DublVopper}/>
      <Route exact path='/VopperD' Component={VopperD}/>
      <Route exact path='/VopperCheese' Component={VopperCheese}/>
      <Route exact path='/BigKing' Component={BigKing}/>
      <Route exact path='/DublVopperCheese' Component={DublVopperCheese}/>
      <Route exact path='/TilzitterKing' Component={TilzitterKing}/>
      <Route exact path='/BekonGumburger' Component={BekonGumburger}/>
      <Route exact path='/AngusParmed' Component={AngusParmed}/>
      <Route exact path='/AngusParmedDubl' Component={AngusParmedDubl}/>
      <Route exact path='/GrandCheeseFresh' Component={GrandCheeseFresh}/>
      <Route exact path='/SwidishBurger' Component={SwedishBurger}/>
      <Route exact path='/Gumburger' Component={GumBurger}/>
      <Route exact path='/CheeseBurger' Component={CheeseBurger}/>
      <Route exact path='/DublCheeseBurger' Component={DublCheeseBurger}/>
      <Route exact path='/TilziterChiken' Component={TilziterChiken} />
      <Route exact path='/ShrimpKing' Component={ShrimpKing} />
      <Route exact path='/ChikenTarTar' Component={ChikenTarTar} />
      <Route exact path='/ChikenBurger' Component={ChikenBurger} />
      <Route exact path='/FishBurger' Component={FishBurger} />
      <Route exact path='/CezarKing' Component={CezarKing} />
      <Route exact path='/TilziterRoll' Component={TilziterRoll} />
      <Route exact path='/VopperRoll' Component={VopperRoll} />
      <Route exact path='/ShrimpRoll' Component={ShrimpRoll} />
      <Route exact path='/CezarRoll' Component={CezarRoll} />
      <Route exact path='/FishRoll' Component={FishRoll} />
    </Routes>
    </div>
  )
}

export default Navigate