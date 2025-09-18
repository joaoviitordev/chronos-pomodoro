import styles from './styles.module.css';
import { HouseIcon, HistoryIcon, WrenchIcon, SunIcon } from 'lucide-react'


export function Menu() {
  return <nav className={styles.menu}>
    <a className={styles.menuLink} href="#">
      <HouseIcon />
    </a>
    <a className={styles.menuLink} href="#">
      <HistoryIcon />
    </a>
    <a className={styles.menuLink} href="#">
      <WrenchIcon />
    </a>
    <a className={styles.menuLink} href="#">
      <SunIcon />
    </a>
  </nav>; 
}

// no jsx não se usa class dentro de um elemento por ex.: <h1 class="">
// isso porque class é uma palavra reservada do javascript e não pode
// se usada em jsx, o que substitui isso é className
// className={styles.xxx} desse modo não terá conflito de classes!!!
// usando const para criar uma "variavel" fica mais facil de para colocar tudo na className
// logo, é possivel usar mais de uma classe em um componente
// props é "propriedades do componente" ele é basicamente uma "vazio"
// {props.children} é javascript ele ta diretamente ligado com o <Logo>Olá, Mundo!</Logo>
// já que o "Olá, Mundo!" é children de logo

// type LogoProps = { // minha tipagem, faz o erro do props na function sumir
//  children: React.ReactNode; // tudo que o react aceita como children é desse tipo React.ReactNode
// }