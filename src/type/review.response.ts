import { ReviewType } from '../enum/review-type.enum';

export type ReviewResponse = {
  id: string;
  type: ReviewType;
  rate: number;
  comment: string;
  reviewed: boolean;
};
