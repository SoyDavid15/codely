import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SitioWebImg from './Image/Sitio_web.jpg'
import SistemaImg from './Image/Sistema.jpg'

function App() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const observer = useRef(null);

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.current.unobserve(entry.target); // Dejar de observar una vez animado
        }
      });
    }, { threshold: 0.1 }); // Se dispara cuando el 10% del elemento es visible

    const elements = document.querySelectorAll('.pop-in');
    elements.forEach((el) => observer.current.observe(el));

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
      </head>
      <header>
        <nav className='Nav'>
          <h1>Codely</h1>
          <div className={`Hamburger ${isMobileMenuOpen ? 'open' : ''}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <ul className={`Lista-NavBar ${isMobileMenuOpen ? 'open' : ''}`}>
            <li style={{ cursor: 'pointer' }} onClick={() => handleScroll('inicio')}>INICIO</li>
            <li style={{ cursor: 'pointer' }} onClick={() => handleScroll('planes')}>PLANES</li>
            <li style={{ cursor: 'pointer' }} onClick={() => handleScroll('soluciones')}>SOLUCIONES</li>
            <li style={{ cursor: 'pointer' }} onClick={() => handleScroll('proceso')}>PROCESO</li>
            <li style={{ cursor: 'pointer' }} onClick={() => handleScroll('preguntas')}>PREGUNTAS</li>
            <li style={{ cursor: 'pointer' }} onClick={() => handleScroll('contacto')}>CONTACTO</li>
          </ul>
        </nav>
      </header>

      <body>
        <main id="inicio">
          <div className='Main1'>
            <div>
              <p>En Codely Desarrollamos Sistemas Y Sitios Web Que Automatizan Tu Negocio Y Te Ahorran Tiempo</p>
              <p>No Solo Hacemos Paginas Web. Construimos Software Que Trabaja Por Ti</p>
              <button className='IniciarButton'>Iniciar</button>
            </div>

            <div className='Card1'>
              <p>Invertir en Codely es invertir en tu tranquilidad</p>
            </div>
          </div>

        </main>
        <div className='Seccion pop-in delay-1' id="planes">
          <h3>Conoce Nuestros Planes</h3>
        </div>
        <section className='Planes'>
          <div className='SitioWebSistema'>
            <img src={SitioWebImg} alt="Sitio Web" />
            <div className='HoverText'>
              <h4>Sitio web + sistema</h4>
              <p>Ideal para empresas y negocios que necesitan automatizar procesos.</p>
              <br />
              <ul>
                <li>Sitio web profesional</li>
                <li>Diseño personalizado responsive</li>
                <li>Panel administrativo</li>
                <li>Base de datos</li>
                <li>Automatización de procesos</li>
                <li>Integraciones (pagos, reservas, etc.)</li>
              </ul>
              <p className='Precio'>Desde los $400.000 COP</p>
            </div>
          </div>
          <div className='SistemaAMedida'>
            <img src={SistemaImg} alt="Sistema a Medida" />
            <div className='HoverText'>
              <h4>Sistemas listos para usar</h4>
              <p>Ideal para negocios que necesitan automatizar procesos rápidamente sin desarrollar un sistema desde cero.</p>
              <br />
              <p>Incluye:</p>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li>Acceso a software desarrollado por nuestra agencia</li>
                <li>Implementación rápida</li>
                <li>Panel administrativo</li>
                <li>Base de datos segura</li>
                <li>Adaptación básica a tu negocio</li>
                <li>Soporte inicial para configuración</li>
              </ul>
            </div>
          </div>
        </section>

        <div className='Seccion pop-in delay-1' id="soluciones">
          <h3>Soluciones Digitales Para:</h3>
        </div>
        <section className='Soluciones'>
          <div className='CarruselSoluciones'>
            <div className='TarjetaSolucion pop-in delay-1'>
              <div className='ImagenCaja'></div>
              <p>EMPRESAS</p>
            </div>
            <div className='TarjetaSolucion pop-in delay-2'>
              <div className='ImagenCaja'></div>
              <p>CLINICAS Y CONSULTORIOS</p>
            </div>
            <div className='TarjetaSolucion pop-in delay-3'>
              <div className='ImagenCaja'></div>
              <p>HOTELES Y TURISMO</p>
            </div>
            <div className='TarjetaSolucion pop-in delay-4'>
              <div className='ImagenCaja'></div>
              <p>EMPRESAS Y STARTUPS</p>
            </div>
            <div className='TarjetaSolucion pop-in delay-5'>
              <div className='ImagenCaja'></div>
              <p>Sistemas a Medida Para Cualquier Negocio</p>
            </div>
          </div>
        </section>

        <section className='Proceso' id="proceso">
          <div className='ProcesoGrid'>
            <div className='ProcesoCard pop-in delay-1'>
              <p>1- DIAGNÓSTICO GRATUITO</p>
            </div>
            <div className='ProcesoCard pop-in delay-3'>
              <p>5- CAPACITACIÓN</p>
            </div>
            <div className='ProcesoCard pop-in delay-2'>
              <p>2- DISEÑO DE LA SOLUCIÓN<br />DIGITAL</p>
            </div>
            <div className='ProcesoCard ProcesoSpan2 pop-in'>
              <p className='ProcesoTitulo'>CONOCE NUESTRO PROCESO</p>
            </div>
            <div className='ProcesoCard pop-in delay-3'>
              <p>3- DESARROLLO DEL SISTEMA Y/O<br />SITIO WEB</p>
            </div>
            <div className='ProcesoCard pop-in delay-4'>
              <p>4- IMPLEMENTACIÓN</p>
            </div>
            <div className='ProcesoCard pop-in delay-5'>
              <p>6- SOPORTES Y MEJORAS CONTINUAS</p>
            </div>
          </div>
        </section>

        <div className='Seccion pop-in delay-1' id="preguntas">
          <h3>Preguntas Frecuentes</h3>
        </div>

      </body>
      <footer className='Footer' id="contacto">
        <div className='Redes'>
          <p className='TituloContacto'>Contacto</p>
          <p className='EnlaceContacto'><a href="https://www.instagram.com/codely_tech/" target="_blank">Instagram</a></p>
        </div>
      </footer>
    </>
  )
}

export default App
