import "./Footer.css";

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <p>&copy;2024 Samuel Ruiz | Dragon Ball API</p>
    </footer>
  );
};
