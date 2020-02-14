import React from "react";
import styled from "styled-components";

const Icon = styled.i`
    display: block;
    margin: 0 auto;
    text-align: center;
`;

const ErrorIndicator = () => {
    return (
        <div className="row">
            <div className="col s12 m6">
                <div className="card  grey darken-3">
                    <div className="card-content  red-text text-darken-2">
                        <Icon className=" large material-icons">error</Icon>
                        <h1 className=" center-align">Error</h1>
                        <p className="center-align">
                            Something went wrong. Please reload the page.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorIndicator;
