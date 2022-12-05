import { Route, Routes } from 'react-router-dom';

import { Result } from 'antd'
import React from 'react'
import Cart from '../pages/Cart'
import Catalog from '../pages/Catalog'
import Home from '../pages/Home'
import Product from '../pages/Product'
import Error from '../pages/Error'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/catalog' element={<Catalog />} />
            <Route path='/catalog/:slug' element={<Product />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/result' element={<Result />} />
            <Route path='/*' element={<Error />} />
        </Routes>
    )
}

export default AppRoutes