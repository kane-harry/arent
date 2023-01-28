import './TodayStatistic.css'
import icon from './d01.png'
import spinner from './spinner.svg'
import moment from 'moment'

export default function TodayStatistic() {
    const today = moment()
    const month = today.format('M');
    const day   = today.format('D');
    const percent = '24%'
    return (
        <div className={"today-statistic self-center"}>
            <img src={icon} className="absolute left-0"/>
            <img src={spinner} className={"cursor-pointer absolute top-0 left-0 mt-16 ml-40 hover:shadow-outline"}/>
            <label className={"absolute month-day"}>{`${month}/${day}`}</label>
            <label className={"absolute percent"}>{percent}</label>
        </div>
    )
}
