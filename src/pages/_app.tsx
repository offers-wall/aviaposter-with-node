import 'modern-normalize/modern-normalize.css';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import Layout from '@/components/Layout';
import theme from '@/constants/theme';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import paypalScriptOptions from '@/constants/paypalScriptOptions';
import meta from '@/constants/meta';
import ShoppingCartProvider from '@/components/Outlet/CartPage/ShoppingCartProvider';
import { ToastContainer } from 'react-toastify';

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <AppCacheProvider {...props}>
      <Head>
        <meta charSet='UTF-8' />
        <meta
          name='viewport'
          content='initial-scale=1, width=device-width'
        />
        <meta
          content={meta.description}
          name='description'
        />
        <link
          href={process.env.NEXT_SITE_URL}
          rel='canonical'
        />
        <title>{meta.title}</title>
        <link
          href={meta.faviconPath}
          rel='icon'
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ShoppingCartProvider initialValue={[]}>
          <Layout>
            <PayPalScriptProvider options={paypalScriptOptions}>
              <Component {...pageProps} />
            </PayPalScriptProvider>
          </Layout>
        </ShoppingCartProvider>
        <ToastContainer />
      </ThemeProvider>
    </AppCacheProvider>
  );
}
