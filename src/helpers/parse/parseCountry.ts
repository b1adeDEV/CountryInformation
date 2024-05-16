type TName = {
    name: {
        common:string
    }
}
export type TCountry = {
    name: {
        common:string
    }
    borders?:string[]
    flags:{
        png:string
    }
    population:number
    region:string
}

export const ParseName = (name:TName[]):string[] => {
    return name.map((item) =>(item.name.common)).sort()
}
export const ParseOneCountry = (name:TCountry[]) => {
    return name.map((item) =>(
        {   name:{
                common:item.name.common
            },
            borders:item.borders,
            flags:{
                png: item.flags.png
            },
            population:item.population,
            region:item.region
        }))
}
export const FullCountry = async (item:string[]) => {
    const arr:string[] = []
    for (let i = 0; i < item.length; i++) {
        let a = await (await fetch(`https://restcountries.com/v3.1/alpha/${item[i]}`)).json()
        arr.push(a[0].name.common)
    }
    return arr
}

