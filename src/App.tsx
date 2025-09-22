import { Menu } from './components/Menu';
import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/Defaultinput';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';
import { CirclePlay } from 'lucide-react';
//import { CircleStop } from 'lucide-react';
import { Footer } from './components/Footer';


import './styles/theme.css';
import './styles/global.css';
;


export function App() {



  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form action="" className="form">
          <div className="formRow">
            <DefaultInput id='meuInput' labelText='Tarefa:' type='text' placeholder='Ex.: estudar...' /> 
          </div>

          <div className="formRow">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="formRow">
            <Cycles />
          </div>

          <div className="formRow">
            <DefaultButton icon={<CirclePlay />} color='red'/>
            {/*<DefaultButton icon={<CircleStop />} color='yellow'/>*/}
          </div>
        </form>
      </Container>

      <Container>
        <Footer />
      </Container>
    </>
  );
}

// EXPLICAÇÃO DANDO INÍCIO AO PROJETO
//<Container>  container é um componente que recebe um children "heading" que é outro componente
// <Heading>LOGO</Heading> que recebe logo que é um children/componente
//</Container>
// <DefaultInput /> é meu label + input

// Hooks: Um Hook (ou "gancho", em português) no React é uma função especial que permite usar estado e outros recursos do React em componentes funcionais, sem a necessidade de escrever classes.Exemplos de Hooks integrados incluem useState, que permite gerenciar o estado local de um componente,  e useEffect, usado para lidar com efeitos colaterais como chamadas de API. 
// eu quero que todos os componentes que usam "numero"
// saibam da mudança em seu valor, pra isso eu uso hook!
// sempre que eu usar useState, não vou usar atribuição diretamente
// sempre que eu depender do valor anterior eu usa a function prevState
// const [numero, setNumero] = useState (() => {
//    console.log ('Lazy initialization');
//    return 0;
//  });
//const [numero, setNumero] = useState(0)
//function handleClick (){
//  setNumero(prevState => prevState + 1);
//}


// EXPLICAÇÃO SEM O INICIO DO PROJETO
// <> e </> funcionam como uma div, em react não pode existir mais de um
// elemento filho solto ex.: h1 e p precisam ser envelopados por div ou <> </>
// <> </> são chamados de react fragment é usados qunado não se quer usar um elemento pai (ex.: div)
// um componente no react é basicamente uma função (function), bem parecido com js
// import funciona como "links"
// <Heading>Olá, Mundo!</Heading> agora o heading está fechando a tag pq o "Olá, Mundo!" é u  children (filho)
// attr é meu "atributo" pode ser pra Number, String...


// OBS.: Tem coisas que eu apago no código, mas deixo aqui como comentário apenas como conhecimento, não necessariamente eu vou usar no código !