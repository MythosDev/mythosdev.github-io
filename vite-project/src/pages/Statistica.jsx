import { useState } from 'react'
import { Link } from 'react-router-dom'
import Dropzone from '../components/DropZone'
import MultiDropZone from '../components/MultiDropZone'
import SearchBarList from '../components/SearchBarList'
import SimpleTagSystem from '../components/SimpleTagSystem'
import ChartComponent from '../components/ChartComponent'
import Gate from '../components/Gate'
import '../Global.module.css'
import StatisticalPage from './StatisticalPage'


export default function () {

    const handleSearch = (value) => {
        console.log("Search Term:", value);
    };

    const data = ["Apple", "Banana", "Orange", "Mango", "Grape"];

    const chart_data = {
        labels: ["January", "February", "March", "April", "May"],
        datasets: [
        {
            label: "Male",
            data: [65, 59, 80, 81, 56],
            borderColor: "rgba(75,192,192,1)",
            backgroundColor: "rgba(75,192,192,0.2)",
            borderWidth: 2,
        },
        {
            label: "Female",
            data: [72, 15, 44, 91, 87],
            borderColor: "rgba(192,75,192,1)",
            backgroundColor: "rgba(192,75,192,0.2)",
            borderWidth: 2,
        },
        ],
    };

    const gender_crime_data = {
        labels: ["male", "female"],
        datasets:[
            {
                data: [226, 42],
                borderColor: ["rgba(75,192,192,1)", "rgba(192,75,192,1)"],
                backgroundColor: [
                    'rgba(75,192,192,0.2)', 'rgba(192,75,192,0.2)',  'yellow', 'green', 'purple'
                ],
            },
            // {
            //     label: "female",
            //     data: [42],
            //     borderColor: "rgba(75,192,192,1)",
            // }
        ]
    }

    const options = {
        responsive: true,
        plugins: {
        legend: {
            position: "top",
        },
        title: {
            display: true,
            text: "Sales Over Time",
        },
        },
    };

    const crime_options = {
        responsive: true,
        plugins: {
        legend: {
            position: "top",
        },
        title: {
            display: true,
            text: "Yearly Crime Rates by Gender",
        },
        },
    };


    return (
        <>
        <div className="justify-center w-[720px] mx-auto">
            <Gate />
            <Link to="/Home">Home</Link>
            <br />
            <br />
            <div>
                <h1>Statistica</h1>
                <Dropzone />
                <br />
                <MultiDropZone />
                <br />
                <SearchBarList 
                    placeholder="Type to search fruits..."
                    data={data}
                    onSearch={handleSearch}
                />
                <br />
                <br />
                <br />



                <Dropzone />
                <SimpleTagSystem placeholder='Add a new tag...'/>
            </div>
            <div>
                <h2>Line Chart Example</h2>
                <ChartComponent type="line" data={chart_data} options={options} />

                <h2>Bar Chart Example</h2>
                <ChartComponent type="bar" data={chart_data} options={options} />

                <h2>Crime Statistics</h2>
                <ChartComponent type="pie" data={gender_crime_data} options={crime_options} />
            </div>
        </div>
        <StatisticalPage />
        </>
    )

}