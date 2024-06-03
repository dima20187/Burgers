import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AboutUs } from '../components/Components/AboutUsPage/AboutUs';
import { Angus } from '../components/BurgerPage/components/BurgerPage/Angus';
import { Main } from '../components/Main/Main'
import { Korzina } from '../components/Korzina/Korzina';

import { AngusXl } from '../components/BurgerPage/components/BurgerPage/AngusXl'
import { DublVopper } from '../components/BurgerPage/components/BurgerPage/DublVopper';
import { VopperD } from '../components/BurgerPage/components/BurgerPage/VopperD';
import { VopperCheese } from '../components/BurgerPage/components/BurgerPage/VopperCheese';
import { BigKing } from '../components/BurgerPage/components/BurgerPage/BigKing';
import { TilzitterKing } from '../components/BurgerPage/components/BurgerPage/TilzitterKing';
import { DublVopperCheese } from '../components/BurgerPage/components/BurgerPage/DublVopperCheese';
import { AngusParmed } from '../components/BurgerPage/components/BurgerPage/AngusParmed';
import { BekonGumburger } from '../components/BurgerPage/components/BurgerPage/BekonGumburger';
import { AngusParmedDubl } from '../components/BurgerPage/components/BurgerPage/AngusParmedDubl';
import { GrandCheeseFresh } from '../components/BurgerPage/components/BurgerPage/GrandCheeseFresh';
import { SwedishBurger } from '../components/BurgerPage/components/BurgerPage/SwedishBurger';
import { CheeseBurger } from '../components/BurgerPage/components/BurgerPage/CheeseBurger';
import { DublCheeseBurger } from '../components/BurgerPage/components/BurgerPage/DublCheeseBurger';
import { GumBurger } from '../components/BurgerPage/components/BurgerPage/GumBurger';

import { TilziterChiken} from '../components/ChikenBurgerPage/components/BurgerChikenPage/TilziterChiken';
import { ShrimpKing } from '../components/ChikenBurgerPage/components/BurgerChikenPage/ShrimpKing';
import { ChikenTarTar } from '../components/ChikenBurgerPage/components/BurgerChikenPage/ChikenTarTar';
import { ChikenBurger } from '../components/ChikenBurgerPage/components/BurgerChikenPage/ChikenBurger';
import { FishBurger } from '../components/ChikenBurgerPage/components/BurgerChikenPage/FishBurger';
import { CezarKing } from '../components/ChikenBurgerPage/components/BurgerChikenPage/CezarBurger';

import { ShrimpRoll } from '../components/Burgers/Rolls/ShrimpRoll';
import { TilziterRoll } from '../components/Burgers/Rolls/TilziterRoll';
import { CezarRoll } from '../components/Burgers/Rolls/CezarRoll';
import { VopperRoll } from '../components/Rolls/Rolls/VopperRoll'
import { FishRoll } from '../components/Burgers/Rolls/FishRoll';


const NavigateContainer = () => {
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

export  {NavigateContainer}