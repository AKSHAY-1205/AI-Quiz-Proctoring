import React, { useState, useEffect } from "react";

function App() {
    const [backendMessage, setBackendMessage] = useState("");

    useEffect(() => {
        fetch("http://127.0.0.1:5000/")
            .then((res) => res.json())
            .then((data) => setBackendMessage(data.message))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <h1>AI Quiz Proctoring System</h1>
            <p>{backendMessage}</p>
        </div>
    );
}

export default App;
