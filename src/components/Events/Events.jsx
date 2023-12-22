import { useEffect } from "react";
import "./Events.css";
import Topbar from "../Topbar/Topbar";
import Footer from "../Footer/Footer";
import {Recent} from "./EventsData.js"
import EventCard from "./EventCard";
import UpcomingEventCard from "./UpcomingEventCard";
export default function Events(){
    useEffect(() => {
        window.scrollTo(0,0);
    }, []); 
    return(
        <div className="events-container">
            <div className="events-topbar">
                <Topbar />
            </div>
            <h1 className="events-heading-title">Upcoming Events</h1>
            <div  className="upcoming-card">
            <UpcomingEventCard/>
                {/* <EventCard 
                key={Upcoming.id}
                title = {Upcoming.title}
                date = {Upcoming.date}
                location = {Upcoming.location}
                details = {Upcoming.details}
                />  */}
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
