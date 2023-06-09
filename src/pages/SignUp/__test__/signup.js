import loginImg from "./login.jpg"

const SignUpTest = () => {
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
                <form className="max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8">
                    <h2 className="text-4xl dark:text-white font-bold text-center mb-4">SIGN UP</h2>

                    <div className="flex flex-col text-gray-400 py-2">
                        <label>Username</label>
                        <input
                            type="text"
                            className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                        />
                    </div>

                    <div className="flex flex-col text-gray-400 py-2">
                        <label>Password</label>
                        <input
                            type="password"
                            className="p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                        />
                    </div>

                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg"
                    >
                        Register
                    </button>

                    <div className="flex justify-center">
                        <p className="text-white">Already have an account? Login NOW</p>
                    </div>
                </form>
            </div>

            <div className="hidden sm:block">
                <img className="w-full h-full object-cover" src={loginImg} alt="" />
            </div>
        </div>
    );
}
 
export default SignUpTest;