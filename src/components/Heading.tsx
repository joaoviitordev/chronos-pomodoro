import styles from './Heading.module.css';

export function Heading() {
    const classes = `${styles.cyan} ${styles.heading}` // "classes" css
  return <h1 className={classes}>Olá, Mundo!</h1>; //componente className
}

// no jsx não se usa class dentro de um elemento por ex.: <h1 class="">
// isso porque class é uma palavra reservada do javascript e não pode
// se usada em jsx, o que substitui isso é className
// className={styles.xxx} desse modo não terá conflito de classes!!!
// usando const para criar uma "variavel" fica mais facil de para colocar tudo na className
// logo, é possivel usar mais de uma classe em um componente