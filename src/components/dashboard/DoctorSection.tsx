type Doctor = {
  _id: string;
  firstName: string;
  lastName: string;
  city: string;
  specialist: string;
};

type Props = {
  doctors: Doctor[];
};

export default function DoctorsSection({ doctors }: Props) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        🩺 Available Doctors
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-50 text-gray-600">
              <th className="p-3 text-left font-medium">Name</th>
              <th className="p-3 text-left font-medium">Specialization</th>
              <th className="p-3 text-left font-medium">City</th>
              <th className="p-3 text-left font-medium">Action</th>
            </tr>
          </thead>

          <tbody>
            {doctors.map((doc) => (
              <tr
                key={doc._id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="p-3 font-medium text-gray-800">
                  {doc.firstName} {doc.lastName}
                </td>
                <td className="p-3 text-gray-600">{doc.specialist}</td>
                <td className="p-3 text-gray-600">{doc.city}</td>
                <td className="p-3">
                  <button
                    onClick={() => alert("Feature coming soon")}
                    className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md text-xs font-medium"
                  >
                    Connect
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
