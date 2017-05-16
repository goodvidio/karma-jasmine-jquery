var createPattern = function(path) {
  return {pattern: path, included: true, served: true, watched: false};
};

var initJasmine_jquery = function(files) {
  files.unshift(createPattern(__dirname + '/jasmine-jquery.js'));
};

initJasmine_jquery.$inject = ['config.files'];

module.exports = {
  'framework:jasmine-jquery': ['factory', initJasmine_jquery]
};
