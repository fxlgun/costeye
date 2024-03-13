import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

const Home = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    let navigate = useNavigate();
    useEffect(() => {
        onAuthStateChanged(auth, async (res) => {
            if (!res?.accessToken) {
                navigate("/login");
            } else {
                setUser(res);
                setLoading(false);
            }
        });
    }, []);
    return (
        <div>Homeasdksajndjasndjads</div>
    )
}

export default Home