// app/api/shipment/route.ts
import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const invoiceNumber = searchParams.get('tracking');
    const url = `http://localhost:8987/api/shipment/status/${invoiceNumber}`;

    console.log(invoiceNumber);

    // const url = `https://api.registon-aviapochta.uz/api/shipment/status/${invoiceNumber}`;

    if (!invoiceNumber) {
        return NextResponse.json({ error: 'Tracking raqami kiritilmagan' }, { status: 400 });
    }

    try {
        const response = await axios.get(url, {
            headers: {
                Accept: 'application/json',
            },
        });

        return NextResponse.json(response.data, { status: 200 });
    } catch (error: any) {
        return NextResponse.json(
            {
                error: 'Jo‘natma topilmadi yoki server xatosi.',
                details: error?.response?.data || null,
            },
            { status: error?.response?.status || 500 },
        );
    }
}
