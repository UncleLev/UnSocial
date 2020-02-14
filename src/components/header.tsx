import React from "react";
import styled from "styled-components";

const MyHeader = styled.header`
    nav div {
        padding: 0 1rem;
    }
`;

const Header = () => {
    return (
        <MyHeader>
            <nav>
                <div className="nav-wrapper green accent-3">
                    <a href="/" className="brand-logo">
                        Unsocial
                    </a>
                    <ul className="right  hide-on-med-and-down">
                        <li>
                            <a href="/">Components</a>
                        </li>
                        <li>
                            <a href="/">JavaScript</a>
                        </li>
                        <li>
                            <a href="/">Sass</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </MyHeader>
    );
};

export default Header;
