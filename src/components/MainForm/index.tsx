import { Cycles } from "../Cycles"
import { DefaultButton } from "../DefaultButton"
import { DefaultInput } from "../DefaultInput"
import { CirclePlay } from "lucide-react"

export function MainForm() {
  return (
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
  )
}