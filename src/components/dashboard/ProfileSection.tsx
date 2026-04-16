import { useState } from "react";
import { api } from "../../lib/api";
import { LoaderIcon } from "lucide-react";

type User = {
  _id: string;
  firstName: string;
  lastName: string;
  city: string;
  age: number;
};

type Props = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

export default function ProfileSection({ user, setUser }: Props) {
  const [loading, setLoading] = useState(false);
  if (!user) {
    return null;
  }
  const handleUpdate = async () => {
    try {
      setLoading(true);
      const res = await api.patch("/api/v1/user/update", user, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      alert("Updated successfully");
      console.log("updated user", res.data);
    } catch (error) {
      alert(`Server error ${error}`);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex justify-center items-start py-8">
      <div className="w-full max-w-3xl h-[75vh] flex flex-col rounded-3xl overflow-hidden border border-white/30 shadow-xl bg-white/70 backdrop-blur-xl">
        {/* Header */}
        <div className="p-6 border-b border-gray-100 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-linear-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white shadow-md">
            👤
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Your Profile
            </h2>
            <p className="text-xs text-gray-500">
              Keep your details up to date
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Inputs Grid */}
          <div className="grid grid-cols-2 gap-4">
            <input
              className="p-3 rounded-xl border border-gray-200 text-sm bg-white/80 focus:ring-2 focus:ring-blue-400 outline-none transition"
              value={user.firstName}
              onChange={(e) =>
                setUser((prev) =>
                  prev ? { ...prev, firstName: e.target.value } : prev,
                )
              }
              placeholder="First Name"
            />

            <input
              className="p-3 rounded-xl border border-gray-200 text-sm bg-white/80 focus:ring-2 focus:ring-blue-400 outline-none transition"
              value={user.lastName}
              onChange={(e) =>
                setUser((prev) =>
                  prev ? { ...prev, lastName: e.target.value } : prev,
                )
              }
              placeholder="Last Name"
            />

            <input
              className="p-3 rounded-xl border border-gray-200 text-sm bg-white/80 focus:ring-2 focus:ring-blue-400 outline-none transition col-span-2"
              value={user.city}
              onChange={(e) =>
                setUser((prev) =>
                  prev ? { ...prev, city: e.target.value } : prev,
                )
              }
              placeholder="City"
            />

            <input
              type="number"
              className="p-3 rounded-xl border border-gray-200 text-sm bg-white/80 focus:ring-2 focus:ring-blue-400 outline-none transition col-span-2"
              value={user.age}
              onChange={(e) =>
                setUser((prev) =>
                  prev ? { ...prev, age: Number(e.target.value) } : prev,
                )
              }
              placeholder="Age"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 border-t border-gray-100 flex justify-end">
          <button
            onClick={handleUpdate}
            className="px-6 py-2.5 rounded-xl bg-linear-to-r from-blue-500 to-purple-500 text-white font-medium shadow-md hover:scale-[1.03] transition"
          >
            {loading ? (
              <>
                <div className="flex justify-center items-center gap-x-2">
                  <LoaderIcon className="animate-spin" /> Savinging...
                </div>
              </>
            ) : (
              <>Save Changes</>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
