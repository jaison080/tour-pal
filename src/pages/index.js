import {
  Dining,
  Faq,
  HappyCust,
  Navbar,
  PeerCar,
  TravelPartner,
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
        <HappyCust />
        <Faq />
      </div>
    </>
  );
}
