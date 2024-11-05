import Midtrans from 'midtrans-client';
import { NextResponse } from 'next/server';
const dotenv = require('dotenv');
dotenv.config();

let snap = new Midtrans.Snap({
    isProduction: false,
    serverKey: process.env.MIDTRANS_SECRET_KEY,
    clientKey: process.env.MIDTRANS_CLIENT_KEY,
})

export async function POST (request) {
    const {id, name, email, phone, entry_date, ticket_count, ticket_type} = await request.json()

    let parameter = {
        item_details: {
            id: id,
            name: name,
            email: email,
            phone: phone,
            entry_date: entry_date,
            ticket_count: ticket_count,
            ticket_type: ticket_type
        },
        transaction_detail: {
            order_id: id,
            gross_amount: totalPrice
        }
    }

    const token = await snap.createTransactionToken(parameter)
    console.log(token);
    return NextResponse.json({ token })
}