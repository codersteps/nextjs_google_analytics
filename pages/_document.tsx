import { Html, Head, Main, NextScript } from "next/document";
import appConfig from "../config/app.config";
import Analytics from "../components/common/google/Analytics";

export default function Document() {
  return (
    <Html>
      <Head>
        {process.env.NODE_ENV === "production" &&
          typeof appConfig.env.analyticsMeasurementId !== "undefined" && (
            <Analytics
              analyticsMeasurementId={appConfig.env.analyticsMeasurementId}
            />
          )}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
