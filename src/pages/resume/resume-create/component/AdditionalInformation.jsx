// ************************************************
// Компонент с формой для Дополнительной информации
// ************************************************


import React, {useContext, useEffect} from "react";

// MUI
import {
    Checkbox,
    FormControl,
    FormControlLabel,
    Grid,
    InputLabel,
    ListItemText,
    OutlinedInput,
    Paper,
    Select, TextField
} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";

// Компоненты
import useForm from "../../../../globalComponents/hooks/useForm";

// Контекст
import AdditionalInformationContext from "../context/AdditionalInformationContext";


// Данные для селекта с категориями прав
const categories = [
    'A',
    'B',
    'BE',
    'C',
    'CE',
    'D',
    'DE',
    'M',
    'TB и TM'
];

// Настройки select categories
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

// Данные для стейта формы
const field = {
    militaryService: false, driverLicense: [], recommendations: '', info: '', personalQualities: ''
};

const AdditionalInformation = () => {

    // Получаем функции из пользовательского хука для заполнения формы
    const {value, handleChange, handleCheckbox, handleSelectCheckbox} = useForm(field);

    // Получаем контекст из родительского компонента
    const setAdditionalInformationField = useContext(AdditionalInformationContext);

    // Сохраняем данные из формы в стейт родительского компонента
    useEffect(() => {
        setAdditionalInformationField(value);
    }, [setAdditionalInformationField, value]);

    return (
        <React.Fragment>
            <Grid container mt={4}>
                <Grid item={true} xs={0} md={2} xl={2}/>
                <Grid item={true} xs={12} md={8} xl={8}>
                    <Typography variant="h5" sx={{color: 'text.primary'}}>
                        7. Дополнительная информация
                    </Typography>
                    <Paper>
                        <Box pt={3} pb={3}>
                            <Container>
                                <FormControlLabel
                                    control={<Checkbox/>}
                                    name='militaryService'
                                    onChange={handleCheckbox}
                                    label="Служба в армии"
                                />
                            </Container>
                            <Container>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-driver-license-label">Категории водительских прав</InputLabel>
                                    <Select
                                        labelId="demo-driver-license-label"
                                        id="6-checkbox"
                                        multiple
                                        name='driverLicense'
                                        value={value.driverLicense}
                                        onChange={handleSelectCheckbox}
                                        input={<OutlinedInput label="Категории водительских прав"/>}
                                        renderValue={(selected) => selected.join(', ')}
                                        MenuProps={MenuProps}
                                    >
                                        {categories.map((category) => (
                                            <MenuItem key={category} value={category}>
                                                <Checkbox checked={value.driverLicense.indexOf(category) > -1}/>
                                                <ListItemText primary={category}/>
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                <TextField
                                    fullWidth
                                    id="input-recommendations"
                                    label="Рекомендации"
                                    multiline
                                    name='recommendations'
                                    value={value.recommendations}
                                    onChange={handleChange}
                                    variant="standard"
                                    helperText="Укажите рекомендации полученные с прошлого места работы\учебы"
                                />
                                <TextField
                                    fullWidth
                                    id="input-info"
                                    label="О себе"
                                    multiline
                                    name='info'
                                    value={value.info}
                                    onChange={handleChange}
                                    variant="standard"
                                    helperText="Расскажите о себе"
                                />
                                <TextField
                                    fullWidth
                                    id="input-personal-qualities"
                                    label="Личные качества"
                                    multiline
                                    name='personalQualities'
                                    value={value.personalQualities}
                                    onChange={handleChange}
                                    variant="standard"
                                    helperText="Укажите свои личные качества"
                                />
                            </Container>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default React.memo(AdditionalInformation);