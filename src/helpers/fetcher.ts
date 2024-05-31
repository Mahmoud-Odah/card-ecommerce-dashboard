import { permanentRedirect } from 'next/navigation'

type Request = {
  url?: string
  headers?: { [key: string]: any }
  bodyData?: { [key: string]: any }
  method?: 'post' | 'get' | 'put' | 'delete'
}

const BaseUrl = process.env.BACKEND_API_URL

export const fetchData = async ({ url, headers, bodyData, method = 'get' }: Request) => {
  try {
    const requestOptions = {
      method: method,
      headers: headers,
      body: JSON.stringify(bodyData)
    }

    const res = await fetch(`${BaseUrl}/${url}`, requestOptions)

    console.log('res :>> ', res)

    if (res.status === 401) {
      return {
        redirect: {
          destination: '/login',
          permanent: false
        }
      }
    }

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }

    return res.json()
  } catch (error) {
    console.log('fetch error : ', error)
  }
}
