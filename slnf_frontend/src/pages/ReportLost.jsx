import React, {  } from 'react';

const ReportLost = () => {
    // const {type, setType} = useState("item");
    return (
        <div className='flex flex-col min-h-[80vh] items-center justify-center space-y-4 p-6'>
            <form className="filter">
                <input className="btn btn-square" type="reset" value="×"/>
                <input className="btn" type="radio" name="frameworks" aria-label="Report Lost"/>
                <input className="btn" type="radio" name="frameworks" aria-label="Repoart Found"/>
            </form>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full lg:max-w-lg border p-4">

                {/* Item Name */}
                <label className="block">
                    <span className="label-text">Item Name</span>
                    <input type="text" placeholder="e.g., Wallet, Laptop" className="input w-full" required />
                </label>

                {/* Category */}
                <label className="block">
                    <span className="label-text">Category</span>
                    <select className="select w-full" required>
                    <option value="">Select Category</option>
                    <option>Electronics</option>
                    <option>Documents</option>
                    <option>Clothing</option>
                    <option>Others</option>
                    </select>
                </label>

                {/* Description */}
                <label className="block">
                    <span className="label-text">Description</span>
                    <textarea placeholder="Color, marks, size, etc." className="textarea w-full" required></textarea>
                </label>

                {/* Date */}
                <label className="block">
                    <span className="label-text">Date Lost/Found</span>
                    <input type="date" className="input w-full" required />
                </label>

                {/* Location */}
                <label className="block">
                    <span className="label-text">Location</span>
                    <input type="text" placeholder="e.g., Campus library" className="input w-full" required />
                </label>

                {/* Image Upload */}
                <label className="block">
                    <span className="label-text">Upload Photo</span>
                    <input type="file" className="file-input w-full" />
                </label>

                {/* Contact Info */}
                <label className="block">
                    <span className="label-text">Contact</span>
                    <input type="text" placeholder="Phone or Email" className="input w-full" required />
                </label>

                {/* Submit */}
                <button className="btn btn-primary w-full">Report Item</button>
            </fieldset>
        </div>
    );
};

export default ReportLost;