import React from 'react'
import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/eu.jpeg'

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Olá Mundo!</h1>
        <p className={styles.paragrafo}>
          Boas vindas ao meu espaço pessoal! Eu sou João Vitor Borges, Desenvolvedor Front-end Júnior. Aqui compartilho vários conhecimentos, espero que aprenda algo novo :)
        </p>
      </div>

      <div className={styles.imagens}>
          <img className={styles.circuloColorido} src={circuloColorido} alt='' aria-hidden = {true} />


          <img className={styles.minhaFoto} src={minhaFoto} alt="Foto do João Vitor" />
      </div>
    </div>
  )
}
