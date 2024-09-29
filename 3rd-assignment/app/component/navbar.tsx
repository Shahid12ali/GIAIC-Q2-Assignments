// app/component/navbar.tsx
import Link from 'next/link';

function Navbar() {
  return (
    <>
    <nav style={navbarStyle}>
      <h1 style={h1Style}>Welcome To Next.Js</h1>
      
      <Link href="/" style={linkStyle}>Home</Link>
      <Link href="/navbar" style={linkStyle}>Navbar</Link>
      <Link href="/about" style={linkStyle}>About</Link>
      <Link href="/contact" style={linkStyle}>Contact</Link>
      <Link href="/footer" style={linkStyle}>Footer</Link>
      
    </nav>
    </>
  );
}

// CSS styling
const navbarStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center', 
  padding: '10px 20px',
  background: 'black', // Background color
};

const h1Style = {
    display: 'flex',
    color: 'white',
    textDecoration: 'none',
    margin: '0px',
};

const linkStyle = {
  color: 'white', // Text color
  textDecoration: 'none', // Remove underline
  padding: '10px', // Padding around links
};

export default Navbar;
