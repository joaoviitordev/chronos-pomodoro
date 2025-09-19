import styles from './styles.module.css'

export function Footer () {
  return (
    <>
    <a className={styles.footer} href="#">Entenda a técnica pomodoro 🍅</a>
    <a className={styles.footer} href="https://github.com/joaoviitordev/chronos-pomodoro" target='_blank'>Repositório desse projeto!</a>
    </>
  );
}