import React from 'react'


const DisplayData = (props) => {
    const { cases, deaths, recovered, todayCases, imgSrc, error, tests} = props;

    if (props.loading) {
        return <h1>Searching Just Wait Mfs</h1>
    } else if (cases) {
        return (
            <div className="display">
                <img className="flag" src={imgSrc} alt="" />
                <p>Total Confirmed Cases: {cases}</p>
                <p>Total Deaths: {deaths} </p>
                <p>Total Recovered: {recovered}</p>
                <p>Cases Reported Today: {todayCases}</p>
                <p>Number of Tests: {tests}</p>
            </div>

        )
    }
    else {
        return (
            <h2>{error}</h2>
        )
    }
}

export default DisplayData;