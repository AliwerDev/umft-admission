//make loading page with a loading spinner

export default function Loading() {
    return <div className="flex h-screen items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-t-2 border-b-2 border-gray-900"></div>
    </div>
}
