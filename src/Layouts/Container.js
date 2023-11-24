import React from "react";
import styled from "styled-components";

const Container = (props) => {
    const { children } = props
    return (
        <Kontainer>
            {children}
        </Kontainer>
    );
};

const Kontainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
`

export default Container;
