import Head from 'next/head'
import HeaderNavbar from "../components/Navbar/HeaderNavbar";
import Footer from "../components/Footer/Footer";

const Layout = (props) => (
  <div>
    <Head>
      {process.env.NODE_ENV !== 'production' && (
        <link rel="stylesheet" type="text/css" href={'/_next/static/css/styles.chunk.css?v=' + Date.now()} />
      )}
    </Head>
    <HeaderNavbar />
    {props.children}
    <Footer />
  </div>
);

export default Layout;
