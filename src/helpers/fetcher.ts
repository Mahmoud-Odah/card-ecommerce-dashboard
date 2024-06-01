import { getServerSession } from "next-auth"
import { authOptions } from "@/libs/auth";

type Request = {
  url?: string;
  headers?: { [key: string]: any };
  bodyData?: { [key: string]: any };
  method?: 'post' | 'get' | 'put' | 'delete';
};

const BaseUrl = process.env.BACKEND_API_URL;

export const fetchData = async ({ url, headers = {}, bodyData, method = 'get' }: Request) => {
  try {
    // Get the session which contains the token
    const session = await getServerSession(authOptions);

    if (!session) {
      return {
        redirect: {
          destination: '/login',
          permanent: false
        }
      };
    }

    // Add the token to the headers
    headers['Authorization'] = `Bearer ${session?.user?.access_token}`;

    console.log('headers', headers)

    const requestOptions = {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        ...headers
      },
      body: method !== 'get' ? JSON.stringify(bodyData) : null
    };

    const res = await fetch(`${BaseUrl}/${url}`, requestOptions);


    if (res.status === 401) {
      return {
        redirect: {
          destination: '/login',
          permanent: false
        }
      };
    }

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json();
  } catch (error) {
    console.log('fetch error : ', error);
  }
};
