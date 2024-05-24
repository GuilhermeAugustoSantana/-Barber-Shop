import { useState } from 'react';
import './style.css';

export const Home = () => {
  const [tema, setTema] = useState(true);

  const sun = 'assets/sun.png';
  const moon = 'assets/moon.png'

  const mudarTema = () => {
    setTema(!tema);
  }
  return (
    <div className={`body ${tema ? "light" : "dark"}`}>
      <header className='menu limitar-largura'>
        <img className={tema ? "logo-light" : "logo-dark"} src="assets/barbearia-logo.png" alt="logo" />
        <button onClick={mudarTema} className={`${tema ? "light" : "dark"}`}>
          <img src={tema ? moon : sun} alt="icon lua/sol" />
          <p>{tema ? "Dark" : "Light"}</p>
        </button>
      </header>

      <section className='banner'></section>
      <section className={`information limitar-largura ${tema ? "light" : "dark"}`}>
        <h1>Bem-vindo a Barber Shop</h1>
        <p>Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.</p>
        <p>Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.
        </p>

        <p className='destaque'>S. Kelly</p>
      </section>
    </div >
  );
}