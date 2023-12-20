

import './footer.css'
import Link from 'next/link';

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
            <Link href="#">Nuestra historia</Link>
          </li>
        </ul>
      </div>
      <div className="col-md-6">
        <p>Contacto</p>
        <ul>
          <li>
            <Link href="#">Contacto</Link>
          </li>
          <li>
            <Link href="#">Envíos</Link>
          </li>
          <li>
            <Link href="#">Política de privacidad</Link>
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
