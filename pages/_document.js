import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <body className='transition duration-200 bg-textPrimary dark:bg-backgroundPrimary'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}