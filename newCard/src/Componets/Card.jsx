const Card = (props) => {
    const {title,link,des} =props.data;
    console.log(props.data);
    return (
        <div class="card" style={{width: "18rem"}}>
            <img src={link} class="card-img-top" alt="Car"/>
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{des}</p>
                    <a href="#" class="btn btn-primary">Know More...</a>
                </div>
        </div>
    )
}

export default Card;