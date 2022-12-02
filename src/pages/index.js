import {
  Dining,
  Faq,
  Featured,
  Footer,
  HappyCust,
  Navbar,
  Offers,
  PeerCar,
  Sanitized,
  TravelPartner,
  Why,
} from "../components";
import styles from "../styles/Home.module.css";
export default function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.header}>
          <PeerCar />
          <Dining />
          <TravelPartner />
        </div>
        {/* <Featured />
        <Sanitized />
        <Offers />
        <Why /> */}
        <HappyCust />
        <Faq />
        {/* <Footer /> */}
      </div>
    </>
  );
}
