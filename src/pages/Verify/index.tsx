import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { images } from '../../assets/images';
import { AppDispatch } from '../../stores/stores';
import { verify } from '../../stores/thunks/auth.thunk';

const Verify = () => {
    const dispatch = useDispatch<AppDispatch>();
    const location = useLocation();

    const handleVerifyClick = () => {
        const queryParams = new URLSearchParams(location.search);
        const code = queryParams.get('code');
        if (code) {
            dispatch(verify({ body: { verifyCode: code } }));
        }
    };
    return (
        <div className="max-w-screen-sm mx-auto py-8 my-20 border shadow-lg">
            <div className="flex justify-center">
                <img className="w-20" src={images.logoVerify} alt="Verification Logo" />
            </div>
            <div className="items-center py-5 flex flex-col gap-4">
                <h2 className="uppercase text-2xl">Authenticate Your Account</h2>
                <div className="border-t mx-20 border-gray-300"></div>
                <div className="font-semibold">Duyzfclong@gmail.com</div>
                <button onClick={handleVerifyClick} className="border text-white bg-blue-500 rounded-md h-10 w-[200px]">
                    Verify
                </button>
            </div>
        </div>
    );
};

export default Verify;
