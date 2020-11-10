import { postFetch, updateFetch } from './fetch';

export default class MilestoneService {
  constructor() {}

  async createMilestone(url, data) {
    const res = await postFetch(url, data);
  }

  async updateMilestone(url, data) {
    const res = await updateFetch(url, data);
  }
}
