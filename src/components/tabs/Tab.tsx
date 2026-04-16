type TabsProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

export default function Tabs({ activeTab, setActiveTab }: TabsProps) {
  const tabs = [
    { id: "ai", label: "AI Chat" },
    { id: "doctors", label: "Doctors" },
    { id: "profile", label: "Profile" },
  ];

  return (
    <div className="w-full flex justify-center">
      <div
        className="flex justify-center  items-center gap-2 bg-linear-to-r from-sky-50 via-white
      to-pink-50 backdrop-blur-lg border border-gray-200 p-1.5 rounded-xl w-fit shadow-sm mb-6"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all  ${
              activeTab === tab.id
                ? "bg-white shadow text-gray-900"
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
