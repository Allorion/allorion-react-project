import React, {useContext} from 'react';

// Контекст
import BasicInformationContext from "../context/BasicInformationContext";

// MUI
import {styled} from "@mui/material/styles";
import {
    Box, Checkbox,
    Container,
    FormControl, FormControlLabel, FormHelperText,
    Grid,
    InputLabel,
    Paper,
    Select,
    Stack,
    TextField,
    Typography,
    Avatar,
    MenuItem
} from "@mui/material";
import {PhotoCamera} from "@mui/icons-material";

// Пользовательские хуки
import useForm from "../../../globalComponents/hooks/useForm";

// Стиль для фото автора резюме
const InputImage = styled('input')({
    display: 'none',
});

function BasicInformation() {

    // Контексты
    const [values, setValues] = useContext(BasicInformationContext);

    // Пользовательские хуки
    const {handleChange} = useForm(setValues);

    // Обработка действий
    const handlePicture = event => {
        setValues(values => ({
            ...values,
            'picture': URL.createObjectURL(event.target.files[0])
        }));
    }

    // Обновления данных не вохзможных для обновления через пользовательский хук
    const handleReadinessBusinessTrips = (event) => {
        setValues(values => ({
            ...values,
            'readinessBusinessTrips': event.target.checked
        }));
    }

    // Вывод на экран
    return (
        <React.Fragment>

            <Grid container pt={4}>
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
                                                <InputImage
                                                    accept="image/*"
                                                    id="icon-button-file"
                                                    type="file"
                                                    name='picture'
                                                    onChange={handlePicture}
                                                />
                                                <Avatar
                                                    alt="Прикрепить фото"
                                                    src={values.picture}
                                                    sx={{width: 228.72, height: 228.72, borderRadius: '4px'}}
                                                >
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
                                                name='surname'
                                                value={values.surname}
                                                onChange={handleChange}
                                                id="input-surname"
                                                label="Фамилия"
                                                variant="standard"
                                                helperText="Введите фамилию"
                                            />
                                            <TextField
                                                fullWidth
                                                required
                                                name='name'
                                                value={values.name}
                                                onChange={handleChange}
                                                id='input-name'
                                                label="Имя"
                                                variant="standard"
                                                helperText='Введите имя'
                                            />
                                            <TextField
                                                fullWidth
                                                name='patronymic'
                                                value={values.patronymic}
                                                onChange={handleChange}
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
                                    name='post'
                                    value={values.post}
                                    onChange={handleChange}
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
                                            name='salary'
                                            value={values.salary}
                                            onChange={handleChange}
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
                                                name='busyness'
                                                value={values.busyness}
                                                onChange={handleChange}
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
                                                name='workSchedule'
                                                value={values.workSchedule}
                                                onChange={handleChange}
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
                                        <FormControlLabel
                                            control={<Checkbox/>}
                                            onClick={handleReadinessBusinessTrips}
                                            label="Готовность к командировкам"
                                        />
                                    </Grid>
                                </Grid>
                            </Container>
                            <Container>
                                <Grid container spacing={1} pt={1}>
                                    <Grid item xs={12} md={6} xl={6}>
                                        <TextField
                                            fullWidth
                                            required
                                            name='phone'
                                            value={values.phone}
                                            onChange={handleChange}
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
                                            name='email'
                                            value={values.email}
                                            onChange={handleChange}
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

        </React.Fragment>
    );
}

export default React.memo(BasicInformation);