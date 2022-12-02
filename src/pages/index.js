import { Faq, Footer, HappyCust, Navbar } from "../components";
import Dining from "../components/Dining/Dining";
import Featured from "../components/Featured/Featured";
import Offers from "../components/Offers/Offers";
import PeerCar from "../components/PeerCar/PeerCar";
import Sanitized from "../components/Sanitized/Sanitized";
import TravelPartner from "../components/TravelPartner/TravelPartner";
import Why from "../components/Why/Why";
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
