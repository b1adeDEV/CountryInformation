import axios from  "axios"
import {useCallback, useEffect, useState} from "react";
import "./AppContainers.css"
import {FullCountry, ParseName, ParseOneCountry, TCountry} from "../helpers/parse/parseCountry.ts";
import CountryInfo from "../components/CountryInfo/CountryInfo.tsx";

const AppContainers = () => {

    const [country, setCounrty] = useState<string[]>([])
    const [countryInfo,setCountryInfo] = useState<TCountry[]>([])
    const [borders,setBorders] = useState<string[]>([])
    const [spinner,setSpinner] = useState<boolean>(false)

    const request = useCallback(async () => {
        const {data} = await axios.get("https://restcountries.com/v3.1/all")
        setCounrty(ParseName(data))
    }, [])

    useEffect(() => {
        request()
    }, [])

    const click = async (item:string) => {
        setSpinner(true)
        const {data} = await axios.get(`https://restcountries.com/v3.1/name/${item}?fullText=true`)
        setCountryInfo(ParseOneCountry(data))
        if(data[0].borders != undefined) {
            setBorders(await FullCountry(data[0].borders))
        }else {
          setBorders(["No boundaries"])
        }
        setSpinner(false)
    }

    return (
        <div className={"App"}>
            <div className={"countryList"}>
                {
                    country.map((item, index: number) => (
                        <div key={index}>
                            <p onClick={() => click(item)}>{item}</p>
                        </div>
                    ))
                }
            </div>
            <div className={spinner ? "containerSpin" : "none"}>
                <span className={spinner ? "loader" : "none"}></span>
            </div>
            <div className={spinner ? "none" : "CountryInfo"}>
                {
                    countryInfo.map((item, index: number) => (
                        <CountryInfo
                            key={index}
                            flags={item.flags.png}
                            name={item.name.common}
                            population={item.population}
                            region={item.region}
                            borders={borders}/>
                    ))
                }
            </div>
        </div>
    )
}
export default AppContainers
