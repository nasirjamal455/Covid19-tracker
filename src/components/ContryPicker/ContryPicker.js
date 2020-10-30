import React,{useState, useEffect} from 'react'
import {NativeSelect, FormControl} from "@material-ui/core";
import {fetchcountries } from "../../api";


export const ContryPicker = ({handlecountrychange}) => {
    const[countries, setCountries] = useState([]);
    useEffect(()=>{
        const fetchAPI = async ()=>{
            setCountries(await fetchcountries());
        }
        fetchAPI();
    }, [setCountries]);
    
    return (
        <div>
           <FormControl>
                <NativeSelect defaultValue="" onChange={(e)=>handlecountrychange(e.target.value)}>
                    <option value="">
                        global
                    </option>
                 {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
                </NativeSelect>

           </FormControl>
        </div>
    )
}
