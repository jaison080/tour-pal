import { Faq, Footer, HappyCust, Navbar } from "../components";
import styles from "../styles/Home.module.css";
export default function Home() {
  return (
    <>
     <Navbar />
    <div className={styles.container}>
     
      <Faq/>
      <HappyCust/>
      <Footer />
    </div>
    </>
  );
}
