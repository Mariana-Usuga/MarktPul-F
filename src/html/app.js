const iconoMenu = document.querySelector('.header__main-bars')
const menu = document.querySelector('.header__ul')
const body = document.querySelector('.background')

iconoMenu.addEventListener('click', (e) => {
    menu.classList.toggle('header__ul--show')
    body.classList.toggle('background--show')
})

window.addEventListener('load', () => {
    new Glider(document.querySelector('.carousel__list '),{
        slidesToShow: 4,
        slidesToScroll: 4,
        //   draggable: true,
  dots: '.carousel__indicators',
  arrows: {
    prev: '.main__container__left',
    next: '.main__container__right'
  }
    } )
})