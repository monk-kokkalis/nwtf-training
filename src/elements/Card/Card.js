import Style from './Card.module.scss';
function Card({title, index}) {
    return (
        <div className={Style.Main}>
            <div className="image--container">
                <img src={`https://unsplash.it/640/42${index}`} alt="Course" />
            </div>
            <section className="content">
                <div className="title">{title}</div>
                <div className="description">Aquaponics is a cooperation between plants and fish and the term originates from the two words aquaculture (the growing of fish in a closed environment) 
                    and hydroponics (the growing of plants usually in a soil-less environment).
                </div>
            </section>
            <section className="module">
                <div className="module--count">4 Modules</div>
                <div className="price">Free</div>
            </section>
        </div>
    )
}

export default Card;