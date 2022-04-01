import React from "react";
import { Container } from "@mui/material";
import { Button } from "@mui/material";
import "./hero.scss";


const Hero = (props) =>{

    return(
        <div id="hero" key={props.name}>
            <Container bgcolor="blue" maxWidth="xl">
                <h1>{props.headline}</h1>
                <h3>{props.subheadline}</h3>
                <Button>{props.ctatext}</Button>
            </Container>
        </div>
    );
}

export default Hero;