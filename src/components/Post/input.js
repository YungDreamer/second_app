import React from 'react';

import Input from '@material-ui/core/Input';

export default (({inputValue, changeValue}) => (
    <div>
        <Input
            id="inputtest"
            defaultValue=''
            inputProps={{'aria-label': 'Description'}}
            onChange={({target: {value}}) => changeValue(value)}
        />
    </div>));