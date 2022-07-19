import Skeleton from "react-loading-skeleton";

export default function MoviesList(){
    return(
        <div className="flex flex-col mt-9">
            <h4 className="mb-4"><Skeleton height={25} width={105} /></h4>
            <div className="flex flex-row w-full justify-between">
                <Skeleton height={370} width={208} />
                <Skeleton height={370} width={208} />
                <Skeleton height={370} width={208} />
                <Skeleton height={370} width={208} />
            </div>
        </div>
    );
}