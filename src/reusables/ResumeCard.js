import { Card } from "react-bootstrap";

function ResumeCard(props) {
    return (
        <Card id={props.id} className={"resume-card " + props.bgColor}>
            <p className={"card-year " + props.additionalClass}>{props.year}</p>
            <h5 className="card-degree">{props.title}</h5>
            <h6 className="card-place">{props.subtitle}</h6>
            <p className="card-score">{props.more}</p>
        </Card>
    );
}

export default ResumeCard;
