import { useState } from "react";
import {
    StyledFormSubmit,
    StyledMainPage,
    StyledMainPageTitle,
    StyledMainPageTop
} from "./styled";
import { format } from "date-fns";
import { PhoneInput } from 'react-international-phone';
import './phoneStyles.scss';
import './style.scss';
import { Alert, Snackbar, useMediaQuery } from "@mui/material";
import { CalendarDialog } from "../Dialogs/CalendarDialog/CalendarDialog";
import { ContactMailOutlined, Download } from "@mui/icons-material";
import { Link } from "react-router-dom";

export const MainPage: React.FC = () => {
    const [error, setError] = useState('');
    const [isSucces, setIsSuccess] = useState(false);
    const mobile = useMediaQuery('(max-width:1000px)');

    return (
        <StyledMainPage>
            <StyledMainPageTop>
                <StyledMainPageTitle>
                    Easydispatch - Less Paperwork.<br /> More Miles:<br /> Full Dispatch & Back-Office Support.

                    <div style={{ fontSize: '18px', fontWeight: 500 }}>
                        <br />
                        Stay loaded, stay paid, and stay compliant with our all-in-one dispatch service.
                    </div>
                </StyledMainPageTitle>


            </StyledMainPageTop>

            <StyledMainPageTop sx={{ gap: '40px', width: !mobile ? '900px' : '100%' }}>
                <StyledFormSubmit
                    sx={{
                        height: '70px',
                        fontSize: '22px',
                        borderRadius: mobile ? '0' : '20px',
                    }}
                    startIcon={<Download sx={{ marginRight: '10px' }} />}
                >
                    <Link to="https://share-na2.hsforms.com/2c3xTUNftSRa9rRTMzmeWxQ407au7" target="_blank" style={{ textDecoration: 'none', color: 'white' }}>
                        Download free eBook
                    </Link>
                </StyledFormSubmit>
                <StyledFormSubmit
                    startIcon={<ContactMailOutlined sx={{ marginRight: '10px' }} />}
                    sx={{
                        height: '70px',
                        fontSize: '22px',
                        borderTopLeftRadius: mobile ? '0' : '20px',
                        borderTopRightRadius: mobile ? '0' : '20px'
                    }}
                >
                    <Link to="https://share-na2.hsforms.com/2c3xTUNftSRa9rRTMzmeWxQ407au7" target="_blank" style={{ textDecoration: 'none', color: 'white' }}>
                        Contact Us
                    </Link>
                </StyledFormSubmit>
            </StyledMainPageTop>

            {/* Snackbar for success or error */}
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                open={isSucces || !!error}
                autoHideDuration={6000}
                onClose={() => {
                    setIsSuccess(false);
                    setError('');
                }}
            >
                {isSucces ? (
                    <Alert
                        onClose={() => setIsSuccess(false)}
                        severity="success"
                        sx={{
                            borderRadius: '20px'
                        }}
                    >
                        Form submitted. Thank you!
                    </Alert>
                ) : (
                    <Alert
                        onClose={() => setError('')}
                        severity="error"
                        sx={{
                            borderRadius: '20px'
                        }}
                    >
                        {error}
                    </Alert>
                )}
            </Snackbar>
        </StyledMainPage>
    );
};
