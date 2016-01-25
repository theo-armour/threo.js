console.log('slide 1');

	material = new THREE.MeshNormalMaterial();
	geometry = new THREE.SphereGeometry( 20, 5, 4 );
	temp = new THREE.Mesh( geometry, material );
	temp.position.set( 0, 0, 0);
	child.add( temp );
	
	addText(child, '1000', 0, 20, 0, 30, 0xff0000, 0xaa0000);
	scene.add (child);
