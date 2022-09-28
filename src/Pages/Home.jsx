import React from 'react'
import { AuthContextProvider } from '../Context/AuthContext'
import requests from '../Request'
import Main from '../Components/Main'
import Row from '../Components/Row'

function Home() {
    return (
        <>
            <AuthContextProvider>
                <Main />
                <Row title='UpComing' fetchURL={requests.requestUpcoming} />
                <Row title='Popular' fetchURL={requests.requestPopular} />
                <Row title='Tending' fetchURL={requests.requestTrending} />
                <Row title='TopRated' fetchURL={requests.requestTopRated} />
                <Row title='Horror' fetchURL={requests.requestHorror} />
            </AuthContextProvider>
        </>
    )
}

export default Home