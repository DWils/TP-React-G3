const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>À propos de nous</h2>
          <p>Nous sommes votre destination en ligne pour les meilleures offres de shopping. Parcourez notre large sélection de produits et trouvez ce que vous aimez.</p>
        </div>
        <div className="footer-section">
          <h2>Contactez-nous</h2>
          <p>Si vous avez des questions, n'hésitez pas à nous contacter à l'adresse suivante : contact@shopistore.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} ShopiStore. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;