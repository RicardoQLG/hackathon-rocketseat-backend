import Mentor from '../models/Mentor';

class MentorController {
  async store(req, res) {
    const mentor = await Mentor.create(req.body);
    return res.json(mentor);
  }
}

export default new MentorController();
