import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store, persistor } from '@/store/store';
import { PersistGate } from 'redux-persist/integration/react';
import "@/styles/globals.css";
import Layout from '@/components/Layout';

function MyApp({ Component, pageProps }: AppProps) { // ✅ AppProps fixes the "any" error
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
        <Component {...pageProps} />
        </Layout>

      </PersistGate>
    </Provider>
  );
}

export default MyApp;
