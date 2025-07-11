import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "How does the AI performance review feature work?",
      answer: "Cadence analyzes your tracked progress, skill developments, achievements, and reflection notes to generate draft performance reviews, 1:1 talking points, and career conversation materials. You maintain full control and can edit everything before use."
    },
    {
      question: "Is my career data private and secure?",
      answer: "Absolutely. All your data is encrypted and private to you. We never share career information with employers or third parties. You can export all your data at any time in JSON or Markdown format."
    },
    {
      question: "What's the difference between a quest and regular goal setting?",
      answer: "Quests are ambitious 3-year career objectives (like 'VP of Product in Fintech') broken down into actionable milestones. Unlike static goals, quests evolve with you and integrate with skill tracking and reflection to create a complete development system."
    },
    {
      question: "Can I use Cadence if I'm not a product manager?",
      answer: "Yes! While designed with PMs in mind, Cadence works for any knowledge worker focused on systematic career development—designers, engineers, marketers, consultants, and other professionals building their careers strategically."
    },
    {
      question: "How much time does weekly reflection take?",
      answer: "Most users spend 10-15 minutes per week. Our guided prompts and smart suggestions make reflection efficient and actionable, not a burden."
    },
    {
      question: "When will Cadence be available and what will it cost?",
      answer: "We're currently in private beta with select product managers. Join our waitlist for early access. Pricing will be announced closer to public launch, with special rates for founding members."
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-6">
            Frequently asked questions
          </h2>
          <p className="text-xl text-muted-foreground font-sans">
            Everything you need to know about Cadence
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-card border rounded-xl px-6">
              <AccordionTrigger className="font-mono font-semibold text-left hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="font-sans text-muted-foreground leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground font-sans mb-4">
            Still have questions?
          </p>
          <a 
            href="mailto:hello@cadence.career" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary-glow transition-colors font-mono font-semibold"
          >
            <span>Get in touch</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};