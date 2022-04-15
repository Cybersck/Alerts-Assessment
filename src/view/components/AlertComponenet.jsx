import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Alert, AlertTitle } from '@mui/material';

const AlertComponenet = ({alert, removeAlert, id}) => {
    const nav = useNavigate();
    const hasLink = alert.link.length > 0;
  return (
    <Alert className={hasLink ? 'clickable' : ''} id={id} severity={alert.alertType} 
            onClose={() => removeAlert(alert)} onClick={hasLink ? () => nav(alert.link) : ()=>{}}>
        { alert.alertTitle.length > 0 ? <AlertTitle>{alert.alertTitle}</AlertTitle> : <></> }
        { alert.text }
    </Alert>
  )
}

export default AlertComponenet;