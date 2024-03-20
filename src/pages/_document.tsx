import { Html, Head, Main, NextScript, DocumentProps, DocumentContext } from 'next/document';
import { DocumentHeadTags, DocumentHeadTagsProps, documentGetInitialProps } from '@mui/material-nextjs/v14-pagesRouter';
import meta from '@/constants/meta';

export default function MyDocument(props: DocumentProps & DocumentHeadTagsProps) {
  return (
    <Html lang={meta.lang}>
      <Head>
        <link
          rel='shortcut icon'
          href={meta.faviconPath}
        />
        <meta
          name='emotion-insertion-point'
          content=''
        />
        <DocumentHeadTags {...props} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const finalProps = await documentGetInitialProps(ctx);

  return finalProps;
};
