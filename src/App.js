import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Error from "./Component/Error";
import Nav from "./Component/Nav";
import About from "./Page/About";
import Home from "./Page/Home";
import PageItem from "./Page/PageItem";
import Product from "./Page/Product";


function App() {
  return (
    <div className="App">
      <header className="App-header">

			<BrowserRouter>

      <Nav />  
      <Routes>

      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/product" element={<Product />}>
      <Route path="/product/:input" element={<PageItem />} /></Route>
      <Route path='*' element={<Error />}></Route>

      </Routes>
      </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
