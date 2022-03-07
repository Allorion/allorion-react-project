import React from 'react';

const useFormLete = (setValues) => {

    const handleChange = e => {
        const { name, value } = e.target;
        setValues(values => ({
            ...values,
            [name]: value
        }));
    };

    return {handleChange};
};

export default useFormLete;