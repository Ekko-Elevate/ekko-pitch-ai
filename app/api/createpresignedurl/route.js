import { createpresignedurl } from '@/app/_lib/S3/createpresignedurl';
import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";
import { NextResponse } from 'next/server';

export const POST = withApiAuthRequired(async function createPresignedUrl(req) {
    try {
        const { S3ID } = await req.json();
        console.log('Received S3ID:', S3ID);

        if (!S3ID) {
            return NextResponse.json({ error: 'S3ID is required' }, { status: 400 });
        }

        const url = await createpresignedurl(S3ID);
        console.log('Created presigned URL:', url);

        return NextResponse.json({ url });
    }
    catch (error) {
        console.error('Error creating presigned URL:', error);
        return NextResponse.json({ error: 'Failed to create presigned URL' }, { status: 500 });
    }
});