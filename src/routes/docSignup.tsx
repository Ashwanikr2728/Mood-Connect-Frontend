import { useEffect, useState } from "react";
import InputField from "../components/Input";
import { useNavigate } from "react-router-dom";
import { api } from "../lib/api";

export default function DocSignup() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [age, setAge] = useState<number | "">("");
  const [yearOfExperience, setYearOfExperience] = useState<number | "">("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [gender, setGender] = useState<string>("MALE");
  const [specialist, setSpecialization] = useState<string>("CARDIOLOGIST");
  const [city, setCity] = useState<string>("");
  const navigate = useNavigate();
  const getSecret = () => localStorage.getItem("secret");

  async function handleSignup() {
    try {
      const secret = getSecret();

      await api.post("/api/v1/doctor/signup", {
        firstName,
        lastName,
        age,
        yearOfExperience,
        email,
        password,
        gender,
        specialist,
        city,
        secret,
      });

      localStorage.removeItem("secret");

      alert("Signup successful doctor");
      navigate("/signin");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      alert(err.response?.data?.msg || "Signup failed");
    }
  }
  useEffect(() => {
    const secret = getSecret();
    if (!secret) {
      navigate("/doctor-access");
    }
  }, [navigate]);
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 via-purple-50 to-white px-4">
      <div className="w-full max-w-md bg-white p-7 rounded-2xl shadow-lg border border-gray-100 space-y-4">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            Doctor Signup
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            Join as a healthcare professional
          </p>
        </div>

        {/* Inputs */}
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
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputField
          type="number"
          placeholder="Age"
          onChange={(e) => setAge(Number(e.target.value))}
        />
        <InputField
          type="text"
          placeholder="City"
          onChange={(e) => setCity(e.target.value)}
        />

        {/* Specialization */}
        <select
          className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e) => setSpecialization(e.target.value)}
        >
          <option value="">Select Specialization</option>
          <option value="CARDIOLOGIST">Cardiologist</option>
          <option value="DERMATOLOGIST">Dermatologist</option>
          <option value="NEUROLOGIST">Neurologist</option>
          <option value="PSYCHIATRIST">Psychiatrist</option>
          <option value="GENERAL_PHYSICIAN">General Physician</option>
          <option value="ORTHOPEDIC">Orthopedic</option>
        </select>

        <InputField
          type="number"
          placeholder="Years of Experience"
          onChange={(e) => setYearOfExperience(Number(e.target.value))}
        />

        {/* Gender */}
        <select
          className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">Select Gender</option>
          <option value="MALE">Male</option>
          <option value="FEMALE">Female</option>
          <option value="OTHER">Other</option>
        </select>

        {/* Button */}
        <button
          onClick={handleSignup}
          className="w-full py-2.5 bg-linear-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium shadow hover:opacity-90"
        >
          Create Account
        </button>

        {/* Footer */}
        <p className="text-sm text-gray-500 text-center">
          Already registered?{" "}
          <span
            onClick={() => {
              localStorage.removeItem("secret");
              navigate("/signin");
            }}
            className="text-blue-600 font-medium cursor-pointer hover:underline"
          >
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
}
