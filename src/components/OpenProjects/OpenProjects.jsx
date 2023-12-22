import "./OpenProjects.css";
import Topbar from "../Topbar/Topbar";
import Footer from "../Footer/Footer";
export default function Events(){
    return(
        <div className="events-container">
            <div className="events-topbar">
                <Topbar />
            </div>
            <h1 className="events-heading-title">Open Projects</h1>
            <div className="events-recent" >
                <h1>Coming Soon</h1>
            </div>
            <Footer />
        </div>
    )
}
