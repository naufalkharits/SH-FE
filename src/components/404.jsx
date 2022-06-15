import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="flex min-h-screen w-full flex-col items-center justify-center">
            <div className="text-9xl font-extrabold tracking-widest">404</div>
            <div className="absolute rotate-12 rounded bg-primary-purple-04 px-2 text-sm text-white">
                Page Not Found
            </div>

            <Link
                to="/"
                className="text rounded-2xl border border-primary-purple-04 py-2 px-4 shadow-md hover:bg-primary-purple-05 hover:text-white"
            >
                Go Home
            </Link>
        </div>
    );
};

export default Error;
