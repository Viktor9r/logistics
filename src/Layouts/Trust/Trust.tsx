import { MainPageOptionsQuoteButton } from "../MainPageOptions/styled"
import { StyledTrustIcon, StyledTrustIconCell, StyledTrustPage, StyledTrustPageCell, StyledTrustPageCellTitle, StyledTrustPageList, StyledTrustPageSubTitle, StyledTrustPageTitle, StyledTrustPageTop, StyledTrustPageTopUnder, TrustPageOptionsQuoteButton } from "./styled"

import { ReactComponent as CalendarIcon } from '../../resources/icons/calendar.svg';
import { ReactComponent as HandshakeIcon } from '../../resources/icons/handshake.svg';
import { ReactComponent as HiddenFeesIcon } from '../../resources/icons/hiddenfees.svg';
import { ReactComponent as ShieldIcon } from '../../resources/icons/shield.svg';
import { ReactComponent as WeatherIcon } from '../../resources/icons/weather.svg';
import { useOpenQuoteDialog } from "../../Storages/useOpenQuoteDialog";
import { ReactComponent as EquipmentIcon } from '../../resources/icons/dolly.svg';
import { useMediaQuery } from "@mui/material";
import { StyledServicesPageList, StyledServiceCell, StyledServiceCellLeft, StyledServiceCellTitle, StyledServiceCellAbout, StyledServiceCellRight, StyledServiceIconCell, StyledServiceIconLink } from "../Services/styled";
import { useState } from "react";

interface IProps {
    trustList: any
}

export const TrustPage: React.FC<IProps> = ({ trustList }) => {
    const { setOpenQuoteDialog } = useOpenQuoteDialog()
    const mobile = useMediaQuery('(max-width:1000px)');

    const [isHovered, setIsHovered] = useState(false);

    const [hoveredId, setHoveredId] = useState(0)

    return (
        <StyledTrustPage sx={{ minHeight: 'calc(100vh - 170px)', height: 'fit-content' }}>
            <StyledTrustPageTop>
                <StyledTrustPageTitle>
                    Why Choose <br /> Easy Dispatch?
                </StyledTrustPageTitle>

                <StyledTrustPageTopUnder>

                    <StyledTrustPageSubTitle>
                        <StyledTrustPageTitle
                            sx={{
                                fontSize: '24px',
                                marginBottom: '16px',
                                maxWidth: '100%'
                            }}
                        >
                            Top market loads using the power of AI.
                        </StyledTrustPageTitle>
                        We help owner operators escape the competition on load boards like DAT and TruckStop by leveraging the power of AI. It's a new, untapped method of finding high paying loads that offers huge opportunity for the early adopters. That's how we make our owner operators win.
                        <br /><br />
                        Average rate-per-loaded-mile increase: 32%
                    </StyledTrustPageSubTitle>

                    {!mobile && (
                        <TrustPageOptionsQuoteButton
                            
                            to="https://share-na2.hsforms.com/2c3xTUNftSRa9rRTMzmeWxQ407au7"
                            target='_blank'
                        >
                            Contact us
                        </TrustPageOptionsQuoteButton>
                    )}
                </StyledTrustPageTopUnder>
            </StyledTrustPageTop>

            <StyledServicesPageList>
                {trustList.map((item: any) => (
                    <StyledServiceCell
                        onMouseOver={() => { setIsHovered(false); setHoveredId(item.id) }}
                        onMouseOut={() => { setIsHovered(true); setHoveredId(0) }}
                        key={item.id}
                        sx={{
                            alignItems: 'center',
                            padding: mobile ? '30px 16px' : '40px 20px',
                            minWidth: mobile ? 'calc(100% / 2 - 40px)' : 'calc(100% / 2 - 50px)',
                            maxWidth: mobile ? 'calc(100% / 2 - 40px)' : 'calc(100% / 2 - 50px)',
                            border: '2px solid white',
                            transition: '0.3s',
                            [':hover']: {
                                border: hoveredId === item.id ? '2px solid #00302E' : '2px solid white'
                            }
                        }}
                    >
                        <StyledServiceCellLeft sx={{ textAlign: mobile ? 'center' : 'flex-start' }}>
                            <StyledServiceCellTitle sx={{ fontSize: '20px' }}>
                                {item.title}
                            </StyledServiceCellTitle>

                            <StyledServiceCellAbout sx={{ fontSize: '12px', wordBreak: 'normal' }}>
                                {item.subTitle}
                            </StyledServiceCellAbout>
                        </StyledServiceCellLeft>

                        <StyledServiceCellRight sx={{ justifyContent: mobile ? 'center !important' : 'center' }}>
                            <StyledServiceIconCell
                                sx={{
                                    transition: '0.3s',
                                    transform: hoveredId === item.id ? 'scale(1.2)' : 'none'
                                }}
                            >
                                {item.icon}
                            </StyledServiceIconCell>

                        </StyledServiceCellRight>
                    </StyledServiceCell>
                ))}
            </StyledServicesPageList>
        </StyledTrustPage>
    )
}