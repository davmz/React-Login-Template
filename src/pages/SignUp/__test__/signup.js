import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const SignUpTest = () => {
    const imgUrl = "https://source.unsplash.com/IzXTR79nph0"; // Unsplash Image used

    useEffect(() => {
        document.title = "Sign Up - Login Template "
    }, []);

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
            <div className="bg-gray-800 flex flex-col justify-center">
                <form className="max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8 drop-shadow-lg">
                    <h2 className="text-4xl text-white font-bold text-center mb-4">SIGN UP</h2>

                    <div className="flex flex-col text-gray-400 py-2">
                        <label>Username</label>
                        <input
                            type="text"
                            className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                        />
                    </div>

                    <div className="flex flex-col text-gray-400 py-2 mb-4">
                        <label>Password</label>
                        <input
                            type="password"
                            className="p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                        />
                    </div>

                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="w-full my-5 py-2 bg-cyan-800 hover:bg-cyan-600 focus:bg-cyan-700 shadow-lg text-white font-semibold rounded-lg transition duration-300"
                    >
                        Register
                    </button>

                    <div className="flex justify-center">
                        <p className="text-white">
                            Already have an account?{" "}

                            <Link
                                to="/signin"
                                className="text-blue-800 hover:text-blue-500 underline"
                            >
                                Login Now!
                            </Link>
                        </p>
                    </div>
                </form>
            </div>

            <div className="hidden sm:block">
                <img
                    src={imgUrl}
                    className="w-full h-screen object-cover"
                    alt="Midnight Tokyo Credited to Reynier Carl"
                />
            </div>
        </div>
    );
}
 
export default SignUpTest;