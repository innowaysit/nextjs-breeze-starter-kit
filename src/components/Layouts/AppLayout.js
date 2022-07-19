import Navigation from '@/components/Layouts/Navigation'
import { useAuth } from '@/hooks/auth'
import Sidebar from '../Sidebar'

const AppLayout = ({ header, children }) => {
    const { user } = useAuth({ middleware: 'auth' })

    return (
        <div className="min-h-screen bg-gray-100">
            <Navigation user={user} />

            {/* Page Heading */}
            <header className="bg-white shadow">
                <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {header}
                </div>
            </header>

            <Sidebar />
            {/* Page Content */}
            <main>{children}</main>
        </div>
    )
}

export default AppLayout
