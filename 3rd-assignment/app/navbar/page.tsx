'use client';
import { useRouter } from "next/navigation";

function NavbarPage() {

  const router = useRouter();
    return (
      <div>
      <center>
      <h1><strong> This is Navbar Page </strong></h1>
      <button style={buttonStyle} onClick={() => router.push('/')}>Back To Home Page</button>
      </center>
      </div>
    );
  }

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: 'blue',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  };
  export default NavbarPage;