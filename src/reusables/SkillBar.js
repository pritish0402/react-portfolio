import { ProgressBar } from "react-bootstrap";

function SkillBar(props) {
    return (
        <div className="col-md-6 mt-3 mb-2">
            <h6>{props.name}</h6>
            <ProgressBar className="progress-bar my-3 me-5" now={props.progress} label={props.progress + "%"}/>
        </div>
    );
}

export default SkillBar;
