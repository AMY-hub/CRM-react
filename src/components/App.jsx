import { createContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useLocalStorage } from '../hooks/useLocalStorage';

import { NavBar } from './NavBar';
import { AddPage } from './pages/AddPage';
import { EditPage } from './pages/EditPage';
import { NoBidsAdded } from './pages/NoBidsAdded';
import { TablePage } from './pages/TablePage';
import { PageNotFound } from './pages/PageNotFound';

import '../styles/reset.css'
import '../styles/bootstrap.min.css';
import '../styles/main.css';


export const AppContext = createContext(null);

function App() {

  const [lastEditedBid, setLastEditedBid] = useLocalStorage('EditedBidId', '');
  const [filter, setFilter] = useLocalStorage('CRMfilter', {
    product: 'all',
    status: 'all'
  });

  return (
    <BrowserRouter>
      <AppContext.Provider value={{
        lastEditedBid,
        setLastEditedBid,
        filter,
        setFilter
      }}>
        <NavBar />
        <Routes>
          <Route path='/' element={<AddPage />} />
          <Route path='/table' element={<TablePage />} />
          <Route path='/edit/:id' element={<EditPage />} />
          <Route path='/nobidsadded' element={<NoBidsAdded />} />
          <Route path='/*' element={<PageNotFound />} />
        </Routes>
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;
