import PageHeader from "../../components/Header/Header";


export default function HomePage({loggedUser, handleLogout}) {
    return (
        <PageHeader loggedUser={loggedUser} handleLogout={handleLogout}/>
    )
}