
import React, { useState } from 'react';
import { Alert } from '../types';

interface CreateJiraModalProps {
  alert: Alert;
  onClose: () => void;
}

const CreateJiraModal: React.FC<CreateJiraModalProps> = ({ alert, onClose }) => {
  const [summary, setSummary] = useState(alert.title);
  const [description, setDescription] = useState(`Full alert details:\n\n${JSON.stringify(alert.rawJson, null, 2)}`);

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity animate-fade-in" onClick={onClose}>
      <div 
        className="bg-dark-card border border-dark-border rounded-xl shadow-lg w-full max-w-2xl text-text-primary p-8 space-y-6 transform animate-slide-up"
        onClick={(e) => e.stopPropagation()}
        style={{
            background: 'radial-gradient(circle at top, rgba(0, 198, 255, 0.1), transparent), #121212',
        }}
      >
        <h2 className="text-2xl font-bold font-heading text-primary">Create Jira Issue</h2>
        
        <div className="grid grid-cols-2 gap-4">
            <div>
                <label className="text-sm font-medium text-text-secondary">Project</label>
                <select className="mt-1 block w-full bg-dark-bg border-dark-border rounded-md p-2 focus:ring-primary focus:border-primary">
                    <option>Security Operations (SOC)</option>
                    <option>IT Helpdesk (IT)</option>
                </select>
            </div>
             <div>
                <label className="text-sm font-medium text-text-secondary">Issue Type</label>
                <select className="mt-1 block w-full bg-dark-bg border-dark-border rounded-md p-2 focus:ring-primary focus:border-primary">
                    <option>Incident</option>
                    <option>Task</option>
                    <option>Bug</option>
                </select>
            </div>
        </div>
        
        <div>
            <label className="text-sm font-medium text-text-secondary">Summary</label>
            <input type="text" value={summary} onChange={(e) => setSummary(e.target.value)} className="mt-1 block w-full bg-dark-bg border-dark-border rounded-md p-2 focus:ring-primary focus:border-primary" />
        </div>

        <div>
            <label className="text-sm font-medium text-text-secondary">Description</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={5} className="mt-1 block w-full bg-dark-bg border-dark-border rounded-md p-2 font-mono text-xs focus:ring-primary focus:border-primary"></textarea>
        </div>

        <div className="grid grid-cols-2 gap-4">
            <div>
                <label className="text-sm font-medium text-text-secondary">Priority</label>
                <select defaultValue={alert.severity === 'Critical' || alert.severity === 'High' ? 'Highest' : 'Medium'} className="mt-1 block w-full bg-dark-bg border-dark-border rounded-md p-2 focus:ring-primary focus:border-primary">
                    <option>Highest</option>
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                </select>
            </div>
             <div>
                <label className="text-sm font-medium text-text-secondary">Labels</label>
                <input type="text" defaultValue={`${alert.source.toLowerCase()},security-alert`} className="mt-1 block w-full bg-dark-bg border-dark-border rounded-md p-2 focus:ring-primary focus:border-primary" placeholder="e.g. wazuh, phishing"/>
            </div>
        </div>

        <div className="flex justify-end space-x-4 pt-4">
            <button onClick={onClose} className="px-6 py-2 rounded-md text-text-secondary hover:bg-dark-border transition-colors">Cancel</button>
            <button onClick={onClose} className="px-6 py-2 rounded-md bg-gradient-to-r from-primary to-secondary text-white font-bold hover:shadow-glow-primary transition-all duration-300 transform hover:scale-105">
                Create & Link
            </button>
        </div>
      </div>
       <style>{`
          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slide-up {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
          .animate-slide-up { animation: slide-up 0.4s ease-out forwards; }
        `}</style>
    </div>
  );
};

export default CreateJiraModal;
