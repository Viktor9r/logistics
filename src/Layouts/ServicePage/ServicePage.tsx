import React from "react";
import { questionsList, servicesList } from "../../resources/data/arrays";
import { CalculateSection } from "../Calculate/Calculate";
import { AppOuterContainer } from "../DesktopLayout/styled"
import { Footer } from "../Footer/Footer";
import { MainPageOptions } from "../MainPageOptions/MainPageOptions"
import { StyledServicePageMain, StyledServicePageAbout, StyledServicePageSubTitle, StyledServicePageTitle, StyledServicePageTop, StyledServicePageTopButton, StyledServicePageAboutContent, StyledServicePageAboutRight, StyledServicePageAboutImage } from "./styled";
import { useMediaQuery } from "@mui/material";
import { MobileBottomBar } from "../MobileBottomBar/MobileBottomBar";
import background from '../../resources/images/servicesBackground.png';

export const ServicePage: React.FC = () => {

    const mobile = useMediaQuery('(max-width:1000px)');

    return (
        <AppOuterContainer>
            {!mobile && (
                <MainPageOptions />
            )}

            <StyledServicePageMain
                background={background}
            >
                <StyledServicePageTop sx={{ width: mobile ? '100%' : '900px' }}>
                    <StyledServicePageTitle sx={{ textAlign: 'center' }}>
                        Easy Dispatch – Strong Back-Office Support for Your Business
                    </StyledServicePageTitle>

                    <StyledServicePageSubTitle sx={{ textAlign: 'center' }}>
                        We take care of all administrative tasks, allowing you to focus on driving and making money. Our full-service package includes:
                    </StyledServicePageSubTitle>

                    {!mobile && (
                        <StyledServicePageTopButton
                            to="https://share-na2.hsforms.com/2c3xTUNftSRa9rRTMzmeWxQ407au7"
                            target="_blank"
                        >
                            Contact us
                        </StyledServicePageTopButton>
                    )}
                </StyledServicePageTop>
            </StyledServicePageMain>

            {servicesList.map((service: any, index: number) => (
                <StyledServicePageAbout>
                    <StyledServicePageAboutContent>
                        <StyledServicePageAboutImage
                            background={service!.gallery[1].photo}
                        />

                        <StyledServicePageAboutRight

                        >
                            <StyledServicePageTitle sx={{
                                color: '#fff',
                                padding: '20px',
                                background: '#00302E',
                                borderTopRightRadius: '20px',
                                borderBottomRightRadius: '20px',
                                fontSize: '28px',

                                ['@media (max-width: 1000px)']: {
                                    borderTopRightRadius: '0',
                                    borderBottomRightRadius: '30px',
                                    borderBottomLeftRadius: '30px',
                                    fontSize: '22px'
                                }
                            }}>
                                {service.subTitle2}
                            </StyledServicePageTitle>
                            <br></br>
                            <div style={{
                                padding: mobile ? '0px 0px 16px 0' : '0px 20px 20px 36px',
                            }}>
                                {service.about.split('\n').map((line: any, index: any) => (
                                    <React.Fragment key={index}>
                                        <span
                                            style={{
                                                fontWeight: line.includes("The Core of Your Business") ? 600 : line.includes("Why Our Dispatching Stands Out:") ? 600 :  line.includes("Why Our Dispatching Stands Out:") ? 600 : line.includes("Get Paid Fast & Stay") ? 600 : line.includes("What We Handle:") ? 600 : line.includes("Stay Legal, Stay Safe") ? 600 : line.includes("How We Keep You Safe & Compliant:") ? 600 : line.includes("Help Anytime, Anywhere – Because Trucking Never Stops") ? 600 : line.includes("How Our 24/7 Support Helps You") ? 600 : 400,
                                                fontSize: line.includes("The Core of Your Business") ? '24px' : line.includes("Get Paid Fast & Stay Tax Compliant") ? '24px' : line.includes("Stay Legal, Stay Safe, and Keep Moving") ? '24px' : line.includes("Help Anytime, Anywhere – Because Trucking Never Stops") ? '24px' : '16px'
                                            }}
                                        >{line}</span>
                                        <br />
                                    </React.Fragment>
                                ))}
                            </div>
                        </StyledServicePageAboutRight>
                    </StyledServicePageAboutContent>
                </StyledServicePageAbout>
            ))}

            <CalculateSection />

            <Footer servicesList={servicesList} />

            {mobile && (
                <MobileBottomBar />
            )}
        </AppOuterContainer>
    )

}