console.log('slide 2');

	material = new THREE.MeshNormalMaterial();
	geometry = new THREE.SphereGeometry( 20, 5, 4 );
	temp = new THREE.Mesh( geometry, material );
	temp.position.set( -30, 0, 30);
	child.add( temp );	
	
	addText(child, '222', -20, 20, -10, 20, 0xff0000, 0xaa0000);
	scene.add (child);
