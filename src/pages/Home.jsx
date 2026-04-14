function Home() {
    return (
        <main className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 gap-8">
            {/* Hero icon */}
            <span className="text-8xl">🎬</span>

            {/* Headline — JSX lets us mix HTML-like syntax with JavaScript (Week 2) */}
            <div className="max-w-2xl space-y-4">
                <h1 className="text-5xl font-bold leading-tight">
                    Your personal{" "}
                    <span className="text-red-500">movie companion</span>
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed">
                    mansdb sdbnf nsb
                </p>
            </div>
        </main>
    )
}

export default Home

