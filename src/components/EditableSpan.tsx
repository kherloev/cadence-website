import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface EditableSpanProps {
  children: React.ReactNode;
  onSave?: (newValue: string) => void;
  className?: string;
  placeholder?: string;
}

export const EditableSpan = ({ 
  children, 
  onSave, 
  className = "", 
  placeholder = "Click to edit..." 
}: EditableSpanProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(typeof children === 'string' ? children : '');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  const handleClick = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    if (onSave && value !== children) {
      onSave(value);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      setValue(typeof children === 'string' ? children : '');
      setIsEditing(false);
    }
  };

  const handleBlur = () => {
    handleSave();
  };

  if (isEditing) {
    return (
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        className={cn(
          "bg-transparent border border-primary/50 rounded px-1 outline-none focus:border-primary",
          className
        )}
        placeholder={placeholder}
      />
    );
  }

  return (
    <span
      onClick={handleClick}
      className={cn(
        "cursor-pointer hover:bg-primary/10 hover:rounded transition-colors duration-200 inline-block px-1 -mx-1",
        className
      )}
      title="Click to edit"
    >
      {children}
    </span>
  );
};