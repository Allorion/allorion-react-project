import React, {useContext, useEffect, useState} from 'react';

// MUI
import {Box, Container, Grid, Paper, Stack, TextField} from "@mui/material";
import {LocalizationProvider, MobileDatePicker} from "@mui/lab";
import AdapterDateFns from '@mui/lab/AdapterDateFns';

// Дополнительные модули
import ruLocale from 'date-fns/locale/ru';
import useForm from "../../../globalComponents/hooks/useForm";

// Контекст
import CoursesTrainingsContext from "../context/CoursesTrainingsContext";

const CoursesTrainings = props => {

    const [coursesTrainingsField, setCoursesTrainingsField] = useState({
        titleCourse: '', faculty: '', yearGraduationCourse: null, duration: ''
    })

    // Добавление контекста родительского компонента
    const setValues = useContext(CoursesTrainingsContext);

    // Добавляем пользовательский хук для добавления данных в стейт компонента
    const {handleChange} = useForm(setCoursesTrainingsField);

    // Добавление в стейт блока полей формы
    useEffect(() => {
        setValues(values => ({
            ...values,
            [props.count]: coursesTrainingsField
        }));
    }, [props.count, setValues, coursesTrainingsField]);

    // Блок добавления данных не подходящих для добавления через пользовательский хук
    const handleYearGraduationCourse = event => {
        setCoursesTrainingsField(value => ({
            ...value,
            'yearGraduationCourse': event
        }));
    };

    return (
        <React.Fragment>
            <Grid container mt={2}>
                <Grid item={true} xs={0} md={2} xl={2}/>
                <Grid item={true} xs={12} md={8} xl={8}>
                    <Paper>
                        <Box pt={3} pb={3}>
                            <Container>
                                <TextField
                                    fullWidth
                                    name='titleCourse'
                                    value={coursesTrainingsField.titleCourse}
                                    onChange={handleChange}
                                    id='input-title-course'
                                    label="Название курса\тренинга"
                                    variant="standard"
                                    helperText='Введите название курса или тренинга'
                                />
                                <TextField
                                    fullWidth
                                    name='faculty'
                                    value={coursesTrainingsField.faculty}
                                    onChange={handleChange}
                                    id='input-faculty'
                                    label="Учебное заведение"
                                    variant="standard"
                                    helperText='Укажите учебное заведение где проходии курс\тренинг'
                                />
                                <Stack direction="row" spacing={2}>
                                    <LocalizationProvider dateAdapter={AdapterDateFns} locale={ruLocale}>
                                        <Stack>
                                            <MobileDatePicker
                                                label="Год окончания"
                                                views={['year']}
                                                name='yearGraduationCourse'
                                                value={coursesTrainingsField.yearGraduationCourse}
                                                onChange={handleYearGraduationCourse}
                                                renderInput={(params) =>
                                                    <TextField {...params}
                                                               variant='standard'
                                                               helperText="Укажите год окончания курса\тренинга"
                                                    />}
                                            />
                                        </Stack>
                                    </LocalizationProvider>
                                    <TextField
                                        fullWidth
                                        name='duration'
                                        value={coursesTrainingsField.duration}
                                        onChange={handleChange}
                                        id='input-duration'
                                        label="Продолжительность"
                                        variant="standard"
                                        helperText='Укажите продолжительность курса\тренинга'
                                    />
                                </Stack>
                            </Container>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default React.memo(CoursesTrainings);