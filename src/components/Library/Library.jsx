import Topbar from "../Topbar/Topbar";
import "./Library.css";
import Footer from "../Footer/Footer";

const Library = () => {
  return (
    <>
      <div className="events-container">
        <div className="events-topbar">
          <Topbar />
        </div>
        <h1 className="events-heading-title">Library</h1>
        <div className="events-recent">
          <h1>Coming Soon</h1>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Library;
