// ************************************************
// Компонент для добавления форм "Курсы и тренинги"
// ************************************************

import React, {useContext, useRef, useState} from "react";

// MUI
import {Fab, Grid, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import AddIcon from '@mui/icons-material/Add';

// Контекст
import CoursesTrainingsContext from "../context/CoursesTrainingsContext";

// Компоненты
import CoursesTrainingsForm from "./CoursesTrainingsForm";


const CoursesTrainingsTemplate = () => {

    // Стейт с формами
    const [addCoursesTrainings, setAddCoursesTrainings] = useState([]);

    // Счетчик для функции удаления блоки и названия объекта
    const count = useRef(0);

    // Функция с добовлением блоков формами
    const onAddCoursesTrainings = () => {
        setAddCoursesTrainings(addCoursesTrainings.concat(
            <CoursesTrainingsForm
                delete={dell}
                key={count.current++}
                keyCount={count.current}
            />
        ));
    };

    // Получаем данные из родительского компонента
    const setCoursesTrainingsField = useContext(CoursesTrainingsContext);

    // Функция для удаления блока
    const dell = key => {
        setAddCoursesTrainings(prevState => prevState.filter(el => +el.key !== +key))
        setCoursesTrainingsField(prevState => delete prevState['coursesTrainings' + key])
    };

    return (
        <React.Fragment>
            <Grid container mt={4}>
                <Grid item={true} xs={0} md={2} xl={2}/>
                <Grid item={true} xs={12} md={8} xl={8}>
                    <Stack direction='row' spacing={2}>
                        <Typography variant="h5" sx={{color: 'text.primary'}}>
                            5. Курсы и тренинги
                        </Typography>
                        <Fab size="small" color="primary" aria-label="add" onClick={onAddCoursesTrainings}>
                            <AddIcon/>
                        </Fab>
                    </Stack>
                </Grid>
                <Grid item={true} xs={0} md={2} xl={2}/>
            </Grid>
            {addCoursesTrainings}
        </React.Fragment>
    );
};

export default React.memo(CoursesTrainingsTemplate);