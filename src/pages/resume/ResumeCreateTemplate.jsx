import React, {useMemo, useState} from 'react';

// Контексты
import BasicInformationContext from "./context/BasicInformationContext";
import EducationContext from "./context/EducationContext";
import PersonalInformationContext from "./context/PersonalInformationContext";
import WorkExperienceContext from "./context/WorkExperienceContext";
import CoursesTrainingsContext from "./context/CoursesTrainingsContext";
import AdditionalInformationContext from './context/AdditionalInformationContext';
import ForeignLanguagesComputerSkillsContext from "./context/ForeignLanguagesComputerSkillsContext";

// MUI
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import {Grid, Stack, Typography} from "@mui/material";

// Компоненты
import BasicInformation from "./components/BasicInformation";
import PersonalInformation from "./components/PersonalInformation";
import WorkExperience from "./components/WorkExperience";
import Education from './components/Education'
import CoursesTrainings from "./components/CoursesTrainings";
import ForeignLanguagesComputerSkills from "./components/ForeignLanguagesComputerSkills";
import AdditionalInformation from "./components/AdditionalInformation";


export default function ResumeCreateTemplate() {

    // Стейты для дочерних компонентов
    const [basicInformationField, setBasicInformationField] = useState({
        picture: '', surname: '', name: '', patronymic: '', post: '', salary: '', busyness: '', workSchedule: '',
        readinessBusinessTrips: false, phone: '', email: ''
    });

    const [personalInformationField, setPersonalInformationField] = useState({
        city: '', move: '', citizenship: '', dateBirth: null, gender: '', maritalStatus: '', education: ''
    });

    const [foreignLanguagesComputerSkillsFiled, setForeignLanguagesComputerSkillsField] = useState({
        foreignLanguages: '', faculty: '', skills: []
    });

    const [additionalInformationField, setAdditionalInformationField] = useState({
        militaryService: false, driverLicense: [], recommendations: '', info: '', personalQualities: ''
    })

    const [workExperienceField, setWorkExperienceField] = useState();
    const [educationField, setEducationField] = useState();
    const [coursesTrainingsField, setCoursesTrainingsField] = useState();
    // (конец) Стейты для дочерних компонентов

    // Отправка стейтов в дочерний компонент через memo
    const basicInformationMemo = useMemo(() => {
        return [basicInformationField, setBasicInformationField];
    }, [basicInformationField]);

    const personalInformationMemo = useMemo(() => {
        return [personalInformationField, setPersonalInformationField];
    }, [personalInformationField]);

    const workExperienceMemo = useMemo(() => {
        return setWorkExperienceField;
    }, [workExperienceField]);

    const educationMemo = useMemo(() => {
        return setEducationField;
    }, [educationField]);

    const coursesTrainingsMemo = useMemo(() => {
        return setCoursesTrainingsField;
    }, [coursesTrainingsField]);

    const additionalInformationMemo = useMemo(() => {
        return [additionalInformationField, setAdditionalInformationField];
    }, [additionalInformationField]);
    // (конец) Отправка стейтов в дочерний компонент через memo

    // Стейты добавленных пользователем блоков
    const [addWorkExperience, setAddWorkExperience] = useState([]);
    const [addEducation, setAddEducation] = useState([]);
    const [addCoursesTrainings, setAddCoursesTrainings] = useState([]);
    // (конец) Стейты добавленных пользователем блоков

    // Блок с функциями добавления компонента по нажатию на кнопку
    const onAddWorkExperience = () => {
        setAddWorkExperience(addWorkExperience.concat(
            <WorkExperienceContext.Provider
                value={workExperienceMemo}
                key={addWorkExperience.length}
            >
                <WorkExperience
                    count={'workExperience' + addWorkExperience.length}
                />
            </WorkExperienceContext.Provider>
        ));
    };

    const onAddEducation = () => {
        setAddEducation(addEducation.concat(
            <EducationContext.Provider
                value={educationMemo}
                key={addEducation.length}
            >
                <Education
                    count={'education' + addEducation.length}
                />
            </EducationContext.Provider>
        ));
    };

    const onAddCoursesTrainings = () => {
        setAddCoursesTrainings(addCoursesTrainings.concat(
            <CoursesTrainingsContext.Provider
                value={coursesTrainingsMemo}
                key={addCoursesTrainings.length}
            >
                <CoursesTrainings
                    count={'coursesTrainings' + addCoursesTrainings.length}
                />
            </CoursesTrainingsContext.Provider>
        ));
    };
    // (конец) Блок с функциями добавления компонента по нажатию на кнопку

    return (
        <React.Fragment>

            <BasicInformationContext.Provider value={basicInformationMemo}>
                <BasicInformation/>
            </BasicInformationContext.Provider>

            <PersonalInformationContext.Provider value={personalInformationMemo}>
                <PersonalInformation/>
            </PersonalInformationContext.Provider>

            <React.Fragment>
                <Grid container mt={4}>
                    <Grid item={true} xs={0} md={2} xl={2}/>
                    <Grid item={true} xs={12} md={8} xl={8}>
                        <Stack direction='row' spacing={2}>
                            <Typography variant="h5" sx={{color: 'text.primary'}}>
                                3. Опыт работы
                            </Typography>
                            <Fab size="small" color="primary" aria-label="add" onClick={onAddWorkExperience}>
                                <AddIcon/>
                            </Fab>
                        </Stack>
                    </Grid>
                    <Grid item={true} xs={0} md={2} xl={2}/>
                </Grid>
                {addWorkExperience}
            </React.Fragment>

            <React.Fragment>
                <Grid container mt={4}>
                    <Grid item={true} xs={0} md={2} xl={2}/>
                    <Grid item={true} xs={12} md={8} xl={8}>
                        <Stack direction='row' spacing={2}>
                            <Typography variant="h5" sx={{color: 'text.primary'}}>
                                4. Образование
                            </Typography>
                            <Fab size="small" color="primary" aria-label="add" onClick={onAddEducation}>
                                <AddIcon/>
                            </Fab>
                        </Stack>
                    </Grid>
                    <Grid item={true} xs={0} md={2} xl={2}/>
                </Grid>
                {addEducation}
            </React.Fragment>

            <React.Fragment>
                <Grid container mt={4}>
                    <Grid item={true} xs={0} md={2} xl={2}/>
                    <Grid item={true} xs={12} md={8} xl={8}>
                        <Stack direction='row' spacing={2}>
                            <Typography variant="h5" sx={{color: 'text.primary'}}>
                                5. Курсы и тренинги
                            </Typography>
                            <Fab size="small" color="primary" aria-label="add" onClick={onAddCoursesTrainings}>
                                <AddIcon/>
                            </Fab>
                        </Stack>
                    </Grid>
                    <Grid item={true} xs={0} md={2} xl={2}/>
                </Grid>
                {addCoursesTrainings}
            </React.Fragment>

            <ForeignLanguagesComputerSkillsContext.Provider
                value={[foreignLanguagesComputerSkillsFiled, setForeignLanguagesComputerSkillsField]}>
                <ForeignLanguagesComputerSkills/>
            </ForeignLanguagesComputerSkillsContext.Provider>

            <AdditionalInformationContext.Provider value={additionalInformationMemo}>
                <AdditionalInformation/>
            </AdditionalInformationContext.Provider>

        </React.Fragment>
    );
}