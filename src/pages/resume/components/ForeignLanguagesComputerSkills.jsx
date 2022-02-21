import React, {useContext, useEffect, useMemo, useState} from 'react';

// MUI
import {Box, Container, Grid, Paper, TextField, Typography, Fab} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

// Компоненты
import useForm from "../../../globalComponents/hooks/useForm";
import ComputerSkill from "./ComputerSkill";

// Контекст
import ComputerSkillContext from "../context/ComputerSkillContext";
import foreignLanguagesComputerSkillsContext from "../context/ForeignLanguagesComputerSkillsContext";


const ForeignLanguagesComputerSkills = () => {

    // Получаем стейт из родительского компонента через контекст
    const [foreignLanguagesComputerSkillsFiled, setForeignLanguagesComputerSkillsField] = useContext(
        foreignLanguagesComputerSkillsContext
    );

    // Стейты для добавления навыков
    const [skillField, setSkillField] = useState();
    const [addSkill, setAddSkill] = useState([]);

    // Вызов стейта навыка в дочернем компоненте
    const workSkillMemo = useMemo(() => {
        return setSkillField;
    }, [skillField]);

    // функция добавления компонента навыка
    const onAddSkill = () => {
        setAddSkill(addSkill.concat(
            <ComputerSkillContext.Provider
                value={workSkillMemo}
                key={addSkill.length}
            >
                <ComputerSkill
                    count={'skill' + addSkill.length}
                />
            </ComputerSkillContext.Provider>
        ));
    };

    useEffect(() => {
        setForeignLanguagesComputerSkillsField(value => ({
            ...value,
            'skills': skillField
        }))
    }, [skillField])


    const {handleChange} = useForm(setForeignLanguagesComputerSkillsField);
    return (
        <React.Fragment>
            <Grid container mt={4}>
                <Grid item={true} xs={0} md={2} xl={2}/>
                <Grid item={true} xs={12} md={8} xl={8}>
                    <Typography variant="h5" sx={{color: 'text.primary'}}>
                        6. Иностранные языки и компьютерные навыки
                    </Typography>
                    <Paper>
                        <Box pt={3} pb={3}>
                            <Container>
                                <TextField
                                    fullWidth
                                    name='foreignLanguages'
                                    value={foreignLanguagesComputerSkillsFiled.foreignLanguages}
                                    onChange={handleChange}
                                    id='input-foreign-languages'
                                    label="Какие иностранные языки вы знаете"
                                    variant="standard"
                                    helperText='Укажите через запятую иностранные языки'
                                />
                                <TextField
                                    fullWidth
                                    name='faculty'
                                    value={foreignLanguagesComputerSkillsFiled.faculty}
                                    onChange={handleChange}
                                    id='input-faculty'
                                    label="Учебное заведение"
                                    variant="standard"
                                    helperText='Укажите учебное заведение где проходии курс\тренинг'
                                />
                                {addSkill}
                                <Fab
                                    sx={{marginTop: 2}}
                                    variant="extended"
                                    size="small"
                                    color="primary"
                                    aria-label="add"
                                    onClick={onAddSkill}
                                >
                                    <AddIcon/>
                                    Добавить навык
                                </Fab>
                            </Container>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default React.memo(ForeignLanguagesComputerSkills);