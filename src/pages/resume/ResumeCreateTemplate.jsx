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
    Checkbox
} from "@mui/material";
import {PhotoCamera} from "@mui/icons-material";
import { styled } from '@mui/material/styles';
import Avatar from "@mui/material/Avatar";

const InputImage = styled('input')({
    display: 'none',
});

export default function ResumeCreateTemplate() {

    const [picture, setPicture] = useState(null);

    const onChangePicture = e => {
        setPicture(URL.createObjectURL(e.target.files[0]));
    };

    return(
        <React.Fragment>
            <Container>
                <Grid container pt={4} pb={10}>
                    <Grid item xs={0} md={0} xl={2}/>
                    <Grid item xs={12} md={12} xl={8}>
                        <Typography variant="h5" sx={{color: 'text.primary'}}>
                            1. Основная информация
                        </Typography>
                        <Paper elevation={4}>
                            <Box p={3}>
                                <Grid container>
                                    <Grid item xs={12} md={4} xl={4}>
                                        <Paper sx={{width:160, height:160, mx: "auto"}} elevation={4} >
                                            <label htmlFor="icon-button-file" style={{position: 'relative'}}>
                                                <InputImage accept="image/*" id="icon-button-file" type="file" onChange={onChangePicture} />
                                                <Avatar alt="Прикрепить фото" src={picture} sx={{width:160, height:160, borderRadius:'4px'}}>
                                                        <PhotoCamera />
                                                </Avatar>
                                            </label>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12} md={8} xl={8}>
                                        <Stack spacing={1}>
                                            <TextField fullWidth id="input-surname" label="Фамилия" variant="standard"/>
                                            <TextField fullWidth id='input-name' label="Имя" variant="standard" />
                                            <TextField fullWidth id="input-patronymic" label="Отчество" variant="standard" />
                                        </Stack>
                                    </Grid>
                                </Grid>
                                <TextField fullWidth id="input-post" label="Должность" variant="standard"/>
                                <Grid container spacing={2} pt={1}>
                                    <Grid item xs={12} md={3} xl={3}>
                                        <TextField fullWidth id="input-salary" label="Желаемая зарплата" variant="standard" type='number'/>
                                    </Grid>
                                    <Grid item xs={12} md={3} xl={3}>
                                        <TextField fullWidth id="input-salary" label="Занятость" variant="standard"/>
                                    </Grid>
                                    <Grid item xs={12} md={3} xl={3}>
                                        <TextField fullWidth id="input-salary" label="График работы" variant="standard"/>
                                    </Grid>
                                    <Grid item xs={12} md={3} xl={3}>
                                        <FormControlLabel fullWidth control={<Checkbox />} label="Готовность к командировкам" />
                                    </Grid>
                                </Grid>
                                <Grid container spacing={2} pt={1}>
                                    <Grid item xs={12} md={6} xl={6}>
                                        <TextField id="input-salary" label="Телефон" variant="standard"/>
                                    </Grid>
                                    <Grid item xs={12} md={6} xl={6}>
                                        <TextField id="input-salary" label="Электронная почта" variant="standard"/>
                                    </Grid>
                                </Grid>














                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={0} md={0} xl={2}/>
                </Grid>
            </Container>
      </React.Fragment>
    );
};