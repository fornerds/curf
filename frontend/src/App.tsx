import { useEffect } from 'react';
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from 'react-router-dom';
// AI가 만든 페이지
import _Home from './_pages/Home';
import _NotificationDetail from './_pages/NotificationDetail';
import _PaymentCancel from './_pages/PaymentCancel';
import _SubscriptionManagement from './_pages/SubscriptionManagement';
import _Payment from './_pages/Payment';
import _Notification1 from './_pages/Notification1';
import _AccountManagement from './_pages/AccountManagement';
import _Inquiries from './_pages/Inquiries';
import _DeleteAccount from './_pages/DeleteAccount';
import _AddPayment from './_pages/AddPayment';
import _TermsAgreement from './_pages/TermsAgreement';
import _FindEmail from './_pages/FindEmail';
import _FindPassword from './_pages/FindPassword';
import _PaymentHistory from './_pages/PaymentHistory';
import _SignupDone from './_pages/SignupDone';
import _Signup from './_pages/Signup';
import _Login from './_pages/Login';
import _Chat1 from './_pages/Chat1';
import _Announcement from './_pages/Announcement';
import _PaymentItem from './_pages/PaymentItem';
import _Button4 from './_components/Button4';

import { Homepage } from './pages/Homepage';
import { Mypage } from './pages/Mypage';
import { Login } from './pages/Login';
import { Layout } from './components/organism/Layout';
import { Terms } from './pages/Terms';
import { Signup } from './pages/Signup';
import { CompleteSignup } from './pages/CompleteSignup';
import { FindEmail } from './pages/FindEmail';
import { ChangePassword } from './pages/ChangePassword';
import { Chat, ChatDetail } from './pages/Chat';
import { Pricing } from './pages/Pricing';
import { Payment } from './pages/Payment';
import { CancelPayment } from './pages/CancelPayment';
import { DeleteAccount } from './pages/DeleteAccount';
import { Notification } from './pages/Notification';

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== 'POP') {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = '';
    let metaDescription = '';

    switch (pathname) {
      case '/':
        title = '';
        metaDescription = '';
        break;
      case '/notification-detail':
        title = '';
        metaDescription = '';
        break;
      case '/payment-cancel':
        title = '';
        metaDescription = '';
        break;
      case '/subscription-management':
        title = '';
        metaDescription = '';
        break;
      case '/payment':
        title = '';
        metaDescription = '';
        break;
      case '/notification':
        title = '';
        metaDescription = '';
        break;
      case '/account-management':
        title = '';
        metaDescription = '';
        break;
      case '/inquiries':
        title = '';
        metaDescription = '';
        break;
      case '/delete-account':
        title = '';
        metaDescription = '';
        break;
      case '/add-payment':
        title = '';
        metaDescription = '';
        break;
      case '/terms-agreement':
        title = '';
        metaDescription = '';
        break;
      case '/find-email':
        title = '';
        metaDescription = '';
        break;
      case '/find-password':
        title = '';
        metaDescription = '';
        break;
      case '/payment-history':
        title = '';
        metaDescription = '';
        break;
      case '/signup-done':
        title = '';
        metaDescription = '';
        break;
      case '/signup':
        title = '';
        metaDescription = '';
        break;
      case '/login':
        title = '';
        metaDescription = '';
        break;
      case '/chat':
        title = '';
        metaDescription = '';
        break;
      case '/announcement':
        title = '';
        metaDescription = '';
        break;
      case '/payment-item':
        title = '';
        metaDescription = '';
        break;
      case '/':
        title = '';
        metaDescription = '';
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]',
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/complete-signup" element={<CompleteSignup />} />
        <Route path="/find-email" element={<FindEmail />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/chat/:chat_id" element={<ChatDetail />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/cancel-payment" element={<CancelPayment />} />
        <Route path="/delete-account" element={<DeleteAccount />} />
        <Route path="/notification" element={<Notification />} />
        {/* AI가 만든 페이지목록 */}
        <Route path="/ai/" element={<_Home />} />
        <Route
          path="/ai/notification-detail"
          element={<_NotificationDetail />}
        />
        <Route path="/ai/payment-cancel" element={<_PaymentCancel />} />
        <Route
          path="/ai/subscription-management"
          element={<_SubscriptionManagement />}
        />
        <Route path="/ai/payment" element={<_Payment />} />
        <Route path="/ai/notification" element={<_Notification1 />} />
        <Route path="/ai/account-management" element={<_AccountManagement />} />
        <Route path="/ai/inquiries" element={<_Inquiries />} />
        <Route path="/ai/delete-account" element={<_DeleteAccount />} />
        <Route path="/ai/add-payment" element={<_AddPayment />} />
        <Route path="/ai/terms-agreement" element={<_TermsAgreement />} />
        <Route path="/ai/find-email" element={<_FindEmail />} />
        <Route path="/ai/find-password" element={<_FindPassword />} />
        <Route path="/ai/payment-history" element={<_PaymentHistory />} />
        <Route path="/ai/signup-done" element={<_SignupDone />} />
        <Route path="/ai/signup" element={<_Signup />} />
        <Route path="/ai/login" element={<_Login />} />
        <Route path="/ai/chat" element={<_Chat1 />} />
        <Route path="/ai/announcement" element={<_Announcement />} />
        <Route path="/ai/payment-item" element={<_PaymentItem />} />
        <Route path="/ai/" element={<_Button4 />} />
      </Routes>
    </Layout>
  );
}
export default App;
