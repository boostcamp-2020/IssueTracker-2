import { postFetch, updateFetch } from './fetch';

export default class MilestoneService {
  constructor() {}

  async createMilestone() {
    const res = await postFetch();
  }

  async updateMilestone() {
    const res = await updateFetch();
  }
}
