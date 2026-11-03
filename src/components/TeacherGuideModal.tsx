import React from 'react';
import { X, ShieldCheck, Sparkles, BookCheck, Users, HelpCircle } from 'lucide-react';

interface TeacherGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TeacherGuideModal: React.FC<TeacherGuideModalProps> = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="teacher-guide-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in"
    >
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          aria-label="Fechar guia do professor"
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center text-2xl">
            🎓
          </div>
          <div>
            <h2 id="teacher-guide-title" className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
              Guia Pedagógico para o Professor
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Boas práticas e orientações para usar IA com segurança e sentido crítico em sala de aula
            </p>
          </div>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed pt-2">
          {/* Card 1: Proteção de Dados */}
          <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-blue-900 font-heading">
                1. Proteção de Dados e Idades Mínimas
              </h3>
              <p className="text-slate-600 mt-1">
                No 1.º e 2.º Ciclos, a interação com ferramentas deve ser <strong>mediada pelo professor</strong> (projetada no ecrã ou através de plataformas seguras como MagicSchool, Mizou ou Duck.ai), garantindo que os alunos nunca fornecem dados pessoais, moradas ou fotos reais.
              </p>
            </div>
          </div>

          {/* Card 2: Espírito Crítico */}
          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-100 flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-amber-900 font-heading">
                2. IA como Ponto de Partida, não de Chegada
              </h3>
              <p className="text-slate-600 mt-1">
                A IA atua como assistente de imaginação, parceira de brainstorming ou simulação. A verdadeira aprendizagem acontece na <strong>comparação crítica</strong>: o que a IA fez bem, onde falhou e como o raciocínio humano enriquece o resultado.
              </p>
            </div>
          </div>

          {/* Card 3: Metodologia e Passo a Passo */}
          <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100 flex items-start gap-3">
            <BookCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-emerald-900 font-heading">
                3. Metodologia em 4 Passos e Experimentação com a Turma
              </h3>
              <p className="text-slate-600 mt-1">
                Cada atividade está estruturada num passo a passo pedagógico (Exploração & Contexto, Experimentação com IA, Análise Crítica e Criação & Partilha). Guie os alunos a formular pedidos precisos e contextualizados nas ferramentas sugeridas, comparando resultados e desenvolvendo um produto final significativo.
              </p>
            </div>
          </div>

          {/* Card 4: Coautoria e Transparência */}
          <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-100 flex items-start gap-3">
            <Users className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-purple-900 font-heading">
                4. Cultura de Coautoria Ética ("Eu vs. IA")
              </h3>
              <p className="text-slate-600 mt-1">
                Incentive os alunos a identificar claramente o que foi gerado pela IA e qual foi o seu próprio contributo reflexivo, manual, analítico ou criativo.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-colors shadow-2xs"
          >
            Compreendi, Voltar às Atividades
          </button>
        </div>
      </div>
    </div>
  );
};
