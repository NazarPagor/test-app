import React, {useState} from 'react';
import {Button, TextField, Typography} from "@mui/material";


const InstanceIpForm = ({instanceIpArray, setInstanceIpArray}) => {


    const [instanceIP, setInstanceIp] = useState('');
    const [error, setError] = useState(false);
    const addInstanceIp = (event) => {
        if (instanceIP.length === 0) {
            event.preventDefault();
            setError(true);
        } else {
            setInstanceIpArray([...instanceIpArray, instanceIP]);
            setInstanceIp('');
            setError(false);
        }
    }
    return (
        <div>
            <Typography variant='h6'>Instance IP</Typography>
            <TextField
                variant="standard"
                value={instanceIP}
                onChange={event => setInstanceIp(event.target.value)}
            />
            <div>
                {error ? "Instance Ip is required form" : ""}
            </div>
            <div>
                {instanceIpArray.map((item, index) => (
                    <div key={index}> {index+1  }.{item}</div>
                ))}
            </div>
            <Button type="button" onClick={addInstanceIp}>Add Ip</Button>
        </div>
    );
};

export default InstanceIpForm;