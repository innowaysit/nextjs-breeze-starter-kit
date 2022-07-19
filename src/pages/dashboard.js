import AppLayout from '@/components/Layouts/AppLayout'
import { useAuth } from '@/hooks/auth'
import Head from 'next/head'

const Dashboard = () => {

    const { logout, user } = useAuth({ middleware: 'auth' })

    return (
        <AppLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }>

            <Head>
                <title>Laravel - Dashboard</title>
            </Head>

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                          Hello <b> {user?.name} </b>,  This is your dashboard.
                        </div>
                    </div>
                </div>
            </div>

        </AppLayout>
    )
}

export default Dashboard
