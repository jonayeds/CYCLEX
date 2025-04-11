import { Link, useParams } from "react-router-dom";
import { useGetSingleBicycleQuery } from "../redux/features/bi-cycles/biCyclesApi";
import { TBiCycle } from "../types/biCycles.types";
import Loading from "../components/shared/Loading";
import { Button } from "../components/ui/button";

const BicycleDetails = () => {
  const { bicycleId } = useParams();
  const { data, isLoading } = useGetSingleBicycleQuery(bicycleId);
  const bicycle: TBiCycle = data?.data;
  console.log(bicycle);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="max-w-[70vw] mx-auto pt-24">
      <div className="">
        <img
          src={
            bicycle?.image ||
            `https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`
          }
          alt=""
          className=" rounded-xl w-full"
        />
      </div>
      <div>
        <h1 className="md:text-[4vw] font-light text-[7vw] my-4 leading-tight">
          {bicycle?.name}
        </h1>
        <div className="flex items-center justify-between">
          <div>
            <p>
              Brand :{" "}
              <span className="text-lg font-semibold ml-2 text-gray-600">
                {bicycle?.brand}
              </span>
            </p>
            <p className="mt-2">
              Category :{" "}
              <span className=" font-semibold ml-2 text-gray-600">
                {bicycle?.type}
              </span>
            </p>
          </div>
          <p>Available : {bicycle?.quantity}</p>
        </div>
          <p className="text-gray-600 text-sm mt-4">{bicycle?.description}</p>
        {bicycle.inStock ? (
          <p className="text-3xl mt-4">$$ {bicycle?.price}</p>
        ) : (
          <p className="text-3xl mt-4 line-through text-gray-500">$$ {bicycle?.price}</p>
        )}
        <Link to={bicycle.inStock ? `/${bicycle?._id}/checkout` :  `/bicycle-details/${bicycle._id}`} className={bicycle.inStock ?'':"cursor-not-allowed"}>
        <Button className="mt-8 border border-black " disabled={!bicycle?.inStock}>Buy now</Button>
        </Link>
      </div>

    </div>
  );
};

export default BicycleDetails;
