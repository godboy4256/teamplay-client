import { v4 as uuidv4 } from "uuid";

export default function Select(props : any){
    return (
        <>
            <label>{props.label}</label>
            <div>
                {
                    props.optionList.length > 1 ? 
                    <select>
                        {
                            props.optionList.map((el : any) => {
                                return <option key={uuidv4()}>
                                    
                                </option>
                            })
                        }
                    </select>
                     : <select>
                    {
                        props.optionList.map((el : any) => {
                            return <option key={uuidv4()} value={el}>
                                {el}
                            </option>
                        })
                    }
                    </select>
                }
            </div>
        </>        
    )
}