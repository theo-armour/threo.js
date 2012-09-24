
	document.body.style.backgroundColor = '#000';
	document.body.style.font = 'bold 12pt monospace';
	document.body.style.margin = '0';
	document.body.style.overflow = 'hidden';
	document.body.style.textAlign = 'center';

	// http://stackoverflow.com/questions/2961964/how-to-re-enable-the-context-menu-in-this-case
	document.superListener = document.addEventListener;
	document.addEventListener = function(type, listener, useCapture){
		if(type !== 'contextmenu') {
			document.superListener(type, listener, !!useCapture);
		}	
	};

	
	var sheet = document.createElement('style');
	document.body.appendChild(sheet);
	sheet.innerHTML = 'a {color: #fff;}';
	
	var info = document.createElement( 'div' );
	document.body.appendChild( info );
	info.style.top = '0px';
	info.style.color = '#fff';
	info.style.padding = '5px';
	info.style.position = 'absolute';
	info.style.width = '100%';
	info.innerHTML = '<a href="JavaScript:showSlide(\'slide1\')">Slide 1</a>' +
	' ~ <a href="JavaScript:showSlide(\'slide2\')">Slide 2</a>' +
	' ~ <a href="JavaScript:showSlide(\'slide3\')">Slide 3</a>' +
	' ~ <a href="JavaScript:showHome()">Home</a>' +
	' ~ <a href="JavaScript:noErase()">no Erase</a>';
	var audioElement = document.createElement('audio');

    var scene, camera, controls, stats, renderer;
    var texture, material, geometry, mesh;
	var meshes = [];
	var loader;
	loader = new THREE.JSONLoader();
	var clock = new THREE.Clock();
	var parent, child, previousChild;
	var delta, temp;
	var erase = true;
	var center;
	var test;
	
    init();
    animate();
	function callback() {}
	
    function init() {
        scene = new THREE.Scene();
		// scene.fog = new THREE.Fog( 0x222200, 1, 20);
		// scene.fog = new THREE.FogExp2( 0x000000, 0.02 );  // not work on meshnormalmaterial

        camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 10000 );
		camera.position.set( 50, 100, 200);
		
		controls = new THREE.TrackballControls( camera );
		controls.target.set( 50, 50, 0); 
		scene.add( camera );
	
		light = new THREE.AmbientLight( 0xffffff );
		scene.add( light );

		light = new THREE.DirectionalLight( 0xffffff );
		light.position.set( 100, 100, 100 ).normalize();
		scene.add( light );	

		light = new THREE.PointLight( 0xff0040, 2, 50 );
		light.position.set( -50, 50, 50);
		scene.add( light );	

		material = new THREE.MeshNormalMaterial( { wireframe: true } );
		geometry = new THREE.PlaneGeometry( 200, 200, 100, 100 );
		
		parent = new THREE.Object3D();
		
		mesh = new THREE.Mesh( geometry, material );
		mesh.position.set( 0, 0, 0);
		parent.add( mesh );
		
		home  = new THREE.Object3D();
		addText(home, 'Paris', -50, 55, -32, 50, 0xff0000, 0xaa0000);
		addText(home, 'in the', -40, 50, -30, 50, 0x00ff00, 0x00aa00);
		addText(home, 'the spring', -50, 30, -35, 50, 0x0000ff, 0x0000aa);
		scene.add( home );
		
		scene.add( parent );
		
		stats = new Stats();
		stats.domElement.style.position = 'absolute';
		stats.domElement.style.top = '0px';
		stats.domElement.style.zIndex = 100;
		document.body.appendChild( stats.domElement );		

        renderer = new THREE.WebGLRenderer( {clearColor: 0x000000, clearAlpha: 1, antialias: true } );
		// renderer.setClearColor( scene.fog.color, 1 );
        renderer.setSize( window.innerWidth, window.innerHeight );
		// renderer.setClearColorHex( 0x000000, 1 );
        document.body.appendChild( renderer.domElement );
		
		document.addEventListener( 'keydown', onKeyDown, false );
		document.addEventListener('DOMMouseScroll', onDocumentMouseWheel, false);
		document.addEventListener('mousewheel', onDocumentMouseWheel, false);
    }
	
    function animate() {
        requestAnimationFrame( animate );
        render();
		stats.update();
    }

    function render() {	

		callback();
		controls.update();
		// camera.lookAt( center );
		renderer.render( scene, camera );
    }
	
	function noErase() {
		if (erase) {
			erase = false;
		} else {
			erase = true;
		}
	}
	
	function showSlide(fileName) {
		var fname = fileName + '/' + fileName + '.js';
		previousChild = child;
		child  = new THREE.Object3D();
		
		var js = document.createElement('script');
		js.setAttribute('type', 'text/javascript');
		js.setAttribute('src', fname);
		document.body.appendChild(js);
		
		if (erase) { scene.remove(previousChild); }
	}
	
	function showHome() {
		camera.position.set(50, 50, 200);
		camera.up.set(0,1,0);
		controls.target.set( 50, 50, 0);
	}
	
	function onKeyDown ( event ) {
// http://www.webonweboff.com/tips/js/event_key_codes.aspx
		switch( event.keyCode ) {
			case 49: /*1*/	showSlide(1); break;
			case 50: /*2*/	showSlide(2); break;
			case 51: /*3*/	showSlide(3); break;
			case 72: /*h*/	showHome(); break;
			case 78: /*e*/	noErase(); break;
		}
	}
	
	function addText (asset, text, x, y, z, siz, col, amb) {	
		// material = new THREE.MeshPhongMaterial( { ambient: 0xff0000, color: 0x0000ff, specular: 0x0000ff, shininess: 50, shading: THREE.SmoothShading }  );
		material = new THREE.MeshPhongMaterial( { color: col, specular: 0xffffff, ambient: amb, shading: THREE.SmoothShading } );
		geometry = new THREE.TextGeometry( text, {
			size: siz,
			height: 15,
			font: "helvetiker",
			weight: "bold",
			bevelThickness: 2,
			bevelSize: 2,
			bevelEnabled: false
		});		
		mesh = new THREE.Mesh( geometry, material );
		mesh.position.set( x, y, z);
		asset.add( mesh );
	}
	
	function onDocumentMouseWheel(e) {
		var d = ( (typeof e.wheelDelta !== "undefined") ? (-e.wheelDelta) : e.detail );
		d = 1 * ( ( d > 0) ? 1 : -1 );

		var cPos = camera.position;
		if (isNaN(cPos.x) || isNaN(cPos.y) || isNaN(cPos.y)) {
		  return; }

		var r = cPos.x * cPos.x + cPos.y * cPos.y;
		var sqr = Math.sqrt(r);
		var sqrZ = Math.sqrt(cPos.z * cPos.z + r);

		var nx = cPos.x + ((r===0) ? 0 : (d * cPos.x / sqr));
		var ny = cPos.y + ((r===0) ? 0 : (d * cPos.y / sqr));
		var nz = cPos.z + ((sqrZ===0) ? 0 : (d * cPos.z / sqrZ));

		if (isNaN(nx) || isNaN(ny) || isNaN(nz)) {
		  return; }
		cPos.x = nx;
		cPos.y = ny;
		cPos.z = nz;     
	}