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
  ats_score: 0,
  content_score: 0,
  format_score: 0,
  skills_match: 0,
  strengths: ["Waiting for analysis..."],
  weaknesses: ["Waiting for analysis..."],
  suggestions: [],
  missing_keywords: [],
  job_match_percentage: 0,
  summary: "Please upload your resume to see your analysis."
};
