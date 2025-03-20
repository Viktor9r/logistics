import { Facebook, Instagram, KeyboardArrowUp, YouTube } from "@mui/icons-material"
import { ReactComponent as TikTokIcon } from '../../resources/icons/logo-tiktok.svg';

import { StyledFooter, StyledFooterColumn, StyledFooterColumnContent, StyledFooterColumnFlexRow, StyledFooterColumnGreyText, StyledFooterColumnService, StyledFooterColumnTitle, StyledFooterContent, StyledFooterIconCell, StyletMobileFooterLogo } from "./styled"
import { HeaderLink, HeaderIcon, HeaderPipe } from "../AppHeader/styled";
import EmailIcon from '@mui/icons-material/EmailOutlined';
import { PhoneIphoneOutlined } from "@mui/icons-material";
import { useMediaQuery } from "@mui/material";
import logo from '../../resources/images/finallogo.png'
import { Link } from "react-router-dom";

interface IProps {
    servicesList: any
}

export const Footer: React.FC<IProps> = ({ servicesList }) => {
    const mobile = useMediaQuery('(max-width:1000px)');

    return (
        <StyledFooter>
            <StyledFooterContent>
                {mobile && (
                    <StyledFooterColumn
                        sx={{
                            ['@media (max-width: 1000px)']: {
                                gridColumn: '1/13',
                                alignItems: 'center'
                            }
                        }}
                    >
                        <StyletMobileFooterLogo sx={{ transform: 'scale(2)' }} src={logo} />
                    </StyledFooterColumn>
                )}
                <StyledFooterColumn
                    sx={{
                        gridColumn: '1/4',
                        height: '100%',

                        ['@media (max-width: 1000px)']: {
                            gridColumn: '1/13',
                        }
                    }}
                >
                    <StyledFooterColumnTitle>
                        Easy Dispatch
                    </StyledFooterColumnTitle>

                    <StyledFooterColumnContent
                        sx={{
                            justifyContent: 'space-between'
                        }}
                    >
                        <StyledFooterColumnGreyText>
                            Copyright © Easy Dispatch
                        </StyledFooterColumnGreyText>
                    </StyledFooterColumnContent>
                </StyledFooterColumn>

                <StyledFooterColumn
                    sx={{
                        gridColumn: '4/7',

                        ['@media (max-width: 1000px)']: {
                            gridColumn: '1/13',
                        }
                    }}
                >
                    <StyledFooterColumnTitle>
                        Services
                    </StyledFooterColumnTitle>

                    <StyledFooterColumnContent
                        sx={{
                            gap: '16px'
                        }}
                    >
                        {servicesList.map((item: any) => (
                            <StyledFooterColumnService
                                to={'/services'}
                                key={item.id}
                                onClick={() => window.scrollTo({ top: 0 })}
                            >
                                {item.title}
                            </StyledFooterColumnService>
                        ))}
                        <StyledFooterColumnService
                            to={'/faq-page'}
                            onClick={() => window.scrollTo({ top: 0 })}
                        >
                            FAQ Page
                        </StyledFooterColumnService>
                    </StyledFooterColumnContent>
                </StyledFooterColumn>

                <StyledFooterColumn
                    sx={{
                        gridColumn: '7/8',

                        ['@media (max-width: 1000px)']: {
                            display: 'none'
                        }
                    }}
                />

                <StyledFooterColumn
                    sx={{
                        gridColumn: '8/13',

                        ['@media (max-width: 1000px)']: {
                            gridColumn: '1/13',
                        }
                    }}
                >
                    <StyledFooterColumnTitle>
                        Contacts
                    </StyledFooterColumnTitle>

                    <StyledFooterColumnContent>
                        <StyledFooterColumnGreyText>
                            Have a question? We're here to help.
                        </StyledFooterColumnGreyText>

                        <StyledFooterColumnFlexRow
                            sx={{
                                mt: 2,
                                ['@media (max-width: 1000px)']: {
                                    mt: 1,
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    gap: '14px'
                                }
                            }}
                        >
                            <HeaderLink
                                onClick={() => window.location.href = 'mailto:info@easydispatch.net'}
                                to=''
                            >
                                <HeaderIcon sx={{
                                    mr: 0.5,
                                    mb: '1px',
                                    ['@media (max-height: 799px) and (min-width: 1024px)']: {
                                        mr: 1
                                    }
                                }}>
                                    <EmailIcon />
                                </HeaderIcon>
                                info@easydispatch.net
                            </HeaderLink>
                            {!mobile && (
                                <HeaderPipe sx={{ margin: '0 6px' }} />
                            )}
                            <HeaderLink
                                to='tel:8779329272'
                            >
                                <HeaderIcon sx={{
                                    mr: 0.5,
                                    mb: '1px',
                                    ['@media (max-height: 799px) and (min-width: 1024px)']: {
                                        mr: 1
                                    }
                                }}>
                                    <PhoneIphoneOutlined />
                                </HeaderIcon>
                                +1(877)932-9272
                            </HeaderLink>
                        </StyledFooterColumnFlexRow>

                        <div
                            style={{
                                display: 'flex',
                                gap: mobile ? '24px' : '36px',
                                alignItems: 'center',
                                justifyContent: mobile ? 'center' : 'flex-start',
                                marginTop: '24px'
                            }}
                        >
                            <HeaderLink
                                to={'https://youtube.com/@easydispatchh?si=VELxduVGvCYFtBDE'}
                                target="_blank"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '18px'
                                }}
                            >
                                <YouTube style={{ transform: 'scale(2)', fill: '#00302E' }} />
                                Youtube
                            </HeaderLink>

                            <HeaderLink
                                to={'https://www.facebook.com/share/1E9FMRqnbu/?mibextid=wwXIfr'}
                                target="_blank"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '18px'
                                }}
                            >
                                <Facebook style={{ transform: 'scale(2)', fill: '#00302E' }} />
                                Facebook
                            </HeaderLink>

                            <HeaderLink
                                to={'https://www.instagram.com/easydispatchh?igsh=MW1iMXg1NTZneWh1aw%3D%3D&utm_source=qr'}
                                target="_blank"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '18px'
                                }}
                            >
                                <Instagram style={{ transform: 'scale(2)', fill: '#00302E' }} />
                                Instagram
                            </HeaderLink>

                            <HeaderLink
                                to={'https://www.tiktok.com/@easydispatchh?is_from_webapp=1&sender_device=pc'}
                                target="_blank"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '18px'
                                }}
                            >
                                <TikTokIcon style={{ transform: 'scale(0.85)', fill: '#00302E', }} />
                                <span style={{ transform: 'translateY(-12px)' }}>TikTok</span>
                            </HeaderLink>
                        </div>
                    </StyledFooterColumnContent>
                </StyledFooterColumn>

                {!mobile && (
                    <StyledFooterIconCell onClick={() => window.scrollTo({ top: 0 })}>
                        <KeyboardArrowUp />
                    </StyledFooterIconCell>
                )}
            </StyledFooterContent>
        </StyledFooter>
    )
}