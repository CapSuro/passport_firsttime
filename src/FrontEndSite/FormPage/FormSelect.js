import React from 'react';
import {Select} from 'antd';

const {Option} = Select;

export const FormSelect = (props) => <Select>
    {props.data_options[0].name}
</Select>