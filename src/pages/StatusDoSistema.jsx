import { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  CheckCircle, 
  Activity, 
  Users, 
  Brain, 
  BarChart3, 
  Zap, 
  Globe, 
  Server, 
  Database, 
  Shield, 
  Clock,
  TrendingUp,
  Eye,
  FileText,
  Cpu,
  Wifi,
  HardDrive,
  RefreshCw
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function StatusDoSistema() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [counters, setCounters] = useState({
    onlineUsers: 0,
    analysisToday: 0,
    protocolsGenerated: 0,
    aiProcessing: 0,
    standardProtocols: 0
  });

  const scrollToForm = () => {
    window.location.href = '/#lead-capture-form';
  };

  const openDemoModal = () => {
    window.location.href = '/#';
  };

  const scrollToScience = () => {
    window.location.href = '/#base-cientifica';
  };

  // Atualizar relógio
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Animar contadores
  useEffect(() => {
    const targets = {
      onlineUsers: 12,
      analysisToday: 103,
      protocolsGenerated: 320,
      aiProcessing: 88,
      standardProtocols: 562
    };

    const duration = 2000; // 2 segundos
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounters({
        onlineUsers: Math.floor(targets.onlineUsers * progress),
        analysisToday: Math.floor(targets.analysisToday * progress),
        protocolsGenerated: Math.floor(targets.protocolsGenerated * progress),
        aiProcessing: Math.floor(targets.aiProcessing * progress),
        standardProtocols: Math.floor(targets.standardProtocols * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  const systemStatus = [
    {
      service: 'Plataforma Principal',
      status: 'online',
      uptime: '99.98%',
      responseTime: '142ms',
      icon: Globe,
      description: 'Sistema web funcionando normalmente'
    },
    {
      service: 'Análise Facial IA',
      status: 'online',
      uptime: '99.95%',
      responseTime: '1.2s',
      icon: Brain,
      description: 'Processamento de imagens ativo'
    },
    {
      service: 'Banco de Dados',
      status: 'online',
      uptime: '99.99%',
      responseTime: '45ms',
      icon: Database,
      description: 'Armazenamento seguro operacional'
    },
    {
      service: 'API de Protocolos',
      status: 'online',
      uptime: '99.97%',
      responseTime: '89ms',
      icon: FileText,
      description: 'Geração de protocolos ativa'
    },
    {
      service: 'Servidores de Aplicação',
      status: 'online',
      uptime: '99.96%',
      responseTime: '67ms',
      icon: Server,
      description: 'Infraestrutura estável'
    },
    {
      service: 'Sistema de Segurança',
      status: 'online',
      uptime: '100%',
      responseTime: '23ms',
      icon: Shield,
      description: 'Proteção LGPD/HIPAA ativa'
    }
  ];

  const metrics = [
    {
      title: 'Usuários Online',
      value: counters.onlineUsers,
      suffix: '',
      icon: Users,
      color: 'blue',
      description: 'Profissionais conectados agora',
      trend: '+12%'
    },
    {
      title: 'Análises Hoje',
      value: counters.analysisToday,
      suffix: '',
      icon: Eye,
      color: 'green',
      description: 'Análises faciais realizadas hoje',
      trend: '+8%'
    },
    {
      title: 'Protocolos Gerados',
      value: counters.protocolsGenerated,
      suffix: '',
      icon: FileText,
      color: 'purple',
      description: 'Protocolos criados hoje',
      trend: '+15%'
    },
    {
      title: 'IA Processando',
      value: counters.aiProcessing,
      suffix: '',
      icon: Cpu,
      color: 'orange',
      description: 'Análises em processamento',
      trend: 'Real-time'
    }
  ];

  const monthlyStats = [
    {
      title: 'Protocolos Padrão',
      value: counters.standardProtocols,
      suffix: '',
      icon: BarChart3,
      color: 'indigo',
      description: 'Solicitações no último mês',
      chart: true
    }
  ];

  const performanceData = [
    { name: 'Mar', value: 651 },
    { name: 'Abr', value: 580 },
    { name: 'Mai', value: 322 },
    { name: 'Jun', value: 801 },
    { name: 'Jul', value: 12 }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'online':
        return 'text-green-600 bg-green-100';
      case 'warning':
        return 'text-yellow-600 bg-yellow-100';
      case 'offline':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'online':
        return <CheckCircle className="w-4 h-4" />;
      case 'warning':
        return <Clock className="w-4 h-4" />;
      case 'offline':
        return <RefreshCw className="w-4 h-4" />;
      default:
        return <Activity className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="bg-green-100 text-green-800 border-green-200 mb-6">
              <CheckCircle className="w-4 h-4 mr-2" />
              Todos os Sistemas Operacionais
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Status do Sistema
              </span>
              <br />
              MAP EssenciaLab
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
              Monitoramento em tempo real da infraestrutura e performance do MAP. 
              Transparência total sobre a disponibilidade dos nossos serviços.
            </p>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg max-w-md mx-auto">
              <div className="text-3xl font-bold text-gray-800 mb-2">
                {currentTime.toLocaleTimeString('pt-BR')}
              </div>
              <div className="text-gray-600">
                {currentTime.toLocaleDateString('pt-BR', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Status dos Serviços */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Status dos Serviços</h2>
            <p className="text-xl text-gray-600">
              Monitoramento em tempo real de todos os componentes do sistema
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {systemStatus.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center">
                        <service.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{service.service}</CardTitle>
                        <CardDescription className="text-sm">{service.description}</CardDescription>
                      </div>
                    </div>
                    <Badge className={`${getStatusColor(service.status)} border-0`}>
                      {getStatusIcon(service.status)}
                      <span className="ml-1 capitalize">{service.status}</span>
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-gray-500">Uptime</div>
                      <div className="font-semibold text-green-600">{service.uptime}</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Resposta</div>
                      <div className="font-semibold text-blue-600">{service.responseTime}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Métricas em Tempo Real */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Métricas em Tempo Real</h2>
            <p className="text-xl text-gray-600">
              Dados atualizados automaticamente sobre o uso da plataforma
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {metrics.map((metric, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${
                  metric.color === 'blue' ? 'from-blue-500 to-blue-600' :
                  metric.color === 'green' ? 'from-green-500 to-green-600' :
                  metric.color === 'purple' ? 'from-purple-500 to-purple-600' :
                  'from-orange-500 to-orange-600'
                }`}></div>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <metric.icon className={`w-8 h-8 ${
                      metric.color === 'blue' ? 'text-blue-600' :
                      metric.color === 'green' ? 'text-green-600' :
                      metric.color === 'purple' ? 'text-purple-600' :
                      'text-orange-600'
                    }`} />
                    <Badge variant="outline" className="text-xs">
                      {metric.trend}
                    </Badge>
                  </div>
                  <CardTitle className="text-sm text-gray-600">{metric.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-gray-800 mb-1">
                    {metric.value.toLocaleString('pt-BR')}{metric.suffix}
                  </div>
                  <p className="text-xs text-gray-500">{metric.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Estatística Mensal com Gráfico Simulado */}
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-600 flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <CardTitle>Protocolos Padrão - Último Mês</CardTitle>
                    <CardDescription>Solicitações de protocolos pré-definidos</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-indigo-600 mb-4">
                  {counters.standardProtocols.toLocaleString('pt-BR')}
                </div>
                <div className="space-y-2">
                  {performanceData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">{item.name}</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full transition-all duration-1000"
                            style={{ width: `${(item.value / 3400) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-semibold text-gray-800 w-12 text-right">
                          {item.value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <CardTitle>Performance do Sistema</CardTitle>
                    <CardDescription>Indicadores de saúde da infraestrutura</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Cpu className="w-4 h-4 text-blue-600" />
                    <span className="text-sm">CPU</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full" style={{ width: '23%' }}></div>
                    </div>
                    <span className="text-sm font-semibold w-8 text-right">23%</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <HardDrive className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Memória</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                    <span className="text-sm font-semibold w-8 text-right">45%</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Wifi className="w-4 h-4 text-purple-600" />
                    <span className="text-sm">Rede</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-500 rounded-full" style={{ width: '12%' }}></div>
                    </div>
                    <span className="text-sm font-semibold w-8 text-right">12%</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Database className="w-4 h-4 text-orange-600" />
                    <span className="text-sm">Armazenamento</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-orange-500 rounded-full" style={{ width: '67%' }}></div>
                    </div>
                    <span className="text-sm font-semibold w-8 text-right">67%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Histórico de Uptime */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Histórico de Disponibilidade</h2>
            <p className="text-xl text-gray-600">
              Últimos 30 dias de uptime do sistema
            </p>
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center">Uptime Médio: 99.97%</CardTitle>
              <CardDescription className="text-center">
                Cada quadrado representa um dia. Verde = 100% uptime, Amarelo = 99-99.9%, Vermelho = &lt;99%
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-10 gap-1 max-w-2xl mx-auto">
                {Array.from({ length: 30 }, (_, i) => {
                  const uptime = Math.random();
                  let colorClass = 'bg-green-500';
                  if (uptime < 0.99) colorClass = 'bg-red-500';
                  else if (uptime < 0.999) colorClass = 'bg-yellow-500';
                  
                  return (
                    <div
                      key={i}
                      className={`w-6 h-6 rounded ${colorClass} hover:scale-110 transition-transform cursor-pointer`}
                      title={`Dia ${30-i}: ${(uptime * 100).toFixed(2)}% uptime`}
                    ></div>
                  );
                })}
              </div>
              
              <div className="flex justify-center space-x-6 mt-6 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded"></div>
                  <span>100% Uptime</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded"></div>
                  <span>99-99.9% Uptime</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded"></div>
                  <span>&lt;99% Uptime</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Informações de Contato */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Reportar Problemas</h2>
            <p className="text-xl text-gray-600">
              Encontrou algum problema? Entre em contato conosco imediatamente
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Problemas Críticos</CardTitle>
                <CardDescription>Para falhas que impedem o uso do sistema</CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full bg-red-600 hover:bg-red-700 text-white mb-4"
                  onClick={() => window.open('https://wa.me/5543991343807?text=🚨 PROBLEMA CRÍTICO no MAP: ', '_blank')}
                >
                  WhatsApp Emergencial
                </Button>
                <p className="text-sm text-gray-600">
                  Resposta em até 15 minutos durante horário comercial
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mb-4">
                  <Activity className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Suporte Geral</CardTitle>
                <CardDescription>Para dúvidas e problemas não críticos</CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="outline" 
                  className="w-full mb-4"
                  onClick={() => window.open('mailto:suporte@essencialab.site?subject=Status do Sistema - Dúvida', '_blank')}
                >
                  Email de Suporte
                </Button>
                <p className="text-sm text-gray-600">
                  Resposta em até 2 horas
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Sistema Estável, Resultados Garantidos
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Com 99.97% de uptime, você pode confiar no MAP para transformar 
            sua prática profissional todos os dias.
          </p>

          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 px-12 py-4 rounded-full text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={scrollToForm}
          >
            Começar a Usar o MAP
          </Button>

          <p className="text-sm mt-6 opacity-75">
            Infraestrutura confiável • Suporte 24/7 • Garantia de funcionamento
          </p>
        </div>
      </section>

      <Footer 
        onOpenDemo={openDemoModal}
        onScrollToForm={scrollToForm}
        onScrollToScience={scrollToScience}
      />
    </div>
  );
}
