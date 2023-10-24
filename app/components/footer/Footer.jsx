
import React, { useMemo }from "react";
import styles from './footer.module.css';
import Image from "next/image";


const Footer = () => {

  const currentYear = useMemo(() => {
    return new Date().getFullYear();
}, [])
  
  return (
    <div className={styles.container}>
      <div> &copy; {currentYear} Barbara Litwiniec Allright reserved</div>
      <div className={styles.social}>        
          <Image src="/1.png" width={15} height={15} className={styles.icon}alt="LamaDev"/>
          <Image src="/2.png" width={15} height={15} className={styles.icon}alt="LamaDev"/>
          <Image src="/3.png" width={15} height={15} className={styles.icon}alt="LamaDev"/>
          <Image src="/4.png" width={15} height={15} className={styles.icon}alt="LamaDev"/>
        
      </div>
    </div>
  );
};

export default Footer;
