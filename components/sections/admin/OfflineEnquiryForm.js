'use client'
import React, { useState, useEffect } from 'react';

export default function OfflineEnquiryForm() {
    // Form state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        pincode: '',
        place: '',
        address: ''
    });

    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    // Table and popup states
    const [enquiries, setEnquiries] = useState([]);
    const [selectedEnquiry, setSelectedEnquiry] = useState(null);
    const [showFormPopup, setShowFormPopup] = useState(false);
    const [fetchLoading, setFetchLoading] = useState(true);

    // Fetch enquiries on component mount
    useEffect(() => {
        fetchEnquiries();
    }, []);

    const fetchEnquiries = async () => {
        try {
            setFetchLoading(true);
            const response = await fetch('/api/offline-enquiry');
            if (response.ok) {
                const data = await response.json();
                setEnquiries(data.enquiries || []);
            }
        } catch (error) {
            console.error('Failed to fetch enquiries:', error);
        } finally {
            setFetchLoading(false);
        }
    };

    const validateForm = () => {
        const newErrors = {};

        // Required field validation
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^\d{10}$/.test(formData.phone)) {
            newErrors.phone = 'Phone number must be exactly 10 digits';
        }

        if (!formData.pincode.trim()) {
            newErrors.pincode = 'Pincode is required';
        } else if (!/^\d{6}$/.test(formData.pincode)) {
            newErrors.pincode = 'Pincode must be exactly 6 digits';
        }

        // Optional email validation
        if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setLoading(true);
        setMessage('');
        setErrors({});

        try {
            const response = await fetch('/api/offline-enquiry', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage('Enquiry submitted successfully!');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    pincode: '',
                    place: '',
                    address: ''
                });
                // Refresh the enquiries list
                fetchEnquiries();
                // Close the popup after successful submission
                setTimeout(() => {
                    setShowFormPopup(false);
                    setMessage('');
                }, 2000);
            } else {
                setErrors({ form: data.error || 'Failed to submit enquiry' });
            }
        } catch (error) {
            setErrors({ form: 'Network error. Please try again.' });
        } finally {
            setLoading(false);
        }
    };

    const closeFormPopup = () => {
        setShowFormPopup(false);
        setFormData({
            name: '',
            email: '',
            phone: '',
            pincode: '',
            place: '',
            address: ''
        });
        setErrors({});
        setMessage('');
    };

    const formatDate = (dateString) => {
        if (!dateString) return "";
        return new Date(dateString).toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "long",
            year: "numeric"
        });
    };

    return (
        <div className="min-h-screen bg-gray-50 py-4 px-2 sm:px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-0">
                        Offline Enquiries
                    </h1>
                    <button
                        onClick={() => setShowFormPopup(true)}
                        className="inline-flex items-center px-4 py-2 bg-orange-600 text-white text-sm font-medium rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors"
                    >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        Add Enquiry
                    </button>
                </div>

                {/* Enquiries Table */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                    {fetchLoading ? (
                        <div className="p-8 text-center">
                            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-orange-600"></div>
                            <p className="mt-2 text-gray-600">Loading enquiries...</p>
                        </div>
                    ) : (
                        <>
                            {/* Desktop Table */}
                            <div className="hidden md:block overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Name
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Email
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Phone
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Place
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Date
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {enquiries.length === 0 ? (
                                            <tr>
                                                <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                                                    {`No enquiries found. Click "Add Enquiry" to create one.`}
                                                </td>
                                            </tr>
                                        ) : (
                                            enquiries.map((enquiry) => (
                                                <tr
                                                    key={enquiry._id}
                                                    onClick={() => setSelectedEnquiry(enquiry)}
                                                    className="hover:bg-gray-50 cursor-pointer transition-colors"
                                                >
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                        {enquiry.name}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                                        {enquiry.email || '-'}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                                        {enquiry.phone}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                                        {enquiry.place || '-'}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                                        {formatDate(enquiry.createdAt)}
                                                    </td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            </div>

                            {/* Mobile Cards */}
                            <div className="md:hidden">
                                {enquiries.length === 0 ? (
                                    <div className="p-6 text-center text-gray-500">
                                        {` No enquiries found. Click "Add Enquiry" to create one.`}
                                    </div>
                                ) : (
                                    <div className="divide-y divide-gray-200">
                                        {enquiries.map((enquiry) => (
                                            <div
                                                key={enquiry._id}
                                                onClick={() => setSelectedEnquiry(enquiry)}
                                                className="p-4 hover:bg-gray-50 cursor-pointer transition-colors"
                                            >
                                                <div className="flex justify-between items-start">
                                                    <div className="flex-1">
                                                        <h3 className="text-sm font-medium text-gray-900 mb-1">
                                                            {enquiry.name}
                                                        </h3>
                                                        <p className="text-sm text-gray-600 mb-1">
                                                            📞 {enquiry.phone}
                                                        </p>
                                                        {enquiry.email && (
                                                            <p className="text-sm text-gray-600 mb-1">
                                                                ✉️ {enquiry.email}
                                                            </p>
                                                        )}
                                                        <p className="text-xs text-gray-500">
                                                            {formatDate(enquiry.createdAt)}
                                                        </p>
                                                    </div>
                                                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </>
                    )}
                </div>

                {/* Enquiry Details Popup */}
                {selectedEnquiry && (
                    <div className="fixed inset-0 bg-black/30 bg-opacity-50 flex items-center justify-center z-50 p-4">
                        <div className="bg-white rounded-lg shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-xl font-bold text-gray-900">Enquiry Details</h3>
                                    <button
                                        onClick={() => setSelectedEnquiry(null)}
                                        className="text-gray-600 border p-0.5 border-red-500 hover:bg-red-500/30 rounded-lg bg-red-400/20 hover:text-gray-900 transition-colors"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Name</label>
                                        <p className="mt-1 text-sm text-gray-900">{selectedEnquiry.name}</p>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Email</label>
                                        <p className="mt-1 text-sm text-gray-900">{selectedEnquiry.email || '-'}</p>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Phone</label>
                                        <p className="mt-1 text-sm text-gray-900">{selectedEnquiry.phone}</p>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Pincode</label>
                                        <p className="mt-1 text-sm text-gray-900">{selectedEnquiry.pincode}</p>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Place</label>
                                        <p className="mt-1 text-sm text-gray-900">{selectedEnquiry.place || '-'}</p>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Address</label>
                                        <p className="mt-1 text-sm text-gray-900">{selectedEnquiry.address || '-'}</p>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Submitted Date</label>
                                        <p className="mt-1 text-sm text-gray-900">{formatDate(selectedEnquiry.createdAt)}</p>
                                    </div>
                                </div>

                                <div className="mt-6 flex justify-end">
                                    <button
                                        onClick={() => setSelectedEnquiry(null)}
                                        className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Form Submission Popup */}
                {showFormPopup && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                        <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-xl font-bold text-gray-900">Add New Enquiry</h3>
                                    <button
                                        onClick={closeFormPopup}
                                        className="text-gray-600 border p-0.5 border-red-500 hover:bg-red-500/30 rounded-lg bg-red-400/20 hover:text-gray-900 transition-colors"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                 
                                </div>

                                {message && (
                                    <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-md">
                                        {message}
                                    </div>
                                )}

                                {errors.form && (
                                    <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md">
                                        {errors.form}
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    {/* Grid Container for Form Fields */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {/* Name Field */}
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                                Name <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${errors.name ? 'border-red-500' : 'border-gray-300'
                                                    }`}
                                                placeholder="Enter full name"
                                            />
                                            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                                        </div>



                                        {/* Phone Field */}
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                                Phone Number <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                maxLength={10}
                                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${errors.phone ? 'border-red-500' : 'border-gray-300'
                                                    }`}
                                                placeholder="Enter 10-digit phone number"
                                            />
                                            {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                                        </div>
                                        {/* Pincode Field */}
                                        <div>
                                            <label htmlFor="pincode" className="block text-sm font-medium text-gray-700 mb-1">
                                                Pincode <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="pincode"
                                                name="pincode"
                                                value={formData.pincode}
                                                onChange={handleChange}
                                                maxLength={6}
                                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${errors.pincode ? 'border-red-500' : 'border-gray-300'
                                                    }`}
                                                placeholder="Enter 6-digit pincode"
                                            />
                                            {errors.pincode && <p className="mt-1 text-sm text-red-600">{errors.pincode}</p>}
                                        </div>
                                        {/* Email Field */}
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                                Email <span className="text-gray-400">(optional)</span>
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${errors.email ? 'border-red-500' : 'border-gray-300'
                                                    }`}
                                                placeholder="Enter email address"
                                            />
                                            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                                        </div>


                                        {/* Place Field */}
                                        <div>
                                            <label htmlFor="place" className="block text-sm font-medium text-gray-700 mb-1">
                                                Place <span className="text-gray-400">(optional)</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="place"
                                                name="place"
                                                value={formData.place}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                                placeholder="Enter city/place"
                                            />
                                        </div>
                                    </div>

                                    {/* Address Field - Full Width */}
                                    <div>
                                        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                                            Address <span className="text-gray-400">(optional)</span>
                                        </label>
                                        <textarea
                                            id="address"
                                            name="address"
                                            value={formData.address}
                                            onChange={handleChange}
                                            rows={3}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                            placeholder="Enter full address"
                                        />
                                    </div>

                                    {/* Submit Buttons */}
                                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="flex-1 bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                                        >
                                            {loading ? 'Submitting...' : 'Submit Enquiry'}
                                        </button>
                                        <button
                                            type="button"
                                            onClick={closeFormPopup}
                                            className="flex-1 sm:flex-none bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
