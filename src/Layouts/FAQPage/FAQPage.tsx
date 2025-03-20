import { AppOuterContainer } from "../DesktopLayout/styled"
import { MainPageOptions } from "../MainPageOptions/MainPageOptions"
import { StyledFAQPageMain } from "./styled"
import background from '../../resources/images/truckkkk.png'
import { StyledServicePageTop, StyledServicePageTitle, StyledServicePageSubTitle, StyledServicePageTopButton } from "../ServicePage/styled"
import { useOpenQuoteDialog } from "../../Storages/useOpenQuoteDialog"
import { HeaderIcon, HeaderLink, HeaderPipe } from "../AppHeader/styled"
import { StyledFAQPage, StyledFAQPageSubTitle, StyledFAQPageTip, StyledFAQPageTitle, StyledFAQPageTop, StyledFAQPageTopLeft, StyledFAQPageTopRight } from "../FAQ/styled"
import { PhoneIphoneOutlined } from "@mui/icons-material";
import EmailIcon from '@mui/icons-material/EmailOutlined';

import { useEffect, useState } from "react";
import React from "react";
import { questionsList, servicesList } from "../../resources/data/arrays"
import { TrustPageOptionsQuoteButton } from "../Trust/styled"
import { QuestionsList } from "./QuestionsList"
import { FormPage } from "../Form/Form"
import { Footer } from "../Footer/Footer"
import { LocationPage } from "../Location/Location"
import { MobileBottomBar } from "../MobileBottomBar/MobileBottomBar"
import { useMediaQuery } from "@mui/material"
import { CalculateSection } from "../Calculate/Calculate"

export const FAQPage: React.FC = () => {
    const { setOpenQuoteDialog } = useOpenQuoteDialog()
    const mobile = useMediaQuery('(max-width:1000px)');

    const questionsArr = questionsList;

    const [openedIds, setOpenedIds] = useState<any>([])

    useEffect(() => { }, [setOpenedIds])

    return (
        <AppOuterContainer>
            {!mobile && (
                <MainPageOptions />
            )}

            <StyledFAQPageMain background={background}>
                <StyledServicePageTop>
                    <StyledServicePageTitle>
                        Frequently Asked Questions
                    </StyledServicePageTitle>

                    <StyledServicePageSubTitle sx={{ textAlign: 'center' }}>
                        We know truckers have a lot of questions when choosing a dispatch service. Here are the answers to the most common ones.
                    </StyledServicePageSubTitle>

                    {!mobile && (
                        <StyledServicePageTopButton
                            to="https://share-na2.hsforms.com/2c3xTUNftSRa9rRTMzmeWxQ407au7"
                            target="_blank"
                        >
                            Contact Us
                        </StyledServicePageTopButton>
                    )}
                </StyledServicePageTop>
            </StyledFAQPageMain>

            <StyledFAQPage sx={{ height: 'fit-content' }}>
                <StyledFAQPageTop>
                    <StyledFAQPageTopLeft>
                        <StyledFAQPageTitle>
                            FAQ
                        </StyledFAQPageTitle>

                        <StyledFAQPageSubTitle>
                            Didn't find the answer to your quetion?
                            <br></br>
                            Call us or send us an e-mail
                            <br></br>
                            <StyledFAQPageTip>
                                * Scroll to see more
                            </StyledFAQPageTip>
                        </StyledFAQPageSubTitle>
                    </StyledFAQPageTopLeft>

                    <StyledFAQPageTopLeft
                        sx={{
                            justifyContent: 'space-between',
                            alignItems: 'flex-end',
                            height: '100%',

                            ['@media (max-width: 1000px)']: {
                                alignItems: 'flex-start',
                                flexDirection: 'column-reverse'
                            }
                        }}
                    >
                        <TrustPageOptionsQuoteButton

                            to=" https://share-na2.hsforms.com/2c3xTUNftSRa9rRTMzmeWxQ407au7"
                            target='_blank'
                        >
                            Contact Us
                        </TrustPageOptionsQuoteButton>

                        <StyledFAQPageTopRight

                        >
                            <HeaderLink
                                onClick={() => window.location.href = 'mailto:info@fcmmovers.com'}
                                to=''
                            >
                                <HeaderIcon sx={{
                                    mr: 1,
                                    mb: '0px',
                                    ['@media (max-height: 799px) and (min-width: 1024px)']: {
                                        mr: 1
                                    }
                                }}>
                                    <EmailIcon />
                                </HeaderIcon>
                                info@fcmmovers.com
                            </HeaderLink>
                            {!mobile && (
                                <>
                                    <HeaderPipe />
                                    <HeaderLink
                                        to='tel:4378989777'
                                    >
                                        <HeaderIcon sx={{
                                            mr: 1,
                                            mb: '1px',
                                            ['@media (max-height: 799px) and (min-width: 1024px)']: {
                                                mr: 1
                                            }
                                        }}>
                                            <PhoneIphoneOutlined />
                                        </HeaderIcon>
                                        +1 (437) 898-9777
                                    </HeaderLink>
                                </>
                            )}
                        </StyledFAQPageTopRight>
                    </StyledFAQPageTopLeft>
                </StyledFAQPageTop>

                <QuestionsList
                    questions={[...questionsArr.filter((item: any) => item.type === 3)]}
                    category={'General'}
                />

                <QuestionsList
                    questions={[...questionsArr.filter((item: any) => item.type === 1)]}
                    category={'Services'}
                />

                <QuestionsList
                    questions={[...questionsArr.filter((item: any) => item.type === 2)]}
                    category={'Results'}
                />

                <QuestionsList
                    questions={questionsArr.filter((item: any) => item.type === 4)}
                    category={'Dispatch & Load Booking'}
                />

                <QuestionsList
                    questions={questionsArr.filter((item: any) => item.type === 5)}
                    category={'Billing & Invoicing'}
                />

                <QuestionsList
                    questions={questionsArr.filter((item: any) => item.type === 6)}
                    category={'Safety & Compliance'}
                />

                <QuestionsList
                    questions={questionsArr.filter((item: any) => item.type === 7)}
                    category={'24/7 Support'}
                />

                <QuestionsList
                    questions={questionsArr.filter((item: any) => item.type === 8)}
                    category={'MC Reputation & Business Growth'}
                />

                <QuestionsList
                    questions={questionsArr.filter((item: any) => item.type === 9)}
                    category={'Getting Started with Easy Dispatch'}
                />
            </StyledFAQPage>

            <CalculateSection />

            <Footer servicesList={servicesList} />

            {mobile && (
                <MobileBottomBar />
            )}
        </AppOuterContainer>
    )
}