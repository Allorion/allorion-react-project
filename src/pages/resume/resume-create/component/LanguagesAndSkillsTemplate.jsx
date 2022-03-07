// **************************************
// Компонент для добавления форм "Навыки"
// **************************************


import React, {useContext, useRef, useState} from "react";

// MUI
import {Fab, Grid, Paper} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import AddIcon from "@mui/icons-material/Add";

// Компоненты
import ComputerSkill from "./LanguagesAndSkillsForm";

// Контекст
import LanguagesAndSkillsContext from "../context/LanguagesAndSkillsContext";


const LanguagesAndSkillsTemplate = () => {

    // Стейт с формами
    const [addSkill, setAddSkill] = useState([]);

    // Счетчик для функции удаления блоки и названия объекта
    const count = useRef(0);

    // функция добавления компонента навыка
    const onAddSkill = () => {
        setAddSkill(addSkill.concat(
            <ComputerSkill
                delete={dell}
                key={count.current++}
                keyCount={count.current}
            />
        ));
    };

    // Получаем данные из родительского компонента
    const setLanguagesAndSkillsField = useContext(LanguagesAndSkillsContext);

    // Функция для удаления блока
    const dell = key => {
        setAddSkill(prevState => prevState.filter(el => +el.key !== +key))
        setLanguagesAndSkillsField(prevState => delete prevState['skill' + key])
    };

    return (
        <React.Fragment>
            <Grid container mt={4}>
                <Grid item={true} xs={0} md={2} xl={2}/>
                <Grid item={true} xs={12} md={8} xl={8}>
                    <Typography variant="h5" sx={{color: 'text.primary'}}>
                        6. Навыки
                    </Typography>
                    <Paper>
                        <Box pt={3} pb={3}>
                            <Container>
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

export default React.memo(LanguagesAndSkillsTemplate);