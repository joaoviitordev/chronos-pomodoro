import styles from './styles.module.css';

type HeadingProps = { // minha tipagem, faz o erro do props na function sumir
  children: React.ReactNode; // tudo que o react aceita como children é desse tipo React.ReactNode
}


export function Heading(props: HeadingProps ) {
    const classes = `${styles.cyan} ${styles.heading}` // "classes" css
  return <h1 className={classes}>{props.children}</h1>; //componente className
}

// no jsx não se usa class dentro de um elemento por ex.: <h1 class="">
// isso porque class é uma palavra reservada do javascript e não pode
// se usada em jsx, o que substitui isso é className
// className={styles.xxx} desse modo não terá conflito de classes!!!
// usando const para criar uma "variavel" fica mais facil de para colocar tudo na className
// logo, é possivel usar mais de uma classe em um componente
// props é "propriedades do componente" ele é basicamente uma "vazio"
// {props.children} é javascript ele ta diretamente ligado com o <Heading>Olá, Mundo!</Heading>
// já que o "Olá, Mundo!" é children de heading