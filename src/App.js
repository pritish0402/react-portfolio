import Header from "./components/Header";
import Home from "./components/Home";
import MyInfo from "./components/MyInfo";
import Section from "./components/Section";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import emailjs from "@emailjs/browser";
import { Analytics } from "@vercel/analytics/react";

function App() {
  function handleSubmit(templateParams) {
    emailjs.send("service_it1rc0a", "template_w0nq1vh", templateParams, "dGYLUgWwysi2FT3R_");
  }

  return (
    <>
      <Header />
      <Home />
      <MyInfo />
      <Section />
      <Contact onSubmit={handleSubmit} />
      <Footer />
      <Analytics />
    </>
  );
}

export default App;
