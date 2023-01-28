import './TodayStatistic.css'
import icon from './d01.png'
import spinner from './spinner.svg'
import moment from 'moment'
const formatNumber = function (date:any) {
    return date > 9 ? date : `0${date}`
}
export default function TodayStatistic() {
    const today = moment()
    const month = today.format('M');
    const day   = today.format('D');
    const percent = Math.floor(Math.random() * 100)
    return (
        <div className={"today-statistic self-center"}>
            <img src={icon} className="absolute left-0"  alt=""/>
            <img src={spinner} className={"cursor-pointer absolute top-0 left-0 mt-16 ml-40 hover:shadow-outline circle"}  alt=""/>
            <label className={"absolute month-day"}>{`${formatNumber(month)}/${formatNumber(day)}`}</label>
            <label className={"absolute percent"}>{`${formatNumber(percent)}%`}</label>
        </div>
    )
}
