import { Heading } from "./components/Heading";

import './styles/theme.css'
import './styles/global.css'

export function App() {
  
  return (
    <>
      <Heading attr={123}>Olá, Mundo!</Heading>
      
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
        reprehenderit placeat autem cupiditate eaque deserunt iste quibusdam
        enim itaque. Alias odio assumenda eaque ex consectetur excepturi quasi
        quas? Illo, quasi.
      </p>
    </>
  );
}

// <> e </> funcionam como uma div, em react não pode existir mais de um 
// elemento filho solto ex.: h1 e p precisam ser envelopados por div ou <> </>
// <> </> são chamados de react fragment é usados qunado não se quer usar um elemento pai (ex.: div)
// um componente no react é basicamente uma função (function), bem parecido com js   
// import funciona como "links"
// <Heading>Olá, Mundo!</Heading> agora o heading está fechando a tag pq o "Olá, Mundo!" é u  children (filho)
// attr é meu "atributo" pode ser pra Number, String...