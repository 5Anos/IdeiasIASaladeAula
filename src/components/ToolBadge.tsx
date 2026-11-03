import React, { useState } from 'react';
import { getTool } from '../data/tools';
import { ExternalLink } from 'lucide-react';

interface ToolBadgeProps {
  toolKey: string;
  size?: 'sm' | 'md' | 'lg';
  showDescription?: boolean;
}

export const ToolBadge: React.FC<ToolBadgeProps> = ({
  toolKey,
  size = 'md',
  showDescription = false
}) => {
  const tool = getTool(toolKey);
  const [imageError, setImageError] = useState(false);

  if (!tool) {
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200">
        {toolKey}
      </span>
    );
  }

  const sizeClasses = {
    sm: 'text-xs px-2.5 py-1 gap-1.5 rounded-lg',
    md: 'text-xs sm:text-sm px-3.5 py-1.5 gap-2 rounded-xl',
    lg: 'text-sm sm:text-base px-4 py-2.5 gap-2.5 rounded-2xl'
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  return (
    <a
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-between border transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 cursor-pointer ${tool.badgeBg} ${sizeClasses[size]}`}
      title={`${tool.name}: ${tool.description} (clique para abrir o site oficial: ${tool.url})`}
      aria-label={`Abrir ${tool.name} em novo separador`}
    >
      <div className="flex items-center gap-2">
        <span className={`shrink-0 flex items-center justify-center transition-transform group-hover:scale-110 ${iconSizes[size]}`}>
          {!imageError ? (
            <img
              src={tool.logoUrl}
              alt={`Logótipo ${tool.name}`}
              className="w-full h-full object-contain rounded-md shadow-2xs"
              loading="lazy"
              onError={() => setImageError(true)}
            />
          ) : (
            <span
              className="w-full h-full flex items-center justify-center"
              dangerouslySetInnerHTML={{ __html: tool.svgIcon }}
            />
          )}
        </span>
        <span className="font-semibold tracking-tight">{tool.name}</span>
      </div>
      <ExternalLink className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity ml-1 shrink-0" />
      {showDescription && (
        <span className="sr-only">{tool.description}</span>
      )}
    </a>
  );
};
