import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { Routes, Route } from 'react-router-dom'

import Header from './components/header/Header'
import Products from './components/products/Products'
import Cart from './components/cart/Cart'
import Footer from "./components/footer/Footer";

function App() {
    return (
        <div>
            <header>
                <Header />
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<Products />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default App
