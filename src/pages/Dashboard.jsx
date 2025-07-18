import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { 
  Phone, 
  Users, 
  BarChart3, 
  Clock,
  Play,
  Pause,
  Plus,
  Upload,
  Settings,
  Bell,
  User,
  Menu,
  Home,
  PhoneCall,
  FileText,
  TrendingUp
} from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts'

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  
  const stats = [
    {
      title: 'Total Contacts',
      value: '2,847',
      change: '+12%',
      changeType: 'positive',
      icon: Users
    },
    {
      title: 'Active Campaigns',
      value: '8',
      change: '+2',
      changeType: 'positive',
      icon: Phone
    },
    {
      title: 'Calls Today',
      value: '156',
      change: '+23%',
      changeType: 'positive',
      icon: PhoneCall
    },
    {
      title: 'Success Rate',
      value: '68%',
      change: '+5%',
      changeType: 'positive',
      icon: TrendingUp
    }
  ]

  const recentActivity = [
    { id: 1, type: 'call_completed', message: 'Call to +1-555-0123 completed successfully', time: '2 minutes ago', status: 'success' },
    { id: 2, type: 'campaign_started', message: 'Campaign "Sales Outreach Q1" started', time: '15 minutes ago', status: 'info' },
    { id: 3, type: 'call_failed', message: 'Call to +1-555-0456 failed - busy signal', time: '23 minutes ago', status: 'warning' },
    { id: 4, type: 'contacts_uploaded', message: '150 new contacts uploaded to "Prospects List"', time: '1 hour ago', status: 'success' },
    { id: 5, type: 'call_completed', message: 'Call to +1-555-0789 completed successfully', time: '1 hour ago', status: 'success' }
  ]

  const activeCampaigns = [
    { id: 1, name: 'Sales Outreach Q1', status: 'active', progress: 65, totalCalls: 500, completedCalls: 325 },
    { id: 2, name: 'Customer Survey', status: 'active', progress: 42, totalCalls: 200, completedCalls: 84 },
    { id: 3, name: 'Appointment Reminders', status: 'paused', progress: 78, totalCalls: 150, completedCalls: 117 }
  ]

  const callData = [
    { time: '09:00', calls: 12, successful: 8 },
    { time: '10:00', calls: 19, successful: 13 },
    { time: '11:00', calls: 15, successful: 11 },
    { time: '12:00', calls: 22, successful: 16 },
    { time: '13:00', calls: 18, successful: 12 },
    { time: '14:00', calls: 25, successful: 18 },
    { time: '15:00', calls: 20, successful: 14 }
  ]

  const sidebarItems = [
    { icon: Home, label: 'Dashboard', path: '/dashboard', active: true },
    { icon: Phone, label: 'Campaigns', path: '/campaigns' },
    { icon: Users, label: 'Contacts', path: '/contacts' },
    { icon: BarChart3, label: 'Analytics', path: '/analytics' },
    { icon: Settings, label: 'Settings', path: '/settings' }
  ]

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <aside className={`bg-white shadow-lg transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-16'} flex flex-col`}>
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Phone className="w-5 h-5 text-white" />
            </div>
            {sidebarOpen && (
              <span className="font-bold text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                RoboCall AI
              </span>
            )}
          </div>
        </div>
        
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {sidebarItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                    item.active 
                      ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {sidebarOpen && <span className="font-medium">{item.label}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <Menu className="w-5 h-5" />
              </Button>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm">
                <User className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </header>

        <main className="flex-1 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    {stat.title}
                  </CardTitle>
                  <stat.icon className="w-4 h-4 text-gray-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <p className={`text-xs ${stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change} from last month
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Call Activity Today</CardTitle>
                <CardDescription>Hourly breakdown of calls and success rates</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={callData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="calls" stroke="#3b82f6" strokeWidth={2} />
                    <Line type="monotone" dataKey="successful" stroke="#10b981" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common tasks and shortcuts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Link to="/campaigns">
                  <Button className="w-full justify-start" variant="outline">
                    <Plus className="w-4 h-4 mr-2" />
                    Create New Campaign
                  </Button>
                </Link>
                <Link to="/contacts">
                  <Button className="w-full justify-start" variant="outline">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Contacts
                  </Button>
                </Link>
                <Link to="/analytics">
                  <Button className="w-full justify-start" variant="outline">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    View Reports
                  </Button>
                </Link>
                <Link to="/settings">
                  <Button className="w-full justify-start" variant="outline">
                    <Settings className="w-4 h-4 mr-2" />
                    System Settings
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Active Campaigns</CardTitle>
                <CardDescription>Monitor your running campaigns</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {activeCampaigns.map((campaign) => (
                  <div key={campaign.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">{campaign.name}</h4>
                        <p className="text-sm text-gray-500">
                          {campaign.completedCalls} of {campaign.totalCalls} calls
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={campaign.status === 'active' ? 'default' : 'secondary'}>
                          {campaign.status}
                        </Badge>
                        <Button size="sm" variant="ghost">
                          {campaign.status === 'active' ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                        </Button>
                      </div>
                    </div>
                    <Progress value={campaign.progress} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest system events and updates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        activity.status === 'success' ? 'bg-green-500' :
                        activity.status === 'warning' ? 'bg-yellow-500' :
                        'bg-blue-500'
                      }`} />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-900">{activity.message}</p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Dashboard

