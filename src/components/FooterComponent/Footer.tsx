import React from 'react';
import {Link} from "@mui/material";
import {CodeRounded, GitHub, IntegrationInstructionsRounded, LinkedIn} from "@mui/icons-material";
import {FooterCard, FooterContainer, FooterCopyright, FooterLink, FooterText} from "./styles";

export default function FooterComponent() {
    return (
        <>
            <FooterCopyright>
                <FooterText padding={"1rem"}>
                    <Link href={"https://www.linkedin.com/in/oguzhanbaltaa/"}
                          target={"_blank"} color={"#fff"}><LinkedIn/>
                    </Link>
                </FooterText>
                <FooterText padding={"1rem"}>
                    <Link href={"https://github.com/oguzhanabalta"}
                          target={"_blank"} color={"#fff"}><GitHub/>
                    </Link>
                </FooterText>
            </FooterCopyright>
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
            </FooterContainer>
            <FooterCopyright sx={{background: "black", width: "100%", display: "flex", justifyContent: "center"}}>
                <FooterText padding={"1rem"}>
                    Copyright© {new Date().getFullYear()} Oğuzhan Balta
                </FooterText>
            </FooterCopyright>
        </>

    );
}
