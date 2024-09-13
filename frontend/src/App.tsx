import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { Mypage } from "./pages/Mypage";
// AI가 만든 페이지
import Home from "./_pages/Home";
import NotificationDetail from "./_pages/NotificationDetail";
import PaymentCancel from "./_pages/PaymentCancel";
import SubscriptionManagement from "./_pages/SubscriptionManagement";
import Payment from "./_pages/Payment";
import Notification1 from "./_pages/Notification1";
import AccountManagement from "./_pages/AccountManagement";
import Inquiries from "./_pages/Inquiries";
import DeleteAccount from "./_pages/DeleteAccount";
import AddPayment from "./_pages/AddPayment";
import TermsAgreement from "./_pages/TermsAgreement";
import FindEmail from "./_pages/FindEmail";
import FindPassword from "./_pages/FindPassword";
import PaymentHistory from "./_pages/PaymentHistory";
import SignupDone from "./_pages/SignupDone";
import Signup from "./_pages/Signup";
import Login from "./_pages/Login";
import Chat1 from "./_pages/Chat1";
import Announcement from "./_pages/Announcement";
import PaymentItem from "./_pages/PaymentItem";
import Button4 from "./_components/Button4";

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
      <Route path="/" element={<Homepage />} />
      <Route path="/mypage" element={<Mypage />} />
      {/* AI가 만든 페이지목록 */}
      <Route path="/ai/" element={<Home />} />
      <Route path="/ai/notification-detail" element={<NotificationDetail />} />
      <Route path="/ai/payment-cancel" element={<PaymentCancel />} />
      <Route
        path="/ai/subscription-management"
        element={<SubscriptionManagement />}
      />
      <Route path="/ai/payment" element={<Payment />} />
      <Route path="/ai/notification" element={<Notification1 />} />
      <Route path="/ai/account-management" element={<AccountManagement />} />
      <Route path="/ai/inquiries" element={<Inquiries />} />
      <Route path="/ai/delete-account" element={<DeleteAccount />} />
      <Route path="/ai/add-payment" element={<AddPayment />} />
      <Route path="/ai/terms-agreement" element={<TermsAgreement />} />
      <Route path="/ai/find-email" element={<FindEmail />} />
      <Route path="/ai/find-password" element={<FindPassword />} />
      <Route path="/ai/payment-history" element={<PaymentHistory />} />
      <Route path="/ai/signup-done" element={<SignupDone />} />
      <Route path="/ai/signup" element={<Signup />} />
      <Route path="/ai/login" element={<Login />} />
      <Route path="/ai/chat" element={<Chat1 />} />
      <Route path="/ai/announcement" element={<Announcement />} />
      <Route path="/ai/payment-item" element={<PaymentItem />} />
      <Route path="/ai/" element={<Button4 />} />
    </Routes>
  );
}
export default App;
