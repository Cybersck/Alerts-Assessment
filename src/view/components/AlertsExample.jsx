// Core
import { MenuItem, Select, TextField, FormControl, InputLabel, Button, FormHelperText } from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

// Model & Helpers
import AlertController from '@controllers/AlertController';
import { selectAlerts } from '@state/selectors';


const AlertsExample = () => {

    const newAlert = {
        timeLimit: 10, 
        text: '', 
        link: '', 
        alertType: '', 
        id: null, 
        alertTitle: ''
    }

    // current state of alerts
    const alerts = useSelector(selectAlerts);

    // local state of new alert to be added
    const [alert, setAlert] = useState(newAlert);

    // form validation state
    const [numError, setNumError] = useState(false);

    // input handlers

    const handleTitle = (event) => setAlert({...alert, alertTitle: event.target.value});
    const handleText = (event) => setAlert({...alert, text: event.target.value});

    const handleTimeLimit = (event) => {
        let val = Number.parseInt(event.target.value) | 0;
        if (val <= 0) {
            val = 0;
            setNumError(true);
        } else setNumError(false);
        setAlert({...alert, timeLimit: val});
    }

    const handleLink = (event) => setAlert({...alert, link: event.target.value});

    const handleType = (event) => setAlert({...alert, alertType: event.target.value});

    // submit new alert
    const submit = (event) => {
        event.preventDefault();
        AlertController.addAlert(alert, alerts,
            // set callback for alert timeout
            function setTimer(alert) {
                setTimeout(() => {
                    // find the element by id to remove, force click the close button
                    const alertElement = document.getElementById(alert.id);
                    alertElement?.children[2]?.children[0]?.click();
                }, alert.timeLimit * 1000);
            });
        setAlert(newAlert);
        setNumError(false);
    }

    // form validation
    const isValid = () => alert.alertType.length > 0 && alert.text.length > 0 && !numError;


  return (
    <div className='alert-example'>
        <form onSubmit={submit} className='alert-form'> 
            <TextField id='standard-basic' label='Alert Title' variant='standard' helperText='optional' value={alert.alertTitle} onChange={handleTitle}/>
            <TextField id='standard-basic' label='Alert Text' variant='standard' helperText='required' value={alert.text} onChange={handleText}/>
            <TextField id='standard-basic' label='Alert Timer' variant='standard' error={numError} helperText='Must not be 0'
                        value={alert.timeLimit} onChange={handleTimeLimit} inputProps={{inputMode: 'numeric', pattern: '[0-9]*'}} />
            <TextField id='standard-basic' label='Alert Link' variant='standard' helperText='optional' value={alert.link} onChange={handleLink} />
            <FormControl variant='standard' sx={{minWidth: 230}}>
                <InputLabel id='alert-type-label'>Alert Type</InputLabel>
                <Select labelId='alert-type-label' id='alert-type' value={alert.alertType} onChange={handleType} label='Type'>
                    <MenuItem value='success'>Success</MenuItem>
                    <MenuItem value='info'>Info</MenuItem>
                    <MenuItem value='warning'>Warning</MenuItem>
                    <MenuItem value='error'>Error</MenuItem>
                </Select>
                <FormHelperText>required</FormHelperText>
            </FormControl>
            <Button disabled={!isValid()} type="submit" variant='outlined'>Submit</Button>
        </form>
    </div>
  )
}

export default AlertsExample;