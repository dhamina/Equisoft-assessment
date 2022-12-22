import './Menu.css'
export function Menu (props){
    const customOptions = props.options;
    const onButtonChooseHandler = props.onButtonChooseHandler;
    return(
        <ul className="menu">
        {customOptions.map((r, index) => {
          return (
            <li
              onClick={() => onButtonChooseHandler(r, index)}
              className="menu-item"
            >
              <p>{r}</p>
            </li>
          );
        })}
      </ul>
    )
}