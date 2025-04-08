'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { ThreeDot } from 'react-loading-indicators';
import get from 'lodash/get';
import dayjs from 'dayjs';

export const statusEmojies: any = {
    CREATED: '📦',
    DEPARTED: '✈️',
    ENTERED_UZB: '🛃',
    LOCAL_PROCESS: '🚚',
    DELIVERED: '✅',
};

const Shipment = () => {
    const [trackingNumber, setTrackingNumber] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSearch = async () => {
        if (!trackingNumber.trim()) {
            setError("Jo'natma raqami kiritilishi shart");
            setResult(null);
            return;
        }

        setError('');
        setLoading(true);
        setResult(null);

        try {
            const response = await axios.get(`/api/shipment?tracking=${trackingNumber}`);
            const data = get(response, 'data.data', null);
            if (data) {
                setResult(data);
            } else {
                setError('Jo‘natma topilmadi.');
            }
        } catch (err) {
            console.log(err);
            setError('Jo‘natma topilmadi yoki serverda muammo yuz berdi.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section
            id="shipment"
            className="to-brand-100 relative flex min-h-[50vh] w-full flex-wrap items-center justify-center bg-gradient-to-br from-blue-50 via-white px-4 py-48"
        >
            <div className="max-w-3xl text-center">
                <h2 className="mb-4 text-4xl font-extrabold text-gray-800 lg:text-6xl">Jo’natma statusini tekshirish</h2>
                <p className="mb-6 text-center text-lg leading-normal md:text-xl lg:text-2xl">Jo'natma uchun berilgan invoice raqamni kiriting</p>

                <div className="flex flex-col items-center justify-between gap-4 rounded-2xl bg-white p-6 shadow-xl md:flex-row md:p-8">
                    <input
                        type="text"
                        value={trackingNumber}
                        onChange={(e) => setTrackingNumber(e.target.value)}
                        placeholder={error || 'Jo‘natma raqamini kiriting'}
                        className={`inline-block h-12 w-full flex-1 rounded-xl border px-4 py-3 text-base shadow-sm transition focus:ring-2 focus:outline-none ${error ? 'border-red-500 placeholder-red-500 focus:ring-red-500' : 'focus:ring-brand-500 border-gray-300'}`}
                    />
                    <button
                        onClick={handleSearch}
                        disabled={loading}
                        className="bg-brand-500 hover:bg-brand-700 flex h-12 w-full cursor-pointer items-center justify-center rounded-xl px-6 py-3 font-semibold text-white transition md:w-auto"
                    >
                        {loading ? <ThreeDot color="white" size="small" /> : 'IZLASH'}
                    </button>
                </div>

                {(result || error) && (
                    <div
                        className={`relative mx-auto mt-10 max-w-xl rounded-2xl border ${error ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-white'} p-6 text-left shadow-lg`}
                    >
                        <div
                            className="text-error-600 righ-3.5 absolute top-3.5 cursor-pointer"
                            onClick={() => {
                                setResult(null);
                                setError('');
                            }}
                        >
                            <svg
                                className="h-6 w-6 text-gray-800 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                />
                            </svg>
                        </div>
                        <h3 className={`mb-3 text-center text-xl font-semibold ${error ? 'text-red-600' : 'text-brand-600'}`}>
                            {error ? 'Xatolik' : 'Jo‘natma statusi'}
                        </h3>
                        {error ? (
                            <p className="mb-3 text-center text-gray-700">{error}</p>
                        ) : (
                            <p className="my-8 text-center text-2xl text-gray-800">
                                {statusEmojies[get(result, 'status', '')] || ''} {get(result, 'status', '')}
                            </p>
                        )}
                        {!error && (
                            <>
                                {get(result, 'shipmentDepartureTime') && (
                                    <p className="mb-2 flex justify-between text-gray-700">
                                        Xalqaro tashuv boshlanishi:{' '}
                                        <span className="font-medium">
                                            {dayjs(get(result, 'shipmentDepartureTime')).format('D-MMMM, YYYY HH:mm')}
                                        </span>
                                    </p>
                                )}

                                {get(result, 'shipmentEnterUzb') && (
                                    <p className="mb-2 flex justify-between text-gray-700">
                                        O‘zbekistonga kirgan vaqt:{' '}
                                        <span className="font-medium text-black">
                                            {dayjs(get(result, 'shipmentEnterUzb')).format('D-MMMM, YYYY HH:mm')}
                                        </span>
                                    </p>
                                )}

                                {get(result, 'shipmentProcessLocal') && (
                                    <p className="mb-2 flex justify-between text-gray-700">
                                        Mahalliy tashuv jarayoni vaqti:{' '}
                                        <span className="font-medium text-black">
                                            {dayjs(get(result, 'shipmentProcessLocal')).format('D-MMMM, YYYY HH:mm')}
                                        </span>
                                    </p>
                                )}

                                {get(result, 'shipmentReceivedInd') && (
                                    <p className="mb-2 flex justify-between text-gray-700">
                                        Qabul qiluvchiga yetkazilgan vaqt:{' '}
                                        <span className="font-medium text-black">
                                            {dayjs(get(result, 'shipmentReceivedInd')).format('D-MMMM, YYYY HH:mm')}
                                        </span>
                                    </p>
                                )}
                            </>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Shipment;
