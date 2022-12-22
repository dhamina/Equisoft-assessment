import { useState } from "react";
import { filterNumbers, sortNumbers } from "../../Utils";
import Button from "../Button/Button";
import InputField from "../InputField/InputField";
import { Menu } from "../Menu/Menu";
import "./AppComponent.css";

export default function AppComponent() {
  const [numbers, setNumbers] = useState(["", "", ""]);
  const [highLight, setHighLight] = useState([]);
  const [open, setOpen] = useState(false);
  const [customOptions, setCustonButton] = useState(["odd", "even", "positive", "negative" ]);
  const [buttons, setButtons] = useState([{name: "biggest",id: "big"},{ name: "smallest",id: "small"} ]);

  const handleInputchange = (id, e) => {
    let newFormValues = [...numbers];
    const currentValue = e.target.value ? Number(e.target.value) : "";
    newFormValues[id] = currentValue;
    setNumbers(newFormValues);
    setHighLight([]);
  };
  const onInputAddHandler = () => {
    setNumbers(numbers.concat(""));
  };
  const onButtonHandler = (type) => {
    const temp = [...numbers];
    const filter = temp.filter((r) => r !== "");
    if(filter.length>0){
      const sorted = sortNumbers(filter);
      setHighLight(filterNumbers(type, sorted));
    }
  };

  const onButtonChooseHandler = (type, position) => {
    let data = {name: type, id: type,};
    const temp = [...customOptions];
    temp.splice(position, 1);
    setCustonButton(temp);
    setButtons(buttons.concat(data));
    onCloseHandler();
  };
  const onOpenHandle = () => {
    setOpen(!open);
  };
  const onCloseHandler = () => {
    setOpen(false);
  };

  return (
    <div className="cn">
      <div className="ipn__cn">
        <Button
          customClass="white-btn"
          label="Add Input"
          onClick={onInputAddHandler}
        />
        {customOptions.length !== 0 && (
          <div className="menu__cn">
            <Button  customClass="white-btn" label="Add Custom Button"onClick={onOpenHandle} />
            {open && (<Menu options={customOptions} onButtonChooseHandler={onButtonChooseHandler} /> )}
          </div>
        )}
      </div>
      <div className="ipn__cn">
        {numbers.map((r, index) => {
          return (
            <InputField
              id={index}
              type="number"
              onChangeHandler={handleInputchange}
              value={r}
              isFocus={highLight.includes(r)}
            />
          );
        })}
      </div>
      <div className="ipn__cn">
        {buttons.map((r) => {
          return <Button id={r.id} label={r.name} onClick={onButtonHandler} />;
        })}
      </div>
    </div>
  );
}
