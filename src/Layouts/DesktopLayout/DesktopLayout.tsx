import { MainPage } from "../MainPage/MainPage"
import { MainPageOptions } from "../MainPageOptions/MainPageOptions"
import { Services } from "../Services/Services"
import { AppOuterContainer } from "./styled";
import { TrustPage } from "../Trust/Trust";
import { CalculateSection } from "../Calculate/Calculate";
import { ReviewsSection } from "../Reviews/Reviews";
import { FAQPage } from "../FAQ/FAQ";
import { LocationPage } from "../Location/Location";
import { FormPage } from "../Form/Form";
import { Footer } from "../Footer/Footer";
import { questionsList, servicesList, trustList } from "../../resources/data/arrays";
import { useMediaQuery } from "@mui/material";
import { MobileBottomBar } from "../MobileBottomBar/MobileBottomBar";
import { EquipmentPage } from "../Equipment/Equipment";
import { ResultsPage } from "../Results/Results";
import { ChargesPage } from "../Charges/Charges";

export const DesktopLayout: React.FC = () => {

    const mobile = useMediaQuery('(max-width:1000px)');

    return (
        <>
            <AppOuterContainer>
                {!mobile && (
                    <MainPageOptions />
                )}
                <MainPage />
                <Services servicesList={servicesList} />
                <EquipmentPage />
                <TrustPage trustList={trustList} />
                <ResultsPage />

                {/* <AboutPage /> */}
                <ChargesPage />
                <CalculateSection />

                <FAQPage questions={questionsList} />

                <Footer servicesList={servicesList} />

                {mobile && (
                    <MobileBottomBar />
                )}
            </AppOuterContainer>
        </>
    )
}