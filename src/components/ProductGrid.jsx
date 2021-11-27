import React from 'react';
import { ProductItem } from './ProductItem';
import '../styles/components/ProductGrid.scss'
export const ProductGrid = () => {
    const data=[
        {
            id:1,
            tipoMercado: 'Fisico',
            infoMercado: 'Loremipsumm',
            tagMercado : ['TAG1','TAG2','TAG2'],
            img: "https://via.placeholder.com/220x172"
        },
        {
            id:2,
            tipoMercado: 'Digital',
            infoMercado: 'Loremipsumm',
            tagMercado : ['TAG3','TAG4','TAG5'],
            img : "https://via.placeholder.com/220x172"
        },
        {
            id:3,
            tipoMercado: 'Fisico',
            infoMercado: 'Loremipsumm',
            tagMercado : ['TAG1','TAG2','TAG2'],
            img: "https://via.placeholder.com/220x172"
        },
        {
            id:4,
            tipoMercado: 'Digital',
            infoMercado: 'Loremipsumm',
            tagMercado : ['TAG3','TAG4','TAG5'],
            img : "https://via.placeholder.com/220x172"
        },
        {
            id:5,
            tipoMercado: 'Fisico',
            InfoMercado: 'Loremipsumm',
            tagMercado : ['TAG1','TAG2','TAG2'],
            img: "https://via.placeholder.com/220x172"
        },
        {
            id:6,
            tipoMercado: 'Digital',
            infoMercado: 'Loremipsumm',
            tagMercado : ['TAG3','TAG4','TAG5'],
            img : "https://via.placeholder.com/220x172"
        },
        {
            id:7,
            tipoMercado: 'Fisico',
            infoMercado: 'Loremipsumm',
            tagMercado : ['TAG1','TAG2','TAG2'],
            img: "https://via.placeholder.com/220x172"
        },
        {
            id:8,
            tipoMercado: 'Digital',
            infoMercado: 'Loremipsumm',
            tagMercado : ['TAG3','TAG4','TAG5'],
            img : "https://via.placeholder.com/220x172"
        },
    ];
    return (
        <>
            <h3>Productos</h3>
            <div className="container">
                {
                    data.map(data=>
                        (<ProductItem
                            key={data.id}
                            {...data}                        
                        />)
                    )
                }
            </div>
        </>
    )
}
