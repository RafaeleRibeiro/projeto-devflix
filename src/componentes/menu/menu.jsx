import styles from "./menu.module.css";

const Menu = ({ click }) => {
  return (
    <>
      <div className={styles.fundoBand} onClick={click}></div>
      <div className={styles.menuBand}>
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
    </>
  );
};

export default Menu;
