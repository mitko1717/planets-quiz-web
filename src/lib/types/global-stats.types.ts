export interface TopicStatsResponse {
  topicId: string;
  totalAttempts: number;
  correctAttempts: number;
  accuracy: number;
  name: string;
}

export interface GlobalStatsResponse {
  userId: string;
  totalAttempts: number;
  correctAttempts: number;
  accuracy: number;
  totalInsightPoints: number;
  bestStreakOverall: number;
  byTopic: TopicStatsResponse[];
}