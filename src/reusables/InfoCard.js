import { Card, Container } from "react-bootstrap";
import BackgroundTitle from "./BackgroundTitle";

function InfoCard(props) {
    return (
        <section id={props.id}>
            <Container className={"card-container " + props.className}>
                <Card className={ "info-card shadow " + props.bgColor }>
                <Card.Body>
                    <div className="d-flex justify-content-center">
                        <Card.Title className="main-card-title">
                            <h1>{props.title}</h1>
                        </Card.Title>
                        <BackgroundTitle>{props.bgTitle}</BackgroundTitle>
                    </div>
                    <div>{props.children}</div>
                </Card.Body>
                </Card>
            </Container>
        </section>
    );
}

export default InfoCard;
