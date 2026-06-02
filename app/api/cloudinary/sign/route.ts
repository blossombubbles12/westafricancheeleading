import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import cloudinary from "@/lib/cloudinary";

export async function POST(request: Request) {
    try {
        const session = await getSession();
        if (!session || session.user.role !== 'admin') {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const body = await request.json();
        const { paramsToSign } = body;

        const signature = cloudinary.utils.api_sign_request(
            paramsToSign,
            process.env.CLOUDINARY_API_SECRET as string
        );

        return NextResponse.json({ signature });
    } catch (error) {
        console.error("Cloudinary signing error:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
