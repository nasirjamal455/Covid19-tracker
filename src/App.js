
import React from "react";
import {Cards, Chart , ContryPicker, Info, Header} from "./components";
import styles from "./App.module.css";
import {fetchData} from "./api";
import coronaimg from "./images/image.png";



class App extends React.Component {
    state = {
        data :{},
        country : '',

    }
    async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({data:fetchedData});
    }

    handlecountrychange = async (country)=>{
        const fetchedData = await fetchData(country);
        this.setState({data:fetchedData, country:country});
        
    }
    render(){
        const {data, country}  =this.state;
        return (
            
            <div className={styles.container}>
                <Header />
                <img className={styles.image} src={coronaimg} alt="cononaimg" />
                <Cards data={data} />
                <ContryPicker handlecountrychange={this.handlecountrychange} />
                <Chart data={data} country ={country} />
                <Info />
                

                 </div>
        )
    }
    
}
export default App;