import { images } from "../../assets/images";

const Verify = () => {
    return (
        <>
            <div className="max-w-screen-sm mx-auto py-8 my-20 border shadow-lg">
                <div className="flex justify-center">
                    <img className=" w-20" src={images.logoVerify} alt="" />
                </div>
                <div className="text-center py-5 flex flex-col gap-4">
                    <h2 className="uppercase text-2xl">authenticate your account</h2>
                    <div className="border-t mx-20 border-gray-300"></div>
                    <div className="font-semibold">Duyzfclong@gmail.com</div>
                    <div><button className="border text-white bg-blue-500 rounded-md  h-10 w-[200px]">Verify</button></div>
                </div>
            </div>
        </>
    );
}

export default Verify;