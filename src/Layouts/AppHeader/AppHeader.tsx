import { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";
import disableScroll from "disable-scroll"; // Import the library
import {
    HeaderLink,
    HeaderIcon,
    HeaderInnerContainer,
    HeaderLeftPart,
    HeaderLogo,
    HeaderOuterContainer,
    HeaderPipe,
    HeaderRightPart,
    HeaderInnerInnerContainer,
    MobileHeaderButton,
    MobileHeaderMenu,
    MobileHeaderMenuTop,
    MobileHeaderLinksList,
    MobileHeaderLinksLink,
} from "./styled";
import logo from "../../resources/images/finallogo.png";
import { CloseOutlined, Menu, PhoneIphoneOutlined } from "@mui/icons-material";
import EmailIcon from "@mui/icons-material/EmailOutlined";
import { useOpenQuoteDialog } from "../../Storages/useOpenQuoteDialog";
import { MainPageOptionsQuoteButton } from "../MainPageOptions/styled";
import { servicesList } from "../../resources/data/arrays";
import { Link, useLocation } from "react-router-dom";

interface IProps { }

export const AppHeader: React.FC<IProps> = () => {
    const { setOpenQuoteDialog } = useOpenQuoteDialog();
    const mobile = useMediaQuery("(max-width:1000px)");
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const location = useLocation()

    useEffect(() => {
        if (showMobileMenu) {
            disableScroll.on(); // Disable scroll when mobile menu is open
        } else {
            disableScroll.off(); // Enable scroll when mobile menu is closed
        }

        return () => {
            disableScroll.off(); // Cleanup scroll behavior when component unmounts
        };
    }, [showMobileMenu]);

    return (
        <>
            <HeaderOuterContainer>
                <HeaderInnerContainer>
                    <HeaderInnerInnerContainer>
                        <HeaderLeftPart to={"/"}>
                            <HeaderLogo alt="First Class Movers" loading="lazy" src={logo} />
                        </HeaderLeftPart>

                        <HeaderRightPart>
                            {!mobile && (
                                <>
                                    <HeaderLink to="mailto:info@easydispatch.net">
                                        <HeaderIcon>
                                            <EmailIcon />
                                        </HeaderIcon>
                                        info@easydispatch.net
                                    </HeaderLink>
                                    <HeaderPipe />
                                    <HeaderLink to="tel:8779329272">
                                        <HeaderIcon>
                                            <PhoneIphoneOutlined />
                                        </HeaderIcon>
                                        +1 (877) 932 -9272
                                    </HeaderLink>
                                    <HeaderPipe />
                                    <MainPageOptionsQuoteButton
                                        sx={{
                                            height: '44px',
                                        }}
                                        to={'https://share-na2.hsforms.com/2c3xTUNftSRa9rRTMzmeWxQ407au7'}
                                        target='_blank'
                                    >

                                        Contact Us
                                    </MainPageOptionsQuoteButton>
                                </>
                            )}

                            {mobile && (
                                <MobileHeaderButton onClick={() => setShowMobileMenu(!showMobileMenu)}>
                                    <Menu />
                                </MobileHeaderButton>
                            )}
                        </HeaderRightPart>
                    </HeaderInnerInnerContainer>
                </HeaderInnerContainer>
            </HeaderOuterContainer>

            <MobileHeaderMenu
                sx={{
                    transform: showMobileMenu ? "translate3d(20vw, 0, 0)" : "translate3d(100vw, 0, 0)",
                    boxShadow: showMobileMenu ? "29px 0px 180px 54px rgba(0,0,0,0.75)" : "none",
                    zIndex: showMobileMenu ? 999 : -1,
                }}
            >
                <MobileHeaderMenuTop>
                    <CloseOutlined onClick={() => setShowMobileMenu(!showMobileMenu)} />
                </MobileHeaderMenuTop>

                <MobileHeaderLinksList>
                    <MobileHeaderLinksLink
                        to={'/'}
                        sx={{
                            textDecoration: location.pathname === '/' ? 'underline' : 'none'
                        }}
                        onClick={() => {
                            window.scrollTo({ top: 0 });
                            setShowMobileMenu(false)
                        }}
                    >
                        Home
                    </MobileHeaderLinksLink>
                    {servicesList.map((item: any) => (
                        <MobileHeaderLinksLink
                            key={item.id}
                            to={'/services'}
                            sx={{
                                textDecoration: item.link === location.pathname ? 'underline' : 'none'
                            }}
                            onClick={() => {
                                window.scrollTo({ top: 0 });
                                setShowMobileMenu(false)
                            }}
                        >
                            {item.title}
                        </MobileHeaderLinksLink>
                    ))}
                    <MobileHeaderLinksLink
                        to={'/faq-page'}
                        sx={{
                            textDecoration: location.pathname === '/faq-page' ? 'underline' : 'none'
                        }}
                        onClick={() => {
                            window.scrollTo({ top: 0 });
                            setShowMobileMenu(false)
                        }}
                    >
                        FAQ Page
                    </MobileHeaderLinksLink>
                </MobileHeaderLinksList>

                <div
                    style={{
                        height: '1px',
                        width: '100%',
                        background: '#fff',
                        margin: '30px 0'
                    }}
                />

                <HeaderLink
                    sx={{
                        color: '#fff',
                        fontSize: '18px !important',
                        marginBottom: '30px',

                        // ['svg']: {
                        //     fill: '#fff'
                        // }
                    }}
                    onClick={() => window.location.href = 'mailto:info@easydispatch.net'}
                    to=''
                >
                    <HeaderIcon sx={{
                        mr: 1,
                        mb: '1px',
                    }}>
                        <EmailIcon />
                    </HeaderIcon>
                    info@easydispatch.net
                </HeaderLink>

                <HeaderLink
                    sx={{
                        color: '#fff',
                        fontSize: '18px !important',
                        marginBottom: '50px',
                    }}
                    to='tel:8779329272'
                >
                    <HeaderIcon sx={{
                        mr: 1,
                        mb: '1px',
                    }}>
                        <PhoneIphoneOutlined />
                    </HeaderIcon>
                    +1 (877) 932 -9272
                </HeaderLink>

                <MainPageOptionsQuoteButton
                    sx={{
                        color: '#fff',
                        border: '2px solid #fff',
                        lineHeight: '60px',
                        textAlign: 'center'
                    }}
                    onClick={() => {
                        setShowMobileMenu(false)
                    }}
                    to={'https://share-na2.hsforms.com/2c3xTUNftSRa9rRTMzmeWxQ407au7'}
                    target='_blank'
                >
                    Contact Us
                </MainPageOptionsQuoteButton>
            </MobileHeaderMenu>
        </>
    );
};
