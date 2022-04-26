import React from 'react';
import {Box, Link, Typography} from "@mui/material";
import styled from "styled-components";
import {CodeRounded, IntegrationInstructionsRounded} from "@mui/icons-material";

const FooterCard = styled(Box)`
  padding: 5%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  color: #fff;
  @media (max-width: 650px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FooterText = styled(Typography)`
  font-size: 1rem;
  font-weight: 600;
  @media (max-width: 650px) {

    font-size: 0.8rem;
  }
`;


const FooterLink = styled(Link)`
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: center;

`;

const FooterContainer = styled(Box)`
  background-color: #556cd6a8;
  color: #fff;
  padding: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 650px) {
    padding: 0;
  }
`;

export default function FooterComponent() {
    return (
        <>
            <FooterContainer>
                <FooterCard>
                    <FooterLink href={"https://github.com/oguzhanabalta/personal-job-tracking-app"} target={"_blank"}>
                        <IntegrationInstructionsRounded/>
                        <FooterText>
                            GitRepo
                        </FooterText>
                    </FooterLink>
                    <FooterLink href={"https://personal-job-tracking-app.vercel.app/"} target={"_blank"}>
                        <CodeRounded/>
                        <FooterText>Demo</FooterText>
                    </FooterLink>
                    <FooterLink href={"https://personal-job-tracking-app.vercel.app/"} target={"_blank"}>
                        <CodeRounded/>
                        <FooterText>Demo(Node.js API)</FooterText>
                    </FooterLink>
                    <FooterLink href={"https://personal-job-tracking-app.vercel.app/"} target={"_blank"}>
                        <CodeRounded/>
                        <FooterText>Demo(WebStorage)</FooterText>
                    </FooterLink>
                </FooterCard>
                <FooterText>
                    © {new Date().getFullYear()} <Link href={"https://www.linkedin.com/in/oguzhanbaltaa/"}
                                                       target={"_blank"} color={"#fff"}>Oğuzhan
                    Balta</Link>
                </FooterText>
            </FooterContainer>
        </>

    );
}
