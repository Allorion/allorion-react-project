import React, {useContext} from 'react';

// MUI
import {
    Box,
    Checkbox,
    Container,
    FormControl,
    FormControlLabel,
    Grid,
    InputLabel,
    ListItemText,
    OutlinedInput,
    Paper,
    Select,
    TextField,
    Typography,
    MenuItem
} from "@mui/material";

// Контекст
import AdditionalInformationContext from "../context/AdditionalInformationContext";

// Пользовательские хуки
import useForm from "../../../globalComponents/hooks/useForm";


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

const AdditionalInformation = () => {

    // Получаем значение стейта родительского компонента через контектс
    const [values, setValues] = useContext(AdditionalInformationContext);

    // Получаем пользовательский хук
    const {handleChange} = useForm(setValues);

    // Обновления данных не вохзможных для обновления через пользовательский хук
    const handleDriverLicense = (event) => {
        const {
            target: { value },
        } = event;
        setValues((valueField) => ({
            ...valueField,
            'driverLicense': typeof value === 'string' ? value.split(',') : value,
        }));
    };

    const handleMilitaryService = (event) => {
        setValues(values => ({
            ...values,
            'militaryService': event.target.checked
        }));
    }

    return(
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
                                    control={<Checkbox />}
                                    onChange={handleMilitaryService}
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
                                        value={values.driverLicense}
                                        onChange={handleDriverLicense}
                                        input={<OutlinedInput label="Категории водительских прав" />}
                                        renderValue={(selected) => selected.join(', ')}
                                        MenuProps={MenuProps}
                                    >
                                        {categories.map((category) => (
                                            <MenuItem key={category} value={category}>
                                                <Checkbox checked={values.driverLicense.indexOf(category) > -1} />
                                                <ListItemText primary={category} />
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
                                    value={values.recommendations}
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
                                    value={values.info}
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
                                    value={values.personalQualities}
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