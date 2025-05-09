import UserDetailsCard from "./components/UserDetailsCard";

function App() {
    return (
        <div className="p-4 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold mb-4">User Profile</h1>

            <div className="space-y-4"> {/* This adds vertical spacing between children */}
                {/* With required props only */}
                <UserDetailsCard
                    name="John Doe"
                    age={28}
                    avatarUrl="https://img.freepik.com/premium-photo/young-man-isolated-blue_1368-124991.jpg?semt=ais_hybrid&w=740"
                />

                {/* With optional isVerified prop */}
                <UserDetailsCard
                    name="Jane Smith"
                    age={32}
                    avatarUrl="https://t3.ftcdn.net/jpg/02/58/89/90/360_F_258899001_68CalsKTRk6PZQgWH9JhR4heBlncCko9.jpg"
                    isVerified={true}
                />
            </div>
        </div>
    );
}

export default App;
