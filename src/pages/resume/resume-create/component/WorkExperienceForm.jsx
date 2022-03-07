// *******************************************
// Компонент с формой "Опыт работы" для резюме
// *******************************************



import React, {useContext, useEffect} from "react";

// MUI
import {Box, Checkbox, Container, FormControlLabel, Grid, Paper, Stack, TextField} from "@mui/material";
import {DateRangePicker, LocalizationProvider} from "@mui/lab";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';

// Сторонние модули
import {ru} from "date-fns/locale";

// Пользовательские хуки
import useForm from "../../../../globalComponents/hooks/useForm";

// Контекст
import WorkExperienceFormContext from "../context/WorkExperienceFormContext";


// Стандартные значения полей формы для отправки в пользовательский хук заполнения формы
const workExperienceField = {
    dateWork: [null, null],
    presentTime: false,
    post: '',
    organization: '',
    jobResponsibilitiesAchievements: ''
};


const WorkExperienceForm = props => {

    // Получаем функции из пользовательского хука для заполнения формы
    const {value, handleChange, handleCheckbox, handleInputRangeDate} = useForm(workExperienceField);

    // Получаем данные из родительского компонента
    const setWorkExperienceField = useContext(WorkExperienceFormContext);

    // Передаем данные в родительский компонент при изменении полей формы
    useEffect(() => {
        setWorkExperienceField(values => ({
            ...values,
            ['workExperience' + props.keyCount]: value
        }));
    }, [props.keyCount, setWorkExperienceField, value]);

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
                                <Stack direction="row" spacing={2} pt={2}>
                                    <LocalizationProvider
                                        dateAdapter={AdapterDateFns}
                                        locale={ru}
                                    >
                                        <DateRangePicker
                                            startText="Устроился *"
                                            endText="Уволился *"
                                            value={value.dateWork}
                                            onChange={(event) => {
                                                handleInputRangeDate(event, 'dateWork')
                                            }}
                                            mask="__.__.____"
                                            renderInput={(startProps, endProps) => (
                                                <React.Fragment>
                                                    <TextField {...startProps} />
                                                    <Box sx={{
                                                        mx: 2,
                                                        fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
                                                        fontWeight: 400,
                                                        fontSize: '1rem'
                                                    }}> период </Box>
                                                    <TextField {...endProps} />
                                                </React.Fragment>
                                            )}
                                        />
                                    </LocalizationProvider>
                                    <FormControlLabel
                                        control={<Checkbox/>}
                                        label="Настоящее время"
                                        name='presentTime'
                                        value={value.presentTime}
                                        onChange={handleCheckbox}
                                    />
                                </Stack>
                            </Container>
                            <Container>
                                <TextField
                                    fullWidth
                                    id='input-post'
                                    name='post'
                                    value={value.post}
                                    onChange={handleChange}
                                    label="Должность"
                                    variant="standard"
                                    helperText='Введите должность'
                                />
                                <TextField
                                    fullWidth
                                    name='organization'
                                    value={value.organization}
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
                                    value={value.jobResponsibilitiesAchievements}
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
};

export default React.memo(WorkExperienceForm);