import { Coffee, Code, Wifi, Clock, Users, Star } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

export function Welcome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 dark:from-gray-900 dark:via-amber-900/20 dark:to-orange-900/20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000000%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] dark:opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <div className="flex justify-center items-center gap-3 mb-6">
              <div className="relative">
                <Coffee className="h-16 w-16 text-amber-600 dark:text-amber-400" />
                <Code className="h-8 w-8 text-blue-600 dark:text-blue-400 absolute -top-2 -right-2 bg-white dark:bg-gray-800 rounded-full p-1" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                MPS Coffee
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4">
              Where Code Meets Coffee
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              The perfect blend of premium coffee and coding atmosphere. 
              Fuel your creativity, debug your day, and deploy your dreams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3">
                <Coffee className="mr-2 h-5 w-5" />
                Order Now
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3">
                <Users className="mr-2 h-5 w-5" />
                Join Community
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Developers Choose Us
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              More than just coffee - it's your coding sanctuary
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 rounded-full w-fit">
                    <feature.icon className="h-8 w-8 text-amber-600 dark:text-amber-400" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Developer-Inspired Menu
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Crafted for those who speak in code
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {menuItems.map((item, index) => (
              <Card key={index} className="group hover:scale-105 transition-transform duration-300 bg-white dark:bg-gray-800 border-0 shadow-lg">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                      {item.name}
                    </CardTitle>
                    <Badge variant="secondary" className="bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
                      ${item.price}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-4 w-4 ${i < item.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                    ))}
                    <span className="text-sm text-gray-500 ml-1">({item.reviews})</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Code & Caffeinate?
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Join thousands of developers who've made MPS Coffee their second home
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-3">
              <Clock className="mr-2 h-5 w-5" />
              View Hours
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-amber-600 px-8 py-3">
              <Wifi className="mr-2 h-5 w-5" />
              Check WiFi Status
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    icon: Wifi,
    title: "High-Speed WiFi",
    description: "Blazing fast internet perfect for video calls, deployments, and streaming tutorials. No more buffering during your coding sessions."
  },
  {
    icon: Code,
    title: "Coding-Friendly Environment",
    description: "Quiet zones, plenty of power outlets, and ergonomic seating designed for long coding sessions. Your productivity sanctuary."
  },
  {
    icon: Users,
    title: "Developer Community",
    description: "Connect with fellow developers, join coding meetups, and collaborate on projects. Network while you caffeinate."
  }
];

const menuItems = [
  {
    name: "The Debugger",
    price: "4.50",
    rating: 5,
    reviews: 127,
    description: "Double shot espresso that fixes all your bugs. Strong enough to keep you coding through the night."
  },
  {
    name: "Async Await",
    price: "5.25",
    rating: 5,
    reviews: 89,
    description: "Smooth cold brew that processes in the background. Perfect for those long compilation waits."
  },
  {
    name: "Stack Overflow",
    price: "6.00",
    rating: 4,
    reviews: 156,
    description: "Towering frappuccino with layers of flavor. As complex as your favorite algorithm."
  },
  {
    name: "Git Commit",
    price: "3.75",
    rating: 5,
    reviews: 203,
    description: "Simple, reliable americano. Like a clean commit - straightforward and dependable."
  }
];
