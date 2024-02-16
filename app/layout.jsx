import Nav from "@components/Nav";
import Provider from "@components/Provider";
import "@styles/globals.css";
import { children } from "react";

export const metadata = {
  title: "Promptify",
  description: "Spark Your Imagination with AI-Powered Writing Inspiration",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        {/* <Provider /> */}
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
