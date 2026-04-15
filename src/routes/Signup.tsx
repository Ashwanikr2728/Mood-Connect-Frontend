import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../components/Input";
import { api } from "../lib/api";
import { LoaderIcon } from "lucide-react";

export default function SignupPage() {
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [age, setAge] = useState<number | "">("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const navigate = useNavigate();
  async function signup() {
    try {
      setLoading(true);
      await api.post("/api/v1/user/signup", {
        firstName,
        lastName,
        age,
        city,
        email,
        password,
      });
      alert("Signup successfull");
      navigate("/signin");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-end relative overflow-hidden">
      {/* Background Image */}
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/signup-bg.png"
          alt="background"
          className="w-full h-full object-cover object-left"
        />

        {/* Soft white overlay (NOT dark) */}
        <div className="absolute inset-0 bg-white/40" />

        {/* Subtle color vibe */}
        <div className="absolute inset-0 bg-linear-to-br from-blue-200/30 via-transparent to-purple-200/30" />
      </div>

      {/* Glow elements (subtle premium touch) */}
      <div className="absolute -top-25 -left-25 w-75 h-75 bg-blue-400/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-30 -right-25 w-75 h-75 bg-purple-400/20 rounded-full blur-3xl"></div>
      <div className="absolute top-6 left-6 z-20">
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 px-4 py-2 rounded-full 
    bg-white/70 backdrop-blur-lg border border-white/40 
    shadow-md hover:shadow-lg 
    text-gray-700 text-sm font-medium
    hover:bg-white/90 transition-all duration-300 group"
        >
          {/* Arrow */}
          <span className="transform group-hover:-translate-x-1 transition duration-300">
            ←
          </span>
          Back
        </button>
      </div>
      {/* Card */}
      <div className="relative z-10 w-full max-w-md mr-20 bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-white/30">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-linear-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-105 transition">
            M
          </div>
          <h1 className="text-xl font-semibold text-gray-700 tracking-wide">
            Mood Connect
          </h1>
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Create your account
        </h2>
        <p className="text-gray-500 mb-8 text-sm">
          A safe space to reset, reflect, and grow.
        </p>

        {/* Inputs */}
        <div className="space-y-5">
          <InputField
            type="text"
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <InputField
            type="text"
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
          <InputField
            type="number"
            placeholder="Age"
            onChange={(e) =>
              setAge(e.target.value === "" ? "" : Number(e.target.value))
            }
          />
          <InputField
            type="text"
            placeholder="City"
            onChange={(e) => setCity(e.target.value)}
          />
          <InputField
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Button */}
        <div className="flex items-center my-8">
          <button
            disabled={loading}
            onClick={signup}
            className="w-full py-3.5 rounded-xl bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500 text-white font-semibold shadow-lg hover:scale-[1.02] hover:shadow-xl transition-all duration-300"
          >
            {loading ? (
              <>
                <div className="flex justify-center items-center gap-x-3">
                  <LoaderIcon className="animate-spin w-5 h-5" />
                  Creating your space...
                </div>
              </>
            ) : (
              "Sign Up"
            )}
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="mx-3 text-xs text-gray-400 uppercase tracking-wide">
            or
          </span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Footer */}
        <p className="text-sm text-gray-500 text-center">
          Already have an account?{" "}
          <Link to="/signin">
            <span className="text-blue-600 font-medium hover:underline cursor-pointer">
              Sign in
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
}
