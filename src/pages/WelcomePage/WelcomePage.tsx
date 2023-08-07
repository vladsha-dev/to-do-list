import { ReactElement } from "react";
import { Link } from "react-router-dom";

import welcomeLogo from "../../assets/images/welcome-logo.svg";
import { appName } from "../../utils/constants";

import {
    WelcomePageWrapper,
    MainContainer,
    ItemWrapper,
    AppName,
    AppDescription,
    ContinueBtn,
} from "./WelcomePage.styles";

const WelcomePage = (): ReactElement => {
    return (
        <WelcomePageWrapper>
            <MainContainer>
                <ItemWrapper justifyContent="end">
                    <img src={welcomeLogo} alt="Application logo." />
                </ItemWrapper>
                <ItemWrapper justifyContent="end">
                    <AppName variant="h2">{appName}</AppName>
                </ItemWrapper>
                <ItemWrapper justifyContent="start">
                    <AppDescription variant="h5">
                        Write what you need to do. Everyday.
                    </AppDescription>
                </ItemWrapper>
                <ItemWrapper justifyContent="center">
                    <Link to="lists">
                        <ContinueBtn variant="contained">Continue</ContinueBtn>
                    </Link>
                </ItemWrapper>
            </MainContainer>
        </WelcomePageWrapper>
    );
};

export default WelcomePage;
