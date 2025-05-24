import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const formData = await request.json();

        const backendResponse = await fetch('https://your-d.com/api/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        console.log(backendResponse);

        if (!backendResponse.ok) {
            return NextResponse.json({ error: 'Backendga yuborishda xatolik' }, { status: 500 });
        }

        // Agar muvaffaqiyatli bo'lsa:
        return NextResponse.json({ message: "Ma'lumot qabul qilindi" }, { status: 200 });
    } catch (error) {
        console.error('API error:', error);
        return NextResponse.json({ error: 'Serverda xatolik yuz berdi' }, { status: 500 });
    }
}
