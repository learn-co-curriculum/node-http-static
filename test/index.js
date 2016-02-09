var expect = require('chai').expect,
  cp = require('child_process'),
  superagent = require('superagent'),
  fs = require('fs'),
  path = require('path')

var child


before(function (done) {
    child = cp.exec('node server.js',
    function (error, stdout, stderr) {
      expect(stderr).to.equal('')
      if (error !== null) {
        console.log('exec error: ' + error)
      }

    })
    setTimeout(function(){
      done()
    }, 400)
})

describe('server', function () {
  it('must respond 404 for README-FAKE.md', function(done){
    superagent
      .get('http://localhost:3000/README-FAKE.md')
      .end(function(error, response){
        expect(response.res.text).to.equal('404 Not Found\n')
        expect(response.res.statusCode).to.equal(404)
        done()
      })
  })
})


describe('server', function () {
  it('must respond 200 for README.md', function(done){
    var readme = fs.readFileSync(path.join(__dirname, '..', 'README.md'), {encoding: 'utf-8'})
    superagent
      .get('http://localhost:3000/README.md')
      .end(function(error, response){
        expect(response.res.text).to.equal(readme)
        expect(response.res.statusCode).to.equal(200)
        done()
      })
  })
})

after(function(){
  if (typeof child != 'undefined' && child && !child.killed) {
    var killResult = child.kill()
    expect(killResult).to.be.true
    expect(child.killed).to.be.true
  }
})
