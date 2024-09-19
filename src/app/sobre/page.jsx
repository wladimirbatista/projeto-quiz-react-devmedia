import styles from "../../styles/sobre.module.css";
import Image from "next/image";
import Perfil from "../../../public/assets/perfil.png";
import Link from "next/link";

const Sobre = () => {
  return (
    <div className={styles.container_sobre}>
      <div className={styles.container_perfil}>
        <figure>
          <Image src={Perfil} alt="perfil" width={100} height={100} />
        </figure>
        <div>
          <span>Nome: Fulano</span>
        </div>
      </div>

      <div className={styles.container_descricao}>
        <h3>Descrição do projeto:</h3>
        <p>
          O projeto TRIVIA é uma aplicação desenvolvida com as
          tecnologias React.js e Next.js.
        </p>
      </div>

      <div className={styles.container_tecnologias}>
        <h3>Tecnologias usadas no projeto:</h3>
        <div>
          <p>HTML</p>
          <p>CSS</p>
          <p>JavaScript</p>
          <p>React.JS</p>
          <p>Next.JS</p>
        </div>
      </div>
      <Link className={styles.link_voltar} href={'/'}>Voltar para Inicio</Link>
    </div>
  );
};

export default Sobre;
