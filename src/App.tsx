import './scss/app.scss';
import Header from './components/Header';
import Home from './components/pages/Home';
import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import Cart from './components/pages/Cart';
import MebelFull from './components/pages/MebelFull';
import NotFound from './components/pages/NotFound';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/cart"
          element={
            <Suspense fallback={<div></div>}>
              <Cart />
            </Suspense>
          }
        />

        <Route
          path="/mebel/:id"
          element={
            <Suspense fallback={<div></div>}>
              <MebelFull />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<div></div>}>
              <NotFound />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
