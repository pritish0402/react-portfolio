import { Container, Button } from "react-bootstrap";
import BackgroundTitle from "../reusables/BackgroundTitle";
import ResumeCard from "../reusables/ResumeCard";
import DownloadIcon from '@mui/icons-material/Download';
import SkillBar from "../reusables/SkillBar";

function Section(props) {
    return (
        <section id="resume">
            <Container className={props.bgColor} fluid>
                <Container>
                    <div className="d-flex justify-content-center">
                        <div className="main-card-title">
                            <h1>{props.title}</h1>
                        </div>
                        <BackgroundTitle className="resume-bg-title">{props.bgTitle}</BackgroundTitle>
                    </div>
                    <div className="row my-4">
                        <div className="col-lg-6 col-md-12">
                            <h3 className="resume-subtitle">{props.subtitle1}</h3>
                            {props.educationCards.map((card) => {
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
                            <h3 className="resume-subtitle">{props.subtitle2}</h3>
                            {props.projectCards.map((card) => {
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
                        <h3 className="resume-subtitle">{props.subtitle3}</h3>
                        {props.skills.map((skill) => {
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
