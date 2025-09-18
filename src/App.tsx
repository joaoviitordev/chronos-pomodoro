
import './styles/theme.css'
import './styles/global.css'

import { Heading } from './components/Heading';
import { Container } from './components/Container';

export function App() {
  
  return (
    <>
      <Container>  
        <Heading>LOGO</Heading>
      </Container>

      <Container>
        <Heading>MENU</Heading>
      </Container>
      </>
  );
}

// EXPLICAÇÃO DANDO INÍCIO AO PROJETO
//<Container>  container é um componente que recebe um children "heading" que é outro componente
// <Heading>LOGO</Heading> que recebe logo que é um children/componente
//</Container>













// EXPLICAÇÃO SEM O INICIO DO PROJETO
// <> e </> funcionam como uma div, em react não pode existir mais de um 
// elemento filho solto ex.: h1 e p precisam ser envelopados por div ou <> </>
// <> </> são chamados de react fragment é usados qunado não se quer usar um elemento pai (ex.: div)
// um componente no react é basicamente uma função (function), bem parecido com js   
// import funciona como "links"
// <Heading>Olá, Mundo!</Heading> agora o heading está fechando a tag pq o "Olá, Mundo!" é u  children (filho)
// attr é meu "atributo" pode ser pra Number, String...