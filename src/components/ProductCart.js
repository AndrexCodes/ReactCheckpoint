import Image from "../components/Image"
import Description from "../components/Description"
import Name from "../components/Name"
import Price from "../components/Price"

const ProductCard = ({name, price, description, image})=>{
    return(
        <div className="bg-blue-600 rounded-lg text-white flex flex-col gap-2">
            <Image image={image}/>
            <div className="flex justify-between px-2">
                <Name name={name}/>
                <Price price={price}/>
            </div>
            <div className="flex justify-start w-full">
                <Description description={description}/>
            </div>
        </div>
    )
}

export default ProductCard