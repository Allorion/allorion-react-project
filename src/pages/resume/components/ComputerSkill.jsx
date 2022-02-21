import React, {useContext, useEffect, useState} from 'react';

// MUI
import {Box, Rating, Stack, TextField} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

// Контекст
import ComputerSkillContext from "../context/ComputerSkillContext";

// Элементы списка уровня навыков
const labels = {
    1: 'Junior',
    2: 'Junior +',
    3: 'Middle',
    4: 'Middle +',
    5: 'Senior'
};

const ComputerSkill = props => {

    // Стейт полей формы
    const [skill, setSkill] = useState({
        skill: '',
        hoverFeedback: 1
    })

    // Стейт выбора уровня владения навыком
    const [hover, setHover] = useState(1);

    // Добавление контекста родительского компонента
    const setValues = useContext(ComputerSkillContext);

    // Добавление в стейт родительского компонента
    useEffect(() => {
        setValues(values => ({
            ...values,
            [props.count]: skill
        }));
    }, [props.count, setValues, skill]);

    return (
        <React.Fragment>
            <Stack direction='row' spacing={2}>
                <TextField
                    name='skill'
                    value={skill.skill}
                    onChange={(event) => {
                        setSkill(value => ({
                            ...value,
                            'skill': event.target.value
                        }));
                    }}
                    id='input-skill'
                    label="Навык"
                    variant="standard"
                    helperText='Укажите навык'
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
                        value={skill.hoverFeedback}
                        onChange={(event, newValue) => {
                            setSkill(value => ({
                                ...value,
                                'hoverFeedback': newValue
                            }));
                        }}
                        onChangeActive={(event, newHover) => {
                            setHover(newHover);
                        }}
                        emptyIcon={<StarIcon style={{opacity: 0.55}}
                                             fontSize="inherit"/>}
                    />
                    {skill.hoverFeedback !== null && (
                        <Box sx={{ml: 2}}>{labels[hover !== -1 ?
                            hover : skill.hoverFeedback]}</Box>
                    )}
                </Box>
            </Stack>
        </React.Fragment>
    );
};

export default React.memo(ComputerSkill);