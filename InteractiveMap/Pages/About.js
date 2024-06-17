import "./About.css";

function About() {
  return (
    <div>
      <h1>About Us</h1>
      <div className="contents">
        <div className="text">
          <p>
            This app is entirely dedicated to the state of Conneticut. Our goal
            is to track the amount of people visiting 4 major cities by social
            science. All of this data is voluntary and you will not be
            compensated with anything. Thank you for participating in this
            expansive data collection.{" "}
          </p>
        </div>
        <div className="image">
          <img
            src="https://cleanwater.org/sites/default/files/Water_River_CT_CT_River_Hartford_Skyline_smaller.jpg"
            width="90%"
          />
        </div>
      </div>
    </div>
  );
}
export default About;
