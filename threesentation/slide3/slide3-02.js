console.log('Slide 3');

/*
	js = document.createElement('script');
	js.setAttribute('type', 'x-shader/x-vertex');
	js.setAttribute('src', 'slide3/vertexshader.js');
	js.id = 'vertexshader';
	document.body.appendChild(js);

var js = new XMLHttpRequest();	
js.open("GET", "file://C:/2012-reference/code/demos/threesentation/slide3/vertexshader.js", true);
js.onreadystatechange = callback1;
js.send(null);

function callback1() {
	if (js.readyState == 4) {
		console.log('iiii',js);
		var vs = document.createElement('script');
		vs.setAttribute('type', 'x-shader/x-vertex');
		// vs.context = js;
		vs.innerHTML = js;
		vs.id = 'vertexshader';
		document.body.appendChild(vs);
	} else { 
		console.log('Didn\'t work'); 
	}
}
*/


	
	var sphere, uniforms, attributes;
	var noise = [];
	attributes = {
		displacement: {	type: 'f', value: [] }
	};

	uniforms = {
		amplitude: { type: "f", value: 1.0 },
		color:     { type: "c", value: new THREE.Color( 0xff2200 ) },
		texture:   { type: "t", value: 0, texture: THREE.ImageUtils.loadTexture( "slide3/water.jpg" ) },
	};

	uniforms.texture.texture.wrapS = uniforms.texture.texture.wrapT = THREE.RepeatWrapping;
	// var txt = "uniform float amplitude; attribute float displacement; varying vec3 vNormal; varying vec2 vUv;v oid main() {vNormal = normal; vUv = ( 0.5 + amplitude ) * uv + vec2( amplitude );vec3 newPosition = position + amplitude * normal * vec3( displacement );gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 ); }";

	
	
	/* solution came shaderutils... also ading inn a missing line helped... looks like it requires line endings
	var vertexShaderSourceString = [ 
	"uniform float amplitude;",
	"attribute float displacement;",
	"varying vec3 vNormal;",
	"varying vec2 vUv;",
	"void main() {",
		"vNormal = normal;",
		"vUv = ( 0.5 + amplitude ) * uv + vec2( amplitude );",
		"vec3 newPosition = position + amplitude * normal * vec3( displacement );",
		"gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );",
	"}"
	].join("\n")	
	*/
	var shaderMaterial = new THREE.ShaderMaterial( {
		uniforms: 		uniforms,
		attributes:     attributes,
		// vertexShader:   document.getElementById( 'vertexshader' ).textContent,
		vertexShader:   vertexShaderSourceString,
		// vertexShader:   txt,
		// vertexShader: 'attribute float displacement;varying vec3 vNormal;varying vec2 vUv;void main() {vNormal = normal;vUv = ( 0.5 + amplitude ) * uv + vec2( amplitude );vec3 newPosition = position + amplitude * normal * vec3( displacement );gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );}',
		fragmentShader: document.getElementById( 'fragmentshader' ).textContent
	});


	var radius = 300, segments = 128, rings = 64;
	var geometry = new THREE.SphereGeometry( radius, segments, rings );
	geometry.dynamic = true;

	sphere = new THREE.Mesh( geometry, shaderMaterial );
	sphere.position.set(700, 100, -700);

	var vertices = sphere.geometry.vertices;
	var values = attributes.displacement.value;

	for( var v = 0; v < vertices.length; v++ ) {

		values[ v ] = 0;
		noise[ v ] = Math.random() * 5;

	}

	slide.add( sphere );	
	
	addText(slide, 'Slide', 700, 250, -440, 100, 0xff0000, 0xaa0000);
	mesh.rotation.y = - 1;
	addText(slide, 'number', 700, 200, -440, 50, 0x00ff00, 0x00aa00);
	mesh.rotation.y = - 1.1;
	addText(slide, 'THREE', 700, 100, -440, 100, 0x0000ff, 0x0000aa);
	mesh.rotation.y = - 1.2;
	slide.add( mesh );
	scene.add( slide );
	
	var t = controls.animationParent.position;
	addPath( [ [t.x, t.y, t.z ], [ 0, 200, 0 ], [ 700, 200, 0 ],  [ 700, 200, 100 ],  [ 700, 200, -200 ] ]);
	
	audioElement.setAttribute('src', 'slide3/slide3.mp3');
	audioElement.play();

	scene.remove(previousSlide);
	
	function callback() {
		var time = Date.now() * 0.01;
		sphere.rotation.y = sphere.rotation.z = 0.01 * time;
		uniforms.amplitude.value = 2.5 * Math.sin( sphere.rotation.y * 0.125 );
		THREE.ColorUtils.adjustHSV( uniforms.color.value, 0.0005, 0, 0 );
		for( var i = 0; i < attributes.displacement.value.length; i ++ ) {
			attributes.displacement.value[ i ] = Math.sin( 0.1 * i + time );
			noise[ i ] += 0.5 * ( 0.5 - Math.random() );
			noise[ i ] = THREE.Math.clamp( noise[ i ], -5, 5 );
			attributes.displacement.value[ i ] += noise[ i ];
		}
		attributes.displacement.needsUpdate = true;
			
	}