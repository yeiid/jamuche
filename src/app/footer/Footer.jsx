

import './footer.css'


const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p>Sobre</p>
              <ul>
                <li>
                  <a href="#">Nuestra historia</a>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <p>Contacto</p>
              <ul>
                <li>
                  <a href="#">Contacto</a>
                </li>
                <li>
                  <a href="#">Envíos</a>
                </li>
                <li>
                  <a href="#">Política de privacidad</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="copyright">&copy; 2023 Cactus Shop</div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
