import './scss/app.scss';
import Header from './components/Header';
import Home from './components/pages/Home';
import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import Cart from './components/pages/Cart';

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
      </Routes>
    </div>
  );
}

export default App;
