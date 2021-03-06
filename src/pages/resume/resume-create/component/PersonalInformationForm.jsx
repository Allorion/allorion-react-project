// *********************************************************
// Компонент с формой добавлением личной информации в резюме
// *********************************************************


import React, {useContext, useEffect} from "react";

// MUI
import {
    Box,
    Container,
    FormControl,
    FormHelperText,
    Grid,
    InputLabel,
    Paper,
    Select, Stack,
    TextField,
    Typography,
    MenuItem
} from "@mui/material";
import {
    LocalizationProvider,
    MobileDatePicker
} from "@mui/lab";
import AdapterDateFns from '@mui/lab/AdapterDateFns';

// Прочие модули
import ruLocale from 'date-fns/locale/ru';

// Пользовательские хуки
import useForm from "../../../../globalComponents/hooks/useForm";

// Контексты
import PersonalInformationContext from "../context/PersonalInformationContext";


const personalInformationField = {
    city: '', move: '', citizenship: '', dateBirth: null, gender: '', maritalStatus: '', education: ''
};


const PersonalInformationForm = () => {

    // Получаем функции из пользовательского хука для заполнения формы
    const {value, handleChange, handleDate} = useForm(personalInformationField);

    // Получаем контекст из родительского компонента
    const setPersonalInformationField = useContext(PersonalInformationContext);

    // Сохраняем данные из формы в стейт родительского компонента
    useEffect(() => {
        setPersonalInformationField(value);
    }, [setPersonalInformationField, value])

    return (
        <React.Fragment>
            <Grid container mt={4}>
                <Grid item={true} xs={0} md={2} xl={2}/>
                <Grid item={true} xs={12} md={8} xl={8}>
                    <Typography variant="h5" sx={{color: 'text.primary'}}>
                        2. Личная информация
                    </Typography>
                    <Paper>
                        <Box pt={3} pb={3}>
                            <Container>
                                <Grid container spacing={1}>
                                    <Grid item xs={12} md={8} xl={8}>
                                        <TextField
                                            fullWidth
                                            required
                                            name='city'
                                            value={value.city}
                                            onChange={handleChange}
                                            id="input-city"
                                            label="Город проживания"
                                            variant="standard"
                                            helperText="Укажите город проживания"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={4} xl={4}>
                                        <FormControl fullWidth required variant="standard">
                                            <InputLabel id="select-move-label">Переезд</InputLabel>
                                            <Select
                                                required
                                                labelId="select-move-label"
                                                id="select-move"
                                                name='move'
                                                value={value.move}
                                                onChange={handleChange}
                                                label="Переезд *"
                                            >
                                                <MenuItem value="Невозможен">Невозможен</MenuItem>
                                                <MenuItem value="Возможен">Возможен</MenuItem>
                                                <MenuItem value="Нежелателен">Нежелателен</MenuItem>
                                                <MenuItem value="Желателен">Желателен</MenuItem>
                                            </Select>
                                            <FormHelperText>Выберите возможность переезда</FormHelperText>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </Container>
                            <Container>
                                <TextField
                                    style={{marginTop: 8}}
                                    required
                                    fullWidth
                                    name='citizenship'
                                    value={value.citizenship}
                                    onChange={handleChange}
                                    id="input-citizenship"
                                    label="Гражданство"
                                    variant="standard"
                                    helperText='Укажите гражданство'
                                />
                            </Container>
                            <Container>
                                <Stack direction="row" spacing={1} pt={1}>
                                    <LocalizationProvider dateAdapter={AdapterDateFns} locale={ruLocale}>
                                        <Stack>
                                            <MobileDatePicker
                                                label="Дата рождения *"
                                                name='dateBirth'
                                                value={value.dateBirth}
                                                onChange={handleDate}
                                                renderInput={(params) =>
                                                    <TextField {...params}
                                                               variant='standard'
                                                               helperText="Укажите дату рождения"
                                                    />
                                                }
                                            />
                                        </Stack>
                                    </LocalizationProvider>
                                    <FormControl required variant="standard">
                                        <InputLabel id="select-gender-label">Пол</InputLabel>
                                        <Select
                                            required
                                            labelId="select-gender-label"
                                            id="select-gender"
                                            name='gender'
                                            value={value.gender}
                                            onChange={handleChange}
                                            label="Пол *"
                                        >
                                            <MenuItem value="Мужской">Мужской</MenuItem>
                                            <MenuItem value="Женский">Женский</MenuItem>
                                        </Select>
                                        <FormHelperText>Выберите пол</FormHelperText>
                                    </FormControl>
                                </Stack>
                            </Container>
                            <Container>
                                <Stack spacing={1} direction="row" pt={1}>
                                    <FormControl fullWidth required variant="standard">
                                        <InputLabel id="select-marital-status-label">Семейное положение</InputLabel>
                                        <Select
                                            required
                                            labelId="select-marital-status-label"
                                            id="select-marital-status"
                                            name='maritalStatus'
                                            value={value.maritalStatus}
                                            onChange={handleChange}
                                            label="Семейное положение *"
                                        >
                                            <MenuItem value="Не замужем">Не замужем</MenuItem>
                                            <MenuItem value="Замужем">Замужем</MenuItem>
                                        </Select>
                                        <FormHelperText>Укажите семейное положение</FormHelperText>
                                    </FormControl>

                                    <FormControl fullWidth required variant="standard">
                                        <InputLabel id="select-education-label">Образование</InputLabel>
                                        <Select
                                            required
                                            labelId="select-education-label"
                                            id="select-education-status"
                                            nmae='education'
                                            value={value.education}
                                            onChange={handleChange}
                                            label="Образование *"
                                        >
                                            <MenuItem value="Среднее">Среднее</MenuItem>
                                            <MenuItem value="Среднее неполное">Среднее неполное</MenuItem>
                                            <MenuItem value="Среднее профессионально">Среднее профессионально</MenuItem>
                                            <MenuItem value="Высшее">Высшее</MenuItem>
                                            <MenuItem value="Высшее не полное">Высшее не полное</MenuItem>
                                        </Select>
                                        <FormHelperText>Выберите образование</FormHelperText>
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


export default React.memo(PersonalInformationForm);