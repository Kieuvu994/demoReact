import { TextField, Box, Button, colors } from '@mui/material';
import { useState } from 'react';
export const OptionText = ({ defaultValue, option, onChange }) => {
    return (
        <TextField
            id="standard-select-currency-native"
            select
            defaultValue={defaultValue}
            onChange={onChange}
            SelectProps={{
                native: true,
            }}
            helperText="Please select Type Product"
            variant="standard"
        >
            <option value="">None</option>
            {option?.map((op) => (
                <option key={op.code} value={op.code}>
                    {op.param_meaning}
                </option>
            ))}
        </TextField>
    )
}
export const Text = ({ defaultValue, onChange }) => {
    return (
        <TextField
            label="Search"
            id="standard-start-adornment"
            defaultValue={defaultValue}
            helperText="Please select Type Product"
            onChange={onChange}
            InputProps={{
                'aria-label': 'weight',
            }}
            variant="standard"
        />
    )
}