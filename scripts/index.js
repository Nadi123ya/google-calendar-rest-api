import { renderTimescale } from './calendar/timescale.js'
import { renderEvents } from './events/events.js'
import { renderWeek } from './calendar/calendar.js'
import { renderHeader } from './calendar/header.js'
import { initNavigation } from './header/navigation.js'
import { setItem } from './common/storage.js'
import { getStartOfWeek } from './common/time.utils.js'
import { initEventForm } from './events/createEvent.js'
import { getEvents } from './common/eventsGateway.js'

document.addEventListener('DOMContentLoaded', () => {
    getEvents().then(() => {
        renderTimescale()
        setItem('displayedWeekStart', getStartOfWeek(new Date()))
        renderWeek()
        renderHeader()
    })
    initNavigation()
    initEventForm()
})

const onStorageChange = (e) => {
    if (e.key === 'events') {
        renderEvents()
    }
}

window.addEventListener('storage', onStorageChange)
