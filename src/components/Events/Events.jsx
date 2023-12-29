import "./Events.css";
import Topbar from "../Topbar/Topbar";
import Footer from "../Footer/Footer";
import {Recent} from "./EventsData.js"
import EventCard from "./EventCard";
import UpcomingEvents from "./UpcomingEvents.jsx";
export default function Events(){

    return(
        <div className="events-container">
            <div className="events-topbar">
                <Topbar />
            </div>
            <div className="upcoming-events-container">
            <h1 className="events-heading-title">Upcoming Events</h1>
            <div  className="upcoming-events">
            <UpcomingEvents/>
            </div>
            </div>
            <h1 className="events-heading-title">Previous Events</h1>
            <div className="events-recent" >
                {Recent.map((data) => (
                    <EventCard
                    key = {data.id}
                    title = {data.title}
                    date = {data.date}
                    location = {data.location}
                    details = {data.details}
                    />
                ))}
            </div>
            <Footer />
        </div>
    )
}
