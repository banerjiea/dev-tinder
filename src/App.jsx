import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./components/Feed";
import Connections from "./components/Connections";
import Requests from "./components/Requests";
import Chat from "./components/Chat";
import PrivacyPolicy from "./components/Privacypolicy";
import TermsOfService from "./components/TermsofService";
import RefundPolicy from "./components/RefundPolicy";
import ContactUs from "./components/Contactus";
import Footer from "./components/Footer";
import Premium from "./components/Premium";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/connections" element={<Connections />} />
              <Route path="/requests" element={<Requests />} />
              <Route path="/chat/:targetUserId" element={<Chat/>}/>
               <Route path="/premium" element={<Premium />} />
              </Route>
            {/* Policy pages — fully public, outside Body, no auth needed */}
            <Route path="/privacy-policy" element={<><PrivacyPolicy /><Footer /></>} />
            <Route path="/terms-of-service" element={<><TermsOfService /><Footer /></>} />
            <Route path="/refund-policy" element={<><RefundPolicy /><Footer /></>} />
            <Route path="/contact-us" element={<><ContactUs /><Footer /></>} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
