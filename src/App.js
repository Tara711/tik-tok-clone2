import "./App.css";
import Video from "./components/Video";
import tiktok1 from "./assets/2022-12-18-235552817.mp4";
import tiktok2 from "./assets/2022-01-24-105518929.mp4";
import tiktok3 from "./assets/2022-02-02-223728677.mp4";
import tiktok4 from "./assets/2022-02-11-170840665.mp4";
import tiktok5 from "./assets/ac2db4845d1959b02860bd75dba69420.mp4";

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video
          tiktok={tiktok1}
          channel="binita2028"
          description="My Love"
          song="Shape of you "
          likes={5000000000}
          messages={30000000}
          shares={2000000}
        />
        <Video
          tiktok={tiktok2}
          channel="binita2028"
          description="My Love"
          song="Shape of you "
          likes={5000}
          messages={3000}
          shares={2000}
        />
        <Video
          tiktok={tiktok3}
          channel="binita2028"
          description="My Love"
          song="Shape of you "
          likes={5000}
          messages={3000}
          shares={2000}
        />
        <Video
          tiktok={tiktok4}
          channel="binita2028"
          description="My Love"
          song="Shape of you "
          likes={5000}
          messages={3000}
          shares={2000}
        />
        <Video
          tiktok={tiktok5}
          channel="binita2028"
          description="Heres How It Works"
          song="Salko pat tapari hune"
          likes={10000}
          messages={300}
          shares={1000}
        />
      </div>
    </div>
  );
}

export default App;
