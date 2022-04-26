import React from 'react';
import {Link} from "@mui/material";
import {CodeRounded, IntegrationInstructionsRounded} from "@mui/icons-material";
import {FooterCard, FooterContainer, FooterLink, FooterText} from "./styles";

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
