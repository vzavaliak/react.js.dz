import './cars.character.css'
export default function Cars(props){
    let {producer,model ,year,color,type,engine,volume,power} =props;
    return <div className={'car'}>
        <h2>{producer} {model}</h2>
        <ul>
            <li>{year}</li>
            <li>{type}</li>
            <li>{color}</li>
            <li>{engine}</li>
            <li>{volume}</li>
            <li>{power}</li>
        </ul>
    </div>
}
