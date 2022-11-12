import { AppProps } from "$fresh/server.ts"
import { Head } from "$fresh/runtime.ts"

export default function({ Component }: AppProps) {
  return (
    <>
      <Head>
        <title>Fresh GA Demo</title>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-FYVZBG0SGG"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-FYVZBG0SGG');
            `
          }}
        />
      </Head>
      <Component />
    </>
  )
}
