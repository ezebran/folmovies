import Skeleton from "react-loading-skeleton";

export default function ModalLoader() {
    console.log("modal loader")
    return (
        <div className={`fixed h-screen w-full bg-neutral-800/[.8] flex justify-center items-center`}>
            <div className="relative w-min-[32rem] h-min-[32rem] gap-4 bg-slate-100 rounded-lg p-4 flex flex-row justify-center items-center">
                <span className="absolute bg-slate-100 font-bold right-[-60px] top-[0px] py-[0.5em] px-[0.92em] rounded-full cursor-pointer hover:bg-slate-300">X</span>
                <Skeleton height={370} width={208} />
                <div className="flex flex-col w-60 gap-6">
                    <h5 className="font-bold text-slate-600"><Skeleton height={25} width={105} /></h5>
                    <p className="text-slate-600 max-h-36 overflow-hidden">
                        <Skeleton height={25} width={105} />
                    </p>
                    <p className="text-slate-600 max-h-36 overflow-hidden">
                        <Skeleton height={25} width={105} />
                    </p>
                    <p className="text-slate-600">
                        <Skeleton height={25} width={105} />
                    </p>
                    <p className="text-slate-600">
                        <Skeleton height={25} width={105} />
                    </p>
                </div>
            </div>
        </div>
    );
}