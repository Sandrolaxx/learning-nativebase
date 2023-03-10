import React from "react";
import { NativeBaseProvider } from "native-base";
import Home from "./pages/Home";
import LinearGradient from "react-native-linear-gradient";

const config = {
    dependencies: {
        "linear-gradient": LinearGradient
    }
}

export default function App() {
    return (
        <NativeBaseProvider config={config}>
            <Home />
        </NativeBaseProvider>
    );
}