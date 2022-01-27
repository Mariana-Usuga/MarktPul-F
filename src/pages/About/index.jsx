import './About.scss';

const About = () => (
  <section className="about">
    <header className="about__header">
      <h1 className="about__header--title">Acerca de Nosotros</h1>
    </header>
    <article className="about__article">
      <div className="about__article--image">
        <img
          src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b8c337ca-16bf-4364-b4d0-1e3d10b6b9ad/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220127T034509Z&X-Amz-Expires=86400&X-Amz-Signature=fbb02a9baa5d826f2bb21645402d3818296be84b1ab84f80369ea61b211434f4&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject"
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
