'use client';
import styles from '../../styles/Botao.module.css'

const Botao = ({ handleProximaPergunta, respostaUsuario, quantidadeQuestoes, indicePerguntaAtual }) => {

  return(
    <div className={styles.container_btn}>
        <button
          onClick={() => handleProximaPergunta()}
          disabled={respostaUsuario === null}
          className={respostaUsuario === null ? styles.btn_desabilitado : styles.btn_habilitado}
          >
          {indicePerguntaAtual < quantidadeQuestoes 
            ? 'Proxima pergunta'
            : 'Ver resultado'}
        </button>
    </div>
  )
}

export default Botao;