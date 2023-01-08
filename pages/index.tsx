
import Grow from '@mui/material/Grow'
import Slide from '@mui/material/Slide'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'

import Button from '../components/Button'
import styles from '../styles/home.module.css'



export default function Home() {
  const router = useRouter()
  return (
    <div className={styles.content}>

      <Grow in={true} mountOnEnter>
        <div>
          <h2 className={styles.title}>Boas-Vindas!</h2>
        </div>
      </Grow>

      <Slide direction="up" in={true} mountOnEnter unmountOnExit>
        <div className={styles.descriptionbox}>
          <p className={styles.description}>Aqui, você poderá pesquisar por CEPs e DDDs de todo o <strong className={styles.strong}>Brasil!</strong></p>
          <Button title="Ir para busca" onClick={() => router.push('/buscar')} />
        </div>
      </Slide>

      <Slide direction="up" in={true} mountOnEnter unmountOnExit>
        <div className={styles.socialmediabox}>
          <div className={styles.socialmedialogos}>

            <Image className={styles.facebook} src="/images/facebook.png" alt="facebook" width={64} height={64} onClick={() => router.push('https://www.facebook.com')} />
            <Image className={styles.instagram} src="/images/instagram.png" alt="instagram" width={64} height={64} onClick={() => router.push('https://www.instagram.com/')} />
            <Image className={styles.whatsapp} src="/images/whatsapp.png" alt="whatsapp" width={64} height={64} onClick={() => router.push('https://www.whatsapp.com/')} />
            <Image className={styles.github} src="/images/github.png" alt="github" width={64} height={64} onClick={() => router.push('https://github.com/Azbito')} />
          </div>
        </div>
      </Slide>

    </div>

  )
}
