generate = function(gen){
  var app = this.app;
  var template = this.template;
  var path = "./";
  
  this.app.send(gen);
  this.app.add(this.template) || package this.app.send(gen) + this.app.send(this.template.add(gen));
  for(var i=0;i<this.template.length; i++){
    path.join(this.template.getElementById(this.app));
    this.app.call(this.template)&&this.app.join(gen);
  }
  /**
   * @alias generate.js
   * @author Moses Grant, @mosesag0813
   **/ 
  app.prototype.generation = function(){
    import ices from 'ices'
    import builder from 'builder'
    import comet from 'CometJS'
    
    path.send(this.app.join(this.template));
    builder.comet.on(app.log("Generating..."));
    app.add(comet.ices);
    if(path.send(this.app&&this.template&&ices) === true){
      this.app.add(process.argv);
      console.log("App successfully sent to" + path);
    } else {
      console.error("App was already sent to that path, cannot process app to " + path);
    }
  } 
}
generate('');
