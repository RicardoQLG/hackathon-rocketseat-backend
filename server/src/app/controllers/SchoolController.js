import School from '../models/School';

class SchoolController {
  async index(req, res) {
    const where = [];

    if (req.query.name) {
      where.push({ name: RegExp(`.*${req.query.name}.*`, 'i') });
    }

    if (req.query.state) {
      where.push({ state: RegExp(`^${req.query.state}$`, 'i') });
    }

    if (req.query.city) {
      where.push({ city: RegExp(`^${req.query.city}$`, 'i') });
    }

    let params = null;

    if (where.length) {
      params = {
        $and: where,
      };
    }

    const schools = await School.find(params);

    return res.json(schools);
  }

  async store(req, res) {
    const school = await School.create(req.body);
    return res.json(school);
  }
}

export default new SchoolController();
