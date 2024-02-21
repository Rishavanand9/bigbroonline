import AppBarComponent from "../components/Appbar";
import ResponsiveCard from "../components/Card";

function AllComponents() {
  return (
    <>
      <ResponsiveCard title={"GOLDEN"} subtitle={"-XX-"} isLive={true} />
      <AppBarComponent />
    </>
  );
}

export default AllComponents;
