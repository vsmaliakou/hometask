import React, {ChangeEvent, useState} from "react";
import SuperInputText from "./common/c1-SuperInputText/SuperInputText";
import s from "./HW4.module.css";
import SuperButton from "./common/c2-SuperButton/SuperButton";
import SuperCheckbox from "./common/c3-SuperCheckbox/SuperCheckbox";

function HW4() {
    const [text, setText] = useState<string>("");
    let [error, setError] = useState<string|null>(null)
    let red: boolean
    text ? red = false : red = true
    const eRror = text ? "" : "ERROR";
    const showAlert = () => {
        if (text.trim()) {
            alert(text.trim());
            setText("")
        } else {
            setError(eRror)
            alert("введите текст...");// если нет ошибки показать текст
            setText("")
        }
        setText("")
    }

    const [checked, setChecked] = useState<boolean>(false);
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) =>setChecked(e.currentTarget.checked)

    return (
        <div>
            <hr/>
            homeworks 4

            <div className={s.column}>
                {/*should work (должно работать)*/}
                <SuperInputText
                    value={text}
                    onChangeText={setText}
                    onEnter={showAlert}
                    error={error}
                    setError={setError}
                    // className={s.blue} // проверьте, рабоет ли смешивание классов
                />

                {/*should work (должно работать)*/}
                <SuperButton
                    error={error}
                    red={red} // пропсу с булевым значением не обязательно указывать true
                    onClick={showAlert}
                >
                    {error ? "DELETE" : "OK"} {/*// название кнопки попадёт в children*/}
                </SuperButton>

                {/*should work (должно работать)*/}
                <SuperCheckbox
                    checked={checked}
                    onChangeChecked={setChecked}
                >
                    some text {/*// этот текст попадёт в children*/}
                </SuperCheckbox>

                {/*// onChange тоже должен работать*/}
                <SuperCheckbox checked={checked} onChange={testOnChange}>
                    some more text
                </SuperCheckbox>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperInputText/>*/}
            {/*<AlternativeSuperButton/>*/}
            {/*<AlternativeSuperCheckbox/>*/}
            <hr/>
        </div>
    );
}

export default HW4;