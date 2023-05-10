import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddCoffee = () => {
    const handleAddCoffee = (event) => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = {
            name: name,
            quantity: quantity,
            supplier: supplier,
            taste: taste,
            category: category,
            details: details,
            photo: photo,
        };

        console.log(newCoffee);

        fetch("http://localhost:3001/coffee", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newCoffee),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Done!",
                        text: "Coffee successfully added!",
                        icon: "success",
                        confirmButtonText: "Cool",
                    });
                }
            });
    };

    return (
        <div className="bg-[#f4f3f0] p-24">
            <form onSubmit={handleAddCoffee}>
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
                                required
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
                                required
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
                                required
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
                                required
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
                                required
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
                                required
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
                                required
                                placeholder="photo url"
                                className="input input-bordered w-full bg-orange-100"
                            />
                        </label>
                    </div>
                </div>
                <div className="flex justify-center items-center mt-8 gap-1 btn-group">
                    <input
                        type="submit"
                        className="text-white font-bold btn bg-yellow-900 hover:bg-yellow-900 focus:bg-yellow-950 border-0 rounded-none w-1/2"
                        value="Add Coffee"
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
    );
};

export default AddCoffee;
