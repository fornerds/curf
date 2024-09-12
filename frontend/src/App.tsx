import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import NotificationDetail from "./pages/NotificationDetail";
import PaymentCancel from "./pages/PaymentCancel";
import SubscriptionManagement from "./pages/SubscriptionManagement";
import Payment from "./pages/Payment";
import Notification1 from "./pages/Notification1";
import AccountManagement from "./pages/AccountManagement";
import Inquiries from "./pages/Inquiries";
import DeleteAccount from "./pages/DeleteAccount";
import AddPayment from "./pages/AddPayment";
import TermsAgreement from "./pages/TermsAgreement";
import FindEmail from "./pages/FindEmail";
import FindPassword from "./pages/FindPassword";
import PaymentHistory from "./pages/PaymentHistory";
import SignupDone from "./pages/SignupDone";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Chat1 from "./pages/Chat1";
import Announcement from "./pages/Announcement";
import PaymentItem from "./pages/PaymentItem";
import Button4 from "./components/Button4";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/notification-detail":
        title = "";
        metaDescription = "";
        break;
      case "/payment-cancel":
        title = "";
        metaDescription = "";
        break;
      case "/subscription-management":
        title = "";
        metaDescription = "";
        break;
      case "/payment":
        title = "";
        metaDescription = "";
        break;
      case "/notification":
        title = "";
        metaDescription = "";
        break;
      case "/account-management":
        title = "";
        metaDescription = "";
        break;
      case "/inquiries":
        title = "";
        metaDescription = "";
        break;
      case "/delete-account":
        title = "";
        metaDescription = "";
        break;
      case "/add-payment":
        title = "";
        metaDescription = "";
        break;
      case "/terms-agreement":
        title = "";
        metaDescription = "";
        break;
      case "/find-email":
        title = "";
        metaDescription = "";
        break;
      case "/find-password":
        title = "";
        metaDescription = "";
        break;
      case "/payment-history":
        title = "";
        metaDescription = "";
        break;
      case "/signup-done":
        title = "";
        metaDescription = "";
        break;
      case "/signup":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/chat":
        title = "";
        metaDescription = "";
        break;
      case "/announcement":
        title = "";
        metaDescription = "";
        break;
      case "/payment-item":
        title = "";
        metaDescription = "";
        break;
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/notification-detail" element={<NotificationDetail />} />
      <Route path="/payment-cancel" element={<PaymentCancel />} />
      <Route
        path="/subscription-management"
        element={<SubscriptionManagement />}
      />
      <Route path="/payment" element={<Payment />} />
      <Route path="/notification" element={<Notification1 />} />
      <Route path="/account-management" element={<AccountManagement />} />
      <Route path="/inquiries" element={<Inquiries />} />
      <Route path="/delete-account" element={<DeleteAccount />} />
      <Route path="/add-payment" element={<AddPayment />} />
      <Route path="/terms-agreement" element={<TermsAgreement />} />
      <Route path="/find-email" element={<FindEmail />} />
      <Route path="/find-password" element={<FindPassword />} />
      <Route path="/payment-history" element={<PaymentHistory />} />
      <Route path="/signup-done" element={<SignupDone />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/chat" element={<Chat1 />} />
      <Route path="/announcement" element={<Announcement />} />
      <Route path="/payment-item" element={<PaymentItem />} />
      <Route path="/" element={<Button4 />} />
    </Routes>
  );
}
export default App;
