import React from "react";
// import styled from "styled-components";
import Header from "./header";

import ErrorBouncer from "./error-bouncer";
import SocialService from "../services/social-service";

const service = new SocialService();

// const Title = styled.h1``;

const App = () => {
    let a = service.getUser(1581451652833);
    a = service.getUser(133);
    a = service.getFolowingPosts(1581455414286);

    return (
        <>
            <ErrorBouncer>
                <Header />
            </ErrorBouncer>
        </>
    );
};

export default App;
