import React from "react";
import { Typography } from "@mui/material";
import styled from "styled-components";

const StyledTimestamp = styled.div`
    text-align: center;
`;

const Timestamp = () => {
    const [timestamp, setTimestamp] = React.useState(new Date());

    React.useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return () => clearInterval(timerID);
    }, []);

    const tick = () => {
        setTimestamp(new Date());
    };

    return (
        <StyledTimestamp>
            <Typography variant="body1" style={{ color: 'white' }}>
                {Intl.DateTimeFormat().resolvedOptions().timeZone} {' '}
                {timestamp.toDateString()} {' '}
                {timestamp.toLocaleTimeString()}
            </Typography>
        </StyledTimestamp>
    );
};

export default Timestamp;
