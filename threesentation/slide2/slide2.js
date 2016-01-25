console.log('Slide 2');
	material = new THREE.MeshNormalMaterial();
	geometry = new THREE.CubeGeometry( 20, 50, 20 );
	for (var i = 0; i < 100; i++) {
		mesh = new THREE.Mesh( geometry, material );
		mesh.position.set( Math.random() * 200 - 100 + 900, Math.random() * 300 + 25, Math.random() * 200 - 100 + 500 );
		slide.add( mesh );	
	}

	addText(slide, 'Slide', 700, 50, 400, 50, 0xff0000, 0xaa0000);
	mesh.rotation.y = - 1;
	addText(slide, 'number', 735, 100, 420, 50, 0x00ff00, 0x00aa00);
	mesh.rotation.y = - 1;
	addText(slide, 'TWO', 710, 150, 450, 100, 0x0000ff, 0x0000aa);
	mesh.rotation.y = - 1;
	slide.add( mesh );	
	
	var loader = new THREE.JSONLoader();
	var morphs = [];
	loader.load( "slide2/flamingo.js", function( geometry, materials ) {
		var material = materials[ 0 ];
		material.morphTargets = true;
		material.color.setHex( 0xffaaaa ); // brightens them a bit
		material.ambient.setHex( 0x222222 );
		// var faceMaterial = new THREE.MeshFaceMaterial();
		var faceMaterial = new THREE.MeshLambertMaterial( { color: 0xffaa55, morphTargets: true, vertexColors: THREE.FaceColors } );
		for ( var i = 0; i < 3; i ++ ) {
			morphColorsToFaceColors( geometry );
			temp = new THREE.MorphAnimMesh( geometry, faceMaterial );
			// one second duration
			temp.duration = 1000;
			// random animation offset
			temp.time = 1000 * Math.random();
			temp.position.set( 50 * i + 500, 100 + i * 80, 500 + 200 * i );
			temp.rotation.y = THREE.Math.randFloat( -0.25, 0.25 );
			temp.castShadow = true;
			temp.matrixAutoUpdate = true;
			temp.updateMatrix();
			slide.add( temp );
			morphs.push( temp );
		}
	} );
	scene.add( slide );
	
//	var t = controls.animationParent.position;
//	addPath( [ [t.x, t.y, t.z ], [ 0, 100, 0 ], [ 100, 20, 500 ],  [ 500, 60, 500 ] ], 3);
	
	audioElement.setAttribute('src', 'slide2/slide2.mp3');
	audioElement.play();
	
	if (erase) { scene.remove(previousSlide); }
	
	function morphColorsToFaceColors( geometry ) {
		if ( geometry.morphColors && geometry.morphColors.length ) {
			var colorMap = geometry.morphColors[ 0 ];
			for ( var i = 0; i < colorMap.colors.length; i ++ ) {
				geometry.faces[ i ].color = colorMap.colors[ i ];
			}
		}
	}
	var phi = 0;
	function callback() {
		if ( morphs.length ) {
			for ( var i = 0; i < morphs.length; i ++ ) {
				temp = morphs[ i ];
				phi +=0.005;
				temp.updateAnimation( 1000 * delta );
				temp.position.x = 800 + (i * 30) + 200 * Math.sin(phi);
				temp.position.z = 500 + (i * 50) + 300 * Math.cos(phi);
				temp.rotation.y = 1.5  + phi;
				//temp.position.z += 3;			
				//if (temp.position.z > 1000) {temp.position.z = 0; }
				temp.updateMatrix();
			}
		}
	}