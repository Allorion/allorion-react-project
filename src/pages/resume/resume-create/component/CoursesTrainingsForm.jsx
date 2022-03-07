// ************************************************
// Компонент с формой "Курсы и тренинги" для резюме
// ************************************************


import React, {useContext, useEffect} from "react";

// Пользовательские хуки
import useForm from "../../../../globalComponents/hooks/useForm";

// Контекст
import CoursesTrainingsContext from "../context/CoursesTrainingsContext";

// MUI
import {Grid, Paper, Stack, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import {LocalizationProvider, MobileDatePicker} from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

// Сторонние модули
import {ru} from "date-fns/locale";


// Стандартные значения полей формы для отправки в пользовательский хук заполнения формы
const coursesTrainingsField = {
    titleCourse: '', faculty: '', yearGraduationCourse: null, duration: ''
};


const CoursesTrainingsForm = props => {

    // Получаем функции из пользовательского хука для заполнения формы
    const {value, handleChange, handleInputDate} = useForm(coursesTrainingsField);

    // Получаем данные из родительского компонента
    const setCoursesTrainingsField = useContext(CoursesTrainingsContext);

    // Передаем данные в родительский компонент при изменении полей формы
    useEffect(() => {
        setCoursesTrainingsField(values => ({
            ...values,
            ['coursesTrainings' + props.keyCount]: value
        }));
    }, [props.keyCount, setCoursesTrainingsField, value]);

    return (
        <React.Fragment>
            <Grid container mt={2}>
                <Grid item={true} xs={0} md={2} xl={2}/>
                <Grid item={true} xs={12} md={8} xl={8}>
                    <Paper>
                        <Box pt={3} pb={3}>
                            <Container>
                                <IconButton aria-label="delete" size="small"  onClick={() => {
                                    props.delete(props.keyCount)
                                }}>
                                    <DeleteIcon/>
                                </IconButton>
                                <TextField
                                    fullWidth
                                    name='titleCourse'
                                    value={value.titleCourse}
                                    onChange={handleChange}
                                    id='input-title-course'
                                    label="Название курса\тренинга"
                                    variant="standard"
                                    helperText='Введите название курса или тренинга'
                                />
                                <TextField
                                    fullWidth
                                    name='faculty'
                                    value={value.faculty}
                                    onChange={handleChange}
                                    id='input-faculty'
                                    label="Учебное заведение"
                                    variant="standard"
                                    helperText='Укажите учебное заведение где проходии курс\тренинг'
                                />
                                <Stack direction="row" spacing={2}>
                                    <LocalizationProvider dateAdapter={AdapterDateFns} locale={ru}>
                                        <Stack>
                                            <MobileDatePicker
                                                label="Год окончания"
                                                views={['year']}
                                                value={value.yearGraduationCourse}
                                                onChange={(event) => {
                                                    handleInputDate(event, 'yearGraduationCourse')
                                                }}
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
                                        value={value.duration}
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

export default React.memo(CoursesTrainingsForm);