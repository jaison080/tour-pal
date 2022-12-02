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
import CustomTitle from "../utils/customTitle";
export default function Home() {
  return (
    <>
      <CustomTitle title={"Landing"} />
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
