'use client';
import styles from '../../styles/Resultado.module.css'
import Image from 'next/image';
import Ouro from '../../../public/assets/medalha-de-ouro.png';
import Prata from '../../../public/assets/medalha-de-prata.png';
import Bronze from '../../../public/assets/medalha-de-bronze.png';
import Link from 'next/link';

const Resultado = ({ porcentagem, respostasCorretas }) => {

  return(
    <div className={styles.container_resultado}>
      <div className={styles.container_msgFimJogo}>
        {porcentagem >= 70 ? (
          <div>
            <h4>Excelente!</h4>
            <Image src={Ouro} width={70} alt='medalha'/> 
          </div>
        ) : porcentagem >= 50 ? (
          <div>
            <h4>Mediano!</h4>
            <Image src={Prata} width={70} alt='medalha'/> 
          </div>
        ) : (
          <div>
            <h4>Péssimo!</h4>
            <Image src={Bronze} width={70} alt='medalha'/>
          </div>
        )}
        <p>{`Pontuação: ${respostasCorretas}/10`}</p>
        <p>{`Porcentagem de acertos: ${porcentagem}%`}</p>
      </div>
      <div className={styles.container_btn}>
        <Link 
          className={styles.btn_link}
          href={'/sobre'}>Informações
        </Link>
      </div>
    </div>
  )
}

export default Resultado;