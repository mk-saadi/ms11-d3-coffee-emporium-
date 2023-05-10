import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "./Card";

const Home = () => {
    const loadedCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(loadedCoffees);

    return (
        <div className="m-20">
            <h1 className="text-3xl text-center mb-10 font-bold text-yellow-800 drop-shadow-lg">
                Coffees Available {coffees.length}
            </h1>

            <div className="grid sm:grid-cols-2 gap-5">
                {coffees.map((coffee) => (
                    <Card
                        key={coffee._id}
                        coffee={coffee}
                        coffees={coffees}
                        setCoffees={setCoffees}
                    ></Card>
                ))}
            </div>
            <Link
                to="/addCoffee"
                className="flex justify-center items-center mt-8"
            >
                <button className="btn btn-outline w-full">Add Coffee</button>
            </Link>
        </div>
    );
};

export default Home;
