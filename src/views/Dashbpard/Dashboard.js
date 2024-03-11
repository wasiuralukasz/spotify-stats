import { Wrapper } from "./Dashboard.styled";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Sidebar from "../../components/Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <Wrapper>
      <Header/>
      <Sidebar/>
      <Main/>
    </Wrapper>
  );
};

export default Dashboard;
