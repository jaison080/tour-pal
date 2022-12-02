import { Faq, Footer, HappyCust, Navbar } from "../components";
import Featured from "../components/Featured/Featured";
import Offers from "../components/Offers/Offers";
import Sanitized from "../components/Sanitized/Sanitized";
import styles from "../styles/Home.module.css";
export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Featured/>
      <Sanitized/>
      <Offers/>
      <Faq/>
      <HappyCust/>
      <Footer />
    </div>
  );
}
