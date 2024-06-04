import 'modern-normalize/modern-normalize.css';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import Layout from '@/components/Layout';
import theme from '@/constants/theme';
import meta from '@/constants/meta';

// TODO: If you need animation, uncomment (site with animations https://michalsnik.github.io/aos/)

// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { useEffect } from 'react';

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;

  // useEffect(() => {
  //   AOS.init({
  //     easing: 'ease-out-cubic',
  //     once: true,
  //     offset: 50,
  //   });
  // }, []);

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
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </AppCacheProvider>
  );
}
