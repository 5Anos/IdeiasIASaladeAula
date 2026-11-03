import React from 'react';
import { CheckCircle2, Sparkles } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-slate-900 text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-slate-700 animate-in slide-in-from-bottom-5 fade-in duration-200"
    >
      <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
      </div>
      <div>
        <p className="text-xs sm:text-sm font-semibold">{message}</p>
        <p className="text-[11px] text-slate-400">Pronto a colar na ferramenta de IA</p>
      </div>
      <button
        onClick={onClose}
        className="ml-2 text-slate-400 hover:text-white p-1 text-xs"
        aria-label="Fechar notificação"
      >
        ✕
      </button>
    </div>
  );
};
