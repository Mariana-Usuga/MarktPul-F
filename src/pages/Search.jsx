import React from 'react'
import {Header} from '../components/Header'
import {Footer} from '../components/Footer'
import '../styles/components/search.scss';
import { ProductGrid } from '../components/ProductGrid';
export const Search = () => {
    return (
        <div>
            <Header></Header>
            <ProductGrid/>
            <Footer></Footer>
        </div>
    )
}


