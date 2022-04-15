import store from '@root/store';
import * as Action from '@state/actions';

class AlertController {
    // add new alert
    addAlert(alert, alerts, timerCallback) {
        alert.id = this.generateId();
        const newAlerts = [...alerts, alert];
        store.dispatch(Action.setAlerts(newAlerts));
        timerCallback(alert);
    }

    // remove existing alert by ID
    removeAlert(alert, alerts) {
        const newAlerts = alerts.filter(a => a.id !== alert.id);
        store.dispatch(Action.setAlerts(newAlerts));
    }

    // generate unique-enough ID
    generateId() {
        const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
        let id = '';
        for (let i = 0; i < 7; i++) {
            id += chars[Math.floor(Math.random() * chars.length - 1)];
        }
        return id;
    }

}

export default new AlertController();