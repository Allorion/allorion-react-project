// *******************************************
// Компонент для добавления форм "Опыт работы"
// *******************************************


import React, {useContext, useRef, useState} from "react";

// MUI
import {Fab, Grid, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import AddIcon from '@mui/icons-material/Add';

// Компоненрты
import WorkExperienceForm from "./WorkExperienceForm";
import WorkExperienceFormContext from "../context/WorkExperienceFormContext";



const WorkExperienceTemplate = () => {

    // Стейт с формами
    const [addWorkExperience, setAddWorkExperience] = useState([]);

    // Счетчик для функции удаления блоки и названия объекта
    const count = useRef(0);

    // Функция с добовлением блоков формами
    const onAddWorkExperience = () => {
        setAddWorkExperience(addWorkExperience.concat(
            <WorkExperienceForm
                count={addWorkExperience.length}
                delete={dell}
                key={count.current++}
                keyCount={count.current}
            />
        ));
    };

    // Получаем данные из родительского компонента
    const setWorkExperienceField = useContext(WorkExperienceFormContext);

    // Функция для удаления блока
    const dell = key => {
        setAddWorkExperience(prevState => prevState.filter(el => +el.key !== +key))
        setWorkExperienceField(prevState => delete prevState['workExperience' + key])
    };

    return (
        <React.Fragment>
            <Grid container mt={4}>
                <Grid item={true} xs={0} md={2} xl={2}/>
                <Grid item={true} xs={12} md={8} xl={8}>
                    <Stack direction='row' spacing={2}>
                        <Typography variant="h5" sx={{color: 'text.primary'}}>
                            3. Опыт работы
                        </Typography>
                        <Fab size="small" color="primary" aria-label="add" onClick={onAddWorkExperience}>
                            <AddIcon/>
                        </Fab>
                    </Stack>
                </Grid>
                <Grid item={true} xs={0} md={2} xl={2}/>
            </Grid>
            {addWorkExperience}
        </React.Fragment>
    );
};

export default React.memo(WorkExperienceTemplate);