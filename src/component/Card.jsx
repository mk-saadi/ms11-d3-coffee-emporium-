/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
// import Swal from "sweetalert2";

const Card = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3001/coffee/${_id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire("Deleted!", "Your coffee has been deleted.", "success");
                            const remaining = coffees.filter((c) => c._id !== _id);
                            setCoffees(remaining);
                        }
                    });
            }
        });
    };

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
                <img
                    src={photo}
                    alt="Album"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Name: {name}</h2>
                <p>Details: {details}.</p>
                <p>
                    Category: <span className="hover:text-yellow-800">{category}</span>.
                </p>
                <p>Manufacturer: {supplier}.</p>
            </div>
            <div className="flex justify-center md:btn-group-vertical sm:btn-group btn-group">
                <button className="btn btn-warning text-white rounded-none">View</button>
                <Link to={`/updateCoffee/${_id}`}>
                    <button className="btn btn-accent text-white rounded-none">Edit</button>
                </Link>
                <button
                    className="btn btn-error text-white rounded-none"
                    onClick={() => handleDelete(_id)}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default Card;
