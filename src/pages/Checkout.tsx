import { useParams } from "react-router-dom"

const Checkout = () => {
    const params = useParams()
    console.log(params)
    return (
    <div>
        <div>
            <p>Quantity</p>
            <div></div>
        </div>
    </div>
  )
}

export default Checkout