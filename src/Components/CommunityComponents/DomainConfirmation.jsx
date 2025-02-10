import { Check } from "react-feather";

const DomainConfirmation = ({ selectedDomains, onClose, onSubmit }) => {
  const handleContinue = () => {
    onSubmit(); // Trigger the onSubmit function passed from the parent
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-8 w-96">
        <h2 className="text-xl font-bold mb-4">Domain Confirmation</h2>
        <p className="mb-6">
          You have selected the following domains:
          <ul>
            {selectedDomains.map((domain) => (
              <li key={domain.name}>{domain.name}</li>
            ))}
          </ul>
        </p>
        <button
          onClick={handleContinue}
          className="bg-gradient-to-r from-purple to-orange text-white 
            font-bold py-3 px-8 rounded-xl transition duration-300 
            ease-in-out transform hover:scale-105 
            shadow-2xl hover:shadow-purple/50 flex items-center space-x-3 group"
        >
          <Check className="mr-2" />
          <span>Continue to Community</span>
        </button>
      </div>
    </div>
  );
};

export default DomainConfirmation;