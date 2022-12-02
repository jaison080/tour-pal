import { Faq, Footer, HappyCust, Navbar } from "../components";
import styles from "../styles/Home.module.css";
export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Faq/>
      <HappyCust/>
      <Footer />
    </div>
  );
}
