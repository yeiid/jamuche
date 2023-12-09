import "./menu.css";
const Menu = () => {
  return (
    <nav>
      <div className="mobile-menu">
        <ul><Link href="/">INICIO</Link></ul>
        <ul><Link href="/pago">CONTACTO</Link></ul>
        <ul><Link href="/nosotros">NOSOTROS</Link></ul>
        <ul><Link href="/">ESPECIES</Link></ul>
      </div>
    </nav>
  );
};

export default Menu;
