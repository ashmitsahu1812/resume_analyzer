export interface Suggestion {
  original: string;
  improved: string;
}

export interface AnalysisResult {
  ats_score: number;
  content_score: number;
  format_score: number;
  skills_match: number;
  strengths: string[];
  weaknesses: string[];
  suggestions: Suggestion[];
  missing_keywords: string[];
  job_match_percentage: number;
  summary: string;
}

export const mockAnalysisData: AnalysisResult = {
  ats_score: 82,
  content_score: 75,
  format_score: 90,
  skills_match: 65,
  strengths: [
    "Strong use of action verbs in professional experience",
    "Clear and professional formatting",
    "Quantified achievements in current role",
    "Excellent technical stack alignment"
  ],
  weaknesses: [
    "Summary section is too generic and lacks personality",
    "Education section is missing relevant coursework",
    "Missing key skills found in standard job descriptions for this role",
    "Achievement quantification could be more consistent across older roles"
  ],
  suggestions: [
    {
      original: "Responsible for managing a team of developers and delivering projects on time.",
      improved: "Led a cross-functional team of 8 developers, delivering 12+ enterprise-scale projects 15% ahead of schedule using Agile methodologies."
    },
    {
      original: "Worked on improving website performance and user engagement.",
      improved: "Optimized frontend performance reducing LCP by 40%, resulting in a 22% increase in average user session duration."
    },
    {
      original: "Developed new features for the main application.",
      improved: "Architected and implemented 5+ core features for the flagship SaaS product, directly contributing to a $500k increase in Annual Recurring Revenue (ARR)."
    }
  ],
  missing_keywords: ["Cloud Architecture", "System Design", "Microservices", "Docker", "Kubernetes", "GraphQL"],
  job_match_percentage: 72,
  summary: "Your profile demonstrates a strong technical foundation in full-stack development. You align well with the core requirements, particularly in leadership and project delivery. To reach a 90%+ match, focus on adding specific cloud-native keywords mentioned in the target description."
};
