// JavaScript Document


THREE.Text = function (  ) {
  
  // var scope = this;
  
  THREE.Geometry.call(this);
  document.getElementById('info').innerHTML="got here: ";
  
  
  this.x = document.createElement( "canvas" );
  //this = document.createElement( "canvas" );
  
	this.xc = this.x.getContext("2d");
	//this.xc = this.getContext("2d");
	
	this.x.width = this.x.height = 150;
	// this.width = this.height = 150;
	
	this.xc.fillStyle = "#000";
	this.xc.font = "50pt arial bold";
	this.xc.fillText("Test", 10, 100);
  
  // this.supr.update.call( this );
};

THREE.Text.prototype = new THREE.Geometry();
THREE.Text.prototype.constructor = THREE.Text;
// THREE.Text.prototype.supr = THREE.Text.prototype;