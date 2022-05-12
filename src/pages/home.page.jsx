import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Home PAge
      <Outlet />
    </div>
  );
};

export default Home;
