import React from 'react'
import '../styles/components/ProductItem.scss'
export const ProductItem = ({tipoMercado,infoMercado,tagMercado,img}) => {
    return (
        <div className="card">
                <img src={img} alt=""/>
                <div className="card-body">    
                    <a href="/">{tipoMercado}</a>
                    <p>{infoMercado}</p>
                    <a className="card-body__tag" href="/">{tagMercado[0]}</a><a className="card-body__tag"  href="/">{tagMercado[1]}  </a><a className="card-body__tag"  href="/">{tagMercado[2]}</a>
                </div>
            </div>
    )
}
