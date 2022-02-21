import React, {useRef, useState} from "react";
import {TextField} from "@mui/material";
import useFieldChange from "../../globalComponents/hooks/useForm";

const Input = (props) => {
    return(
        <TextField
            fullWidth
            name={props.name}
            id='input-organization'
            label="Организация"
            variant="standard"
            helperText='Введите организацию'
        />
    )
};

export default function Home() {

    const [inputList, setInputList] = useState([]);

    const onAddBtnClick = () => {
        setInputList(inputList.concat(<Input name={'www' + inputList.length} key={inputList.length}/>));
    };

    return (
        <div>
            <button onClick={onAddBtnClick}>Add input</button>
            {inputList}
        </div>
    );
};