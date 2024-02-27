import FrontendOverview from "./FrontendOverview";
import BackendOverview from "./BackendOverview";
import LearningOverview from "./LearningOverview";

function Overview() {
  return (
    <div
      className="h-full w-full lg:col-start-1 flex flex-col gap-32 lg:gap-64"
      id="overview"
    >
      <FrontendOverview />
      <BackendOverview />
      <LearningOverview />
    </div>
  );
}

export default Overview;
