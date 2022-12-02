import { Faq, Footer, Happy_cust, Navbar } from "../components";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Faq/>
      <Happy_cust/>
      <Footer />
    </div>
  );
}
