console.log('Slide 3');
	var vertexShaderSourceString = 
	'uniform float amplitude;	\
	attribute float displacement;	\
	varying vec3 vNormal;	\
	varying vec2 vUv;	\
	void main() {	\
		vNormal = normal;	\
		vUv = ( 0.5 + amplitude ) * uv + vec2( amplitude );	\
		vec3 newPosition = position + amplitude * normal * vec3( displacement );	\
		gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );	\
	}	\
	';
	var fragmentShaderSourceString =
	'varying vec3 vNormal;	\
	varying vec2 vUv;	\
	uniform vec3 color;	\
	uniform sampler2D texture;	\
	void main() {	\
		vec3 light = vec3( 0.5, 0.2, 1.0 );	\
		light = normalize( light );	\
		float dProd = dot( vNormal, light ) * 0.5 + 0.5;	\
		vec4 tcolor = texture2D( texture, vUv );	\
		vec4 gray = vec4( vec3( tcolor.r * 0.3 + tcolor.g * 0.59 + tcolor.b * 0.11 ), 1.0 );	\
		gl_FragColor = gray * vec4( vec3( dProd ) * vec3( color ), 1.0 );	\
	}';
	
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
		
	var shaderMaterial = new THREE.ShaderMaterial( {
		uniforms: 		uniforms,
		attributes:     attributes,
		vertexShader:   vertexShaderSourceString,
		fragmentShader: fragmentShaderSourceString
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
	
//	var t = controls.animationParent.position;
//	addPath( [ [t.x, t.y, t.z ], [ 0, 200, 0 ], [ 700, 200, 0 ],  [ 700, 200, 100 ],  [ 700, 200, -200 ] ], 3);
	
	audioElement.setAttribute('src', 'slide3/slide3.mp3');
	audioElement.play();

	if (erase) { scene.remove(previousSlide); }
	
	function callback() {
		var time = Date.now() * 0.01;
		sphere.rotation.y = sphere.rotation.z = 0.01 * time;
		uniforms.amplitude.value = 2.5 * Math.sin( sphere.rotation.y * 0.125 );
//		THREE.ColorUtils.adjustHSV( uniforms.color.value, 0.0005, 0, 0 );
uniforms.color.value.setHSL( 0.0005, 0, 0 );
		for( var i = 0; i < attributes.displacement.value.length; i ++ ) {
			attributes.displacement.value[ i ] = Math.sin( 0.1 * i + time );
			noise[ i ] += 0.5 * ( 0.5 - Math.random() );
			noise[ i ] = THREE.Math.clamp( noise[ i ], -5, 5 );
			attributes.displacement.value[ i ] += noise[ i ];
		}
		attributes.displacement.needsUpdate = true;
			
	}