'use client';
import styles from '../../styles/ContadorQuestoes.module.css'

const ContadorQuestoes = ({quantidadeQuestoes, contadorQuestoes}) => {
  return(
    <div className={styles.container_contador}>
      <p>{`Questões: ${contadorQuestoes + 1}/${quantidadeQuestoes}`}</p>
    </div>
  )
}

export default ContadorQuestoes;