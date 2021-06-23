import React, {useEffect, useState} from 'react'
import './CovidStateWise.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const CovidStateWise = () => {

    const [data, setData] = useState([]);

    const getIndiaCovidData = async () => {
        const resultData = await fetch('https://api.covid19india.org/data.json');
        const presentData = await resultData.json();
        //console.log(presentData.statewise);
        setData(presentData.statewise);
    }

    useEffect(() => {
       getIndiaCovidData();
    }, [])

    return (
        <>
            <div className="container-fluid mt-5">
                <div className="main-heading">
                    <h1 className="mb-5 text-center">Report of Covid19 in <span className="font-weight-bold">INDIA</span> Dashboard</h1>
                </div>

                <div className="table-responsive">
                    <table className="table table-hover">
        	            <thead className="thead-dark">
                            <tr>
                                <th> State </th>
                                <th> Active </th>
                                <th> Confirmed </th>
                                <th> Recovered </th>
                                <th> Deceased </th>
                                <th> Updated-Date </th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                data.map((currentElement, index) =>{
                                    return(
                                        <tr>
                                            <td> {currentElement.state} </td>
                                            <td> {currentElement.active} </td>
                                            <td> {currentElement.confirmed} </td>
                                            <td> {currentElement.recovered} </td>
                                            <td> {currentElement.deaths} </td> 
                                            <td> {currentElement.lastupdatedtime} </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default CovidStateWise
