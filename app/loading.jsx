const Loading = () => {
    return (
        <main className="flex min-h-[60vh] items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <div className="h-10 2-10 rounded-full border-4 border-white/20 border-t-[#ccff00]">
                    <p className="text-sm font-bold uppercase">
                        Loading Workouts......
                    </p>
                </div>
            </div>
        </main>
    )
}

export default Loading;
