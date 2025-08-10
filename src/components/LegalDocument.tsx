import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Skeleton } from "@/components/ui/skeleton";

interface LegalDocumentProps {
  type: "terms" | "privacy";
}

export const LegalDocument = ({ type }: LegalDocumentProps) => {
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const loadContent = async () => {
      try {
        setLoading(true);
        setError("");
        
        const fileName = type === "terms" ? "terms-of-service.md" : "privacy-policy.md";
        const response = await fetch(`/legal/${fileName}`);
        
        if (!response.ok) {
          throw new Error(`Failed to load ${type} document`);
        }
        
        const text = await response.text();
        
        // Replace all email references with generic "contact us" links
        const processedText = text
          .replace(/\[Contact us\]\(mailto:kasper\.herloev@gmail\.com\)/g, '[Contact us](mailto:contact@hellocadence.com)')
          .replace(/\[contacting us\]\(mailto:kasper\.herloev@gmail\.com\)/g, '[contacting us](mailto:contact@hellocadence.com)')
          .replace(/kasper\.herloev@gmail\.com/g, 'contact@hellocadence.com');
        
        setContent(processedText);
      } catch (err) {
        setError(`Unable to load ${type} document. Please try again later.`);
        console.error("Error loading legal document:", err);
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, [type]);

  if (loading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-6 w-1/2 mt-6" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">{error}</p>
      </div>
    );
  }

  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <ReactMarkdown
        components={{
          h1: ({ children }) => (
            <h1 className="text-3xl font-bold mb-6 text-foreground">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-xl font-medium mt-6 mb-3 text-foreground">{children}</h3>
          ),
          p: ({ children }) => (
            <p className="mb-4 text-muted-foreground leading-relaxed">{children}</p>
          ),
          ul: ({ children }) => (
            <ul className="list-disc pl-6 mb-4 space-y-2">{children}</ul>
          ),
          li: ({ children }) => (
            <li className="text-muted-foreground">{children}</li>
          ),
          strong: ({ children }) => (
            <strong className="font-semibold text-foreground">{children}</strong>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};