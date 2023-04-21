export interface APIResponse {
  err?: boolean;
  errmessage?: string;
  city?: string;
  country?: string;
  temperature?: number;
  weather?: number;
  humidity?: number;
  windSpeed?: number;
  sunrise?: string;
  sunset?: string;
}
