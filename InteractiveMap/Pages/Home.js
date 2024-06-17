import Description from "../Components/Description";

function Home() {
  return (
    <div>
      <br />
      <h1>Home Page</h1>
      <div>
        <img src="https://www.visitconnecticut.com/adservimage/4545.jpg" />
      </div>

      <Description Name="Stamford" />
      <Description Name="New Haven" />
      <Description Name="Hartford" />
      <Description Name="New London" />
    </div>
  );
}

export default Home;
