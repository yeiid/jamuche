
import Link from 'next/link';
import './header.css';

function Header() {
  return (
    <nav>
      <img
        src="https://cdn-icons-png.flaticon.com/512/2976/2976215.png"
        alt=""
        className="menu"
      />
      <div className="navbar-left">
        <ul><Link href="/">INICIO</Link></ul>
        <ul><Link href="/pago">CONTACTO</Link></ul>
        <ul><Link href="/nosotros">NOSOTROS</Link></ul>
        <ul><Link href="/">ESPECIES</Link></ul>
      </div>
    </nav>
  );
}

export default Header;
