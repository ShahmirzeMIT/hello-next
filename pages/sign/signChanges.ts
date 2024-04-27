import signProps from './signProps';

export default function signChanges() {
    const inputChange = (val: { value: string | number | undefined; name: string }) => {
        setFormData((prev:any) => ({
            ...prev,
            [val.name]: {
                ...prev[val.name],
                value: val.value
            }
        }));
    };

    const { formData, setFormData } = signProps({ inputChnage: inputChange });

    return { formData, setFormData };
}
