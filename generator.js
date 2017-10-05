$(function() {
  Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)]
  }

  var problems, fields, audiences

  function generateIdea() {
    problems  = stringToArray($("#problems"))
    fields    = stringToArray($("#fields"))
    audiences = stringToArray($("#audiences"))

    $('#result').text([
      problems.randomElement(),
      fields.randomElement(),
      audiences.randomElement()
    ].join(' '))
  }

  function stringToArray(element) {
    return element.val().replace(/\n/g, ',').split(',')
  }

  $('#button').on('click', function () {
    generateIdea()
  })
})
