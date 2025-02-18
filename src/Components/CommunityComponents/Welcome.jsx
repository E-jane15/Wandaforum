"use client";

import {
  Users,
  Shield,
  Cloud,
  Laptop,
  Code,
  Brain,
  Database,
  ChevronRight,
  Award,
  Zap,
  Globe,
  BookOpen,
  Rocket,
  Star
} from "lucide-react";
import Navbar from "../Navbar/Navbar";
import DomainModal from "../CommunityComponents/DomainModal";
import { useState, useCallback, useMemo } from 'react';

export default function WelcomeSection({ onGetStarted }) {
  const features = useMemo(() => [
    {
      icon: Users,
      title: "Precision Networking",
      description: "AI-driven matching algorithm connects you with the most relevant professionals and potential collaborators.",
      color: "text-blue-400",
      gradient: "from-blue-500 to-blue-700"
    },
    {
      icon: Code,
      title: "Collaborative Platform",
      description: "Advanced code sharing, real-time collaboration tools, and integrated development environments.",
      color: "text-green-400",
      gradient: "from-green-500 to-green-700"
    },
    {
      icon: Brain,
      title: "Adaptive Learning",
      description: "Personalized learning paths powered by machine learning, adapting to your skill progression.",
      color: "text-purple-400",
      gradient: "from-purple-500 to-purple-700"
    },
    {
      icon: Award,
      title: "Verified Credentials",
      description: "Blockchain-secured skill verification, comprehensive digital portfolios, and micro-credentials.",
      color: "text-yellow-400",
      gradient: "from-yellow-500 to-yellow-700"
    },
    {
      icon: Rocket,
      title: "Career Acceleration",
      description: "Strategic career mapping, predictive job market insights, and direct recruitment channels.",
      color: "text-orange-400",
      gradient: "from-orange-500 to-orange-700"
    },
    {
      icon: Globe,
      title: "Global Ecosystem",
      description: "Real-time tech trend analytics, cross-continental knowledge exchanges, and industry forecasting.",
      color: "text-teal-400",
      gradient: "from-teal-500 to-teal-700"
    }
  ], []);

  const stats = useMemo(() => [
    { 
      number: "50K+", 
      label: "Active Members", 
      icon: Users,
      description: "Rapidly growing community of tech innovators"
    },
    { 
      number: "120+", 
      label: "Tech Domains", 
      icon: Database,
      description: "Comprehensive coverage across emerging technologies"
    },
    { 
      number: "500+", 
      label: "Monthly Events", 
      icon: Zap,
      description: "Continuous learning and networking opportunities"
    }
  ], []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGetStartedClick = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleModalClose = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const handleDomainSubmit = useCallback((selectedDomains) => {
    console.log('Selected Domains:', selectedDomains);
    onGetStarted?.(selectedDomains);
  }, [onGetStarted]);

  return (
    <div className="bg-dark min-h-screen text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="mb-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl bg-gradient-to-r from-purple2 to-orange/80 bg-clip-text text-transparent font-extrabold mb-6 leading-tight">
              Welcome to the Community
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              An intelligent, interconnected platform designed to transform your professional journey through advanced networking, collaborative learning, and strategic career development.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={handleGetStartedClick}
                className="bg-gradient-to-r from-purple to-orange text-white 
                  font-bold py-4 px-8 rounded-xl transition duration-300 
                  ease-in-out transform hover:scale-105 
                  shadow-2xl hover:shadow-purple/50 flex items-center space-x-3 group"
                aria-label="Get Started"
              >
                <Rocket className="mr-2" />
                <span>Get Started</span>
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                className="border border-purple/50 text-white 
                  hover:bg-purple/10 font-bold py-4 px-8 rounded-xl 
                  transition duration-300 ease-in-out flex items-center space-x-3 group"
                aria-label="Explore Features"
              >
                <BookOpen className="text-purple" />
                <span>Explore Features</span>
              </button>
            </div>
          </div>
          <div className="hidden md:flex justify-center relative">
            <div className="absolute top-0 right-0 w-72 h-72 bg-purple/20 rounded-full blur-3xl"></div>
            <div className="z-10 bg-purple3 p-6 rounded-2xl shadow-2xl w-full">
              <div className="flex justify-between mb-4">
                {stats.map((stat, index) => {
                  const StatIcon = stat.icon;
                  return (
                    <div key={index} className="text-center group">
                      <div className="flex items-center justify-center mb-2">
                        <StatIcon className="mr-2 text-purple group-hover:rotate-6 transition-transform" />
                        <div className="text-3xl font-bold text-white">
                          {stat.number}
                        </div>
                      </div>
                      <div className="text-gray-400 text-sm">
                        {stat.label}
                      </div>
                      <div className="text-xs text-gray-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        {stat.description}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${feature.gradient} p-6 rounded-xl 
                shadow-md hover:shadow-xl transition duration-300 
                transform hover:-translate-y-2`}
            >
              <feature.icon className={`w-12 h-12 ${feature.color} mb-4`} />
              <h3 className="text-xl font-bold mb-2 text-white">
                {feature.title}
              </h3>
              <p className="text-white/80">{feature.description}</p>
            </div>
          ))}
        </div>

        <DomainModal 
          isOpen={isModalOpen} 
          onClose={handleModalClose}
          onSubmit={handleDomainSubmit} 
        />
      </div>
    </div>
  );
}