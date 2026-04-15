import Header from "../components/Header"
import Button from "../components/Button"


function Home() {

    const homeCardsData = [
        {
            icon: "🔥",
            title: "Trending Now",
            description: "See what everyone is watching this week"
        },
        {
            icon: "🔎",
            title: "Smart Search",
            description: "Find any movie from our massive database"
        },
        {
            icon: "🔖",
            title: "Your Watchlist",
            description: "Save movies and track what you want to watch"
        },
    ]


    return (
        <main className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 gap-8">
            <Header />
            {/* Hero icon */}
            <span className="text-8xl">🎬</span>

            {/* Headline — JSX lets us mix HTML-like syntax with JavaScript (Week 2) */}
            <div className="max-w-2xl space-y-4">
                <h1 className="text-5xl font-bold leading-tight">
                    Your personal{" "}
                    <span className="text-red-500">movie companion</span>
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed">
                    mansdb sdbnf nsbsndvswdhfvwbsdv
                </p>

                <div className="flex items-center justify-center gap-4">
                    <Button label="Browse Movies" />
                    <Button label="My Watchlist" />
                </div>
            </div>

            {/* Cards */}
            {/* 1st card */}
            <div className="flex items-center justify-center gap-8">
                {
                    homeCardsData.map((item) => (
                        <article className="bg-slate-500 p-4 rounded-sm text-white">
                            <span>{item.icon}</span>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </article>
                    ))
                }

                {/* <article className="bg-slate-500 p-4 rounded-sm text-white">
                    <span>🔥</span>
                    <h3>Trending Now</h3>
                    <p>See what everyone is watching this week</p>
                </article>
                <article className="bg-slate-500 p-4 rounded-sm text-white">
                    <span>🔎</span>
                    <h3>Smart Search</h3>
                    <p>Find any movie from our massive database</p>
                </article>
                <article className="bg-slate-500 p-4 rounded-sm text-white">
                    <span>🔖</span>
                    <h3>Your Watchlist</h3>
                    <p>Save movies and track what you want to watch</p>
                </article> */}
            </div>

        </main>
    )
}

export default Home

