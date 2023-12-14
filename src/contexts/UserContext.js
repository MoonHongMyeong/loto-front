import React , {useState} from "react";

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        nickname: "",
        email: "",
        apiToken: "",
        discordId: "",
    });

    const userInfo = {
        user,
        setUser
    }
    return (
        <UserContext.Provider value = {userInfo}>{children}</UserContext.Provider>
    )
};