import React from 'react'
import {ReactComponent as CalendarIcon} from './calendar.svg'
import {ReactComponent as ChartIcon} from './chart.svg'
import {ReactComponent as DashIcon} from './dashboard.svg'
import {ReactComponent as DeleteIcon} from './trash.svg'
import {ReactComponent as Desktop} from './desktop.svg'
import {ReactComponent as EditIcon} from './edit.svg'
import {ReactComponent as FlagIcon} from './flag.svg'
import {ReactComponent as GolfBall} from './golfball.svg'
import {ReactComponent as GolfHole} from './golfholealt.svg'
import {ReactComponent as HistoryIcon} from './history.svg'
import {ReactComponent as MapIcon} from './map.svg'
import {ReactComponent as MapMarker} from './map-marker.svg'
import {ReactComponent as SummaryIcon} from './summary.svg'
import {ReactComponent as VideoIcon} from './video.svg'

const iconType = {
    calendar: CalendarIcon,
    chart: ChartIcon,
    dashboard: DashIcon,
    delete: DeleteIcon,
    desktop: Desktop,
    edit: EditIcon,
    flag: FlagIcon,
    golfball: GolfBall,
    golfhole: GolfHole,
    history: HistoryIcon,
    map: MapIcon,
    mapmarker: MapMarker,
    summary: SummaryIcon,
    video: VideoIcon
}

const IconComponent = ({name, ...props}) => {
    let SvgIcon = iconType[name];
    return <SvgIcon {...props} />
};

export default IconComponent