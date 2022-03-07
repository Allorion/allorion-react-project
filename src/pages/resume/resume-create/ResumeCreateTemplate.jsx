// ********************************************
// Компонент главной страницы "Создание резюме"
// ********************************************


import React, {useState} from "react";

// Компоненты
import BasicInformation from "./component/BasicInformationForm";
import PersonalInformationForm from "./component/PersonalInformationForm";
import WorkExperienceTemplate from "./component/WorkExperienceTemplate";
import EducationTemplate from "./component/EducationTemplate";
import CoursesTrainingsTemplate from "./component/CoursesTrainingsTemplate";
import ForeignLanguagesComputerSkills from "./component/LanguagesAndSkillsTemplate";
import AdditionalInformation from "./component/AdditionalInformation";

// Контекст
import BasicInformationContext from "./context/BasicInformationContext";
import PersonalInformationContext from "./context/PersonalInformationContext";
import WorkExperienceFormContext from "./context/WorkExperienceFormContext";
import EducationFormContext from "./context/EducationFormContext";
import CoursesTrainingsContext from "./context/CoursesTrainingsContext";
import LanguagesAndSkillsContext from "./context/LanguagesAndSkillsContext";
import AdditionalInformationContext from "./context/AdditionalInformationContext";


export default function ResumeCreateTemplate() {


    // Блок со стейтами для сохранения данных записанных во всех полях формы
    const [basicInformationField, setBasicInformationField] = useState({});
    const [personalInformationField, setPersonalInformationField] = useState({});
    const [workExperienceField, setWorkExperienceField] = useState({});
    const [educationField, setEducationField] = useState({});
    const [coursesTrainingsField, setCoursesTrainingsField] = useState({});
    const [languagesAndSkillsField, setLanguagesAndSkillsField] = useState({});
    const [additionalInformationField, setAdditionalInformationField] = useState({});

    return (
        <React.Fragment>
            <div style={{marginBottom: 100}}>
                <BasicInformationContext.Provider value={setBasicInformationField}>
                    <BasicInformation/>
                </BasicInformationContext.Provider>
                <PersonalInformationContext.Provider value={setPersonalInformationField}>
                    <PersonalInformationForm/>
                </PersonalInformationContext.Provider>
                <WorkExperienceFormContext.Provider value={setWorkExperienceField}>
                    <WorkExperienceTemplate/>
                </WorkExperienceFormContext.Provider>
                <EducationFormContext.Provider value={setEducationField}>
                    <EducationTemplate/>
                </EducationFormContext.Provider>
                <CoursesTrainingsContext.Provider value={setCoursesTrainingsField}>
                    <CoursesTrainingsTemplate/>
                </CoursesTrainingsContext.Provider>
                <LanguagesAndSkillsContext.Provider
                    value={setLanguagesAndSkillsField}>
                    <ForeignLanguagesComputerSkills/>
                </LanguagesAndSkillsContext.Provider>
                <AdditionalInformationContext.Provider value={setAdditionalInformationField}>
                    <AdditionalInformation/>
                </AdditionalInformationContext.Provider>
            </div>
        </React.Fragment>
    );
};