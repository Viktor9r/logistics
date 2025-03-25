import { StyledServiceCell, StyledServiceCellAbout, StyledServiceCellLeft, StyledServiceCellRight, StyledServiceCellTitle, StyledServiceIconCell, StyledServiceIconLink, StyledServicesPage, StyledServicesPageList, StyledServicesPageSubTitle, StyledServicesPageTitle, StyledServicesPageTop } from "./styled"
import { ReactComponent as ExpandIcon } from '../../resources/icons/expand.svg';
import { StyledTrustPageTitle } from "../Trust/styled";
import { useMediaQuery } from "@mui/material";

interface IProps {
    servicesList: any
};

export const Services: React.FC<IProps> = ({ servicesList }) => {
    const mobile = useMediaQuery('(max-width:1000px)');

    return (
        <StyledServicesPage>
            <StyledServicesPageTop>
                <StyledServicesPageTitle>
                    Services we offer
                </StyledServicesPageTitle>

                <StyledServicesPageSubTitle
                    sx={{
                        maxWidth: '44%'
                    }}
                >
                    <StyledTrustPageTitle
                        sx={{
                            fontSize: '24px',
                            marginBottom: '16px',
                            maxWidth: '100%'
                        }}
                    >
                        Complete back-office support.
                    </StyledTrustPageTitle>
                    We offer the most complete back-office support system in the country.Our owner operators never have to stress about getting paid on time, tracking load revenue, staying compliant with FMCSA, and much, MUCH more.
                    <br />
                    <br />
                    Average cost-per-sale reduction: 65%
                </StyledServicesPageSubTitle>
            </StyledServicesPageTop>

            <StyledServicesPageList>
                {servicesList.slice(0, 4).map((item: any) => (
                    <StyledServiceCell
                        sx={{
                            padding: mobile ? '30px 16px' : '40px 20px',
                            minWidth: mobile ? 'calc(100% / 2 - 36px)' : 'calc(100% / 2 - 46px)',
                            maxWidth: mobile ? 'calc(100% / 2 - 36px)' : 'calc(100% / 2 - 46px)',
                        }}
                        key={item.id}
                    >
                        <StyledServiceCellLeft>
                            <StyledServiceCellTitle>
                                {item.title}
                            </StyledServiceCellTitle>

                            <StyledServiceCellAbout
                                sx={{
                                    wordBreak: 'normal'
                                }}
                            >
                                {item.subTitle}
                            </StyledServiceCellAbout>
                        </StyledServiceCellLeft>

                        <StyledServiceCellRight>
                            <StyledServiceIconCell>
                                {item.icon}
                            </StyledServiceIconCell>
                            <StyledServiceIconLink
                                to={item.link}
                                onClick={() => window.scrollTo({ top: 0 })}
                                sx={{
                                    background: 'rgba(3, 150, 83, 0.35)',
                                    border: '1px solid rgba(0, 48, 46, 0.0)',
                                    cursor: 'pointer',
                                    [':hover']: {
                                        border: '1px solid rgb(3, 150, 83)',
                                        background: '#fff'
                                    }
                                }}
                            >
                                <ExpandIcon />
                            </StyledServiceIconLink>
                        </StyledServiceCellRight>
                    </StyledServiceCell>
                ))}
            </StyledServicesPageList>
        </StyledServicesPage>
    )
}