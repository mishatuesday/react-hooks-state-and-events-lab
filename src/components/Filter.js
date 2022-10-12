import React from 'react'

const Filter = ({filterCategory}) => {
    return (
        <select name="filter" onChange={(e) => filterCategory(e)}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    )
}

export default Filter