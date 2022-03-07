// *******************************************
// Компонент для добавления форм "Образование"
// *******************************************


import React, {useContext, useRef, useState} from "react";

// MUI
import {Fab, Grid, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import AddIcon from '@mui/icons-material/Add';

// Контекст
import EducationFormContext from "../context/EducationFormContext";

// Компоненты
import EducationForm from "./EducationForm";


const EducationTemplate = () => {

    // Стейт с формами
    const [addEducation, setAddEducation] = useState([]);

    // Счетчик для функции удаления блоки и названия объекта
    const count = useRef(0);

    // Функция с добовлением блоков формами
    const onAddEducation = () => {
        setAddEducation(addEducation.concat(
            <EducationForm
                delete={dell}
                key={count.current++}
                keyCount={count.current}
            />
        ));
    };

    // Получаем данные из родительского компонента
    const setEducationField = useContext(EducationFormContext);

    // Функция для удаления блока
    const dell = key => {
        setAddEducation(prevState => prevState.filter(el => +el.key !== +key))
        setEducationField(prevState => delete prevState['skill' + key])
    };

    return (
        <React.Fragment>
            <React.Fragment>
                <Grid container mt={4}>
                    <Grid item={true} xs={0} md={2} xl={2}/>
                    <Grid item={true} xs={12} md={8} xl={8}>
                        <Stack direction='row' spacing={2}>
                            <Typography variant="h5" sx={{color: 'text.primary'}}>
                                4. Образование
                            </Typography>
                            <Fab size="small" color="primary" aria-label="add" onClick={onAddEducation}>
                                <AddIcon/>
                            </Fab>
                        </Stack>
                    </Grid>
                    <Grid item={true} xs={0} md={2} xl={2}/>
                </Grid>
                {addEducation}
            </React.Fragment>
        </React.Fragment>
    );
};

export default React.memo(EducationTemplate);