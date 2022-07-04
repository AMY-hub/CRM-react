export const validateFormData = (data) => {
    const invalidFields = [];

    for ( let key in data ) {
        if(!data[key] || data[key].trim() === '') {
            invalidFields.push(key);
        }

        return {
            invalidFields,
            invalid: !!invalidFields.length
        }
    }
}