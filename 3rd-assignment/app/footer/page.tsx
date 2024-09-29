'use client'
import { useRouter } from "next/navigation";
function FooterPage() {
   const router = useRouter();
    return (
      <>
      <center>
      <h1><strong> This is Footer Page </strong></h1>
      <button style={buttonStyle} onClick={() => router.push('/')}>Back To Home Page</button>
      </center>
      </> 
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
  export default FooterPage;