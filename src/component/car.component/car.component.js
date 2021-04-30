import './car.component.css'

function Car(props) {

    return <div>
        <h2>{props.model} {props.name} </h2>
        <img src={props.img} alt=""/>
        <h3>volume: {props.volum}</h3>

        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, id.
        </p>
    </div>

}

export default Car