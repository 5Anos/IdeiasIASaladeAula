import React from 'react';
import {
  X,
  ShieldAlert,
  Scale,
  Users,
  Compass,
  FileCheck2,
  CheckCircle2,
  LaptopMinimal
} from 'lucide-react';

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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-900/60 backdrop-blur-xs animate-in fade-in"
    >
      <div className="bg-white rounded-3xl max-w-3xl w-full p-5 sm:p-7 shadow-2xl border border-slate-200 relative max-h-[92vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center text-2xl shadow-2xs shrink-0">
              🎓
            </div>
            <div>
              <h2 id="teacher-guide-title" className="text-xl sm:text-2xl font-bold font-heading text-slate-900 leading-tight">
                INFORMAÇÃO
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Princípios curriculares, enquadramento ético-legal e orientações didáticas para a sala de aula
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Fechar informação"
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors shrink-0 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto pr-1 py-4 space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          {/* Card 1: Proteção de Dados e Idades Mínimas */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#f0f6ff] border border-blue-200/80 shadow-2xs">
            <div className="flex items-center gap-2.5 text-blue-900 font-bold font-heading text-sm sm:text-base mb-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0">
                <ShieldAlert className="w-4 h-4" />
              </div>
              <h3>1. Proteção de Dados de Menores e Conformidade Institucional</h3>
            </div>
            <p className="text-slate-700">
              A legislação europeia e nacional (RGPD e orientações da CNPD) exige cuidados estritos com dados de menores. <strong>Nenhuma ferramenta externa (incluindo MagicSchool, Mizou ou Duck.ai) dispensa a consulta prévia dos respetivos Termos de Utilização, políticas de privacidade, idades mínimas e regulamentos do Agrupamento de Escolas.</strong>
            </p>
            <ul className="mt-2.5 space-y-1.5 text-xs text-slate-600">
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>Mediação docente como salvaguarda:</strong> Nos 1.º e 2.º Ciclos, a utilização deve ser exclusivamente mediada pelo professor através de projeção central, evitando criação de contas por menores.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>Regra de ouro de privacidade:</strong> Nunca introduzir nomes reais, moradas, fotografias identificáveis de alunos, dados de saúde ou referências familiares em prompts ou ficheiros de entrada.</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Critérios de Escolha e Validação de Ferramentas */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#f5fbf7] border border-emerald-200/80 shadow-2xs">
            <div className="flex items-center gap-2.5 text-emerald-950 font-bold font-heading text-sm sm:text-base mb-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0">
                <Compass className="w-4 h-4" />
              </div>
              <h3>2. Critérios de Escolha e Teste Prévio de Ferramentas</h3>
            </div>
            <p className="text-slate-700">
              A volatilidade das ferramentas digitais exige verificação prévia pelo docente antes de cada aula. Privilegie soluções com:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2.5 text-xs text-slate-600">
              <div className="bg-white/80 p-2.5 rounded-xl border border-emerald-100">
                <strong>Gratuitidade real e transparente:</strong> Evite plataformas que solicitem cartões de crédito ou imponham bloqueios imediatos de créditos a meio da aula.
              </div>
              <div className="bg-white/80 p-2.5 rounded-xl border border-emerald-100">
                <strong>Ambiente seguro sem anúncios:</strong> Certifique-se de que a interface não apresenta publicidade agressiva ou conteúdos desadequados a contexto escolar.
              </div>
              <div className="bg-white/80 p-2.5 rounded-xl border border-emerald-100">
                <strong>Ausência de barreiras de rede:</strong> Teste na rede da escola (muitas redes educativas bloqueiam domínios de IA ou portas específicas).
              </div>
              <div className="bg-white/80 p-2.5 rounded-xl border border-emerald-100">
                <strong>Alinhamento curricular:</strong> A ferramenta deve servir a aprendizagem disciplinar e não transformar-se num mero entretenimento tecnológico.
              </div>
            </div>
          </div>

          {/* Card 3: Inclusão, Diferenciação e Alternativas Sem Dispositivos */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#faf5ff] border border-purple-200/80 shadow-2xs">
            <div className="flex items-center gap-2.5 text-purple-950 font-bold font-heading text-sm sm:text-base mb-2">
              <div className="w-8 h-8 rounded-lg bg-purple-600 text-white flex items-center justify-center shrink-0">
                <Users className="w-4 h-4" />
              </div>
              <h3>3. Inclusão, Diferenciação Pedagógica e Modo Desconectado</h3>
            </div>
            <p className="text-slate-700">
              A tecnologia deve nivelar oportunidades sem gerar dependência ou exclusão:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2.5 text-xs text-slate-600">
              <div className="bg-white/80 p-2.5 rounded-xl border border-purple-100 flex items-start gap-2">
                <LaptopMinimal className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Apoio a necessidades específicas:</strong> A IA pode auxiliar alunos com dificuldades na escrita através de leitura oral e estruturas de suporte, sem substituir o esforço cognitivo do aluno.
                </div>
              </div>
              <div className="bg-white/80 p-2.5 rounded-xl border border-purple-100 flex items-start gap-2">
                <FileCheck2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Garantia de alternativa offline:</strong> Todas as 20 atividades incluem uma modalidade sem dispositivos (computação desplugada, papéis de encenação ou materiais manipuláveis físicos).
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Integridade Académica, Autoria e Direitos de Autor */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#f4f7fb] border border-slate-200 shadow-2xs">
            <div className="flex items-center gap-2.5 text-slate-900 font-bold font-heading text-sm sm:text-base mb-2">
              <div className="w-8 h-8 rounded-lg bg-slate-700 text-white flex items-center justify-center shrink-0">
                <Scale className="w-4 h-4" />
              </div>
              <h3>4. Integridade Académica, Transparência de Autoria e Direitos de Imagem</h3>
            </div>
            <p className="text-slate-700">
              Promova desde cedo uma cultura explícita de honestidade intelectual e citação:
            </p>
            <ul className="mt-2.5 space-y-1.5 text-xs text-slate-600">
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-slate-700 shrink-0 mt-0.5" />
                <span><strong>Princípio da Coautoria Transparente:</strong> Os trabalhos devem indicar explicitamente: «Texto/ideia original de [Aluno], rascunho de contra-argumento apoiado por [Ferramenta de IA], versão final e revisão por [Aluno]».</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-slate-700 shrink-0 mt-0.5" />
                <span><strong>Direitos de autor e propriedade intelectual:</strong> Alertar os alunos para os cuidados ao carregar textos com copyright em chatbots e para as incertezas jurídicas associadas a imagens e músicas geradas automaticamente.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between shrink-0">
          <span className="text-[11px] text-slate-400">
            Enquadrado no Perfil dos Alunos à Saída da Escolaridade Obrigatória
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-blue-600 text-white font-semibold text-xs sm:text-sm hover:bg-blue-700 transition-colors shadow-2xs"
          >
            Compreendi, Voltar às Atividades
          </button>
        </div>
      </div>
    </div>
  );
};
