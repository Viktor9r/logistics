import { useMediaQuery } from "@mui/material";
import { useOpenQuoteDialog } from "../../Storages/useOpenQuoteDialog"
import { StyledCalculateSection, StyledCalculateSectionContent, StyledCalculateSectionLeft, StyledCalculateSectionQuoteButton, StyledCalculateSectionRight, StyledCalculateSectionSubTitle, StyledCalculateSectionTitle } from "./styled"

export const CalculateSection: React.FC = () => {
    const { setOpenQuoteDialog } = useOpenQuoteDialog()
    const mobile = useMediaQuery('(max-width:1000px)');

    return (
        <StyledCalculateSection>
            <StyledCalculateSectionContent>
                <StyledCalculateSectionLeft>
                    <StyledCalculateSectionTitle>
                        Our Offer!
                    </StyledCalculateSectionTitle>

                    <StyledCalculateSectionSubTitle>
                        We guarantee $30,000+ gross revenue in 30 days,.If we don't perform, you don't pay. Simple as that.
                        <br />
                        <br />
                        We take care of everything — finding high-paying loads, handling compliance, invoicing, and providing 24/7 support — so you can focus on driving and earning
                    </StyledCalculateSectionSubTitle>
                </StyledCalculateSectionLeft>

                <StyledCalculateSectionRight>
                    {!mobile && (
                        <StyledCalculateSectionQuoteButton
                            to="https://share-na2.hsforms.com/2c3xTUNftSRa9rRTMzmeWxQ407au7"
                            target='_blank'
                        >
                            Contact Us
                        </StyledCalculateSectionQuoteButton>
                    )}
                </StyledCalculateSectionRight>
            </StyledCalculateSectionContent>
        </StyledCalculateSection>
    )
}