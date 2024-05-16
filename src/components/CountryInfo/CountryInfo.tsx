import "./CountryInfo.css"


type TProps = {
    name:string
    borders: string[]
    flags: string
    population:number
    region: string
}

const CountryInfo = (props:TProps) => {
    return(
        <div className={"CountryInfoCard"}>
            <h2>Name: {props.name}</h2>
            <div className={"imgBorder"}>
                <img src={props.flags}/>
            </div>
            <div className="info">
                <h3>Population: {props.population}</h3>
                <h3>Region: {props.region}</h3>
                <h3>Borders: </h3>
            </div>
            <ul>
                {
                    props.borders.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}
export default CountryInfo