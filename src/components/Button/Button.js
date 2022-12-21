import './Button.css';

export default function Button (props){
    const {label,onClick,id,customClass} = props
    const onBlurHandler = props.onBlur?props.onBlur: ()=>{};
   return(
     <button onBlur={onBlurHandler} className={`btn__cn ${customClass}`} onClick={()=>onClick(id)} >{label}</button>
   )
}