import { Container, ListGroup } from "react-bootstrap";
import InfoCard from "../reusables/InfoCard";
import { infoCardSub, infoCardContent, myInfo } from "../data";

function MyInfo() {
    return (
        <InfoCard id="about" bgTitle="ABOUT ME" title={<p>Know<span> Me </span>More</p>} bgColor="black-info">
            <Container fluid>
                <Container className="d-flex justify-content-center mb-3 ms-3 info-outer-container" fluid>
                    <div className="row">
                        <div className="col-lg-7 col-md-12 col-sm-12 mx-3 info-inner-container">
                            <h1 className="mb-2 info-subtitle main-card-title">{infoCardSub}</h1>
                            {infoCardContent}
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 mt-5 info-inner-container">
                            <div className="mt-5 list-info-div">
                                <ListGroup>
                                    <ListGroup.Item className="info-list-item"><span>Name: </span>{myInfo.name}</ListGroup.Item>
                                    <hr />
                                    <ListGroup.Item className="info-list-item "><span>Email: </span><a href={myInfo.emailLink}>{myInfo.email}</a></ListGroup.Item>
                                    <hr />
                                    <ListGroup.Item className="info-list-item"><span>Age: </span>{myInfo.age}</ListGroup.Item>
                                    <hr />
                                    <ListGroup.Item className="info-list-item"><span>From: </span>{myInfo.from}</ListGroup.Item>
                                </ListGroup>
                            </div>
                        </div>
                    </div>
                </Container>
                <Container className="row mb-3 ms-3" fluid>
                    <ListGroup horizontal className="my-2">
                        <ListGroup.Item className="info-list-item">
                            <ListGroup>
                                <ListGroup.Item className="info-list-item info-count">{myInfo.cgpa}</ListGroup.Item>
                                <ListGroup.Item className="info-list-item info-count-label"><span>CGPA</span></ListGroup.Item>
                            </ListGroup>
                        </ListGroup.Item>
                        <div className="vr" />
                        <ListGroup.Item className="info-list-item">
                            <ListGroup>
                                <ListGroup.Item className="info-list-item info-count">{myInfo.numSkills}</ListGroup.Item>
                                <ListGroup.Item className="info-list-item info-count-label"><span>Skills</span></ListGroup.Item>
                            </ListGroup>
                        </ListGroup.Item>
                    </ListGroup>
                </Container>
            </Container>
        </InfoCard>
    );
}

export default MyInfo;
