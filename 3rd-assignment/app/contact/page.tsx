'use client'
import { useRouter } from "next/navigation";

function ContactPage() {
   const route = useRouter();
    return (
      <>
      <center>
      <h1><strong> This is Contact Page </strong></h1>

      <button style={buttonStyle} onClick={() => route.push('/')}>Back To Home Page</button>
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
  export default ContactPage;