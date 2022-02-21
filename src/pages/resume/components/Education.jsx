import React, {useContext, useEffect, useState} from 'react';

// MUI
import {
    Box,
    Container,
    FormControl,
    FormHelperText,
    Grid,
    InputLabel,
    Paper,
    Select,
    Stack,
    TextField,
    MenuItem
} from "@mui/material";
import {LocalizationProvider, MobileDatePicker} from "@mui/lab";
import AdapterDateFns from '@mui/lab/AdapterDateFns';

// Пользовательские хуки
import useForm from "../../../globalComponents/hooks/useForm";

// Контекст
import EducationContext from "../context/EducationContext";

// Дополнительные модули
import ruLocale from 'date-fns/locale/ru';

const Education = props => {

    // Стейт полей формы
    const [educationField, setEducationField] = useState({
        educationalInstitution: '', faculty: '', specialization: '', yearGraduation: null, formTraining: ''
    });

    // Добавление контекста родительского компонента
    const setValues = useContext(EducationContext);

    // Добавляем пользовательский хук для добавления данных в стейт компонента
    const {handleChange} = useForm(setEducationField);

    // Добавление в стейт блока полей формы
    useEffect(() => {
        setValues(values => ({
            ...values,
            [props.count]: educationField
        }));
    }, [props.count, setValues, educationField]);

    // Блок добавления данных не подходящих для добавления через пользовательский хук
    const handleYearGraduation = event => {
        setEducationField(value => ({
            ...value,
            'yearGraduation': event
        }));
    };

    return(
        <React.Fragment>
            <Grid container mt={2}>
                <Grid item={true} xs={0} md={2} xl={2}/>
                <Grid item={true} xs={12} md={8} xl={8}>
                    <Paper>
                        <Box pt={3} pb={3}>
                            <Container>
                                <TextField
                                    fullWidth
                                    name='educationalInstitution'
                                    value={educationField.educationalInstitution}
                                    onChange={handleChange}
                                    id='input-educational-institution'
                                    label="Учебное заведение"
                                    variant="standard"
                                    helperText='Введите название учебного заведения'
                                />
                                <TextField
                                    fullWidth
                                    name='faculty'
                                    value={educationField.faculty}
                                    onChange={handleChange}
                                    id='input-faculty'
                                    label="Факультет"
                                    variant="standard"
                                    helperText='Укажите факультет'
                                />
                                <TextField
                                    fullWidth
                                    name='specialization'
                                    value={educationField.specialization}
                                    onChange={handleChange}
                                    id='input-specialization'
                                    label="Специальность"
                                    variant="standard"
                                    helperText='Укажите специальность полученную при обучении'
                                />
                                <Stack direction="row" spacing={2}>
                                    <LocalizationProvider dateAdapter={AdapterDateFns} locale={ruLocale}>
                                        <Stack>
                                            <MobileDatePicker
                                                label="Год окончания"
                                                views={['year']}
                                                name='yearGraduation'
                                                value={educationField.yearGraduation}
                                                onChange={handleYearGraduation}
                                                renderInput={(params) => <TextField {...params}
                                                                                    variant='standard'
                                                                                    helperText="Укажите год окончания обучения"
                                                />}
                                            />
                                        </Stack>
                                    </LocalizationProvider>
                                    <FormControl required variant="standard">
                                        <InputLabel id="select-form-training-label">Форма обучения</InputLabel>
                                        <Select
                                            fullWidth
                                            name='formTraining'
                                            value={educationField.formTraining}
                                            onChange={handleChange}
                                            labelId="select-form-training-label"
                                            id="select-form-training"
                                            label="Форма обучения"
                                        >
                                            <MenuItem value="Очная">Очная</MenuItem>
                                            <MenuItem value="Очно-заочная(вечерняя)">Очно-заочная(вечерняя)</MenuItem>
                                            <MenuItem value="Заочная">Заочная</MenuItem>
                                            <MenuItem value="Дистанционная">Дистанционная</MenuItem>
                                        </Select>
                                        <FormHelperText>Выберите форму обучения</FormHelperText>
                                    </FormControl>
                                </Stack>
                            </Container>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default React.memo(Education);