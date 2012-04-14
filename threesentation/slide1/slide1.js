console.log('slide 1');

	texture = THREE.ImageUtils.loadTexture('slide1/lavatile.jpg');
	texture.wrapT = THREE.RepeatWrapping;
	material = new THREE.MeshBasicMaterial({map: texture });
	geometry = new THREE.CubeGeometry( 200, 200, 200 );
	temp= new THREE.Mesh( geometry, material );
	temp.position.set( -700, 150, 420);
	slide.add( temp );	
	
	addText(slide, 'Slide', -800, 50, 540, 50, 0xff0000, 0xaa0000);
	addText(slide, 'number', -800, 90, 520, 50, 0x00ff00, 0x00aa00);
	addText(slide, 'ONE', -740, 120, 540, 100, 0x0000ff, 0x0000aa);
	scene.add (slide);
	
	var t = controls.animationParent.position;
	addPath ( [ [t.x, t.y, t.z ], [ -680, 50, 800,  ], [ -700, 50, 700 ]  ], 3 );
	
	audioElement.setAttribute('src', 'slide1/slide1.mp3');
	audioElement.play();	

	if (erase) { scene.remove(previousSlide); }
	
	function callback() {
		temp.rotation.y +=0.002;
		temp.rotation.x +=0.001;
		if (texture) {
			texture.offset.y	+= 0.002;
			texture.offset.y	%= 1;
			texture.needsUpdate	= true;	
		}
	}


