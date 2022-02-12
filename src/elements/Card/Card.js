import Style from './Card.module.scss';
function Card() {
    return (
        <div className={Style.Main}>
            <div className="image--container">
                <img src={"https://unsplash.it/640/425"} alt="Course" />
            </div>
            <section className="content">
                <div className="title">Agriculture</div>
                <div className="description">This module covers the knowledge, skills, and attitudes required to gain basic and common competencies for Agro-Entrepreneurship NC II.</div>
            </section>
            <section className="module">
                <div className="module--count">4 Modules</div>
                <div className="price">Free</div>
            </section>
        </div>
    )
}

export default Card;