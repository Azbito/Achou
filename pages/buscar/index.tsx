import { Slide } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import Button from "../../components/Button";
import searchPostalCode from "../../services/postalcodeapi";
import styles from './postalcodepage.module.css';

// classifying every data I use on my front-end

type postalCodeProps = {
  cep: string
  ddd: string
  localidade: string
  uf: string
}

type PostalCodePageProps = {
  postalCodeInfo: postalCodeProps
}


// Client side


export default function PostalCodePage({ postalCodeInfo }: PostalCodePageProps) {
  const [info, setInfo] = useState<postalCodeProps>(postalCodeInfo)
  const [code, setCode] = useState<any>(null)

  async function getPostalCode() {
    const datainfo = await searchPostalCode(code)
    setInfo(datainfo)
  }

  return (
    <div className={styles.content}>
      <div className={styles.card}>

        <input className={styles.input} onChange={((e: any) => setCode(e.target.value))}
          placeholder="Digite um CEP"
          value={code} />


        <Button title="Buscar" onClick={getPostalCode} />
        <h1 className={styles.title}>Dados do CEP</h1>
        <Slide direction="up" in={true} mountOnEnter unmountOnExit>
          <div className={styles.description}>

            <strong className={styles.info}>{info?.cep}</strong>
            <br />
            <strong className={styles.strong}>Cidade</strong> <p className={styles.info}>{info?.localidade}</p>
            <strong className={styles.strong}>Estado</strong> <p className={styles.info}>{info?.uf}</p>
            <strong className={styles.strong}>DDD</strong> <p className={styles.info}>{info?.ddd}</p>
          </div>

        </Slide>
      </div>

    </div>
  )

}

// Server side

export async function getServerSideProps() {
  const data = await searchPostalCode(80010000)

  return {
    props: {
      postalCodeInfo: data
    }
  }
}