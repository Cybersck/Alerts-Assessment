// Core
import React from 'react';
import { AlertComponent } from '@components/Components';
import { useSelector } from 'react-redux';

// Model & Helpers
import { selectAlerts } from '@state/selectors';
import AlertController from '@controllers/AlertController';

const AlertManager = () => {

    const alerts = useSelector(selectAlerts);

    const removeAlert = (alert) => AlertController.removeAlert(alert, alerts);

  return (
    <div className="alerts-container">
        {alerts.map(alert => (
            <AlertComponent key={alert.id} id={alert.id} alert={alert} removeAlert={removeAlert}/>
        ))}

    </div>
  )
}

export default AlertManager