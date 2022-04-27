import React from 'react';
import {Box, Link} from "@mui/material";
import {CodeRounded, IntegrationInstructionsRounded} from "@mui/icons-material";
import {FooterCard, FooterContainer, FooterIcon, FooterLink, FooterText} from "./styles";

export default function FooterComponent() {
    return (
        <>
            <Box sx={{background: "black", width: "100%"}}>
                <FooterText padding={"1rem"}>
                    © {new Date().getFullYear()} <Link href={"https://www.linkedin.com/in/oguzhanbaltaa/"}
                                                       target={"_blank"} color={"#fff"}>Oğuzhan
                    Balta</Link>
                </FooterText>
            </Box>
            <FooterContainer>
                <FooterCard>
                    <FooterLink href={"https://github.com/oguzhanabalta/personal-job-tracking-app"} target={"_blank"}>
                        <FooterIcon>
                            <IntegrationInstructionsRounded/>
                        </FooterIcon>
                        <FooterText>
                            GitRepo
                        </FooterText>
                    </FooterLink>
                    <FooterLink href={"https://personal-job-tracking-app.vercel.app/"} target={"_blank"}>
                        <FooterIcon>
                            <CodeRounded/>
                        </FooterIcon>
                        <FooterText>Demo</FooterText>
                    </FooterLink>
                    <FooterLink href={"https://personal-job-tracking-app.vercel.app/"} target={"_blank"}>
                        <FooterIcon>
                            <CodeRounded/>
                        </FooterIcon>
                        <FooterText>Demo(Node.js API)</FooterText>
                    </FooterLink>
                    <FooterLink href={"https://personal-job-tracking-app.vercel.app/"} target={"_blank"}>
                        <FooterIcon>
                            <CodeRounded/>
                        </FooterIcon>

                        <FooterText>Demo(WebStorage)</FooterText>
                    </FooterLink>
                </FooterCard>
            </FooterContainer>
            <Box sx={{
                background: "#303841",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <FooterText padding={"1rem"}>
                    <Link href={"https://www.linkedin.com/in/oguzhanbaltaa/"}
                          target={"_blank"} color={"#fff"}> © {new Date().getFullYear()} Oğuzhan
                        Balta</Link>
                </FooterText>
            </Box>
        </>

    );
}
