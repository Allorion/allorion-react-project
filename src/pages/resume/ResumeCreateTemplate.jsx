import React, {useState} from "react";
import {
    Box,
    Container,
    Grid,
    Paper,
    Stack,
    TextField,
    Typography,
    IconButton,
    FormControlLabel,
    Checkbox, FormControl, InputLabel, Select, FormHelperText
} from "@mui/material";
import {PhotoCamera} from "@mui/icons-material";
import {styled} from '@mui/material/styles';
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDatePicker from '@mui/lab/MobileDatePicker';

import ruLocale from 'date-fns/locale/ru';

const InputImage = styled('input')({
    display: 'none',
});

export default function ResumeCreateTemplate() {

    const [picture, setPicture] = useState(null);
    const [busyness, setBusyness] = useState('');
    const [workSchedule, setWorkSchedule] = useState('');
    const [move, setMove] = useState('');
    const [gender, setGender] = useState('');
    const [dateBirth, setDateBirth] = useState(null);
    const [maritalStatus, setMaritalStatus] = useState('');
    const [education, setEducation] = useState('');

    const onChangePicture = e => {
        setPicture(URL.createObjectURL(e.target.files[0]));
    };

    return (
        <React.Fragment>
            <Grid container mt={4}>
                <Grid item={true} xs={0} md={2} xl={2}/>
                <Grid item={true} xs={12} md={8} xl={8}>
                    <Typography variant="h5" sx={{color: 'text.primary'}}>
                        1. Основная информация
                    </Typography>
                    <Paper>
                        <Box pt={3} pb={3}>
                            <Container>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={5} xl={4}>
                                        <Paper sx={{width: 228.72, height: 228.72, mx: "auto"}} elevation={4}>
                                            <label htmlFor="icon-button-file" style={{position: 'relative'}}>
                                                <InputImage accept="image/*" id="icon-button-file" type="file"
                                                            onChange={onChangePicture}/>
                                                <Avatar alt="Прикрепить фото" src={picture}
                                                        sx={{width: 228.72, height: 228.72, borderRadius: '4px'}}>
                                                    <PhotoCamera/>
                                                </Avatar>
                                            </label>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12} md={7} xl={8}>
                                        <Stack spacing={1}>
                                            <TextField
                                                fullWidth
                                                required
                                                id="input-surname"
                                                label="Фамилия"
                                                variant="standard"
                                                helperText="Введите фамилию"
                                            />
                                            <TextField
                                                fullWidth
                                                required
                                                id='input-name'
                                                label="Имя"
                                                variant="standard"
                                                helperText='Введите имя'
                                            />
                                            <TextField
                                                fullWidth
                                                id="input-patronymic"
                                                label="Отчество"
                                                variant="standard"
                                                helperText='Введите отчество (если имеется)'
                                            />
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </Container>
                            <Container>
                                <TextField
                                    style={{marginTop: 8}}
                                    required
                                    fullWidth
                                    id="input-post"
                                    label="Должность"
                                    variant="standard"
                                    helperText='Укажите желаемую должность'
                                />
                            </Container>
                            <Container>
                                <Grid container spacing={1} pt={1}>
                                    <Grid item xs={12} md={3} xl={3}>
                                        <TextField
                                            fullWidth
                                            id="input-salary"
                                            label="Желаемая зарплата"
                                            variant="standard"
                                            type='number'
                                            helperText="Укажите желаемую зарплату"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={3} xl={3}>
                                        <FormControl fullWidth required variant="standard">
                                            <InputLabel id="select-busyness-label">Занятость</InputLabel>
                                            <Select
                                                required
                                                labelId="select-busyness-label"
                                                id="select-busyness"
                                                value={busyness}
                                                onChange={(event) => {
                                                    setBusyness(event.target.value)
                                                }}
                                                label="Занятость *"
                                            >
                                                <MenuItem value="Полная">Полная</MenuItem>
                                                <MenuItem value="Частичная">Частичная</MenuItem>
                                                <MenuItem value="Проектная">Проектная</MenuItem>
                                                <MenuItem value="Стажировка">Стажировка</MenuItem>
                                                <MenuItem value="Волонтерство">Волонтерство</MenuItem>
                                            </Select>
                                            <FormHelperText>Выберите желаемый вид занятости</FormHelperText>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} md={3} xl={3}>
                                        <FormControl required variant="standard" fullWidth>
                                            <InputLabel id="select-work-schedule-label">График работы</InputLabel>
                                            <Select
                                                labelId="select-work-schedule-label"
                                                id="select-work-schedule"
                                                value={workSchedule}
                                                onChange={(event) => {
                                                    setWorkSchedule(event.target.value)
                                                }}
                                                label="График работы *"
                                            >
                                                <MenuItem value="Полный день">Полный день</MenuItem>
                                                <MenuItem value="Сменный график">Сменный график</MenuItem>
                                                <MenuItem value="Гибкий график">Гибкий график</MenuItem>
                                                <MenuItem value="Удаленная работа">Удаленная работа</MenuItem>
                                                <MenuItem value="Вахтовый метод">Вахтовый метод</MenuItem>
                                            </Select>
                                            <FormHelperText>Выберите желаемый график работы</FormHelperText>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} md={3} xl={3}>
                                        <FormControlLabel fullWidth control={<Checkbox/>}
                                                          label="Готовность к командировкам"/>
                                    </Grid>
                                </Grid>
                            </Container>
                            <Container>
                                <Grid container spacing={1} pt={1}>
                                    <Grid item xs={12} md={6} xl={6}>
                                        <TextField
                                            fullWidth
                                            required
                                            id="input-phone"
                                            label="Телефон"
                                            variant="standard"
                                            helperText="Укажите номер телефона для связи"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6} xl={6}>
                                        <TextField
                                            fullWidth
                                            required
                                            id="input-email"
                                            label="Электронная почта"
                                            variant="standard"
                                            helperText="Укажите почту для связи"
                                        />
                                    </Grid>
                                </Grid>
                            </Container>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
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
                                                value={move}
                                                onChange={(event) => {
                                                    setMove(event.target.value)
                                                }}
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
                                                value={dateBirth}
                                                onChange={(newValue) => {
                                                    setDateBirth(newValue);
                                                }}
                                                renderInput={(params) => <TextField {...params}
                                                                                    variant='standard'
                                                                                    helperText="Укажите дату рождения"
                                                />}
                                            />
                                        </Stack>
                                    </LocalizationProvider>
                                    <FormControl required variant="standard">
                                        <InputLabel id="select-gender-label">Пол</InputLabel>
                                        <Select
                                            required
                                            labelId="select-gender-label"
                                            id="select-gender"
                                            value={gender}
                                            onChange={(event) => {
                                                setGender(event.target.value)
                                            }}
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
                                            value={maritalStatus}
                                            onChange={(event) => {
                                                setMaritalStatus(event.target.value)
                                            }}
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
                                            value={education}
                                            onChange={(event) => {
                                                setEducation(event.target.value)
                                            }}
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