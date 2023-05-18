import { Navigation } from "./components/Navigation";
import { Providers } from "./utils/providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Frontend App</title>
      </head>
      <body>
        <Providers>
          <Navigation></Navigation>
          {children}
        </Providers>
      </body>
    </html>
  );
}

