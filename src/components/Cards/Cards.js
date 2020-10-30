import React from 'react'
import {Card, CardContent, Grid , Typography} from "@material-ui/core";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import cx from "classnames";

export const Cards = ({data:{confirmed, deaths, recovered, lastUpdate}}) => {
    if(!confirmed){
        return "loading..." ;

    }
    return (
        <div className={styles.container}>
            <Grid container spacing={4} justfiy="center">
            <Grid item component={Card} xs={12} md= {3} className={cx(styles.card , styles.infected)}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>Infected</Typography>
                <Typography variant = "h5" gutterBottom>
                    <CountUp 
                    start={0}
                    end = {confirmed.value}
                    duration = {2}
                    separator = ","

                    />
                </Typography>
                <Typography color="textSecondary" gutterBottom>{new Date(lastUpdate).toDateString()}</Typography>
                <Typography variant="body2" gutterBottom>cases from covid19 </Typography>

                </CardContent>
            </Grid>
            <Grid item component={Card} xs={12} md= {3} className={cx(styles.card , styles.recovered)}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>Recoverd</Typography>
                <Typography variant = "h5" gutterBottom>
                    <CountUp 
                    start={0}
                    end = {recovered.value}
                    duration={2}
                    separator= ","
    
                    />
                </Typography>
                <Typography color="textSecondary" gutterBottom>{new Date(lastUpdate).toDateString()}</Typography>
                <Typography variant="body2" gutterBottom>Recoverd people from covid19 </Typography>

                </CardContent>
            </Grid>
            
            <Grid item component={Card} xs={12} md= {3} className={cx(styles.card , styles.deaths)}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                <Typography variant = "h5" gutterBottom>
                    <CountUp 
                    start= {0}
                    end = {deaths.value}
                    duration = {2}
                    separator = ","
                    />
                </Typography>
                <Typography color="textSecondary" gutterBottom>{new Date(lastUpdate).toDateString()}</Typography>
                <Typography variant="body2" gutterBottom>deaths  from covid19 </Typography>

                </CardContent>
            </Grid>
            
         </Grid>
        </div>
    )
}
