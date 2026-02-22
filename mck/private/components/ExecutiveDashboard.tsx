import { motion } from 'motion/react';
import { 
  TrendingUp, TrendingDown, Minus,
  DollarSign, Clock, Users, CheckCircle2,
  AlertCircle, ArrowUpRight, ArrowDownRight
} from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';

export function ExecutiveDashboard() {
  const performanceData = [
    { month: 'Jan', revenue: 185000, projects: 12, satisfaction: 94 },
    { month: 'Feb', revenue: 210000, projects: 15, satisfaction: 96 },
    { month: 'Mar', revenue: 245000, projects: 18, satisfaction: 95 },
    { month: 'Apr', revenue: 290000, projects: 22, satisfaction: 97 },
    { month: 'May', revenue: 340000, projects: 24, satisfaction: 98 },
    { month: 'Jun', revenue: 420000, projects: 28, satisfaction: 98 }
  ];

  const projectDistribution = [
    { name: 'SaaS Products', value: 35, color: '#3b82f6' },
    { name: 'E-commerce', value: 25, color: '#8b5cf6' },
    { name: 'Enterprise', value: 20, color: '#06b6d4' },
    { name: 'Startups', value: 20, color: '#ec4899' }
  ];

  const kpiCards = [
    {
      title: 'Revenue',
      value: '$2.4M',
      change: 34.5,
      trend: 'up',
      subtitle: 'vs. last quarter',
      icon: DollarSign,
      color: 'text-green-600'
    },
    {
      title: 'Avg. Project Time',
      value: '8.2 weeks',
      change: -12.3,
      trend: 'down',
      subtitle: 'efficiency improved',
      icon: Clock,
      color: 'text-blue-600'
    },
    {
      title: 'Active Clients',
      value: '47',
      change: 18.7,
      trend: 'up',
      subtitle: 'new partnerships',
      icon: Users,
      color: 'text-purple-600'
    },
    {
      title: 'Delivery Rate',
      value: '98%',
      change: 2.1,
      trend: 'up',
      subtitle: 'on-time delivery',
      icon: CheckCircle2,
      color: 'text-cyan-600'
    }
  ];

  const teamPerformance = [
    { name: 'Development', efficiency: 92, quality: 96, velocity: 88 },
    { name: 'Design', efficiency: 95, quality: 98, velocity: 91 },
    { name: 'Marketing', efficiency: 88, quality: 94, velocity: 85 },
    { name: 'PM', efficiency: 97, quality: 95, velocity: 93 }
  ];

  const riskFactors = [
    { factor: 'Resource Allocation', level: 'Low', score: 15, color: 'bg-green-500' },
    { factor: 'Timeline Pressure', level: 'Medium', score: 45, color: 'bg-yellow-500' },
    { factor: 'Budget Constraints', level: 'Low', score: 20, color: 'bg-green-500' },
    { factor: 'Technical Complexity', level: 'Medium', score: 55, color: 'bg-yellow-500' },
    { factor: 'Client Communication', level: 'Low', score: 10, color: 'bg-green-500' }
  ];

  return (
    <section className="py-24 px-4 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Badge className="mb-4 bg-white text-neutral-900">
            Executive Overview
          </Badge>
          <h2 className="text-4xl mb-4">Real-Time Business Intelligence</h2>
          <p className="text-lg text-neutral-400 max-w-3xl">
            Comprehensive metrics, KPIs, and analytics for data-driven decision making.
          </p>
          <p className="text-sm text-neutral-500 mt-2" style={{ fontFamily: 'serif' }}>
            داشبورد مدیریتی / اطلاعات کسب‌وکار
          </p>
        </motion.div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {kpiCards.map((kpi, index) => (
            <motion.div
              key={kpi.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 bg-neutral-800 border-neutral-700 hover:border-neutral-600 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <kpi.icon className={`w-8 h-8 ${kpi.color}`} />
                  <div className={`flex items-center gap-1 text-sm ${
                    kpi.trend === 'up' ? 'text-green-500' : 
                    kpi.trend === 'down' ? 'text-red-500' : 
                    'text-neutral-400'
                  }`}>
                    {kpi.trend === 'up' ? <ArrowUpRight className="w-4 h-4" /> :
                     kpi.trend === 'down' ? <ArrowDownRight className="w-4 h-4" /> :
                     <Minus className="w-4 h-4" />}
                    {Math.abs(kpi.change)}%
                  </div>
                </div>
                <div className="text-3xl mb-1">{kpi.value}</div>
                <div className="text-sm text-neutral-400">{kpi.title}</div>
                <div className="text-xs text-neutral-500 mt-1">{kpi.subtitle}</div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Charts Section */}
        <Tabs defaultValue="performance" className="mb-12">
          <TabsList className="grid w-full grid-cols-4 mb-8 bg-neutral-800">
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="distribution">Distribution</TabsTrigger>
            <TabsTrigger value="team">Team Metrics</TabsTrigger>
            <TabsTrigger value="risk">Risk Analysis</TabsTrigger>
          </TabsList>

          <TabsContent value="performance">
            <Card className="p-6 bg-neutral-800 border-neutral-700">
              <h3 className="text-xl mb-6">Revenue & Project Growth</h3>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#404040" />
                  <XAxis dataKey="month" stroke="#a3a3a3" />
                  <YAxis stroke="#a3a3a3" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#262626', border: '1px solid #404040', borderRadius: '8px' }}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={3} name="Revenue ($)" />
                  <Line type="monotone" dataKey="projects" stroke="#8b5cf6" strokeWidth={3} name="Projects" />
                  <Line type="monotone" dataKey="satisfaction" stroke="#06b6d4" strokeWidth={3} name="Satisfaction (%)" />
                </LineChart>
              </ResponsiveContainer>
            </Card>
          </TabsContent>

          <TabsContent value="distribution">
            <Card className="p-6 bg-neutral-800 border-neutral-700">
              <h3 className="text-xl mb-6">Project Distribution by Industry</h3>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <ResponsiveContainer width="100%" height={400}>
                  <PieChart>
                    <Pie
                      data={projectDistribution}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={120}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {projectDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#262626', border: '1px solid #404040', borderRadius: '8px' }}
                    />
                  </PieChart>
                </ResponsiveContainer>
                <div className="space-y-4">
                  {projectDistribution.map((item) => (
                    <div key={item.name} className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded" style={{ backgroundColor: item.color }} />
                      <span className="text-sm">{item.name}</span>
                      <span className="text-sm text-neutral-400">{item.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="team">
            <Card className="p-6 bg-neutral-800 border-neutral-700">
              <h3 className="text-xl mb-6">Team Performance Metrics</h3>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={teamPerformance}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#404040" />
                  <XAxis dataKey="name" stroke="#a3a3a3" />
                  <YAxis stroke="#a3a3a3" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#262626', border: '1px solid #404040', borderRadius: '8px' }}
                  />
                  <Legend />
                  <Bar dataKey="efficiency" fill="#3b82f6" name="Efficiency %" />
                  <Bar dataKey="quality" fill="#8b5cf6" name="Quality %" />
                  <Bar dataKey="velocity" fill="#06b6d4" name="Velocity %" />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </TabsContent>

          <TabsContent value="risk">
            <Card className="p-6 bg-neutral-800 border-neutral-700">
              <h3 className="text-xl mb-6">Risk Assessment Matrix</h3>
              <div className="space-y-4">
                {riskFactors.map((risk, index) => (
                  <motion.div
                    key={risk.factor}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span>{risk.factor}</span>
                      <Badge variant={risk.level === 'Low' ? 'secondary' : 'outline'}>
                        {risk.level} Risk
                      </Badge>
                    </div>
                    <div className="relative h-3 bg-neutral-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${risk.score}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
                        className={`h-full ${risk.color} rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <Card className="p-6 bg-neutral-800 border-neutral-700 text-center">
            <div className="text-3xl mb-2">2847</div>
            <div className="text-sm text-neutral-400">Total Commits</div>
          </Card>
          <Card className="p-6 bg-neutral-800 border-neutral-700 text-center">
            <div className="text-3xl mb-2">156</div>
            <div className="text-sm text-neutral-400">Deployments</div>
          </Card>
          <Card className="p-6 bg-neutral-800 border-neutral-700 text-center">
            <div className="text-3xl mb-2">99.9%</div>
            <div className="text-sm text-neutral-400">Uptime</div>
          </Card>
          <Card className="p-6 bg-neutral-800 border-neutral-700 text-center">
            <div className="text-3xl mb-2">4.8</div>
            <div className="text-sm text-neutral-400">Avg. Rating</div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
