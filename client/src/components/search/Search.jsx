import categoryOptions from '../../helpers/categoryOptions.js';

export default function Search() {
    const categories = categoryOptions();

    return (
        <>
            <section className="categories">
                <h2>CATEGORIES</h2>
                <div className="category-list">
                    {categories.map((category) => (
                        <div className="category" key={category.label}>
                            {category.label}
                        </div>
                    ))}
                    {/* <div className="category">Music</div>
                        <div className="category">Technologies</div>
                        <div className="category">Business</div>
                        <div className="category">Sport</div> */}
                </div>
            </section>

            <section className="search-area">
                <div className="search-box">
                    <input type="text" placeholder="Search for events..." className="search-input" />
                    <button className="search-btn">Search</button>
                </div>
            </section>
        </>
    );
}
