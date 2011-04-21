var intersects, previousIntersect, previousColor;

function onDocumentMouseMove( event ) {
  mouse2D.x = 2 * event.clientX / window.innerWidth - 1;
  mouse2D.y = -2 * event.clientY / window.innerHeight + 1;
   
  mouse3D = projector.unprojectVector( mouse2D.clone(), camera );
  ray.direction = mouse3D.subSelf( camera.position ).normalize();
  
  intersects = ray.intersectScene( scene ); 

  var i, j, intersector, idx, str, sym, txt, len2, len = scene.objects.length;
  
  if (intersects.length > 0) {
    if (previousIntersect) {
      previousIntersect.materials[0].color.setHex(previousIntersect.sectorColor);
      // previousIntersect.scale.set(1,1,1);
    } 
    if (intersects[0].object.name === 'symbolGeometry') {
      obj = intersects[0].object;
      obj.materials[0].color.setHex(0x000000);     
      str = symbolsData[obj.symbolIndex];
 
     if (str) {
      sym = wb_symbols[obj.sectorIndex];       
      symData = str.data[str.data.length - 1];  // get latest data
      txt =  100 * symData.change / symData.price;
      txt = txt.toFixed(2) + '%';  
             
      wb_infoText1 = '<h1 style="margin:0">' + symData.symbol + '</h1>' +
            '<br><img src="http://www.google.com/finance/chart?tlf=12&q=' + symData.symbol + 
            ' " height="116" width="212" style="background: white; padding: 10px" /></a><br>' +
            '<br/><b>' + str.companyname + '</b>' +               
            '<br/>Sector: ' + str.sector + '<br>' +
            '<br/><a href="http://finance.yahoo.com/q?s=' + symData.symbol + '" target="_blank">Yahoo Finance: ' + 
            symData.symbol + '</a>' +
            '<br/><a href="http://www.google.com/finance?q=' + symData.symbol + '" target="_blank">Google Finance: ' +   
            symData.symbol + '</a><br>' +            
            '<br/>Price: ' + symData.price +
            '<br/>Change Since Close: ' + txt +
            '<br/>Open: ' + str.open +
						'<br/>Current Volume: ' + symData.volume +
						'<br/>Average Volume: ' + str.avgvolume +
						'<br/>Market Cap: ' + str.mktcap +
						'<br/>Time of Trade: ' + symData.time + 
						'<br/>Data points: ' + str.data.length + 
            wb_text_footer; // + ' ' + volavgMin;	
            				                
      info.innerHTML = wb_infoText1; 
        }           
      // intersects[0].object.scale.set(1.5, 1.5, 1.5);
      previousIntersect = obj;            
    }
    
  } 
              
  // adjustCamera(); 
}

function onDocumentContextMenu(event) {
    // event.preventDefault();
    // event.stopPropagation();
}

function onDocumentMouseDown(event) {
    //event.preventDefault();
    //event.stopPropagation();
    
    if  ( event.target.tagName === 'IMG' || event.target.tagName === 'A')  {
        ///console.log(event.bubbles, event.type, event.target.tagName, event.currentTarget);  
    }else {
    switch (event.button) {
    case 0:
        leftMouseDown = true;
        adjustCamera();
        break;
    case 2:
        rightMouseDown = true;
        adjustCamera();
        break;
    }
    }
}

function onDocumentMouseUp(event) {
    //event.preventDefault();
    //event.stopPropagation();
    switch (event.button) {
    case 0:
        leftMouseDown = false;
        break;
    case 2:
        rightMouseDown = false;
        break;
    }
}

function onDocumentMouseWheel(event) {
    // WebKit
    if (event.wheelDeltaY) {
        radius -= event.wheelDeltaY * 0.02;

        // Opera / Explorer 9
    } else if (event.wheelDelta) {
        radius -= event.wheelDelta * 0.02;

        // Firefox
    } else if (event.detail) {
        radius += event.detail * 2;
    }

    if (radius < 20) {
        radius = 20;
    }
    
    if (radius > 300) {
        radius = 300;
    }    
    adjustCamera();
}

function adjustCamera() {
    // var minimumY = 1000;
    // var i, j, z, symbolPos;
    
    var camPos = camera.position,
        camTarPos = camera.target.position;
    
    camTarPos.x = deltaX;
    //camTarPos.y = minimumY + deltaY;
    camTarPos.y = deltaY;

    camPos.x = camTarPos.x + radius * Math.sin(theta);
    camPos.y = camTarPos.y + radius * Math.cos(theta) * Math.cos(phi);
    camPos.z = camTarPos.z + radius * Math.sin(phi);

    if (leftMouseDown) {
        theta += -0.02 * mouse2D.x;
        phi += 0.02 * mouse2D.y;
        if (phi > 1.3) {
            phi = 1.3;
        }
        if (phi < 0.1) {
            phi = 0.1;
        }
    } else if (rightMouseDown) {
        deltaX += mouse2D.x;
        if (deltaX > 50) {
            deltaX = 50;
        }
        if (deltaX < -50) {
            deltaX = -50;
        }
        deltaY += mouse2D.y;
        if (deltaY > 400) {
            deltaY = 400;
        }
        if (deltaY < 0) {
            deltaY = 0;
        }
    }
    //for (var i = 0; i < 500; i++) {
    // groupContainer.children[i].rotation.z = -theta - 3.14;
    //} 
    
    // sun.position = camera.position.clone();
    // sun.position = camera.position;
    
    //console.log(radius, deltaX, deltaY, theta, phi);
}
