import MultiActionAreaCard from "./MultiActionAreaCard";
import "./Explore.css";
import RTC  from "../images/rtc.png";
import gdg from "../images/gdg.jpg";
import wtm from "../images/wtm.jpg";
import CarouselComponent from "./CarouselComponent";
export default function Explore () {

  

    return(
<>
<CarouselComponent/>
 <h1 className="explore-heading">Communities you can join!!!</h1>
<div className="explore-container">
<MultiActionAreaCard imageSrc={RTC} title="RTC Community" />
        <MultiActionAreaCard imageSrc={gdg} title="GDG Community" />
        <MultiActionAreaCard imageSrc={wtm} title="Women Techmakers" />
        <MultiActionAreaCard imageSrc={RTC} title="Community 4" />
        <MultiActionAreaCard imageSrc={gdg} title="Community 5" />
        <MultiActionAreaCard imageSrc={wtm} title="Community 6" />
  </div>
</>
    )
}