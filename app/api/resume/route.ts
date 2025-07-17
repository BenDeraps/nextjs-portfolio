import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import { readFileSync } from 'fs';

export async function GET(request: NextRequest) {
  try {
    // Get the resume file path
    const filePath = path.join(process.cwd(), 'private', 'documents', 'resume_en.pdf');
    
    // Read the file
    const fileBuffer = readFileSync(filePath);
    
    // Create response with proper headers
    const response = new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename="Simon_Paillassa_Resume.pdf"',
        'Cache-Control': 'public, max-age=31536000', // Cache for 1 year
      },
    });
    
    return response;
  } catch (error) {
    console.error('Error serving resume:', error);
    return new NextResponse('Resume not found', { status: 404 });
  }
} 