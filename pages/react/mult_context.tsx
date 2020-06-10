import React, {ComponentProps, FC, useContext} from 'react';
import {Layout, Menu, Breadcrumb} from "antd";

const {Header, Footer} = Layout;

interface User {
    name: string;
}

interface ProfilePageProps {
    theme: string;
    user: User;
}

const ThemeContext = React.createContext("dark");
const UserContext = React.createContext({name: 'Guest'})

const ProfilePage: FC<ProfilePageProps> = (props) => {
    return (
        <div>
            <div>
                <span>Theme:</span>
                <span>{props.theme}</span>
            </div>
            <div>
                <span>User:</span>
                <span>{props.user.name}</span>
            </div>
        </div>
    );
}

const MyContent: FC<ComponentProps<any>> = (props) => {
    const user = useContext(UserContext);
    return (
        <ThemeContext.Consumer>
            {theme => (
                <ProfilePage theme={theme} user={user}/>
            )}
        </ThemeContext.Consumer>
    );
}


const MyLayout: FC<ComponentProps<any>> = (props) => {
    return (
        <Layout>
            <Header/>
            <MyContent/>
        </Layout>
    );
}

const Comp: FC<ComponentProps<any>> = (props) => {
    return (
        <ThemeContext.Provider value={"light"}>
            <UserContext.Provider value={{name: 'Admin'}}>
                <MyLayout/>
            </UserContext.Provider>
        </ThemeContext.Provider>

    );
}

export default Comp;