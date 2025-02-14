import '../styles/globals.css'
import styles from '../styles/layout.module.css'
import Logo from '../../public/assets/TRIVIA.png'
import Image from 'next/image';

export const metadata = {
  title: 'TRIVIA - Vfinal',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <main className={styles.main}>
          <div className={styles.container_logo}>
            <Image src={Logo} alt="Logo" width={200} height={100} />
          </div>
          <div className={styles.container_conteudo}>
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
