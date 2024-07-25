import { useState, useEffect } from "react";
import { FlatList } from "react-native";
import { CardHorizontalFood } from "./food";

export function TrendingFoods() {
    const [foods, setFoods] = useState([])

    useEffect(() => {
        async function getFoods() {
            const response = await fetch("http://192.168.0.107:3000/foods")
            const data = await response.json()
            setFoods(data)
        }

        getFoods()
    }, [])

    return (
        <FlatList 
            data={foods}
            renderItem={ ({ item }) => <CardHorizontalFood /> }
            horizontal={true}
        />
    );
}