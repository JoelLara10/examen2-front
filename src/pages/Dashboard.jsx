import UserTable from "../components/UserTable";
import AddUserForm from "../components/AddUserForm";

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <AddUserForm />
            <UserTable />
        </div>
    );
};

export default Dashboard;
