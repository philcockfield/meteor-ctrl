Package.describe({
  summary: 'Logical UI-control abstraction around blaze'
});



Package.on_use(function (api) {
  api.use('http', ['client', 'server']);
  api.use(['templating', 'ui', 'spacebars'], 'client');
  api.use('coffeescript');
  api.export('Ctrl');

  // Generated with: github.com/philcockfield/meteor-package-loader
  api.add_files('client/control/tmpl.html', 'client');
  api.add_files('client/api.coffee', 'client');
  api.add_files('client/control/definition.coffee', 'client');
  api.add_files('client/control/instance.coffee', 'client');
  api.add_files('client/control/tmpl.coffee', 'client');

});



Package.on_test(function (api) {
  api.use(['munit', 'coffeescript', 'underscore-string-latest']);
  api.use(['templating', 'ui', 'spacebars', 'stylus'], 'client');
  api.use('ctrl');

  // Generated with: github.com/philcockfield/meteor-package-loader
  api.add_files('tests/shared/ns.js', ['client', 'server']);
  api.add_files('tests/shared/helpers.coffee', ['client', 'server']);
  api.add_files('tests/client/ctrl/foo.html', 'client');
  api.add_files('tests/client/ctrl/foo.coffee', 'client');
  api.add_files('tests/client/ctrl/foo.styl', 'client');
  api.add_files('tests/client/example.coffee', 'client');

});

