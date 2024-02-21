import React from 'react';
import { MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import styled from 'styled-components';
import theme from '../utils/customTheme';

const StyledFormControl = styled(FormControl)`
    width: 100%;
    margin-bottom: 20px;
    background-color: ${theme.palette.primary.variant1};
`;

const StyledSelect = styled(Select)`
    min-width: 120px;
    background-color: #fff;
`;

function CustomDropdown({ label, value, options, onChange }) {
    return (
        <div>
            <StyledFormControl>
                <InputLabel id="select-label">{label}</InputLabel>
                <StyledSelect
                    labelId="select-label"
                    id="select"
                    value={value}
                    onChange={onChange}
                    label={label}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {options.map((option) => (
                        <MenuItem key={option} value={option}>{option}</MenuItem>
                    ))}
                </StyledSelect>
            </StyledFormControl>
        </div>
    );
}

export default CustomDropdown;
