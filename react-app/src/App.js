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
          </Route>
          <Route exact path='/my-dashboard'>
            <UserDashboard />
          </Route>
          <Route exact path='/faq'>
            <FAQComponent />
          </Route>
          <Route exact path='/bug-report'>
            <BugReport />
          </Route>
          <Route exact path='/feature-request'>
            <RequestFeature />
          </Route>
          <Route exact path='/wiki'>
            <WikiComponent />
          </Route>
          <Route exact path='/privacy-policy'>
            <PrivacyPolicy />
          </Route>
          <Route exact path='/tos'>
            <TOS />
          </Route>
          <Route path='/'>
            <SignUpPage />
          </Route>

          {/* <Route path="/signup">
            <SignupFormPage />
          </Route> */}
        </Switch>
      )}
      <Footer />
    </>
  );
}

export default App;
