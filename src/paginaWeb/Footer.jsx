import React from 'react';
import styles from './footer.module.css'; // Asegúrate de importar el archivo CSS correctamente

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialIcons}>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
          <i className="fa fa-facebook" aria-hidden="true"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
          <i className="fa fa-twitter" aria-hidden="true"></i>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
          <i className="fa fa-linkedin" aria-hidden="true"></i>
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
          <i className="fa fa-youtube" aria-hidden="true"></i>
        </a>
        <a href="https://iescuravalera.es" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
  <img src="/logo.png" width="50" alt="logoIES" className={styles.iconImage} /> 
  IES Cura Valera
</a>

      </div>
    </footer>
  );
}

export default Footer;


