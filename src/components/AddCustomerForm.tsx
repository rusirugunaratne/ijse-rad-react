import React, { useState } from 'react';

interface Customer {
    fullName: string;
    email: string;
    phone: string;
}

interface CustomerErrors {
    fullName?: string;
    email?: string;
    phone?: string;
}

const AddCustomerForm: React.FC = () => {
    const [formData, setFormData] = useState<Customer>({
        fullName: '',
        email: '',
        phone: '',
    });

    const [errors, setErrors] = useState<CustomerErrors>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
        setErrors(prev => ({
            ...prev,
            [name]: '',
        }));
    };

    const validate = (): CustomerErrors => {
        const newErrors: CustomerErrors = {};

        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Full Name is required.';
        } else if (formData.fullName.trim().length < 3) {
            newErrors.fullName = 'Full Name must be at least 3 characters.';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required.';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Email is not valid.';
        }

        const phone = formData.phone.trim();
        if (phone && !/^\d{10}$/.test(phone)) {
            newErrors.phone = 'Phone number must be 10 digits.';
        }

        return newErrors;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            console.log('Customer added:', formData);
            // Optionally reset form here
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow rounded">
            <h2 className="text-xl font-bold mb-4">Add Customer</h2>

            <div className="mb-3">
                <label className="block font-medium mb-1" htmlFor="fullName">
                    Full Name
                </label>
                <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                />
                {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
            </div>

            <div className="mb-3">
                <label className="block font-medium mb-1" htmlFor="email">
                    Email Address
                </label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            <div className="mb-4">
                <label className="block font-medium mb-1" htmlFor="phone">
                    Phone Number (optional)
                </label>
                <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                Add Customer
            </button>
        </form>
    );
};

export default AddCustomerForm;
