import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store, persistor } from '@/store/store';
import { PersistGate } from 'redux-persist/integration/react';
import "@/styles/globals.css";
import Layout from '@/components/Layout';
import ErrorBoundary from '@/components/ErrorBoundary';
import { NotificationProvider } from '@/contexts/NotificationContext';
import NotificationToast from '@/components/NotificationToast';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <NotificationProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Layout>
              <Component {...pageProps} />
              <NotificationToast />
            </Layout>
          </PersistGate>
        </Provider>
      </NotificationProvider>
    </ErrorBoundary>
  );
}

export default MyApp;
