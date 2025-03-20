import { MainPageOptionsQuoteButton } from "../MainPageOptions/styled"

import { ReactComponent as ReeferIcon } from '../../resources/icons/reefer.svg';
import { ReactComponent as DryvanIcon } from '../../resources/icons/dryvan.svg';
import { ReactComponent as StepdeckIcon } from '../../resources/icons/stepdeck.svg';
import { useOpenQuoteDialog } from "../../Storages/useOpenQuoteDialog";
import { ReactComponent as FlatbedIcon } from '../../resources/icons/flatbed.svg';
import { useMediaQuery } from "@mui/material";
import { StyledTrustPage, StyledTrustPageTop, StyledTrustPageTitle, StyledTrustPageTopUnder, StyledTrustPageSubTitle, TrustPageOptionsQuoteButton, StyledTrustPageList, StyledTrustPageCell, StyledTrustIconCell, StyledTrustPageCellTitle } from "../Trust/styled";
import { StyledEquipmentPageCellTitle } from "./styled";
import { transform } from "typescript";
import { Link } from "react-router-dom";

export const EquipmentPage: React.FC = () => {
    const { setOpenQuoteDialog } = useOpenQuoteDialog()
    const mobile = useMediaQuery('(max-width:1000px)');

    return (
        <StyledTrustPage>
            <StyledTrustPageTop>
                <StyledTrustPageTitle sx={{ maxWidth: '100%' }}>
                    Equipment we deal with
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
                            We only work with semi trucks. No box trucks, no cargo vans.
                        </StyledTrustPageTitle>
                        We are a specialist dispatch company that works only with semi truck owner operators – and only in the USA. We do not work with any other equipment type or in any other country. We use our patented dispatch system to locate and book the highest paying loads for our owner operators.
                        <br />
                        <br />
                        Average cost-per-mile reduction: 21%
                    </StyledTrustPageSubTitle>

                    {!mobile && (
                        <TrustPageOptionsQuoteButton
                            
                            to="https://share-na2.hsforms.com/2c3xTUNftSRa9rRTMzmeWxQ407au7"
                            target="_blank"
                        >
                            Contact Us
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
                    <StyledTrustIconCell sx={{ background: 'transparent', border: 'none' }}>
                        <DryvanIcon style={{ transform: 'scale(2)' }} />
                    </StyledTrustIconCell>
                    <StyledEquipmentPageCellTitle>
                        DRYVAN
                    </StyledEquipmentPageCellTitle>
                </StyledTrustPageCell>

                <StyledTrustPageCell
                    sx={{
                        alignItems: 'center',
                        [':hover > div']: {
                            transform: 'scale(1.2)'
                        }
                    }}
                >
                    <StyledTrustIconCell sx={{ background: 'transparent', border: 'none' }}>
                        <ReeferIcon style={{ transform: 'scale(2)' }} />
                    </StyledTrustIconCell>
                    <StyledEquipmentPageCellTitle>
                        REEFER
                    </StyledEquipmentPageCellTitle>
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
                    <StyledTrustIconCell sx={{ background: 'transparent', border: 'none' }}>
                        <FlatbedIcon style={{ transform: 'scale(2)' }} />
                    </StyledTrustIconCell>
                    <StyledEquipmentPageCellTitle>
                        FLATBED
                    </StyledEquipmentPageCellTitle>
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
                    <StyledTrustIconCell sx={{ background: 'transparent', border: 'none' }}>
                        <StepdeckIcon style={{ transform: 'scale(2)' }} />
                    </StyledTrustIconCell>
                    <StyledEquipmentPageCellTitle>
                        STEP DECK
                    </StyledEquipmentPageCellTitle>
                </StyledTrustPageCell>
            </StyledTrustPageList>
        </StyledTrustPage>
    )
}