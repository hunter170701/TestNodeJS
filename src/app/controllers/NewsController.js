class NewsController {
  // TODO: [GET] /
  index(req, res) {
    res.render('news');
  }

  // TODO: [GET] /:slug
  show(req, res) {
    res.send('News Details');
  }
}

module.exports = new NewsController();
