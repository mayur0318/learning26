import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HeaderComponent } from './components/HeaderComponent';
import { FooterComponent } from './components/FooterComponent';
import {ContentComponent} from './components/ContentComponent';
import { MapDemo1 } from './components/MapDemo1';
import { MapDemo2 } from './components/MapDemo2';
import { MapDemo3 } from './components/MapDemo3';
import { MapDemo5 } from './components/MapDemo5';
import { MapDemo6 } from './components/MapDemo6';
import { Route, Routes } from 'react-router-dom';
import { MapDemo7 } from './components/MapDemo7';
import { Navbar } from './components/Navbar';
import { NetflixHome } from './components/NetflixHome';
import { NetflixMovies } from './components/NetflixMovies';
import { NetflixShows } from './components/NetflixShows';
import { Watch } from './components/Watch';
import { ErrorNotFound } from './components/ErrorNotFound';
import { Homecomponent } from './components/Homecomponent';
import { MapDemo4 } from './components/MapDemo4';
import { UseStateDemo1 } from './components/UseStateDemo1';
import { Empoloyees } from './components/Empoloyees';
import { EmployeeList } from './components/EmployeeList';
import { TableComponent } from './components/TableComponent';
import { StudentReusableTable } from './components/StudentReusableTable';

function App() {
  
return (
    
      <div>
        <Navbar />

        <Routes>
          <Route path='/netflixhome' element={<NetflixHome />}></Route>
          <Route path='/netflixmovies' element={<NetflixMovies />}></Route>
          <Route path='/netflixshows' element={<NetflixShows />}></Route>
          <Route path='/watch/:name' element={<Watch />}></Route>
          <Route path='/usestatedemo1' element={<UseStateDemo1/>}></Route>
          <Route path='/employees' element={<Empoloyees />}></Route>
          <Route path='/tablecomponent' element={<TableComponent />}></Route>
          <Route path='/studenttable' element={<StudentReusableTable />}></Route>
          <Route path='/*' element={<ErrorNotFound />}></Route>
          <Route path='/' element={<Homecomponent />}></Route>
        </Routes>
      </div> 
    
  )
}

export default App
