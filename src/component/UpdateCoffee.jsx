import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee = useLoaderData();

    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleUpdateCoffee = (event) => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffee = {
            name: name,
            quantity: quantity,
            supplier: supplier,
            taste: taste,
            category: category,
            details: details,
            photo: photo,
        };

        console.log(updatedCoffee);

        fetch(`http://localhost:3001/coffee/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updatedCoffee),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Done!",
                        text: "Coffee updated added!",
                        icon: "success",
                        confirmButtonText: "Cool",
                    });
                }
            });
    };

    return (
        <>
            <div className="bg-[#f4f3f0] p-24">
                <h3 className="text-2xl -mt-14 text-gray-700 font-extrabold text-center mb-2">
                    Update info of {name} coffee
                </h3>
                <form onSubmit={handleUpdateCoffee}>
                    {/* form: name and quantity*/}
                    <div className="sm:flex gap-6">
                        <div className="form-control sm:w-1/2">
                            <label className="label">
                                <span className="label-text">Coffee</span>
                            </label>
                            <label className="input-group input-group-vertical">
                                <input
                                    name="name"
                                    type="text"
                                    defaultValue={name}
                                    placeholder="coffee Name"
                                    className="input input-bordered w-full bg-orange-100"
                                />
                            </label>
                        </div>
                        <div className="form-control sm:w-1/2">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <label className="input-group input-group-vertical">
                                <input
                                    name="quantity"
                                    type="number"
                                    defaultValue={quantity}
                                    placeholder="quantity"
                                    className="input input-bordered w-full bg-orange-100"
                                />
                            </label>
                        </div>
                    </div>
                    {/* form: supplier and taste */}
                    <div className="sm:flex gap-6">
                        <div className="form-control sm:w-1/2">
                            <label className="label">
                                <span className="label-text">Supplier</span>
                            </label>
                            <label className="input-group input-group-vertical">
                                <input
                                    name="supplier"
                                    type="text"
                                    defaultValue={supplier}
                                    placeholder="supplier's name"
                                    className="input input-bordered w-full bg-orange-100"
                                />
                            </label>
                        </div>
                        <div className="form-control sm:w-1/2">
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <label className="input-group input-group-vertical">
                                <input
                                    name="taste"
                                    type="text"
                                    defaultValue={taste}
                                    placeholder="taste"
                                    className="input input-bordered w-full bg-orange-100"
                                />
                            </label>
                        </div>
                    </div>
                    {/* form: category and details */}
                    <div className="sm:flex gap-6">
                        <div className="form-control sm:w-1/2">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <label className="input-group input-group-vertical">
                                <input
                                    name="category"
                                    type="text"
                                    defaultValue={category}
                                    placeholder="category"
                                    className="input input-bordered w-full bg-orange-100"
                                />
                            </label>
                        </div>
                        <div className="form-control sm:w-1/2">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <label className="input-group input-group-vertical">
                                <input
                                    name="details"
                                    type="text"
                                    defaultValue={details}
                                    placeholder="details"
                                    className="input input-bordered w-full bg-orange-100"
                                />
                            </label>
                        </div>
                    </div>
                    {/* form photo url */}
                    <div>
                        <div className="form-control  w-full">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <label className="input-group input-group-vertical">
                                <input
                                    name="photo"
                                    type="text"
                                    defaultValue={photo}
                                    placeholder="photo url"
                                    className="input input-bordered w-full bg-orange-100"
                                />
                            </label>
                        </div>
                    </div>
                    <div className="flex justify-center items-center mt-8 btn-group gap-1">
                        <input
                            type="submit"
                            className="text-white font-bold btn bg-yellow-900 hover:bg-yellow-900 focus:bg-yellow-950 border-0 rounded-none w-1/2"
                            value="Update Coffee"
                        />
                        <Link
                            to="/"
                            className="btn font-bold border-0 rounded-none px-8"
                        >
                            Home
                        </Link>
                    </div>
                </form>
            </div>
        </>
    );
};

export default UpdateCoffee;
