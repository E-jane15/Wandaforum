import React, { useState, useEffect } from 'react';
import { 
  Server, 
  Shield, 
  Cloud, 
  Lock, 
  Code, 
  Network, 
  Cpu,
  Database,
  Layers,
  Braces,
  Globe,
  Workflow,
  Rocket,
  Gitlab,
  Triangle,
  Gem,
  Check,
  Stars
} from 'lucide-react';

// Confirmation Component
const DomainConfirmation = ({ selectedDomains, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-purple3 rounded-2xl p-10 max-w-xl w-full text-center relative shadow-2xl border border-purple/20 transform transition-all duration-300 ease-in-out scale-100 opacity-100">
        <div className="absolute top-4 right-4">
          <button 
            onClick={onClose}
            className="text-white hover:text-purple/70 transition-colors"
          >
            ✕
          </button>
        </div>
        <Stars className="mx-auto mb-6 text-yellow-400 animate-pulse" size={64} />
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple2 to-orange/80 bg-clip-text text-transparent">
          Welcome Aboard!
        </h2>
        <p className="text-white/80 mb-6">
          You've successfully selected the following tech domains:
        </p>
        <div className="grid grid-cols-3 gap-4 mb-8">
          {selectedDomains.map((domain) => (
            <div 
              key={domain.name} 
              className="bg-purple/20 rounded-lg p-3 flex items-center justify-center"
            >
              <domain.icon className="mr-2 text-purple" size={20} />
              <span className="text-white text-sm">{domain.name}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-center space-x-4">
          <button 
            onClick={onClose}
            className="bg-gradient-to-r from-purple to-orange text-white 
              font-bold py-3 px-8 rounded-xl transition duration-300 
              ease-in-out transform hover:scale-105 
              shadow-2xl hover:shadow-purple/50 flex items-center space-x-3 group"
          >
            <Check className="mr-2" />
            <span>Continue</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const DomainModal = ({ isOpen, onClose, onSubmit }) => {
  const [selectedDomains, setSelectedDomains] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Tech Domains remain the same as in the previous implementation
  const techDomains = [
    { 
      name: 'DevOps', 
      icon: Server, 
      description: 'Bridging development and operations for seamless software delivery' 
    },
    { 
      name: 'DevSecOps', 
      icon: Shield, 
      description: 'Integrating security practices throughout the development lifecycle' 
    },
    { 
      name: 'Kubernetes', 
      icon: Layers, 
      description: 'Container orchestration and management' 
    },
    { 
      name: 'Cloud Computing', 
      icon: Cloud, 
      description: 'Leveraging scalable and flexible cloud infrastructure' 
    },
    { 
      name: 'Cybersecurity', 
      icon: Lock, 
      description: 'Protecting systems, networks, and programs from digital attacks' 
    },
    { 
      name: 'Backend Development', 
      icon: Braces, 
      description: 'Building robust server-side applications and APIs' 
    },
    { 
      name: 'Network Engineering', 
      icon: Network, 
      description: 'Designing and managing computer networks' 
    },
    { 
      name: 'Frontend Development', 
      icon: Code, 
      description: 'Creating responsive and interactive user interfaces' 
    },
    { 
      name: 'Full Stack Development', 
      icon: Workflow, 
      description: 'Developing both client and server software' 
    },
    { 
      name: 'AI/Machine Learning', 
      icon: Cpu, 
      description: 'Developing intelligent systems and algorithms' 
    },
    { 
      name: 'Database Management', 
      icon: Database, 
      description: 'Designing and optimizing data storage solutions' 
    },
    { 
      name: 'Cloud Native', 
      icon: Rocket, 
      description: 'Building scalable applications for cloud environments' 
    },
    { 
      name: 'Site Reliability Engineering', 
      icon: Gitlab, 
      description: 'Ensuring system reliability and performance' 
    },
    { 
      name: 'Blockchain', 
      icon: Triangle, 
      description: 'Developing decentralized and secure technologies' 
    },
    { 
      name: 'Enterprise Architecture', 
      icon: Gem, 
      description: 'Designing comprehensive IT strategies and frameworks' 
    },
    { 
      name: 'Web3', 
      icon: Globe, 
      description: 'Exploring decentralized internet technologies' 
    }
  ];

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setSelectedDomains([]); 
      setShowConfirmation(false);
    } else {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleDomainSelect = (domain) => {
    setSelectedDomains(prev => {
      const isDomainAlreadySelected = prev.some(d => d.name === domain.name);
      
      if (isDomainAlreadySelected) {
        return prev.filter(d => d.name !== domain.name);
      } else {
        return [...prev, domain];
      }
    });
  };

  const handleGetStarted = () => {
    if (selectedDomains.length > 0) {
      onSubmit(selectedDomains);
      setShowConfirmation(true);
    } else {
      alert('Please select at least one tech domain');
    }
  };

  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };

  const handleConfirmationClose = () => {
    setShowConfirmation(false);
    onClose();
  };

  if (!isVisible) return null;

  // If confirmation is showing, render the confirmation component
  if (showConfirmation) {
    return <DomainConfirmation 
      selectedDomains={selectedDomains} 
      onClose={handleConfirmationClose} 
    />;
  }

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${
        isOpen 
          ? 'opacity-100' 
          : 'opacity-0 pointer-events-none'
      }`}
      onClick={onClose}
    >
      <div 
        className={`bg-purple3 text-white max-h-[95vh] my-auto overflow-y-auto scrollbar-none rounded-2xl shadow-2xl w-full max-w-4xl p-8 transform transition-all duration-300 ${
          isOpen 
            ? 'scale-100 opacity-100' 
            : 'scale-95 opacity-0'
        }`}
        onClick={handleModalContentClick}
      >
        <h2 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-purple2 to-orange/80 bg-clip-text text-transparent">
          Choose Your Tech Domains
        </h2>
        <p className="text-center text-gray-300 mb-8 max-w-xl mx-auto">
          Select multiple tech communities that align with your interests and expertise. 
          You can choose more than one domain to explore.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {techDomains.map((domain) => {
            const isSelected = selectedDomains.some(d => d.name === domain.name);
            
            return (
              <button
                key={domain.name}
                className={`
                  flex flex-col items-center justify-center 
                  p-4 rounded-lg border-2 transition-all duration-300 ease-in-out
                  relative overflow-hidden group
                  ${isSelected
                    ? 'bg-gradient-to-r from-purple to-orange border-transparent ring-4 ring-purple/50 scale-105' 
                    : 'border-purple/30 hover:border-purple/50 bg-purple/10 hover:bg-purple/20'
                  }
                `}
                onClick={() => handleDomainSelect(domain)}
              >
                {isSelected && (
                  <div className="absolute top-2 right-2 bg-white/20 rounded-full w-6 h-6 flex items-center justify-center">
                    <Check className="text-white" size={16} />
                  </div>
                )}

                <domain.icon 
                  className={`w-8 h-8 mb-2 transition-all duration-300
                    ${isSelected
                      ? 'text-white scale-110' 
                      : 'text-purple group-hover:text-purple-400'
                    }
                  `} 
                />
                <span className={`
                  font-semibold text-sm mb-1 transition-all duration-300
                  ${isSelected
                    ? 'text-white' 
                    : 'text-white/80 group-hover:text-white'
                  }
                `}>
                  {domain.name}
                </span>
                <p className={`
                  text-xs text-center opacity-70 transition-all duration-300
                  ${isSelected
                    ? 'text-white/80' 
                    : 'text-gray-400 group-hover:text-white/70'
                  }
                `}>
                  {domain.description}
                </p>
              </button>
            );
          })}
        </div>

        <div className="flex justify-center">
          <button 
            onClick={handleGetStarted}
            disabled={selectedDomains.length === 0}
            className={`
              w-full max-w-md py-3 rounded-lg text-white font-bold transition-all
              ${selectedDomains.length > 0
                ? 'bg-gradient-to-r from-purple to-orange hover:from-purple/90 hover:to-orange/90 cursor-pointer' 
                : 'bg-gray-600 cursor-not-allowed'
              }
            `}
          >
            {selectedDomains.length > 0
              ? `Get Started (${selectedDomains.length} Domain${selectedDomains.length > 1 ? 's' : ''} Selected)` 
              : 'Select Domains'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DomainModal;