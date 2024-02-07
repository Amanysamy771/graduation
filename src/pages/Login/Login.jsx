import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
// import Facebook from "../../images/facebook.svg"
const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: email,
      password: password
    };

    try {
      const response = await fetch('http://localhost:8000/api/v1/sunnah/app/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': '*/*'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message);
        return;
      }

      // يتم تحويل المستخدم إلى صفحة معينة بعد تسجيل الدخول بنجاح
      window.location.href = '/profile';
      
    } catch (error) {
      console.error('حدث خطأ:', error);
      setError('حدث خطأ أثناء معالجة طلب تسجيل الدخول');
    }
  };


  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
      setIsChecked(!isChecked);
  };

  return (

<div>
  
      <form onSubmit={handleSubmit}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h2> Log in to SUNNAH </h2>
        <div>
          <button className="btn3">
            <img src="/google.png" alt="" width={35} /> Continue with Google{" "}
          </button>
        </div>
        <div>
          <button className="btn4">
            <img src="/facebook.png" alt="" width={10} /> Continue with Facebook{" "}
          </button>
        </div>
  
        <button className="btn5"> Continue with Phone number </button>
        <div className="line" style={{ marginTop: "50px" }} />
  
        <div style={{ textAlign: "left" }}>
          <label htmlFor="email"><b> Email or Username</b> </label>
          <br />
          <br />
          <input
            type="email"
            name=""
            id=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
             required
            style={{
              width: "320px",
              height: "30px",
              border: "2px solid #116746",
              padding: "3px 5px",
            }}
            placeholder="Email or Username"
          />
        </div>
  

   
<br />
<br />
        <div style={{ textAlign: "left" }}>
          <label htmlFor="password"> <b>password </b></label>
          <br />
          <br />
          <input
                type="password"
               id="password"
              value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            name=""
            style={{
              width: "320px",
              height: "30px",
              border: "2px solid #116746",
              padding: "3px 5px",
            }}
            placeholder="password"
          />
        </div>
  
  
  
  
  
      <div style={{display:"flex"  ,gap:"10px" , alignItems:"center", marginRight:"200px" }}>
          <label className="switch">
                <input type="checkbox" checked={isChecked} onChange={handleToggle} />
                <span className="slider round"> </span>
            </label>
          <p> Remind me </p>
          
      </div>
      
  
        <button className="btn6" type="submit" style={{ padding: "5px 50px" }}>
          Log in
        </button>
        <Link to={"/forget"} style={{ color: "#000" }}>
          Forget your Password?
        </Link>
      </form>

       {error && <p style={{ color: 'red' }}>{error}</p>}

</div>

  );
};

export default Login;












// import React, { useState } from 'react';

// const LoginForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const data = {
//       email: email,
//       password: password
//     };

//     try {
//       const response = await fetch('http://localhost:8000/api/v1/sunnah/app/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Accept': '*/*'
//         },
//         body: JSON.stringify(data)
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         setError(errorData.message);
//         return;
//       }

//       // يتم تحويل المستخدم إلى صفحة معينة بعد تسجيل الدخول بنجاح
//       window.location.href = '/profile'; 
//     } catch (error) {
//       console.error('حدث خطأ:', error);
//       setError('حدث خطأ أثناء معالجة طلب تسجيل الدخول');
//     }
//   };

//   return (
//     <div>
//       <h2>تسجيل الدخول</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="email">البريد الإلكتروني:</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="password">كلمة المرور:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">تسجيل الدخول</button>
//       </form>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//     </div>
//   );
// };

// export default LoginForm;


