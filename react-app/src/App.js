import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import SignUpPage from "./components/SignUpPage";
import UserDashboard from "./components/UserDashboard";
import Footer from "./components/Footer";
import FAQComponent from "./components/FAQComponent";
import BugReport from "./components/BugReport";
import RequestFeature from "./components/RequestFeature";
import WikiComponent from "./components/WikiComponent";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TOS from "./components/TOS";
import UserInventory from "./components/UserInventory";
import ShopsComponent from "./components/ShopsComponent";
import OtherFooter from "./components/Footer/OtherFooter";
import FooterThree from "./components/Footer/FooterThree";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/login" >
            <LoginFormPage />
            <OtherFooter />
          </Route>
          <Route exact path='/my-dashboard'>
            <UserDashboard />
            <Footer />
          </Route>
          <Route exact path='/faq'>
            <FAQComponent />
            <Footer />
          </Route>
          <Route exact path='/inventory'>
            <UserInventory />
            <Footer style={{"position": "absolute"}} />
          </Route>
          <Route exact path='/shops'>
            <ShopsComponent />
            <Footer />
          </Route>
          <Route exact path='/bug-report'>
            <BugReport />
            <Footer />
          </Route>
          <Route exact path='/feature-request'>
            <RequestFeature />
            <Footer />
          </Route>
          <Route exact path='/wiki'>
            <WikiComponent />
            <Footer />
          </Route>
          <Route exact path='/privacy-policy'>
            <PrivacyPolicy />
            <Footer />
          </Route>
          <Route exact path='/tos'>
            <TOS />
            <Footer />
          </Route>
          <Route exact path='/signup'>
            <SignupFormPage />
            <FooterThree />
          </Route>
          <Route path='/'>
            <SignUpPage />
            <OtherFooter />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
