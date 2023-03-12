import { Container, Button } from "react-bootstrap";
import ARemoji from "../images/ARemojiGIPH1.gif";
import Typewriter from "typewriter-effect";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Home() {
    return (
        <section id="home">
            <Container fluid>
                <div className="row">
                    <div className="gif-div-sm col-md-6">
                        <div className="gif-div">
                            <img className="ar-emoji" src={ARemoji} alt="AR emoji" />
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="title-div">
                            <h3 className="title-greet mb-0">Hey!</h3>
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter.changeDelay(50)
                                    .changeDeleteSpeed(50)
                                    .typeString("I'm Pritish")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString("I'm a web developer")
                                    .pauseFor(1000)
                                    .start();
                                }}
                                options={{
                                    loop: true,
                                    wrapperClassName: "typewriter-desc",
                                    cursorClassName: "cursor"
                                }}
                            />
                            <h3 className="title-intro mt-1">I excel at coding.</h3>
                            <h4 className="mt-3">
                                <span>Check out</span>
                                <span className="ms-2 me-2"><a className="mui-link" href="https://www.linkedin.com/in/pritish-pore-84833221b/"><LinkedInIcon className="mui-icon" /></a></span>
                                <span><a className="mui-link" href="https://github.com/sa1ander"><GitHubIcon className="mui-icon" /></a></span>
                            </h4>
                            <Button className="mt-3 contact-btn" size="lg" href="#contact"><span className="m-1">Contact me</span></Button>
                        </div>
                    </div>
                    <div className="gif-div-lg col-md-6">
                        <div className="gif-div">
                            <img className="ar-emoji" src={ARemoji} alt="AR emoji" />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Home;
