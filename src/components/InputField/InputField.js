import './InputField.css'
export default function InputField (props){
    const {value, onChangeHandler,id,type,isFocus} = props
    const handleChange=(e)=>{
      onChangeHandler(id,e)
    }
   return(
     <input type={type} value={value} onChange={handleChange} className={`ip_cn ${isFocus?'ip__cn__focus':''}`} />
   )
}