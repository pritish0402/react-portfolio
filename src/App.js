import Header from "./components/Header";
import Home from "./components/Home";
import InfoCard from "./reusables/InfoCard";
import MyInfo from "./components/MyInfo";
import Section from "./components/Section";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import emailjs from "@emailjs/browser";
import { Analytics } from '@vercel/analytics/react';

function App() {
  const infoCardSub = <p>I'm <strong>Pritish Pore</strong>, a web developer</p>;
  const infoCardContent = 
    <>
      <p className="info-para">I am a passionate student studying computer engineering at the Pune Institute of Computer Technology. I have a keen interest in core subjects such as DSA and DBMS. But my main interest lies in Web Development. I am a <span>MERN stack developer</span> looking for an internship at a company that will allow me to explore my career options. I'm highly motivated to gain a lot of experience during the internship and build a strong base for my future after graduation.</p>
      <p className="info-para2">Apart from this, I love gym, coffee, and interacting with new people. <span><a href="#contact">Let's talk</a></span> about how awesome it all is! We can even help each other with our coding problems.</p>
    </>

  const myInfo = {
    name: "Pritish Pore",
    email: "pritish.pore@gmail.com",
    emailLink: "mailto:pritish.pore@gmail.com",
    age: "20",
    from: "Pune, Maharashtra",
    cgpa: 9.525,
    numSkills: "9+"
  };

  const educationCards = [
    {
      id: 1,
      year: "2020-2024",
      degree: "Bachelor, Computer Engineering",
      place: "Pune Institute of Computer Technology",
      score: "CGPA: 9.525"
    },
    {
      id: 2,
      year: "2018-2020",
      degree: "HSC",
      place: "Fergusson College",
      score: "Percentage: 88.77%"
    },
    {
      id: 3,
      year: "2016-2018",
      degree: "SSC",
      place: "Sevasadan English Medium School",
      score: "Percentage: 90.20%"
    }
  ]

  const projectCards = [
    {
      id: 1,
      year: "2023",
      projTitle: "Wiki API",
      projSubtitle: "Node and MongoDB",
      more: "Highlights: Skills in backend technologies"
    },
    {
      id: 2,
      year: "2023",
      projTitle: "Blog Website",
      projSubtitle: "MongoDB, Node, Express and EJS",
      more: "Highlights: Skills in backend technologies and EJS templating"
    },
    {
      id: 3,
      year: "2023",
      projTitle: "Secrets Website",
      projSubtitle: "Node, Express, MongoDB, Passport, Google OAuth 2.0",
      more: "Highlights: Session management and login security"
    }
  ]

  const skills = [
    {
      id: 1,
      name: "HTML/CSS/Javascript",
      progress: 73
    },
    {
      id: 2,
      name: "MongoDB/MySQL",
      progress: 83
    },
    {
      id: 3,
      name: "Node/Express",
      progress: 67
    },
    {
      id: 4,
      name: "React",
      progress: 50
    },
    {
      id: 5,
      name: "Python/Django",
      progress: 30
    },
    {
      id: 6,
      name: "C++/Java",
      progress: 60
    }
  ]

  const contact = {
    phone: "+91 7276371233",
    email: "pritish.pore@gmail.com"
  }

  function handleSubmit(templateParams) {
    emailjs.send("service_it1rc0a", "template_w0nq1vh", templateParams, "dGYLUgWwysi2FT3R_");
  }

  return (
    <>
      <Header />
      <Home />
      <InfoCard id="about" bgTitle="ABOUT ME" title={<p>Know<span> Me </span>More</p>} bgColor="black-info">
        <MyInfo subtitle={infoCardSub} {...myInfo}>{infoCardContent}</MyInfo>
      </InfoCard>
      <Section
        bgTitle="SUMMARY"
        title={<>Re<span>su</span>me</>}
        bgColor="gray-info"
        subtitle1="My Education"
        educationCards={educationCards}
        subtitle2="My Projects"
        projectCards={projectCards}
        subtitle3="My Skills"
        skills={skills}
      />
      <Contact
        bgTitle="CONTACT"
        title={<p>Get <span>in To</span>uch</p>}
        onSubmit={handleSubmit}
        {...contact}
      />
      <Footer />
      <Analytics />
    </>
  );
}

export default App;
