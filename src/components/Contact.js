import { Button } from "react-bootstrap";
import InfoCard from "../reusables/InfoCard";
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useState } from "react";

function Contact(props) {
    const [userDetails, setUserDetails] = useState({
        name: "",
        email: "",
        message: ""
    });

    function updateUserDetails(event) {
        const name = event.target.name;
        const value = event.target.value;

        setUserDetails((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }

    return (
        <InfoCard id="contact" className="contact-card" bgColor="black-info" title={props.title} bgTitle={props.bgTitle}>
            <div className="row my-5 mx-5 contact-info-div">
                <div className="col-md-4">
                    <div className="row">
                        <h3>Contact Details</h3>
                        <p className="pt-2"><span>Phone Number: </span>{props.phone}</p>
                        <p className="contact-card-link"><span>Email ID: </span><a href={"mailto:" + props.email}>{props.email}</a></p>
                    </div>
                    <div className="row my-4">
                        <h3>Follow Me</h3>
                        <p className="pt-2">
                            <span className="me-2"><a className="mui-link" href="https://www.linkedin.com/in/pritish-pore-84833221b/"><LinkedInIcon className="mui-icon" /></a></span>
                            <span className="me-2"><a className="mui-link" href="https://github.com/sa1ander"><GitHubIcon className="mui-icon" /></a></span>
                            <span><a className="mui-link" href="https://instagram.com/pritish_pore?igshid=ZDdkNTZiNTM="><InstagramIcon className="mui-icon" /></a></span>
                        </p>
                    </div>
                </div>
                <div className="col-md-8">
                    <h3>Send me a message</h3>
                    <input className="contact-input" name="name" type="text" placeholder="Your name" onChange={updateUserDetails} value={userDetails.name} />
                    <input className="contact-input" name="email" type="email" placeholder="Your email" onChange={updateUserDetails} value={userDetails.email} />
                    <textarea className="contact-input" name="message" placeholder="Enter a message" onChange={updateUserDetails} value={userDetails.message} rows="4" />
                    <Button size="lg" onClick={
                        (event) => {
                            event.preventDefault();
                            if (userDetails.message !== "") {
                                props.onSubmit(userDetails);
                                setUserDetails({
                                    name: "",
                                    email: "",
                                    message: ""
                                });
                            }
                        }
                    }>Send Message</Button>
                </div>
            </div>
        </InfoCard>
    );
}

export default Contact;
