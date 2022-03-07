// *******************************************
// Компонент с формой "Навыки" для резюме
// *******************************************


import React, {useContext, useEffect, useState} from 'react';

// MUI
import {Box, Rating, Stack, TextField} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import StarIcon from "@mui/icons-material/Star";

// Пользовательские хуки
import useForm from "../../../../globalComponents/hooks/useForm";

// Контекст
import LanguagesAndSkillsContext from "../context/LanguagesAndSkillsContext";


// Элементы списка уровня навыков
const labels = {
    1: 'Junior',
    2: 'Junior +',
    3: 'Middle',
    4: 'Middle +',
    5: 'Senior'
};

// Стандартные значения полей формы для отправки в пользовательский хук заполнения формы
const skill = {
    skill: '',
    hoverFeedback: 1
};

const LanguagesAndSkillsForm = props => {

    // Получаем функции из пользовательского хука для заполнения формы
    const {value, handleChange, handleRating} = useForm(skill);

    // Стейт выбора уровня владения навыком
    const [hover, setHover] = useState(1);

    // Получаем данные из родительского компонента
    const setLanguagesAndSkillsField = useContext(LanguagesAndSkillsContext);

    // Передаем данные в родительский компонент при изменении полей формы
    useEffect(() => {
        setLanguagesAndSkillsField(values => ({
            ...values,
            ['skill' + props.keyCount]: value
        }));
    }, [props.keyCount, setLanguagesAndSkillsField, value]);

    return (
        <React.Fragment>
            <Stack direction='row' spacing={2}>
                <TextField
                    name='skill'
                    value={value.skill}
                    onChange={handleChange}
                    id='input-skill'
                    label="Навык"
                    variant="standard"
                    helperText='Укажите навык, иностранный язык и д.р.'
                />
                <Box
                    sx={{
                        width: 200,
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <Rating
                        precision={1}
                        name="hoverFeedback"
                        value={value.hoverFeedback}
                        onChange={(event, newValue) => {
                            handleRating(newValue, 'hoverFeedback')
                        }}
                        onChangeActive={(event, newHover) => {
                            setHover(newHover);
                        }}
                        emptyIcon={<StarIcon style={{opacity: 0.55}}
                                             fontSize="inherit"/>}
                    />
                    {value.hoverFeedback !== null && (
                        <Box sx={{ml: 2}}>{labels[hover !== -1 ?
                            hover : value.hoverFeedback]}</Box>
                    )}
                </Box>
                <Box pt={2}>
                    <IconButton aria-label="delete" size="small" onClick={() => {
                        props.delete(props.keyCount)
                    }}>
                        <DeleteIcon/>
                    </IconButton>
                </Box>
            </Stack>
        </React.Fragment>
    );
};

export default React.memo(LanguagesAndSkillsForm);