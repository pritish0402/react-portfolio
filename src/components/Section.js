import { Container, Button } from "react-bootstrap";
import BackgroundTitle from "../reusables/BackgroundTitle";
import ResumeCard from "../reusables/ResumeCard";
import DownloadIcon from '@mui/icons-material/Download';
import SkillBar from "../reusables/SkillBar";
import { educationCards, projectCards, skills } from "../data";

function Section() {
    return (
        <section id="resume">
            <Container className="gray-info" fluid>
                <Container>
                    <div className="d-flex justify-content-center">
                        <div className="main-card-title">
                            <h1>Re<span>su</span>me</h1>
                        </div>
                        <BackgroundTitle className="resume-bg-title">SUMMARY</BackgroundTitle>
                    </div>
                    <div className="row my-4">
                        <div className="col-lg-6 col-md-12">
                            <h3 className="resume-subtitle">My Education</h3>
                            {educationCards.map((card) => {
                                return (
                                    <ResumeCard
                                        key={card.id}
                                        id={card.id}
                                        year={card.year}
                                        title={card.degree}
                                        subtitle={card.place}
                                        more={card.score}
                                    />
                                );
                            })}
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <h3 className="resume-subtitle">My Projects</h3>
                            {projectCards.map((card) => {
                                return (
                                    <ResumeCard
                                        key={card.id}
                                        year={card.year}
                                        title={card.projTitle}
                                        subtitle={card.projSubtitle}
                                        more={card.more}
                                        additionalClass="project-card-year"
                                    />
                                );
                            })}
                        </div>
                    </div>
                    <div className="row my-4">
                        <h3 className="resume-subtitle">My Skills</h3>
                        {skills.map((skill) => {
                            return (
                                <SkillBar key={skill.id} name={skill.name} progress={skill.progress} />
                            );
                        })}
                    </div>
                    <div className="d-flex justify-content-center">
                        <Button className="cv-button" size="lg" href="/files/Resume.pdf" target="_blank" download>Download CV <DownloadIcon /></Button>
                    </div>
                </Container>
            </Container>
        </section>
    );
}

export default Section;
