import { Link } from 'react-router-dom';

const SignInTest = () => {
    const imgUrl = "https://source.unsplash.com/nVGv6BLPjns";

    /**
     * Handles the user form sign in.
     * 
     * @param {Form Event Handler} e 
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit");
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
            <div className="hidden sm:block">
                <img className="w-full h-screen object-cover" src={imgUrl} alt="" />
            </div>

            <div className="bg-gray-200 flex flex-col justify-center">
                <form className="max-w-[400px] w-full mx-auto rounded-lg bg-white p-8 px-8 drop-shadow-lg">
                    <h2 className="text-4xl font-bold text-center mb-4">SIGN IN</h2>

                    <div className="flex flex-col text-gray-600 py-2">
                        <label>Username</label>
                        <input
                            type="text"
                            className="p-2 rounded-lg bg-gray-200 mt-2 border border-gray-300 focus:border-cyan-800 focus:bg-white focus:outline-none"
                        />
                    </div>

                    <div className="flex flex-col text-gray-600 py-2">
                        <label>Password</label>
                        <input
                            type="password"
                            className="p-2 rounded-lg bg-gray-200 mt-2 border border-gray-300 focus:border-cyan-800 focus:bg-white focus:outline-none"
                        />
                    </div>

                    <div className="flex justify-end py-2">
                        <Link
                            to="/reset-password"
                            className="text-blue-600 hover:text-gray-800 hover:underline"
                        >
                            Forgot Password
                        </Link>

                        {/* <a
                            href="/reset-password"
                            className="text-gray-600 hover:text-gray-800 hover:underline"
                        >
                            Forgot Password
                        </a> */}
                    </div>

                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="w-full my-5 py-2 bg-cyan-800 hover:bg-cyan-600 focus:bg-cyan-700 shadow-lg text-white font-semibold rounded-lg transition duration-300"
                    >
                        Login
                    </button>

                    <div className="flex justify-center">
                        <p className="text-black">
                            Don't have an account?{" "}

                            <Link
                                to="/signup"
                                className="text-blue-600 hover:text-gray-900 underline"
                            >
                                Register Now!
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}
 
export default SignInTest;