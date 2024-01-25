'use client';
import styles from '../../styles/Quiz.module.css'

const Quiz = ({ pergunta, opcoes, handleCliqueResposta, respostaUsuario}) => {
  
  return (
    <div className={styles.container_quiz}>
      <h3>{pergunta}</h3>
      <div>
        {opcoes.map((opcao, index) => (
          <button
            key={index}
            onClick={() => handleCliqueResposta(opcao.resposta)}
            disabled={respostaUsuario !== null}
            className={
              respostaUsuario !== null // Se a resposta do usuário não for nula
                ? opcao.correta // Verifica se a opção é a correta
                  ? respostaUsuario.resposta === opcao.resposta
                    ? styles.btn_correto // Se for a correta e foi clicada, estiliza como correto
                    : styles.btn_desabilitado // Se for a correta mas não foi clicada, desabilita
                  : respostaUsuario.resposta === opcao.resposta
                    ? styles.btn_errado // Se for uma opção errada e foi clicada, estiliza como errado
                    : styles.btn_desabilitado // Se for uma opção errada mas não foi clicada, desabilita
                : styles.btn_habilitado // Se a resposta do usuário for nula, habilita todos os botões
            }
          >
            {opcao.resposta}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;