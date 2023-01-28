import './TodayAction.css'
import actionMorning from './action_morning.svg'
import actionLunch from './action_lunch.svg'
import actionDinner from './action_dinner.svg'
import actionSnack from './action_snack.svg'
export default function TodayActionButton() {
    return (
        <div className={'d-flex justify-content-between today-action'}>
            <img src={actionMorning} alt=""/>
            <img src={actionLunch} alt=""/>
            <img src={actionDinner} alt=""/>
            <img src={actionSnack} alt=""/>
        </div>
    )
}
