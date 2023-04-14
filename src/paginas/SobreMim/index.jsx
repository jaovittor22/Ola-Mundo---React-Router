import PostModelo from 'componentes/PostModelo'
import React from 'react'
import fotoCapa from 'assets/sobre_mim_capa.png'
import styles from './SobreMim.module.css'
import fotoSobreMim from 'assets/fotosobremim.jpeg'

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">

      <h3 className={styles.subtitulo}>
        Olá, eu sou o João Vitor!
      </h3>

      <img src={fotoSobreMim} alt="Foto do João Vitor Borges" className={styles.fotoSobreMim} />

      <p className={styles.paragrago}>
        Oi, tudo bem? Eu sou desenvolvedor de Front-end Júnior e estou feliz de te ver por aqui.
      </p>

      <p className={styles.paragrafo}>
        Me interesso por tecnologia desde pequeno, passava horas no youtube assistindo sobre o assunto e com o passar dos anos meu interesse só foi aumentando pela área, até que descobri a programação e pensei "É isso", já sabia desde o colegial que era isso que eu queria pro meu futuro e sei que agora chegou a hora de eu colocar todo meu conhecimento em prática, foram anos de faculdade que me ensinaram muito, mas o que eu aprendi de verdade veio por mim mesmo sendo sincero, sou muito dedicado e não há nada que eu não consiga aprender com esforço e treino, espero conseguir uma chance para mostrar do que sou capaz e crescer profissionalmente.
      </p>

      <p className={styles.paragrafo}>
        No ensino superior, escolhi cursar Engenharia da Computação no Centro Universitário Ingá - Maringá/PR. Lá eu aprendi muito, não só conhechimento, mas a ter uma boa convivência em grupo, me considero hoje em dia alguém extrovertido que tem facilidade de se adaptar e fazer as pessoas ao redor se abrirem comigo.
      </p>

      <p className={styles.paragrafo}>
        No ensino superior me apaixonei pela área de Front-end e é nisso que venho me dedicando desde então, acabei a faculdade a pouco tempo, mas não parei desde então, estudei com o apoio da Alura muitos cursos de Front-end disponíveis, HTML, CSS, JS e REACT, foram meus principais focos.
      </p>

      

    </PostModelo>
  )
}
