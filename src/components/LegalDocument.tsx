import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Skeleton } from "@/components/ui/skeleton";

interface LegalDocumentProps {
  type: "terms" | "privacy";
}

const sampleTermsContent = `# Terms of Service

**Last updated: [DATE]**

## 1. Acceptance of Terms

By accessing and using Cadence, you accept and agree to be bound by the terms and provision of this agreement.

## 2. Description of Service

Cadence is a [describe your service here].

## 3. User Responsibilities

- You are responsible for maintaining the confidentiality of your account
- You agree to provide accurate and complete information
- You will not use the service for any unlawful purpose

## 4. Privacy Policy

Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service.

## 5. Limitation of Liability

In no event shall Cadence be liable for any direct, indirect, incidental, special, or consequential damages.

## 6. Changes to Terms

We reserve the right to modify these terms at any time. We will notify users of any changes.

## 7. Contact Information

For questions about these Terms of Service, please contact us at legal@cadence.com.`;

const samplePrivacyContent = `# Privacy Policy

**Last updated: [DATE]**

## 1. Information We Collect

We collect information you provide directly to us, such as when you create an account, use our service, or contact us.

### Personal Information
- Name and email address
- Account credentials
- Profile information

### Usage Information
- How you interact with our service
- Features you use
- Time and frequency of use

## 2. How We Use Your Information

We use the information we collect to:
- Provide and maintain our service
- Process transactions
- Send you communications
- Improve our service

## 3. Information Sharing

We do not sell, trade, or otherwise transfer your personal information to third parties except as described in this policy.

## 4. Data Security

We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.

## 5. Your Rights

You have the right to:
- Access your personal information
- Correct inaccurate information
- Delete your account and data
- Data portability

## 6. Cookie Policy

We use cookies and similar technologies to enhance your experience and analyze usage patterns.

## 7. Changes to This Policy

We will notify you of any changes to this Privacy Policy by posting the new policy on this page.

## 8. Contact Us

If you have questions about this Privacy Policy, please contact us at privacy@cadence.com.`;

export const LegalDocument = ({ type }: LegalDocumentProps) => {
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading and set sample content
    // In a real app, you would fetch from your markdown files
    setTimeout(() => {
      setContent(type === "terms" ? sampleTermsContent : samplePrivacyContent);
      setLoading(false);
    }, 500);
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