'use client'
import {useState , useEffect} from 'react'
export function useCourse(){
    const [data, setData] = useState<any>()
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        async function dataGet() {
            try {
                const req = await fetch('http://3.65.32.166/api/v2/storefront/products/1')
                const res = await req.json()
                if (req.ok) {
                    setData(res)
                }
                else{
                    throw new Error('failed to fetch')
                }
            } catch (error) {
                throw new Error('failed to fetch')
            }
        }
        dataGet()
      setIsLoading(false)
    }, [])
    return {data , isLoading}
}