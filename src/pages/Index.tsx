import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

export default function Index() {
  const [gameScore, setGameScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const questions = [
    {
      question: "Что происходит со спросом при увеличении цены на товар?",
      answers: ["Увеличивается", "Уменьшается", "Не изменяется", "Зависит от товара"],
      correct: 1
    },
    {
      question: "Какой тип рыночной структуры характеризуется множеством продавцов?",
      answers: ["Монополия", "Олигополия", "Совершенная конкуренция", "Монопсония"],
      correct: 2
    }
  ];

  const newsData = [
    {
      title: "Почему подорожали продукты в декабре?",
      description: "Разбираем причины роста цен и как это влияет на бюджет",
      time: "2 часа назад",
      category: "Личные финансы"
    },
    {
      title: "5 способов сэкономить на коммунальных платежах",
      description: "Практические советы, которые помогут снизить расходы",
      time: "5 часов назад",
      category: "Полезные советы"
    },
    {
      title: "Как выбрать выгодный вклад в 2025 году",
      description: "Обзор банковских продуктов и рекомендации экспертов",
      time: "1 день назад",
      category: "Инвестиции"
    }
  ];

  const tutorials = [
    {
      title: "Личный бюджет: с чего начать",
      description: "Учимся планировать доходы и расходы правильно",
      duration: "30 мин",
      level: "Новичок",
      progress: 75,
      icon: "Wallet"
    },
    {
      title: "Почему дорожает хлеб?",
      description: "Простыми словами о том, как работает инфляция",
      duration: "20 мин",
      level: "Любознательное",
      progress: 30,
      icon: "TrendingUp"
    },
    {
      title: "Как не потерять деньги на вкладах",
      description: "Основы инвестирования для начинающих",
      duration: "45 мин",
      level: "Практичное",
      progress: 0,
      icon: "PiggyBank"
    }
  ];

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    if (answerIndex === questions[currentQuestion].correct) {
      setGameScore(prev => prev + 10);
    }
    
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
        setSelectedAnswer(null);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 economic-pattern">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Left side - Logo & Menu button */}
            <div className="flex items-center space-x-4">
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="p-2">
                    <Icon name="Menu" size={20} className="text-gray-700" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80 bg-white">
                  <SheetHeader className="mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                        <Icon name="GraduationCap" size={24} className="text-white" />
                      </div>
                      <div>
                        <SheetTitle className="text-xl font-bold text-gray-900">EconoHub</SheetTitle>
                        <p className="text-sm text-gray-600">Экономика для всех</p>
                      </div>
                    </div>
                  </SheetHeader>
                  
                  <nav className="space-y-2">
                    <div className="space-y-1">
                      <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">Основные разделы</h3>
                      
                      <a 
                        href="#news" 
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                          <Icon name="Newspaper" size={20} className="text-blue-600" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">Новости</div>
                          <div className="text-sm text-gray-500">События, влияющие на ваш кошелёк</div>
                        </div>
                      </a>
                      
                      <a 
                        href="#tutorials" 
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                          <Icon name="BookOpen" size={20} className="text-green-600" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">Обучение</div>
                          <div className="text-sm text-gray-500">Простые уроки экономики</div>
                        </div>
                      </a>
                      
                      <a 
                        href="#games" 
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center group-hover:bg-yellow-200 transition-colors">
                          <Icon name="Gamepad2" size={20} className="text-yellow-600" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">Инструменты</div>
                          <div className="text-sm text-gray-500">Калькуляторы и тесты</div>
                        </div>
                      </a>
                      
                      <a 
                        href="#contact" 
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                          <Icon name="Wallet" size={20} className="text-orange-600" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">Личные финансы</div>
                          <div className="text-sm text-gray-500">Управление деньгами</div>
                        </div>
                      </a>
                      
                      <a 
                        href="#contact" 
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                          <Icon name="MessageSquare" size={20} className="text-purple-600" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">Сообщество</div>
                          <div className="text-sm text-gray-500">Обсуждения и советы</div>
                        </div>
                      </a>
                    </div>
                    
                    <Separator className="my-4" />
                    
                    <div className="space-y-1">
                      <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">Дополнительно</h3>
                      
                      <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <Icon name="Settings" size={20} className="text-gray-500" />
                        <span className="text-gray-700">Настройки</span>
                      </a>
                      
                      <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <Icon name="HelpCircle" size={20} className="text-gray-500" />
                        <span className="text-gray-700">Помощь</span>
                      </a>
                      
                      <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <Icon name="Info" size={20} className="text-gray-500" />
                        <span className="text-gray-700">О платформе</span>
                      </a>
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
              
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="GraduationCap" size={18} className="text-white" />
                </div>
                <h1 className="text-xl font-bold text-gray-900 hidden sm:block">EconoHub</h1>
              </div>
            </div>

            {/* Center - Search */}
            <div className="flex-1 max-w-md mx-6">
              <div className="relative">
                <Icon name="Search" size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Поиск по материалам..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full bg-gray-50 border-gray-200 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
                {searchQuery && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
                    onClick={() => setSearchQuery("")}
                  >
                    <Icon name="X" size={14} className="text-gray-400" />
                  </Button>
                )}
              </div>
            </div>

            {/* Right side - Profile */}
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="sm" className="relative p-2">
                <Icon name="Bell" size={20} className="text-gray-700" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs flex items-center justify-center">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                </span>
              </Button>
              
              <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 rounded-lg p-2 transition-colors">
                <Avatar className="w-8 h-8">
                  <AvatarImage src="" alt="Profile" />
                  <AvatarFallback className="bg-primary text-white text-sm font-medium">
                    ИВ
                  </AvatarFallback>
                </Avatar>
                <div className="hidden md:block">
                  <div className="text-sm font-medium text-gray-900">Иван Воробьев</div>
                  <div className="text-xs text-gray-500">Студент</div>
                </div>
                <Icon name="ChevronDown" size={16} className="text-gray-400 hidden md:block" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Экономика <span className="text-primary">для каждого</span><br />
              просто и понятно
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Узнавайте, как экономика влияет на вашу жизнь. Обучение, новости, 
              инструменты для управления личными финансами и многое другое
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="animate-scale-in">
                <Icon name="Play" size={20} className="mr-2" />
                Начать изучение
              </Button>
              <Button variant="outline" size="lg" className="animate-scale-in">
                <Icon name="BookOpen" size={20} className="mr-2" />
                Личные финансы
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-gray-600">Практических гайдов</div>
            </div>
            <div className="text-center animate-fade-in">
              <div className="text-3xl font-bold text-secondary mb-2">5K+</div>
              <div className="text-gray-600">Активных пользователей</div>
            </div>
            <div className="text-center animate-fade-in">
              <div className="text-3xl font-bold text-yellow-500 mb-2">98%</div>
              <div className="text-gray-600">Положительных отзывов</div>
            </div>
            <div className="text-center animate-fade-in">
              <div className="text-3xl font-bold text-green-500 mb-2">25</div>
              <div className="text-gray-600">Полезных инструментов</div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Новости и полезные советы</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Узнавайте о том, что влияет на ваши деньги и как принимать верные решения
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsData.map((news, index) => (
              <Card key={index} className="floating-card hover:shadow-lg transition-all duration-300 animate-fade-in border-0 glass-effect">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {news.category}
                    </Badge>
                    <span className="text-sm text-gray-500">{news.time}</span>
                  </div>
                  <CardTitle className="text-lg hover:text-primary transition-colors cursor-pointer">
                    {news.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {news.description}
                  </CardDescription>
                  <Button variant="ghost" size="sm" className="mt-3 p-0 h-auto text-primary">
                    Читать далее <Icon name="ArrowRight" size={16} className="ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 p-8 economic-gradient rounded-2xl text-white">
            <div className="text-center">
              <h4 className="text-2xl font-bold mb-4">💡 А вы знали?</h4>
              <p className="text-lg opacity-90 mb-6">
                Среднестатистическая российская семья тратит 30% дохода на еду, 
                25% на жильё и коммунальные услуги, а 15% откладывает
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <img 
                  src="/img/5a6bc4c3-a32d-41f6-9639-761d826f8c29.jpg" 
                  alt="People and economics" 
                  className="w-full h-32 object-cover rounded-lg"
                />
                <img 
                  src="/img/3daffeb8-f4a1-4d3b-ac71-96a51e76d45d.jpg" 
                  alt="Finance tools" 
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tutorials Section */}
      <section id="tutorials" className="py-16 bg-gray-50 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Обучающие материалы</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Простые уроки о том, как работает экономика в повседневной жизни
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tutorials.map((tutorial, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 animate-fade-in bg-white">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name={tutorial.icon as any} size={24} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <Badge variant="outline" className="mb-1">
                        {tutorial.level}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{tutorial.title}</CardTitle>
                  <CardDescription>{tutorial.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Прогресс</span>
                      <span className="font-medium">{tutorial.progress}%</span>
                    </div>
                    <Progress value={tutorial.progress} className="w-full" />
                    
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center text-sm text-gray-500">
                        <Icon name="Clock" size={16} className="mr-1" />
                        {tutorial.duration}
                      </div>
                      <Button size="sm" variant={tutorial.progress > 0 ? "default" : "outline"}>
                        {tutorial.progress > 0 ? "Продолжить" : "Начать"}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section id="games" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Экономические игры</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Закрепите знания с помощью интерактивных игр и викторин
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-200">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl flex items-center justify-center">
                  <Icon name="Trophy" size={28} className="mr-2 text-yellow-500" />
                  Викторина по микроэкономике
                </CardTitle>
                <CardDescription className="text-lg">
                  Проверьте свои знания и заработайте баллы!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-lg px-3 py-1">
                      Счёт: {gameScore} баллов
                    </Badge>
                    <Badge variant="outline" className="text-lg px-3 py-1">
                      Вопрос {currentQuestion + 1} из {questions.length}
                    </Badge>
                  </div>

                  {currentQuestion < questions.length && (
                    <div className="space-y-6">
                      <div className="p-6 bg-white rounded-lg border">
                        <h4 className="text-xl font-semibold mb-4">
                          {questions[currentQuestion].question}
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {questions[currentQuestion].answers.map((answer, index) => (
                            <Button
                              key={index}
                              variant={
                                selectedAnswer === index
                                  ? index === questions[currentQuestion].correct
                                    ? "default"
                                    : "destructive"
                                  : "outline"
                              }
                              className={`text-left justify-start h-auto py-3 px-4 ${
                                selectedAnswer !== null && index === questions[currentQuestion].correct
                                  ? "bg-green-500 hover:bg-green-600 text-white"
                                  : ""
                              }`}
                              onClick={() => handleAnswerSelect(index)}
                              disabled={selectedAnswer !== null}
                            >
                              {answer}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {currentQuestion >= questions.length && (
                    <div className="text-center p-8 bg-white rounded-lg">
                      <Icon name="PartyPopper" size={48} className="mx-auto mb-4 text-yellow-500" />
                      <h4 className="text-2xl font-bold mb-2">Поздравляем!</h4>
                      <p className="text-lg text-gray-600 mb-4">
                        Вы набрали {gameScore} баллов из {questions.length * 10} возможных
                      </p>
                      <Button 
                        onClick={() => {
                          setCurrentQuestion(0);
                          setGameScore(0);
                          setSelectedAnswer(null);
                        }}
                      >
                        Играть снова
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 flex justify-center">
              <img 
                src="/img/a0a13657-6a2d-45e0-b7b4-05bf4b547b72.jpg" 
                alt="Economics learning game" 
                className="w-full max-w-lg h-48 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Economic Chart Section */}
      <section className="py-16 bg-gray-50 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Экономические показатели</h3>
            <p className="text-gray-600">Визуализация ключевых экономических данных</p>
          </div>

          <Tabs defaultValue="demand" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="demand">Спрос и предложение</TabsTrigger>
              <TabsTrigger value="inflation">Инфляция</TabsTrigger>
              <TabsTrigger value="gdp">ВВП</TabsTrigger>
            </TabsList>
            
            <TabsContent value="demand" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Кривая спроса и предложения</CardTitle>
                  <CardDescription>
                    Классическая модель взаимодействия спроса и предложения
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Icon name="TrendingUp" size={48} className="text-primary mx-auto mb-4" />
                      <p className="text-gray-600">Интерактивный график спроса и предложения</p>
                      <p className="text-sm text-gray-500 mt-2">Перетаскивайте точки для изменения параметров</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="inflation" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Динамика инфляции</CardTitle>
                  <CardDescription>
                    Изменение уровня цен за последние 12 месяцев
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gradient-to-r from-red-50 to-yellow-50 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Icon name="BarChart3" size={48} className="text-red-500 mx-auto mb-4" />
                      <p className="text-gray-600">График динамики инфляции</p>
                      <div className="flex items-center justify-center mt-4 space-x-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-red-500">5.8%</div>
                          <div className="text-sm text-gray-500">Текущий уровень</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-500">4.5%</div>
                          <div className="text-sm text-gray-500">Целевой</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="gdp" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Рост ВВП</CardTitle>
                  <CardDescription>
                    Квартальная динамика валового внутреннего продукта
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Icon name="LineChart" size={48} className="text-green-500 mx-auto mb-4" />
                      <p className="text-gray-600">График роста ВВП по кварталам</p>
                      <div className="grid grid-cols-4 gap-4 mt-4">
                        <div className="text-center">
                          <div className="text-lg font-bold text-green-500">+2.1%</div>
                          <div className="text-xs text-gray-500">Q1</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-green-500">+2.8%</div>
                          <div className="text-xs text-gray-500">Q2</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-green-600">+3.2%</div>
                          <div className="text-xs text-gray-500">Q3</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-gray-400">—</div>
                          <div className="text-xs text-gray-500">Q4</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Свяжитесь с нами</h3>
            <p className="text-gray-600 mb-8">
              Есть вопросы об изучении экономики? Мы готовы помочь!
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <h4 className="font-semibold mb-1">Email</h4>
                <p className="text-gray-600">info@econolearn.ru</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <Icon name="MessageSquare" size={24} className="text-secondary" />
                </div>
                <h4 className="font-semibold mb-1">Telegram</h4>
                <p className="text-gray-600">@econolearn_bot</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-500/10 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <Icon name="Users" size={24} className="text-yellow-600" />
                </div>
                <h4 className="font-semibold mb-1">Сообщество</h4>
                <p className="text-gray-600">Присоединяйтесь</p>
              </div>
            </div>
            
            <Button size="lg" className="animate-bounce-subtle">
              <Icon name="Send" size={20} className="mr-2" />
              Написать нам
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="GraduationCap" size={20} className="text-white" />
                </div>
                <h4 className="text-xl font-bold">EconoLearn</h4>
              </div>
              <p className="text-gray-400">
                Современная платформа для изучения микроэкономики
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Обучение</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#tutorials" className="hover:text-white transition-colors">Учебники</a></li>
                <li><a href="#games" className="hover:text-white transition-colors">Игры</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Тесты</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Информация</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#news" className="hover:text-white transition-colors">Новости</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Поддержка</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#contact" className="hover:text-white transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EconoLearn. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}