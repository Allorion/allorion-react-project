import React from "react";
import {Container, Grid, Paper, Box, Stack, Typography, Rating} from "@mui/material";
import PlaceIcon from '@mui/icons-material/Place';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import LanguageIcon from '@mui/icons-material/Language';
import ContactsIcon from '@mui/icons-material/Contacts';
import StarIcon from '@mui/icons-material/Star';

const labels = {
    1: 'Junior',
    2: 'Junior +',
    3: 'Middle',
    4: 'Middle +',
    5: 'Senior'
};

export default function ResumeTemplate() {

    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);

    return (
        <React.Fragment>
            <Container>
                <Grid container pt={4} pb={10}>
                    <Grid item sm={12} xs={12} md={12} xl={12}>
                        <Paper elevation={4}>
                            <Box p={3}>
                                <Grid container>
                                    <Grid item sm={12} xs={12} md={8} xl={8}>

                                        {/* Блок фото и ФИО автора */}
                                        <Box className="head">
                                            <Stack spacing={4} direction='row'>
                                                <img
                                                    style={{width: 120, height: 120, borderRadius: 10}}
                                                    alt='avatar'
                                                    src='https://i.pinimg.com/736x/1b/c5/57/1bc557a1ef919406b9741acdc395827f.jpg'
                                                />
                                                <Stack>
                                                    <Typography variant='h5'>
                                                        Фамилия Имя Отчество
                                                    </Typography>
                                                    <Stack direction='row'>
                                                        <PlaceIcon/>
                                                        <Typography variant="span" component='span' fontSize={18}>
                                                            Город
                                                        </Typography>
                                                    </Stack>
                                                </Stack>
                                            </Stack>
                                        </Box>
                                        {/* (конец) Блока фото и ФИО автора */}

                                        {/* Блок личной информации */}
                                        <Box className='personal-information' pt={4}>
                                            <Box className="block-title">
                                                <Stack direction='row' spacing={2}>
                                                    <PersonIcon sx={{paddingTop: 0.5}}/>
                                                    <Typography variant='h6' component='span'>
                                                        Личная информация
                                                    </Typography>
                                                </Stack>
                                            </Box>
                                            <Box className="block-group" sx={{borderLeft: '1px solid #d0d0d0'}} pl={2}
                                                 ml={1.5}>
                                                <Stack direction='row' spacing={1}>
                                                    <Typography variant='subtitle1' color='rgb(45 123 201)'>
                                                        Гражданство:
                                                    </Typography>
                                                    <Typography variant="subtitle1">
                                                        Российская Федерация
                                                    </Typography>
                                                </Stack>
                                                <Stack direction='row' spacing={1}>
                                                    <Typography variant='subtitle1' color='rgb(45 123 201)'>
                                                        Образование:
                                                    </Typography>
                                                    <Typography variant="subtitle1">
                                                        Высшее
                                                    </Typography>
                                                </Stack>
                                                <Stack direction='row' spacing={1}>
                                                    <Typography variant='subtitle1' color='rgb(45 123 201)'>
                                                        Дата рождения:
                                                    </Typography>
                                                    <Typography variant="subtitle1">
                                                        7 февраля 2004 (18 лет)
                                                    </Typography>
                                                </Stack>
                                                <Stack direction='row' spacing={1}>
                                                    <Typography variant='subtitle1' color='rgb(45 123 201)'>
                                                        Пол:
                                                    </Typography>
                                                    <Typography variant="subtitle1">
                                                        Мужской
                                                    </Typography>
                                                </Stack>
                                                <Stack direction='row' spacing={1}>
                                                    <Typography variant='subtitle1' color='rgb(45 123 201)'>
                                                        Семейное положение:
                                                    </Typography>
                                                    <Typography variant="subtitle1">
                                                        Холост
                                                    </Typography>
                                                </Stack>
                                            </Box>
                                        </Box>
                                        {/* (конец) Блока личной информации */}

                                        {/* Блок опыта работы */}
                                        <Box className='work-experience' pt={4}>
                                            <Box className="block-title">
                                                <Stack direction='row' spacing={2}>
                                                    <WorkIcon sx={{paddingTop: 0.5}}/>
                                                    <Typography variant='h6' component='span'>
                                                        Опыт работы
                                                    </Typography>
                                                </Stack>
                                            </Box>

                                            <Box className="block-group" sx={{borderLeft: '1px solid #d0d0d0'}} pl={2}
                                                 ml={1.5}>
                                                <Typography variant="subtitle1" sx={{wordBreak: 'break-all'}}>
                                                    Должность
                                                </Typography>
                                                <Typography variant="subtitle1" sx={{wordBreak: 'break-all'}}>
                                                    Организация
                                                </Typography>
                                                <Typography variant='caption'>
                                                    февраль 2021 - настоящее время (1 год)
                                                </Typography>
                                                <Typography variant="subtitle1" pt={2} sx={{wordBreak: 'break-all'}}>
                                                    Обязанности и достижения
                                                </Typography>
                                            </Box>

                                        </Box>
                                        {/* (конец) Блока опыта работы */}

                                        {/* Блок образования */}
                                        <Box className='education' pt={4}>
                                            <Box className="block-title">
                                                <Stack direction='row' spacing={2}>
                                                    <SchoolIcon sx={{paddingTop: 0.5}}/>
                                                    <Typography variant='h6' component='span'>
                                                        Образование
                                                    </Typography>
                                                </Stack>
                                            </Box>
                                            <Box className="block-group" sx={{borderLeft: '1px solid #d0d0d0'}} pl={2}
                                                 ml={1.5}>
                                                <Typography variant="subtitle1" sx={{wordBreak: 'break-all'}}>
                                                    Учебное заведение
                                                </Typography>
                                                <Typography variant="subtitle1" sx={{wordBreak: 'break-all'}}>
                                                    Факультет
                                                </Typography>
                                                <Typography variant="subtitle1" sx={{wordBreak: 'break-all'}}>
                                                    Специальность
                                                </Typography>
                                                <Typography variant='caption'>
                                                    февраль 2021 - настоящее время (1 год)
                                                </Typography>
                                            </Box>
                                        </Box>
                                        {/* (конец) Блока образования */}

                                        {/* Блок курсов и тренингов */}
                                        <Box className='courses-trainings' pt={4}>
                                            <Box className="block-title">
                                                <Stack direction='row' spacing={2}>
                                                    <HistoryEduIcon sx={{paddingTop: 0.5}}/>
                                                    <Typography variant='h6' component='span'>
                                                        Курсы и тренинги
                                                    </Typography>
                                                </Stack>
                                            </Box>
                                            <Box className="block-group" sx={{borderLeft: '1px solid #d0d0d0'}} pl={2}
                                                 ml={1.5}>
                                                <Typography variant="subtitle1" sx={{wordBreak: 'break-all'}}>
                                                    Название курса
                                                </Typography>
                                                <Typography variant="subtitle1" sx={{wordBreak: 'break-all'}}>
                                                    Учебное заведение
                                                </Typography>
                                                <Typography variant='caption'>
                                                    февраль 2021 - настоящее время (1 год)
                                                </Typography>
                                            </Box>
                                        </Box>
                                        {/* (конец) Блока курсов и тренингов */}

                                        {/* Блок дополнительной информации */}
                                        <Box className='personal-information' pt={4}>
                                            <Box className="block-title">
                                                <Stack direction='row' spacing={2}>
                                                    <SettingsAccessibilityIcon sx={{paddingTop: 0.5}}/>
                                                    <Typography variant='h6' component='span'>
                                                        Дополнительная информация
                                                    </Typography>
                                                </Stack>
                                            </Box>
                                            <Box className="block-group" sx={{borderLeft: '1px solid #d0d0d0'}} pl={2}
                                                 ml={1.5} mt={2}>
                                                <Stack direction='co' spacing={1}>
                                                    <Typography variant='subtitle1' color='rgb(45 123 201)'>
                                                        Наличие водительских прав (категории):
                                                    </Typography>
                                                    <Typography variant="subtitle1" pl={1}>
                                                        A, B
                                                    </Typography>
                                                </Stack>
                                            </Box>
                                            <Box className="block-group" sx={{borderLeft: '1px solid #d0d0d0'}} pl={2}
                                                 ml={1.5} mt={2}>
                                                <Stack spacing={1}>
                                                    <Typography variant='subtitle1' color='rgb(45 123 201)'
                                                                sx={{wordBreak: 'break-all'}}>
                                                        Рекомендации:
                                                    </Typography>
                                                    <Typography variant="subtitle1">
                                                        чето тут
                                                    </Typography>
                                                </Stack>
                                            </Box>
                                            <Box className="block-group" sx={{borderLeft: '1px solid #d0d0d0'}} pl={2}
                                                 ml={1.5} mt={2}>
                                                <Stack spacing={1}>
                                                    <Typography variant='subtitle1' color='rgb(45 123 201)'
                                                                sx={{wordBreak: 'break-all'}}>
                                                        Ваши занятия в свободное время:
                                                    </Typography>
                                                    <Typography variant="subtitle1">
                                                        чето тут
                                                    </Typography>
                                                </Stack>
                                            </Box>
                                            <Box className="block-group" sx={{borderLeft: '1px solid #d0d0d0'}} pl={2}
                                                 ml={1.5} mt={2}>
                                                <Stack spacing={1}>
                                                    <Typography variant='subtitle1' color='rgb(45 123 201)'
                                                                sx={{wordBreak: 'break-all'}}>
                                                        Личные качества:
                                                    </Typography>
                                                    <Typography variant="subtitle1" sx={{wordBreak: 'break-all'}}>
                                                        Холост
                                                        Холостdsadsadasdsadsadsadasdsadasdas
                                                        Холостdsadsadasdsadsadsadasdsadasdas
                                                        Холостdsadsadasdsadsadsadasdsadasdas
                                                        Холостdsadsadasdsadsadsadasdsadasdas
                                                        Холостdsadsadasdsadsadsadasdsadasdas
                                                        Холостdsadsadasdsadsadsadasdsadasdas
                                                        Холостdsadsadasdsadsadsadasdsadasdas
                                                        Холостdsadsadasdsadsadsadasdsadasdas
                                                        Холостdsadsadasdsadsadsadasdsadasdas
                                                        Холостdsadsadasdsadsadsadasdsadasdas
                                                        Холостdsadsadasdsadsadsadasdsadasdas
                                                        Холостdsadsadasdsadsadsadasdsadasdas
                                                        Холостdsadsadasdsadsadsadasdsadasdas
                                                        Холостdsadsadasdsadsadsadasdsadasdas
                                                        Холостdsadsadasdsadsadsadasdsadasdas
                                                        Холостdsadsadasdsadsadsadasdsadasdas
                                                        Холостdsadsadasdsadsadsadasdsadasdas
                                                    </Typography>
                                                </Stack>
                                            </Box>
                                        </Box>
                                        {/* (конец) Блока личной информации */}

                                    </Grid>
                                    <Grid item sm={0} xs={0} md={4} xl={4}>

                                        {/* Блок желаемой зарплаты и занятости */}
                                        <Box className='courses-trainings' pt={4}>
                                            <Box className="block-title">
                                                <Stack direction='row' spacing={2}>
                                                    <CurrencyRubleIcon sx={{paddingTop: 0.5}}/>
                                                    <Typography variant='h6' component='span'>
                                                        Желаемая зарплата и занятость
                                                    </Typography>
                                                </Stack>
                                            </Box>
                                            <Box className="block-group" sx={{borderLeft: '1px solid #d0d0d0'}} pl={2}
                                                 ml={1.5}>
                                                <Typography variant="subtitle1">
                                                    50000
                                                </Typography>
                                                <Stack direction="row" spacing={1}>
                                                    <DoneIcon/>
                                                    <Typography variant="subtitle1">
                                                        Проектная занятость
                                                    </Typography>
                                                </Stack>
                                                <Stack direction="row" spacing={1}>
                                                    <CloseIcon/>
                                                    <Typography variant="subtitle1">
                                                        Сменный график
                                                    </Typography>
                                                </Stack>
                                            </Box>
                                        </Box>
                                        {/* (конец) Блока желаемой зарплаты и занятости */}

                                        {/* Блок контактов */}
                                        <Box className='courses-trainings' pt={4}>
                                            <Box className="block-title">
                                                <Stack direction='row' spacing={2}>
                                                    <ContactsIcon sx={{paddingTop: 0.5}}/>
                                                    <Typography variant='h6' component='span'>
                                                        Контакты
                                                    </Typography>
                                                </Stack>
                                            </Box>
                                            <Box className="block-group" sx={{borderLeft: '1px solid #d0d0d0'}} pl={2}
                                                 ml={1.5}>
                                                <Typography variant="subtitle1">
                                                    wlad70657@gmail.com
                                                </Typography>
                                                <Typography variant="subtitle1">
                                                    7(928)-337-42-81
                                                </Typography>
                                            </Box>
                                        </Box>
                                        {/* (конец) Блока контактов */}

                                        {/* Блок знания языков */}
                                        <Box className='courses-trainings' pt={4}>
                                            <Box className="block-title">
                                                <Stack direction='row' spacing={2}>
                                                    <LanguageIcon sx={{paddingTop: 0.5}}/>
                                                    <Typography variant='h6' component='span'>
                                                        Знание иностранных языков
                                                    </Typography>
                                                </Stack>
                                            </Box>
                                            <Box className="block-group" sx={{borderLeft: '1px solid #d0d0d0'}} pl={2}
                                                 ml={1.5}>
                                                <Typography variant="subtitle1">
                                                    Английский, русский, украинский
                                                </Typography>
                                            </Box>
                                        </Box>
                                        {/* (конец) Блока контактов */}

                                        {/* Блок навыков */}
                                        <Box className='courses-trainings' pt={4}>
                                            <Box className="block-title">
                                                <Stack direction='row' spacing={2}>
                                                    <StarIcon sx={{paddingTop: 0.5}}/>
                                                    <Typography variant='h6' component='span'>
                                                        Навыки
                                                    </Typography>
                                                </Stack>
                                            </Box>
                                            <Box className="block-group" sx={{borderLeft: '1px solid #d0d0d0'}} pl={2}
                                                 ml={1.5}>
                                                <Typography variant="subtitle1">
                                                    Python
                                                </Typography>
                                                <Box
                                                    sx={{
                                                        width: 200,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                    }}
                                                >
                                                    <Rating
                                                        name="hover-feedback"
                                                        value={value}
                                                        precision={1}
                                                        onChange={(event, newValue) => {
                                                            setValue(newValue);
                                                        }}
                                                        onChangeActive={(event, newHover) => {
                                                            setHover(newHover);
                                                        }}
                                                        emptyIcon={<StarIcon style={{opacity: 0.55}}
                                                                             fontSize="inherit"/>}
                                                    />
                                                    {value !== null && (
                                                        <Box sx={{ml: 2}}>{labels[hover !== -1 ? hover : value]}</Box>
                                                    )}
                                                </Box>
                                            </Box>
                                        </Box>
                                        {/* (конец) Блока навыков */}

                                    </Grid>
                                </Grid>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
};