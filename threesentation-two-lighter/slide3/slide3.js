console.log('slide 3');

	material = new THREE.MeshNormalMaterial();
	geometry = new THREE.SphereGeometry( 20, 5, 4 );
	temp = new THREE.Mesh( geometry, material );
	temp.position.set( 20, 0, -50);
	child.add( temp );	
	
	addText(child, '333', -40, -20, 0, 20, 0xff0000, 0xaa0000);
	scene.add (child);
