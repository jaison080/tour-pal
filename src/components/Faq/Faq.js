import React from 'react'
import styles from './Faq.module.css'
function Faq() {
  return (
    <div className={styles.faq_container}>
        <h1 className={styles.heading}>FAQ</h1>
      <div className={styles.contianer}>
        <div className="sections">
          <h2>Is there a speed limit?</h2>
          <p>Revv allows up to 125 km/hr. However it is 80 km/hr in a few cities where some cars might be equipped with speed governors as per government directives. Revv strictly advises to follow local speed limits.</p>
          <hr />
        </div>
        <div className="sections">
          <h2>Can I extend/ cancel/ modify?</h2>
          <p>Yes, extensions are possible subject to availability & charges. Cancellations & modifications will attract nominal charges as per our policy.
          </p>
          <hr />
        </div>
        <div className="sections">
          <h2>Booking criteria & documents?</h2>
          <p>Min. 21 years old, have valid original government ID (Aadhar, Passport, or PAN only) and a valid driving licence for “Light Motor Vehicles”, which is min. 1 year old at the time of starting the trip.
          </p>
          <hr />
        </div>
        <div className="sections">
          <h2>Are there any restricted areas?</h2>
          <p>Leh/Ladhakh, Spiti Valley & Kaza/Nako regions are not permitted to take Revv cars. Customer will be fully liable for any damages incurred to the car in that region.
          </p>
          
        </div>
      </div>
    </div>
  )
}

export default Faq