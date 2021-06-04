const Course = require('../../app/models/Course');
const { multipleMongooseToObject } = require('../../util/mongooseToObject');
class SiteController {
  // TODO: [GET] /
  index(req, res) {
    Course.find({})
      .then((courses) => {
        res.render('home', {
          courses: multipleMongooseToObject(courses),
        });
      })

      .catch((err) =>
        res.status(500).json({ err: 'Error to connect to mongoDB' }),
      );
  }

  // TODO: [GET] /search
  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController();
