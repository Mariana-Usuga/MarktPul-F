import './About.scss';

const About = () => (
  <section className="about">
    <header className="about__header">
      <h1 className="about__header--title">Acerca de Nosotros</h1>
    </header>
    <article className="about__article">
      <div className="about__article--image">
        <img
          src="https://res.cloudinary.com/dgjg2y07o/image/upload/v1643420728/Untitled_dml2zn.png"
          alt="MarktPul"
        />
      </div>

      <p className="about__article--text">
        Es el lugar perfecto para ir a ordenar o descubrir artículos que da
        nueva vida a tu espacio. Dejar ir nunca se ha sentido tan bien - es casi
        tan bueno como encontrar tu nueva cosa favorita. y estamos aquí ayudar.
      </p>
      <p className="about__article--text">
        Conectamos a millones de personas en los EE. UU. para comprar y vender
        casi cualquier cosa. Todos tenemos cosas que no usamos, nunca usamos o
        simplemente superado Pero estos artículos preciados todavía tienen
        valor. Nuestro equipo está siempre tratando de encontrar nuevas formas
        de hacer que el intercambio de artículos sea aún más fácil. Esto
        significa recolecciones en el hogar, entrega el mismo día y una lista
        seleccionada de artículos que amor.
      </p>
      <p className="about__article--text">
        Di adiós a las cosas que ya no usas y hola a deliciosos nuevos
        hallazgos.
      </p>
    </article>
  </section>
);

export default About;
