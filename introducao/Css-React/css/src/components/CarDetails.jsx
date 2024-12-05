import React from 'react'
import styles from './Car.module.css'

const CarDetails = ({color, brand, km}) => {
  return (
    <div>
        <h2 className={styles.title}>{brand}</h2>
        <ul>
            <li className={styles.list}>Cor: {color}</li>
            <li className={styles.list}>Km: {km}</li>
        </ul>
    </div>
  )
}

export default CarDetails