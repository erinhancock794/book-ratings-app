import React from "react";
import CategoryWeight from "./CategoryWeight/CategoryWeight.js";
import _ from "lodash";

function Categories(props) {
    const categories = [ "World Building", "Character Development" ] //or props.categories;
    const listCategories = () => {

        const res = _.map(categories, (cat) => {
            return cat;
        });
        console.log('res', res);

    }
    return (
        <div>
        { _.map(categories, (cat) => {
            console.log('cat', cat);
            return (
            <CategoryWeight
            category={cat}
            />
            )
        })}
        
        <CategoryWeight 
        category={listCategories()}
        />
        </div>
    );

}

export default Categories;