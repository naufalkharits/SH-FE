import { Outlet } from "react-router-dom";

const Auth = () => {
    return (
        <div className="min-h-screen sm:flex sm:flex-row">
            <div className="hidden bg-cover bg-center bg-no-repeat sm:inline sm:w-1/2 sm:bg-[url('/public/img/auth.png')] xl:w-2/3">
                <div className="flex h-full flex-col justify-center pl-8 text-4xl font-bold text-white">
                    Second <div>Hand.</div>
                </div>
            </div>
            <div className="sm:w-1/2 xl:w-1/3">
                {/* <div className="mb-4 text-4xl font-bold text-white sm:hidden">
                    Second Hand.
                </div> */}
                <Outlet />
            </div>
        </div>
    );
};

export default Auth;
