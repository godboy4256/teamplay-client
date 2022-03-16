export default function TypingInput(props : any){
    return (
        <>
            <label>{props.label}</label>
            <input type={props.type} placeholder={props.placeholder}/>
        </>
    )
}