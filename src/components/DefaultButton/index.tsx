
import styles from './styles.module.css';


type DefaultButtonProps = {
  icon: React.ReactNode;
  color?: 'red' | 'yellow';
} & React.ComponentProps <'button'>;

export function DefaultButton ({ icon, color ='red', ...rest }: DefaultButtonProps ){
  return (
    <>
    <button className={`${styles.button} ${styles[color]}`} {...rest}>{icon}</button>
    </>
  );
}

// <CirclePlay />
// React.ReactNode = qualquer coisa que o react conseguir renderizar vai aparecer na tela