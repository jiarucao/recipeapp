import React from "react";
import { Link } from "react-router-dom";

class Recipes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: []
        };
    }

    componentDidMount() {
        // debugger
        const url = "/recipes/index";
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Network response was not ok.");
            })
            .then(response => this.setState({recipes: response}))
            .catch(() => this.props.history.push("/"));
    }

    render() {
        // debugger
        const { recipes } = this.state;
        const allRecipes = recipes.map((recipe, index) => (
            <div key={index} className="col-md-6 col-lg-4">
                <div className="card mb-4">
                    <img
                        src={recipe.image}
                        className="card-img-top"
                        alt={`${recipe.name} image`}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{recipe.name}</h5>
                        <Link to={`/recipe/${recipe.id}`} className="btn custom-button">
                            View Recipe
                        </Link>
                    </div>
                </div>
            </div>
        ));
        const noRecipe = (
            <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
                <h4>
                    No recipes yet. Why not <Link to="/recipe">create one</Link>
                </h4>
            </div>
        );

        return (
            <>
                <section className="jumbotron jumbotron-fluid text-center">
                    <div className="container py-5">
                        <h1 className="display-4">Recipe Repo</h1>
                        <p className="lead text-muted">
                            My rye run at cooking! 
                        </p>
                    </div>
                </section>
                <div className="py-5">
                    <main className="container">
                        <div className="text-right mb-3">
                            <Link to="/recipe" className="btn custom-button">
                                Create New Recipe
                            </Link>
                        </div>
                        <div className="row">
                            {recipes.length > 0 ? allRecipes : noRecipe}
                        </div>
                        <Link to="/" className="btn btn-link">
                            Home
                        </Link>
                    </main>
                </div>
            </>
        );
    }

}

export default Recipes;
