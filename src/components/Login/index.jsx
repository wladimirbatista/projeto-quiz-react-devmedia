"use client";
import styles from "../../styles/Login.module.css";

const Login = ({ handleIniciarJogo }) => {
  
  return (
    <div className={styles.container_login}>
      <h2>Iniciar jogo</h2>
      <div>
        <button onClick={handleIniciarJogo}>Entrar</button>
      </div>
    </div>
  );
};

export default Login;
