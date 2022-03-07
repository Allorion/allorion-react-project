import React, {useState} from "react";

const useForm = (values) => {

    const [value, setValue] = useState(values);

    const handleChange = event => {
        setValue((values) => ({
            ...values,
            [event.target.name]: event.target.value
        }));
    };

    const handlePicture = event => {
        setValue(values => ({
            ...values,
            [event.target.name]: URL.createObjectURL(event.target.files[0])
        }));
    };

    const handleCheckbox = (event) => {
        setValue(values => ({
            ...values,
            [event.target.name]: event.target.checked
        }));
    };

    const handleDate = event => {
        setValue(values => ({
            ...values,
            [event.target.name]: event
        }));
    };

    // Запись input с датой
    const handleInputRangeDate = (event, name) => {
        setValue((values) => ({
            ...values,
            [name]: event
        }));
    };

    const handleInputDate = (event, name) => {
        setValue((values) => ({
            ...values,
            [name]: event
        }));
    };

    const handleRating = (event, name) => {
        setValue((values) => ({
            ...values,
            [name]: event
        }));
    };

    const handleSelectCheckbox = (event) => {
        const {target: { value }} = event;
        setValue((valueField) => ({
            ...valueField,
            [event.target.name]: typeof value === 'string' ? value.split(',') : value,
        }));
    };

    return {value, setValue, handleChange, handlePicture, handleCheckbox, handleDate, handleInputRangeDate,
        handleInputDate, handleRating, handleSelectCheckbox
    };

};

export default useForm;