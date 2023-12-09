import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import ProductScreen from './Screeens/ProductScreen'
import HomeScreen from './Screeens/HomeScreen'

const App = () => {
    return (
        <BrowserRouter>

            <div>
                <header>
                    <Link to='/'>Amazone</Link>
                </header>
            </div>
            <main>
                <Routes>
                    <Route path='/products/:slug' element={<ProductScreen />} />
                    <Route path='/' element={<HomeScreen />} />
                </Routes>
            </main>
        </BrowserRouter>

    )
}

export default App