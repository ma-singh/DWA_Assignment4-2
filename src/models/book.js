const db = require('./database')

exports.retrieveAll = (onSuccess, onError) => {
  db.Book.findAll({})
    .then(onSuccess)
    .error(onError)
}

exports.retrieveById = (book_id, onSuccess, onError) => {
  db.Book.find({where: { book_id: book_id }})
  .then(onSuccess)
  .error(onError)
}

exports.removeById = (book_id, onSuccess, onError) => {
  db.Book.destroy({ where: { book_id: book_id }})
  .then(onSuccess)
  .error(onError)
}

exports.create = (information, onSuccess, onError) => {
  db.Book.create(information)
  .then(onSuccess)
  .error(onError)
}

exports.update = (information, target, onSuccess, onError) => {
  db.Book.update(information, target)
  .then(onSuccess)
  .error(onError);
}

exports.findMatches = (query, onSuccess, onError) => {
  db.Book.findAll(query)
  .then(onSuccess)
  .error(onError)
}

exports.sanitizeInput = (input) => {
  // special characters and what to replace them with
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  // return input with "dangerous" characters replaced
  return input.replace(/[&<>"']/g, function(m) { return map[m]; });
}
