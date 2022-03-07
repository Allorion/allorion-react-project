// *******************************************
// Компонент с формой "Образование" для резюме
// *******************************************


import React, {useContext, useEffect} from "react";

// Пользовательские хуки
import useForm from "../../../../globalComponents/hooks/useForm";

// Контекст
import EducationFormContext from "../context/EducationFormContext";

// MUI
import {FormControl, FormHelperText, Grid, InputLabel, Paper, Select, Stack, TextField} from "@mui/material";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import {LocalizationProvider, MobileDatePicker} from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";

// Сторонние модули
import {ru} from "date-fns/locale";


// Стандартные значения полей формы для отправки в пользовательский хук заполнения формы
const educationField = {
    educationalInstitution: '', faculty: '', specialization: '', yearGraduation: null, formTraining: ''
};

const EducationForm = props => {

    // Получаем функции из пользовательского хука для заполнения формы
    const {value, handleChange, handleInputDate} = useForm(educationField);

    // Получаем данные из родительского компонента
    const setEducationField = useContext(EducationFormContext);

    // Передаем данные в родительский компонент при изменении полей формы
    useEffect(() => {
        setEducationField(values => ({
            ...values,
            ['education' + props.keyCount]: value
        }));
    }, [props.keyCount, setEducationField, value]);

    return (
        <React.Fragment>
            <Grid container mt={2}>
                <Grid item={true} xs={0} md={2} xl={2}/>
                <Grid item={true} xs={12} md={8} xl={8}>
                    <Paper>
                        <Box pt={3} pb={3}>
                            <Container>
                                <IconButton aria-label="delete" size="small" onClick={() => {
                                    props.delete(props.keyCount)
                                }}>
                                    <DeleteIcon/>
                                </IconButton>
                                <TextField
                                    fullWidth
                                    name='educationalInstitution'
                                    value={value.educationalInstitution}
                                    onChange={handleChange}
                                    id='input-educational-institution'
                                    label="Учебное заведение"
                                    variant="standard"
                                    helperText='Введите название учебного заведения'
                                />
                                <TextField
                                    fullWidth
                                    name='faculty'
                                    value={value.faculty}
                                    onChange={handleChange}
                                    id='input-faculty'
                                    label="Факультет"
                                    variant="standard"
                                    helperText='Укажите факультет'
                                />
                                <TextField
                                    fullWidth
                                    name='specialization'
                                    value={value.specialization}
                                    onChange={handleChange}
                                    id='input-specialization'
                                    label="Специальность"
                                    variant="standard"
                                    helperText='Укажите специальность полученную при обучении'
                                />
                                <Stack direction="row" spacing={2}>
                                    <LocalizationProvider dateAdapter={AdapterDateFns} locale={ru}>
                                        <Stack>
                                            <MobileDatePicker
                                                label="Год окончания"
                                                views={['year']}
                                                value={value.yearGraduation}
                                                onChange={(event) => {
                                                    handleInputDate(event, 'yearGraduation')
                                                }}
                                                renderInput={(params) =>
                                                    <TextField {...params}
                                                               variant='standard'
                                                               helperText="Укажите год окончания обучения"
                                                    />
                                                }
                                            />
                                        </Stack>
                                    </LocalizationProvider>
                                    <FormControl required variant="standard">
                                        <InputLabel id="select-form-training-label">Форма обучения</InputLabel>
                                        <Select
                                            fullWidth
                                            name='formTraining'
                                            value={value.formTraining}
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

export default React.memo(EducationForm);