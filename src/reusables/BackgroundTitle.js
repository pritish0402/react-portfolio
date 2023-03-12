import { Card } from "react-bootstrap";

function BackgroundTitle(props) {
    return (
        <Card.Title className={"bg-title col-sm-12 " + props.className}>
            <h1>{props.children}</h1>
        </Card.Title>
    );
}

export default BackgroundTitle;
