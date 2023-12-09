

import './footer.css'




const Footer = () => {
  return (
    <>
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <p>Sobre</p>
              <ul>
                <li>
                  <a href="#">Nuestra historia</a>
                </li>
                <li>
                  <a href="#">Nuestra misión</a>
                </li>
                <li>
                  <a href="#">Nuestros valores</a>
                </li>
              </ul>
            </div>
            <div class="col-md-6">
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
          <div class="copyright">&copy; 2023 Cactus Shop</div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
