import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "How does the AI performance review generation work?",
      answer: "Cadence analyzes your tracked achievements, skill development, and reflection data to generate professional-grade performance reviews, promotion narratives, and 1:1 talking points. All outputs are fully editable and maintain your authentic voice while providing comprehensive evidence backing."
    },
    {
      question: "What data security and privacy measures are in place?",
      answer: "We never share career information with employers or third parties. Cadence uses Anthropic's LLM models to ensure privacy of data. Enterprise-grade security with end-to-end encryption, GDPR compliance, and professional data handling standards. You own all your data and can export everything in multiple formats."
    },
    {
      question: "How does career roadmapping differ from regular goal setting?",
      answer: "Our roadmapping applies product management frameworks to career planning. Create strategic 3-year objectives with milestone dependencies, skill prerequisites, and success metrics. Unlike static goals, roadmaps evolve with market changes and integrate with performance cycles."
    },
    {
      question: "Is Cadence exclusively for product managers?",
      answer: "While purpose-built for PMs, Cadence serves any professional applying systematic thinking to career development—design leaders, engineering managers, strategy consultants, and other knowledge workers focused on structured advancement."
    },
    {
      question: "What's the time investment for maintaining my career data?",
      answer: "10-15 minutes weekly for structured reflection, similar to product retrospectives. PM-specific prompts and smart suggestions ensure efficiency. Many users find this replaces scattered note-taking with systematic progress tracking."
    },
    {
      question: "When will Cadence launch and what's the investment?",
      answer: "Currently in private beta with senior product managers at leading tech companies. Pricing will reflect the professional-grade nature of the platform, with founding member benefits for early adopters. Join the waitlist for priority access."
    },
    {
      question: "Who is making Cadence?",
      answer: "Cadence is the brainchild of me, Kasper Herløv. I am a product manager with several 180s in my career. Cadence is my try to do what general note apps never did for me. I sincerely hope I will meet fellow peeps who can turn Cadence into a true amplifier for product people."
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
                {faq.question === "Who is making Cadence?" ? (
                  <span>
                    Cadence is the brainchild of me,{" "}
                    <a 
                      href="https://www.linkedin.com/in/kasperherloev/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-glow transition-colors underline"
                    >
                      Kasper Herløv
                    </a>
                    . I am a product manager with several 180s in my career. Cadence is my try to do what general note apps never did for me. I sincerely hope I will meet fellow peeps who can turn Cadence into a true amplifier for product people.
                  </span>
                ) : (
                  faq.answer
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground font-sans mb-4">
            Still have questions?
          </p>
          <a 
            href="mailto:hello.cadence.app@gmail.com" 
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