import NumberFormat  from 'react-number-format';
import { Input } from '@mui/material'

export const NumberInput = (props) => {
    const { onChange, ...other } = props;

    return (
    <NumberFormat
        {...other}
        onValueChange={(values) => {
        onChange({
            target: {
            name: props.name,
            value: values.value,
            },
        });
        }}
        isNumericString
        fixedDecimalScale
        decimalScale={2}
        prefix="R$"
        customInput={Input}
    />
    );
}