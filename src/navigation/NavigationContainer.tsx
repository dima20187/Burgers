import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AboutUs } from '../components/AboutUsPage/AboutUs';
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

import { ShrimpRoll } from '../components/Rolls/components/RollsPage/ShrimpRoll';
import { TilziterRoll } from '../components/Rolls/components/RollsPage/TilziterRoll';
import { CezarRoll } from '../components/Rolls/components/RollsPage/CezarRoll';
import { VopperRoll } from '../components/Rolls/components/RollsPage/VopperRoll'
import { FishRoll } from '../components/Rolls/components/RollsPage/FishRoll';


export function NavigateContainer () {

  return (
    <div>
    <Routes>    
      <Route path='/' Component={Main}/>
      <Route path='/About' Component={AboutUs}/>
      <Route path='k' Component={Korzina}/>
    </Routes>

    <Routes>
      <Route path='/Angus' Component={Angus}/>
      <Route path='/AngusXl' Component={AngusXl}/>
      <Route path='/DublVopper' Component={DublVopper}/>
      <Route path='/VopperD' Component={VopperD}/>
      <Route path='/VopperCheese' Component={VopperCheese}/>
      <Route path='/BigKing' Component={BigKing}/>
      <Route path='/DublVopperCheese' Component={DublVopperCheese}/>
      <Route path='/TilzitterKing' Component={TilzitterKing}/>
      <Route path='/BekonGumburger' Component={BekonGumburger}/>
      <Route path='/AngusParmed' Component={AngusParmed}/>
      <Route path='/AngusParmedDubl' Component={AngusParmedDubl}/>
      <Route path='/GrandCheeseFresh' Component={GrandCheeseFresh}/>
      <Route path='/SwidishBurger' Component={SwedishBurger}/>
      <Route path='/Gumburger' Component={GumBurger}/>
      <Route path='/CheeseBurger' Component={CheeseBurger}/>
      <Route path='/DublCheeseBurger' Component={DublCheeseBurger}/>
      <Route path='/TilziterChiken' Component={TilziterChiken} />
      <Route path='/ShrimpKing' Component={ShrimpKing} />
      <Route path='/ChikenTarTar' Component={ChikenTarTar} />
      <Route path='/ChikenBurger' Component={ChikenBurger} />
      <Route path='/FishBurger' Component={FishBurger} />
      <Route path='/CezarKing' Component={CezarKing} />
      <Route path='/TilziterRoll' Component={TilziterRoll} />
      <Route path='/VopperRoll' Component={VopperRoll} />
      <Route path='/ShrimpRoll' Component={ShrimpRoll} />
      <Route path='/CezarRoll' Component={CezarRoll} />
      <Route path='/FishRoll' Component={FishRoll} />
    </Routes>
    </div>
  )
}

