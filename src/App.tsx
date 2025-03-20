import { useEffect, useState } from 'react';
import './App.css';
import { DesktopLayout } from './Layouts/DesktopLayout/DesktopLayout';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ServicePage } from './Layouts/ServicePage/ServicePage';
import { AppHeader } from './Layouts/AppHeader/AppHeader';
import { useSerivcePageDataStorage } from './Storages/useServicePageDataStorage';
import { servicesList } from './resources/data/arrays';
import { useOpenQuoteDialog } from './Storages/useOpenQuoteDialog';
import { QuoteDialog } from './Layouts/Dialogs/QuoteDialog/QuoteDialog';
import { FAQPage } from './Layouts/FAQPage/FAQPage';
import { CustomLoader } from './Layouts/Loader/Loader';

function App() {
  const location = useLocation()

  const { setVisibleService } = useSerivcePageDataStorage()

  useEffect(() => {
    if (location.pathname.includes('services')) {
      setVisibleService(servicesList[0].id)
    }
  }, [location, setVisibleService]);

  const { openQuoteDialog, setOpenQuoteDialog } = useOpenQuoteDialog()

  // const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 4000)
  // }, [])
  // if (loading) {
  //   return <CustomLoader />
  // }

  return (
    <div className="App">
      <AppHeader />
      <Routes>
        <Route path='/' element={<DesktopLayout />} />
        <Route path='/faq-page' element={<FAQPage />} />
        <Route
          path={
            '/services'
          }
          element={<ServicePage />}
        />
      </Routes>

      {openQuoteDialog && (
        <QuoteDialog
          open={openQuoteDialog}
          onClose={() => setOpenQuoteDialog(false)}
        />
      )}
    </div>
  );
}

export default App;
