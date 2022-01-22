import React from "react";
import Navbar from './components/Navbar';
import Main from './components/Main';
import Work from './components/Work';
import Use from './components/Use';
import Sendmoney from "./components/Sendmoney";
// import Contant from "./components/Contant";
import Footer from "./components/Footer";

function Home() {
  return (
<>
<Navbar/>
<Main/>
<Work/>
<Use/>
<Sendmoney/>
{/* <Contant/> */}
<Footer/>
</>
  );
}

export default Home;
