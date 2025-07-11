import { useEffect } from 'react';

interface UseEditableSpansOptions {
  enabled?: boolean;
  onEdit?: (element: HTMLElement, newValue: string) => void;
  selector?: string;
}

export const useEditableSpans = ({ 
  enabled = true, 
  onEdit,
  selector = 'span'
}: UseEditableSpansOptions = {}) => {
  useEffect(() => {
    if (!enabled) return;

    const handleSpanClick = (e: Event) => {
      const target = e.target as HTMLElement;
      if (!target.matches(selector)) return;
      
      // Skip if already editing or if it's a UI component span
      if (target.querySelector('input') || 
          target.closest('[data-radix-collection-item]') ||
          target.closest('.lucide') ||
          target.hasAttribute('data-editing')) {
        return;
      }

      e.stopPropagation();
      makeSpanEditable(target);
    };

    const makeSpanEditable = (span: HTMLElement) => {
      const originalText = span.textContent || '';
      span.setAttribute('data-editing', 'true');
      
      const input = document.createElement('input');
      input.type = 'text';
      input.value = originalText;
      input.className = 'bg-transparent border border-primary/50 rounded px-1 outline-none focus:border-primary w-full';
      input.style.minWidth = '100px';
      
      const saveEdit = () => {
        const newValue = input.value;
        span.textContent = newValue;
        span.removeAttribute('data-editing');
        if (onEdit) {
          onEdit(span, newValue);
        }
      };

      const cancelEdit = () => {
        span.textContent = originalText;
        span.removeAttribute('data-editing');
      };

      input.addEventListener('blur', saveEdit);
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          saveEdit();
        } else if (e.key === 'Escape') {
          cancelEdit();
        }
      });

      span.textContent = '';
      span.appendChild(input);
      input.focus();
      input.select();
    };

    // Add visual indicators for editable spans
    const addHoverEffects = () => {
      const spans = document.querySelectorAll(selector);
      spans.forEach(span => {
        const element = span as HTMLElement;
        if (!element.closest('[data-radix-collection-item]') &&
            !element.closest('.lucide') &&
            !element.hasAttribute('data-editing')) {
          element.style.cursor = 'pointer';
          element.title = 'Click to edit';
          element.addEventListener('mouseenter', () => {
            if (!element.hasAttribute('data-editing')) {
              element.style.backgroundColor = 'hsl(var(--primary) / 0.1)';
              element.style.borderRadius = '4px';
              element.style.transition = 'all 0.2s';
            }
          });
          element.addEventListener('mouseleave', () => {
            if (!element.hasAttribute('data-editing')) {
              element.style.backgroundColor = '';
              element.style.borderRadius = '';
            }
          });
        }
      });
    };

    document.addEventListener('click', handleSpanClick);
    addHoverEffects();

    // Re-add hover effects when content changes
    const observer = new MutationObserver(() => {
      addHoverEffects();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('click', handleSpanClick);
      observer.disconnect();
    };
  }, [enabled, onEdit, selector]);
};