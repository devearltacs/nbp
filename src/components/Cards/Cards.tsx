import React from 'react'
import styles from '../../styles/components/Cards.module.css';

interface CardsInterface {
    cardLink: string;
    cardTitle: string;
    cardDescription: string;
    cardLinkTarget?: string;
    cardLinkRel?: string;
}

const Cards: React.FC<CardsInterface> = ({ cardLink, cardTitle, cardDescription, cardLinkTarget='', cardLinkRel='' }) => {
  return (
    <a href={cardLink} target={cardLinkTarget} rel={cardLinkRel}  className={styles.card}>
      <h2>{cardTitle} &rarr;</h2>
      <p>{cardDescription}</p>
    </a>
  )
}

export default Cards
