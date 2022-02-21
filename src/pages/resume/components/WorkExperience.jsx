import React, {useContext, useEffect, useState} from 'react';

// MUI
import {Box, Checkbox, Container, FormControlLabel, Grid, Paper, Stack, TextField} from "@mui/material";
import {LocalizationProvider, MobileDatePicker} from "@mui/lab";
import AdapterDateFns from '@mui/lab/AdapterDateFns';

// Дополнительные модули
import ruLocale from 'date-fns/locale/ru';

// Контекст
import WorkExperienceContext from "../context/WorkExperienceContext";

// Пользовательские хуки
import useForm from "../../../globalComponents/hooks/useForm";


const WorkExperience = props => {

    // Стейт полей формы
    const [workExperienceField, setWorkExperienceField] = useState({
        gotSettled: null,
        retire: null,
        presentTime: false,
        post: '',
        organization: '',
        jobResponsibilitiesAchievements: ''
    });

    // Добавление контекста родительского компонента
    const setValues = useContext(WorkExperienceContext);

    // Добавляем пользовательский хук для добавления данных в стейт компонента
    const {handleChange} = useForm(setWorkExperienceField);

    // Добавление в стейт блока полей формы
    useEffect(() => {
        setValues(values => ({
            ...values,
            [props.count]: workExperienceField
        }));
    }, [props.count, setValues, workExperienceField]);

    // Блок добавления данных не подходящих для добавления через пользовательский хук
    const handleGotSettled = event => {
        setWorkExperienceField(value => ({
            ...value,
            'gotSettled': event
        }));
    };

    const handleRetire = event => {
        setWorkExperienceField(value => ({
            ...value,
            'retire': event
        }));
    };

    const handlePresentTime = (event) => {
        setWorkExperienceField(values => ({
            ...values,
            'presentTime': event.target.checked
        }));
    }
    // (Конец) Блок добавления данных не подходящих для добавления через пользовательский хук

    // Вывод данных
    return (
        <React.Fragment>
            <Grid container mt={2}>
                <Grid item={true} xs={0} md={2} xl={2}/>
                <Grid item={true} xs={12} md={8} xl={8}>
                    <Paper>
                        <Box pt={3} pb={3}>
                            <Container>
                                <Stack direction="row" spacing={2}>
                                    <LocalizationProvider dateAdapter={AdapterDateFns} locale={ruLocale}>
                                        <Stack>
                                            <MobileDatePicker
                                                label="Устроился *"
                                                name='gotSettled'
                                                value={workExperienceField.gotSettled}
                                                onChange={handleGotSettled}
                                                renderInput={(params) =>
                                                    <TextField {...params}
                                                               variant='standard'
                                                               helperText="Укажите дату когда устроились на работу"
                                                    />}
                                            />
                                        </Stack>
                                    </LocalizationProvider>
                                    <LocalizationProvider dateAdapter={AdapterDateFns} locale={ruLocale}>
                                        <Stack>
                                            <MobileDatePicker
                                                label="Уволился *"
                                                name='retire'
                                                value={workExperienceField.retire}
                                                onChange={handleRetire}
                                                renderInput={(params) =>
                                                    <TextField {...params}
                                                               variant='standard'
                                                               helperText="Укажите дату когда уволились с работы"
                                                    />}
                                            />
                                        </Stack>
                                    </LocalizationProvider>
                                    <FormControlLabel
                                        control={<Checkbox/>}
                                        label="Настоящее время"
                                        name='presentTime'
                                        value={workExperienceField.presentTime}
                                        onChange={handlePresentTime}
                                    />
                                </Stack>
                            </Container>
                            <Container>
                                <TextField
                                    fullWidth
                                    id='input-post'
                                    name='post'
                                    value={workExperienceField.post}
                                    onChange={handleChange}
                                    label="Должность"
                                    variant="standard"
                                    helperText='Введите должность'
                                />
                                <TextField
                                    fullWidth
                                    name='organization'
                                    value={workExperienceField.organization}
                                    onChange={handleChange}
                                    id='input-organization'
                                    label="Организация"
                                    variant="standard"
                                    helperText='Введите организацию'
                                />
                                <TextField
                                    fullWidth
                                    id="input-jobResponsibilitiesAchievements"
                                    name='jobResponsibilitiesAchievements'
                                    value={workExperienceField.jobResponsibilitiesAchievements}
                                    onChange={handleChange}
                                    label="Должностные обязанности и достижения"
                                    placeholder="- Охрана, слежение..."
                                    multiline
                                    variant="standard"
                                    helperText="Опишите чем вы занимались на работе и какие у вас имеются достижения"
                                />
                            </Container>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item={true} xs={0} md={2} xl={2}/>
            </Grid>
        </React.Fragment>
    );
    // (Конец) Вывод данных
};

export default React.memo(WorkExperience);