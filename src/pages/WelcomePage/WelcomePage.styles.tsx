import { Typography, Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const WelcomePageWrapper = styled(Box)`
    height: 100vh;

    background-color: #000000;
`;

export const MainContainer = styled(Box)`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1.9fr 0.45fr 1.05fr 1fr;
    height: 100%;
`;

export const ItemWrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 25%;
`;

export const AppName = styled(Typography)`
    color: #ffffff;
    font-weight: 800;
`;

export const AppDescription = styled(Typography)`
    margin-top: 16px;

    font-weight: 500;
    text-align: center;
    color: #c4c4c4;
`;

export const ContinueBtn = styled(Button)(
    ({ theme }) => `
    padding: 16px 64px;
    border-radius: 100px;

    color: ${theme.palette.secondary.main};
    text-transform: none;
    font-size: 1rem;
    line-height: 1.3rem;

    :hover {
        background-color: ${theme.palette.primary.dark};
    }

    ${theme.breakpoints.up("sm")} {
        font-size: 1.25rem;
    }

    ${theme.breakpoints.up("md")} {
        font-size: 1.45rem;
    }
`
);
