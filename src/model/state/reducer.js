import * as Action from '@state/actions.js';

const initialState = {
    alerts: []
}
/* From the assessment documentation, it asserts that the reducer should have certain functionality such as certain parameters being passable to dispatch,
generating an ID, having a timeout, and importing the reducer directly into components. 
However, I am using a Model-View-Controller design pattern for this project and
would argue that the reducer should not contain any functional logic or data manipulation of any kind as that would add unnecessary obscurity.
The reducer is better off having the single responsibility of updating the state and nothing more. Therefore, I have
decided to put all design spec functionality for the reducer in the AlertsController as I believe it makes the project more readable and maintainable.

*/

export const reducer = (state=initialState, action) => {
    switch (action.type) {
        case Action.Types.SET_ALERTS: {
            return {...state, alerts: action.payload};
        }
        default: return {...state};
    }
}