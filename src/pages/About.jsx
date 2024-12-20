 import { ContentSection,  Founders, Timeline } from "../export";
import {
  ourFoundersData,
  timelineData,
  storyData,
  missionData,
} from "../utils/data.jsx";
const About = () => {
  return (
    <>
      <section className=" ">
        <ContentSection data={storyData} />
        <ContentSection data={missionData} reversed={true} />
      </section>

       <Founders data={ourFoundersData} />
      <Timeline data={timelineData} />
    </>
  );
};

export default About;
