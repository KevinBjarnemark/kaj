import "./globals.css";
import "./utilities.css";
import { appConstants } from "@/utils/constants/app-constants";
import Header from "@/components/layout/Header";

export const metadata = {
  title: {
    template: `%s | ${appConstants.appName}`,
    default: `${appConstants.appName}`,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex-column-relative center w-100">
        <Header />
        <main
          className="flex-column-relative w-100"
          style={{
            marginTop: `${appConstants.dimensions.header.height}px`,
          }}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
