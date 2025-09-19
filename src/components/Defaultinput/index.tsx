type DefaultInputProps = {
  id: string;
  labelText: string;
} & React.ComponentProps <'input'>;

export function DefaultInput({ id, type, labelText, ...rest }: DefaultInputProps){
  return(
    <>
    <label htmlFor={id}>{labelText}</label>
    <input type={type} id={id} {...rest} />
    </>
  )
}



// OBS.: props = any = qualquer
// quando tenho dois elementos como o label e input eu preciso colocar o fraguemento <> </>
// type DefaultInputProps = {
//   type: string;
// } sem isso meu input não funciona como deve

// type DefaultInputProps = {
//   type: 'text' | 'number' | 'search'; essa forma se chama de UnionType (usa-se essa | = ou um ou outro)
// }                                     para deixar de maneira fixa quais são os tipos que o input deve aceitar
// o & = união na matemática, basicamente uni todas as propriedades do objeto, diferentemente do ( | )
// type DefaultInputProps = {} & React.ComponentProps <'input'>; meu tipo está vazio {} 
// & React.ComponentProps = os componentes quaisquer do react será iguais do <'input'> ai fica igual do html padrão
//  labelText?: string; essa ? informa ao typescript que essa propriedade é opcional !
// {labelText ? 'Verdadeiro':'Falso'} isso é uma condição igual do js, se tiver labelText la no outro arquivo, então, será verdadeiro se não será falso  
// {labelText && <label htmlFor={id}>{labelText}</label>} = se 
// labelText for verdadeiro = <label htmlFor={id}>{labelText}</label>} o && = se permite uma unica opção 
// ...rest = diz que é pra pegar todas as parametros que estão sobrando
//
//
//
// OBS.: Tem coisas que eu apago no código, mas deixo aqui como comentário apenas como conhecimento, não necessariamente eu vou usar no código !

