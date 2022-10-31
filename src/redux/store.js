import {configureStore} from '@reduxjs/toolkit';

import cartItemSlide from './shopping-cart/cartItemSlide';

export const store = configureStore({
    reducer: {
        cartItems: cartItemSlide
    }
})