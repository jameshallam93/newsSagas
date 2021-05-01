import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { CHANGE_ORDER_BY } from "../../Redux/actions"

const OrderBy = () => {
    const dispatch = useDispatch()

    const handleOrderChange = (event) => {
        dispatch(CHANGE_ORDER_BY(event.target.value))
    }
    const orderBy = useSelector(state => {
        return state.parameters.orderBy
    })

    return (
        <div className="sort-by">
            <p>Order By:</p>
            <form>
                <label>
                    <input type="radio"
                        value="popularity"
                        id="popularity"
                        name="popularity"
                        onChange={handleOrderChange}
                        checked={orderBy === "popularity"}
                    />
                Popularity
                </label>
                <label>
                    <input type="radio"
                        value="publishedAt"
                        id="publishedAt"
                        name="publishedAt"
                        onChange={handleOrderChange}
                        checked={orderBy === "publishedAt"}
                    />
                Date
                </label>
                <label>
                    <input type="radio"
                        value="relevancy"
                        id="relevancy"
                        name="relevancy"
                        onChange={handleOrderChange}
                        checked={orderBy === "relevancy"}
                    />
                Relevancy
                </label>
            </form>
        </div>
    )
}
export default OrderBy