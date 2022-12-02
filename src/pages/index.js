import { Faq, Footer, HappyCust, Navbar } from "../components";
import Featured from "../components/Featured/Featured";
import Offers from "../components/Offers/Offers";
import Sanitized from "../components/Sanitized/Sanitized";
import Why from "../components/Why/Why";
import styles from "../styles/Home.module.css";
export default function Home() {
  return (
    <>
     <Navbar />
    <div className={styles.container}>
      <Featured/>
      <Sanitized/>
      <Offers/>
      <Why/>
      <Faq/>
      <HappyCust/>
      <Footer />
    </div>
    </>
  );
}
