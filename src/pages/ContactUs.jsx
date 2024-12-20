 import { Questions, FeedBacks, ContactFormSection } from "../export.jsx";
import { questionsData, feedbackData } from "../utils/data.jsx";

function ContactUs() {
  return (
    <>
      <ContactFormSection />
 
      <Questions data={questionsData} />
      <FeedBacks data={feedbackData} />
    </>
  );
}

export default ContactUs;
