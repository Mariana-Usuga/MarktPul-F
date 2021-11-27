import React from 'react'

export const Filter = () => {
    return (
        <div class="filter">
            <div class="filter__title">
                <span>Filtrar por</span>
            </div>
            <div class="filter__container " >
                <ul class="slide">
                    <li class="sub-menu">
                        <a href="#" class="sub-menu-list">Productos</a>
                        <i class="fas fa-angle-down"></i>
                        <ul>
                            <li>
                                <a href='#'>Lorem Ipsum</a>
                            </li>
                            <li>
                                <a href='#'>Lorem Ipsum</a>
                            </li>
                            <li>
                                <a href='#'>Lorem Ipsum</a>
                            </li>
                        </ul> 
                    </li> 
                    <li class="sub-menu"><a href="#" class="sub-menu-list">Mercados</a>
                        <i class="fas fa-angle-down"></i>
                        <ul>
                            <li>
                                <a href='#'>Fisicos</a>
                            </li>
                            <li>
                                <a href='#'>Digitales</a>
                            </li>    
                        </ul> 
                    </li> 
                    <li class="sub-menu"><a href="#" class="sub-menu-list">Eventos</a>
                        <i class="fas fa-angle-down"></i>
                        <ul>
                            <li>
                                <a href='#'>Lorem Ipsum</a>
                            </li>
                            <li>
                                <a href='#'>Lorem Ipsum</a>
                            </li>
                            <li>
                                <a href='#'>Lorem Ipsum</a>
                            </li>
                        </ul> 
                    </li> 
                </ul>          
            </div> 
        </div>
    )
}
