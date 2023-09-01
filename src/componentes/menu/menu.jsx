import styles from "./menu.module.css";

const Menu = ({ click }) => {
  return (
    <div className={styles.menuBand} onClick={click}>
        <div className={styles.fundoBand}>
      <ul>
        <li>
          <a href="#">Inicio</a>
        </li>
        <li>
          <a href="#">Series</a>
        </li>
        <li>
          <a href="#">Filmes</a>
        </li>
        <li>
          <a href="#">Catálogos</a>
        </li>
      </ul>
        </div>
    </div>
  );
};

export default Menu;
