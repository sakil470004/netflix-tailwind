import React from 'react'
import requests from '../../Request'
import Main from '../Main'
import Row from '../Row'

function Home() {
    return (
        <>
            <Main />
            <Row title='UpComing' fetchURL={requests.requestUpcoming}/>
            <Row title='Popular' fetchURL={requests.requestPopular}/>
            <Row title='Tending' fetchURL={requests.requestTrending}/>
            <Row title='TopRated' fetchURL={requests.requestTopRated}/>
            <Row title='Horror' fetchURL={requests.requestHorror}/>
        </>
    )
}

export default Home