import React, { useEffect } from 'react'
import { useState } from 'react'
import API_KEY from './keys'

const CONTEXT_KEY = "5646281d050ef4b41"

const useGoogleSearch = (term) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        async function fetchData () {
            let search = await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
            let searchData = await search.json()
            setData(searchData)
        }

        fetchData()
    }, [term])

    return {data}
}

export default useGoogleSearch