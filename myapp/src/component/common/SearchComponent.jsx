import { TextField, Box, Button, colors } from '@mui/material';
import { useState } from 'react';
export const OptionText = ({ defaultValue, option, helperText, onChange }) => {
    return (
        <TextField
            id="standard-select-currency-native"
            select
            defaultValue={defaultValue}
            onChange={onChange}
            SelectProps={{
                native: true,
            }}
            helperText={helperText}
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
export const Text = ({ defaultValue, helperText, onChange }) => {
    return (
        <TextField
            id="standard-start-adornment"
            defaultValue={defaultValue}
            helperText={helperText}
            onChange={onChange}
            InputProps={{
                'aria-label': 'weight',
            }}
            variant="standard"
        />
    )
}
export const Date = ({ defaultValue, helperText, onChange }) => {
    return (
        <>
            <TextField
                id="standard-start-adornment"
                defaultValue={defaultValue}
                helperText={helperText}
                onChange={onChange}
                type='date'
                InputProps={{
                    'aria-label': 'weight',
                }}
                variant="standard"
            />
        </>
    )
}