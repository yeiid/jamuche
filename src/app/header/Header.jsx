
import Link from 'next/link';
import './header.css';

function Header() {
  return (
<header>
<nav>
      <img
        src="https://cdn-icons-png.flaticon.com/512/2976/2976215.png"
        alt=""
        className="menu"
      />
      <div className="navbar-left">
        
        <ul><Link href="/">INICIO</Link></ul>
        <ul><Link href="/contacto">CONTACTO</Link></ul>
        <ul><Link href="/nosotros">NOSOTROS</Link></ul>
        <ul><Link href="/info">ESPECIES</Link></ul>
      </div>
    </nav>

</header>
  );
}

export default Header;
