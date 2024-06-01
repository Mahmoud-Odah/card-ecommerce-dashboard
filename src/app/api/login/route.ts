// Next Imports
import { NextResponse } from 'next/server'

type ResponseUser = {
  email: string;
  name: string;
  access_token: string
};

export async function POST(req: Request) {
  // Vars
  const { email, password } = await req.json();
  
  try {
    // Making a POST request to the external API
    const response = await fetch(`${process.env.BACKEND_API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    // Parsing the response from the external API
    const data = await response.json();

    if (response.ok) {
      // Assuming the API returns the user data upon successful authentication
      const user: ResponseUser = data;

      return NextResponse.json(user);
    } else {
      // We return the error response from the external API
      return NextResponse.json(
        {
          // Collecting errors from the external API response
          message: data.message || ['Email or Password is invalid']
        },
        {
          status: 401,
          statusText: 'Unauthorized Access'
        }
      );
    }
  } catch (error) {
    // Handling network or other unexpected errors
    return NextResponse.json(
      {
        message: ['An unexpected error occurred. Please try again later.']
      },
      {
        status: 500,
        statusText: 'Internal Server Error'
      }
    );
  }
}