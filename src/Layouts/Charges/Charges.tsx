import { ReactComponent as DispatchAndLoad } from '../../resources/icons/dispatchAndLoad.svg';
import { ReactComponent as SafetyCompliance } from '../../resources/icons/safetyAndCompliance.svg';
import { ReactComponent as Accounting } from '../../resources/icons/accountingAndInvoicing.svg';
import { ReactComponent as AfterHours } from '../../resources/icons/247support.svg';

import { ReactComponent as WeatherIcon } from '../../resources/icons/weather.svg';
import { useOpenQuoteDialog } from "../../Storages/useOpenQuoteDialog";
import { ReactComponent as EquipmentIcon } from '../../resources/icons/dolly.svg';
import { useMediaQuery } from "@mui/material";
import { StyledTrustPage, StyledTrustPageTop, StyledTrustPageTitle, StyledTrustPageTopUnder, StyledTrustPageSubTitle, TrustPageOptionsQuoteButton, StyledTrustPageList, StyledTrustPageCell, StyledTrustIconCell, StyledTrustPageCellTitle } from "../Trust/styled";
import { StyledEquipmentPageCellTitle } from "../Equipment/styled";
import { StyledServiceCellAbout } from "../Services/styled";

export const ChargesPage: React.FC = () => {
    const { setOpenQuoteDialog } = useOpenQuoteDialog()
    const mobile = useMediaQuery('(max-width:1000px)');

    return (
        <StyledTrustPage>
            <StyledTrustPageTop>
                <StyledTrustPageTitle sx={{ maxWidth: '100%' }}>
                    How much do we charge for <br /> our services?
                </StyledTrustPageTitle>

                <StyledTrustPageTopUnder>
                    <StyledTrustPageSubTitle>
                        We charge 8% per load per truck, providing a full-service package that replaces an entire back-office team—without the high overhead costs.

                        <br /><br />
                        For just 8% per load, you get:
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

            <StyledTrustPageList>
                <StyledTrustPageCell
                    sx={{
                        alignItems: 'center',
                        [':hover > div']: {
                            transform: 'scale(1.2)'
                        }
                    }}
                >
                    <StyledTrustIconCell>
                        <DispatchAndLoad />
                    </StyledTrustIconCell>
                    <StyledEquipmentPageCellTitle
                        sx={{
                            textTransform: 'capitalize',
                            height: '44px'
                        }}
                    >
                        Senior Dispatcher
                    </StyledEquipmentPageCellTitle>

                    <StyledServiceCellAbout
                        sx={{
                            wordBreak: 'normal'
                        }}
                    >
                        Typically $70,000+ per year
                    </StyledServiceCellAbout>
                </StyledTrustPageCell>

                <StyledTrustPageCell
                    sx={{
                        alignItems: 'center',
                        [':hover > div']: {
                            transform: 'scale(1.2)'
                        },
                        borderRight: mobile ? 'none' : '2px solid #e3e3e3'
                    }}
                >
                    <StyledTrustIconCell>
                        <SafetyCompliance />
                    </StyledTrustIconCell>
                    <StyledEquipmentPageCellTitle
                        sx={{
                            textTransform: 'capitalize',
                            height: '44px'
                        }}
                    >
                        Safety & Compliance Specialist
                    </StyledEquipmentPageCellTitle>

                    <StyledServiceCellAbout
                        sx={{
                            wordBreak: 'normal'
                        }}
                    >
                        Typically $65,000+ per year
                    </StyledServiceCellAbout>
                </StyledTrustPageCell>

                <StyledTrustPageCell
                    sx={{
                        alignItems: 'center',
                        [':hover > div']: {
                            transform: 'scale(1.2)'
                        },
                        ['@media (max-width: 1000px)']: {
                            // height: "fit-content",
                            borderBottom: 'none',
                        }
                    }}
                >
                    <StyledTrustIconCell>
                        <Accounting />
                    </StyledTrustIconCell>
                    <StyledEquipmentPageCellTitle
                        sx={{
                            textTransform: 'capitalize',
                            height: '44px'
                        }}
                    >
                        Accounting & Invoicing
                    </StyledEquipmentPageCellTitle>

                    <StyledServiceCellAbout
                        sx={{
                            wordBreak: 'normal'
                        }}
                    >
                        Typically $50,000+ per year
                    </StyledServiceCellAbout>
                </StyledTrustPageCell>

                <StyledTrustPageCell
                    sx={{
                        borderRight: 0,
                        alignItems: 'center',
                        [':hover > div']: {
                            transform: 'scale(1.2)'
                        },
                        ['@media (max-width: 1000px)']: {
                            // height: "fit-content",
                            borderBottom: 'none',
                        }
                    }}
                >
                    <StyledTrustIconCell>
                        <AfterHours />
                    </StyledTrustIconCell>
                    <StyledEquipmentPageCellTitle
                        sx={{
                            textTransform: 'capitalize',
                            height: '44px'
                        }}
                    >
                        After-Hours Support
                    </StyledEquipmentPageCellTitle>

                    <StyledServiceCellAbout
                        sx={{
                            wordBreak: 'normal'
                        }}
                    >
                        Typically $50,000+ per year
                    </StyledServiceCellAbout>
                </StyledTrustPageCell>
            </StyledTrustPageList>
        </StyledTrustPage>
    )
}