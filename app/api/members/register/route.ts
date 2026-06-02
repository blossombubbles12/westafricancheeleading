import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const {
            full_name,
            email,
            phone,
            category,  // membership category
            role,      // occupation/profession
            location,
            portfolio, // industry
            biography,
            photo_url
        } = body;

        if (!full_name || !email) {
            return NextResponse.json({ error: 'Name and Email are required' }, { status: 400 });
        }

        // Check for duplicate email
        const existing = await sql`SELECT id FROM members WHERE email = ${email} LIMIT 1`;
        if (existing.length > 0) {
            return NextResponse.json({ error: 'This email is already registered' }, { status: 409 });
        }

        const member = await sql`
            INSERT INTO members (
                full_name, 
                email, 
                phone, 
                occupation, 
                location, 
                photo_url, 
                status, 
                industry,
                cohort,
                is_visible, 
                biography
            )
            VALUES (
                ${full_name}, 
                ${email}, 
                ${phone || null}, 
                ${role || null}, 
                ${location || null}, 
                ${photo_url || null}, 
                'active', 
                ${portfolio || null}, 
                ${category || null}, 
                true, 
                ${biography || null}
            )
            RETURNING *
        `;

        // Log notification for admin
        await sql`
            INSERT INTO notifications (type, message, link)
            VALUES ('member', ${`New partner registered: ${full_name}`}, '/admin/members')
        `;

        return NextResponse.json(member[0]);
    } catch (error) {
        console.error('Member registration error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
