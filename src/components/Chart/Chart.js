import React, {useState , useEffect} from 'react'
import {fetchDailydata} from "../../api";
import {Line , Bar} from "react-chartjs-2";
import styles from "./Chart.module.css";

export const Chart = ({data: {confirmed, recovered, deaths}, country}) => {
    const [dailyData, setDailyData] = useState([]);
    useEffect(()=>{
        const fetchApi = async()=>{
            setDailyData( await fetchDailydata());

        }
        fetchApi();
        
    },[]);
    
   
 
    const lineChart = (
        dailyData.length
         ? (
        <Line 
        data={{
            labels:dailyData.map(({date}) => date),
            datasets:[{
                data: dailyData.map(({confirmed}) => confirmed),
                label:'infected',
                backgroundColor:"#3333ff",
                fill:true,
            } , {
                data: dailyData.map(({deaths}) => deaths),
                label:'Deaths',
                backgroundColor:"rgba(255,0,0,0.5)",
                fill:true
            }],

        }}
        />
        ) : null

    );
    console.log(confirmed, recovered, deaths);
    const barChart= (
        confirmed ? (
            <Bar 
            data={{
                labels:['infected', 'recovered', 'deaths'],
                datasets:[{ 
                    
                    backgroundColor:[
                        'rgba(0,  0, 255, 0.5)',
                        'rgba(0,  255, 0, 0.5)',
                       ' rgba(255,  0, 0, 0.5)',
                    ],
                    data:[confirmed.value, recovered.value, deaths.value]
                }]
            }}
            options={{
                legend:{display: false},
                title:{display: true, text:`current state in ${country}`},
            }}
            />
        ) : null

    );
    return (
        <div className={styles.container}>
           {country ? barChart: lineChart}
            
        </div>
    )
}
