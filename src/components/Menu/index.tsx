import { useState, useEffect } from 'react';
import styles from './styles.module.css';
import { HouseIcon, HistoryIcon, WrenchIcon, SunIcon } from 'lucide-react'

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>('dark');
  
  function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>){
    event.preventDefault(); // para quando clicar no tema ele não seguir um link
  
    setTheme(prevTheme =>{
      const nextTheme = prevTheme ==='dark' ? 'light' : 'dark';
      return nextTheme;
    })
  }

  useEffect(() =>{
    console.log('Theme mudou', theme, Date.now());
    document.documentElement.setAttribute('data-theme', theme); // vem do proprio html
  }, [theme]); // Executa apenas quando o valor de theme muda

  return <nav className={styles.menu}>
    
    <a className={styles.menuLink} href="#" aria-label='Página Inicial' title='Página Inicial'>
      <HouseIcon />
    </a>
    <a className={styles.menuLink} href="#"aria-label='Histórico de Tarefas' title='Histórico de Tarefas'>
      <HistoryIcon />
    </a>
    <a className={styles.menuLink} href="#"aria-label='Configurações do Timer' title='Configurações do Timer'>
      <WrenchIcon />
    </a>
    <a className={styles.menuLink} href="#"aria-label='Tema Claro e Escuro' title='Tema Claro e Escuro' onClick={handleThemeChange}>
      <SunIcon />
    </a>
  </nav>; 
}
// title faz aparecer o nome quando o mouse está sobre o determinado ícone
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

// useEffect(() => {
//   console.log('useEffect sem dependências', Date.now());
// }); // Executado toda vez que o componente renderiza na tela 

//  useEffect(() => {
//     console.log('useEffect com array vazio dependências', Date.now());
//  }, []); // Executa apenas uma vez ao renderizar o componente na tela "salva"