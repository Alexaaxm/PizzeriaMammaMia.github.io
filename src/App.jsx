import Footer from "./components/Footer";
//import Home from "./components/Home";
import Navbar from "./components/Navbar";
import LoginForm from "./components/Forms/LoginForm";
import RegisterForm from "./components/Forms/RegisterForm";

function App() {
  return (
    <>
      <Navbar />
      {/*<Home />*/}
      <RegisterForm />
      <LoginForm />
      <Footer />
    </>
  );
}

export default App;
