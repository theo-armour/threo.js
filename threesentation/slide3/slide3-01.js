console.log('Slide 3');
/*
	material = new THREE.MeshNormalMaterial();
	geometry = new THREE.CubeGeometry( 20, 20, 20 );
	for (var i = 0; i < 50; i++) {
		mesh = new THREE.Mesh( geometry, material );
		mesh.position.set( Math.random() * 100 - 50 + 700 , Math.random() * 60 - 30 + 200, Math.random() * 100 - 50 - 700);
		slide.add( mesh );	
	}


	var js = document.createElement('script');
	js.setAttribute('type', 'x-shader/x-vertex');
	js.setAttribute('textContent', 'attribute float displacement;' +
		'varying vec3 vNormal;' +
		'varying vec2 vUv;' +
		'void main() {' +
		'	vNormal = normal;' +
		'	vUv = ( 0.5 + amplitude ) * uv + vec2( amplitude );' +
		'	vec3 newPosition = position + amplitude * normal * vec3( displacement );' +
		'	gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );' +

		'}'
	);
	js.setAttribute('id', 'vertexshader');
	document.body.appendChild(js);

	var js = document.createElement('script');
	js.setAttribute('type', 'x-shader/x-fragment');
	js.setAttribute('textContent', 'varying vec3 vNormal;' +
	'varying vec2 vUv;' +
	'uniform vec3 color;' +
	'uniform sampler2D texture;' +
	'void main() {' +
	'	vec3 light = vec3( 0.5, 0.2, 1.0 );' +
	'	light = normalize( light );' +
	'	float dProd = dot( vNormal, light ) * 0.5 + 0.5;' +
	'	vec4 tcolor = texture2D( texture, vUv );' +
	'	vec4 gray = vec4( vec3( tcolor.r * 0.3 + tcolor.g * 0.59 + tcolor.b * 0.11 ), 1.0 );' +
	'	gl_FragColor = gray * vec4( vec3( dProd ) * vec3( color ), 1.0 );' +
	'}'
	);
	
	
	js.setAttribute('id', 'fragmentshader');
	document.body.appendChild(js); 
	

	var vertexshader = document.createElement( 'div' );
	document.body.appendChild( vertexshader );
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

	var shaderMaterial = new THREE.ShaderMaterial( {

		uniforms: 		uniforms,
		attributes:     attributes,
		vertexShader:   document.getElementById( 'vertexshader' ).textContent,
		fragmentShader: document.getElementById( 'fragmentshader' ).textContent

	});


	var radius = 300, segments = 128, rings = 64;
	var geometry = new THREE.SphereGeometry( radius, segments, rings );
	geometry.dynamic = true;

	sphere = new THREE.Mesh( geometry, shaderMaterial );
	sphere.position.set(500, 100, -700);
	var vertices = sphere.geometry.vertices;
	var values = attributes.displacement.value;

	for( var v = 0; v < vertices.length; v++ ) {

		values[ v ] = 0;
		noise[ v ] = Math.random() * 50;

	}

	scene.add( sphere );


	
	
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
	
	
			sphere.rotation.y = sphere.rotation.z = 0.01 * delta;

			uniforms.amplitude.value = 2.5 * Math.sin( sphere.rotation.y * 0.125 );
			THREE.ColorUtils.adjustHSV( uniforms.color.value, 0.0005, 0, 0 );

			for( var i = 0; i < attributes.displacement.value.length; i ++ ) {

				attributes.displacement.value[ i ] = Math.sin( 0.1 * i + delta );

				// noise[ i ] += 0.5 * ( 0.5 - Math.random() );
				noise[ i ] += 10 * ( 0.5 - Math.random() );
				//noise[ i ] = THREE.Math.clamp( noise[ i ], -5, 5 );
				noise[ i ] = THREE.Math.clamp( noise[ i ], -50, 50 );

				attributes.displacement.value[ i ] += noise[ i ];

			}

			attributes.displacement.needsUpdate = true;
			
	}