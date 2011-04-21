// Theo Armour 2011-04-13
  
  function initPanel() {
    container = document.createElement( 'div' );
    container.className = 'container';
    document.body.appendChild( container );
    
    info = document.createElement( 'div' );
    info.className = 'info';
    
    info.style.backgroundColor = '#ddd';
    info.style.borderRadius = '8px';
  	info.style.font = '13px Monospace';
  	info.style.height = '580px';
  	info.style.right = '20px';
  	info.style.opacity = '0.95';
  	info.style.padding = '28px 20px';
    info.style.position = 'absolute';
  	info.style.top = '10px'; 
    info.style.textAlign = 'left';   
  	//info.style.textShadow = '10px';
    info.style.width = '235px';
    info.style.zIndex = '1001';
    
  	info.innerHTML = wb_initTextHeader + wb_initTextBody;
  	container.appendChild( info );
    
    nav = document.createElement( 'div' );
    nav.className = 'nav';
    
    nav.style.background = '#ddd';
    nav.style.borderRadius = '8px';
  	nav.style.font = '11px Monospace';
  	nav.style.height = '580px';
  	nav.style.left = '10px';
  	nav.style.opacity = '0.95';
  	nav.style.padding = '30px 20px';
    nav.style.position = 'absolute';
  	nav.style.top = '10px'; 
    nav.style.textAlign = 'left';   
  	// nav.style.textShadow = '10px';
    nav.style.width = '115px';
    nav.style.zIndex = '999';
    
    var txt = 'Preset<br>Views' +
              '<a href="#" onClick="radius=80, theta = 2 * Math.PI; phi = 0.3; adjustCamera()">' +
              '<img title="Back View" src="images/view-back.png" style="left: 50px; top: 60px;"/></a>' +
              '<a href="#" onClick="radius=80, theta = -1.57; phi = 0.3; adjustCamera()">' +
              '<img title="Left View" src="images/view-left.png" style="left: 15px; top: 100px;"/></a>' + 
              '<a href="#" onClick="radius=80, theta = Math.PI;phi = 1.3; adjustCamera()">' +              
              '<img title="Top View" src="images/view-top.png" style="left: 50px; top: 100px;"/></a>' +                 
              '<a href="#" onClick="radius=80, theta = 1.57; phi = 0.3; adjustCamera()">' +
              '<img title="Right View" src="images/view-right.png" style="left: 100px; top: 100px;"/></a>' +    
               '<a href="#" onClick="radius=80, theta = Math.PI;phi = 0.3; adjustCamera()">' +
              '<img title="Home View" src="images/view-home.png" style="left: 50px; top: 140px;"/></a>' + 
              '<p style="top: 200px;">Pan</p>' +
              '<a href="#" onClick="phi += 0.1; adjustCamera()">' +
              '<img title="Pan Up" src="images/pan-up.png" style="left: 45px; top: 230px;"/></a>' + 
              '<a href="#" onClick="theta -= 0.1; adjustCamera()">' +
              '<img title="Pan Clockwise" src="images/pan-cw.png" style="left: 20px; top: 255px;"/></a>' +               
              '<a href="#" onClick="theta += 0.1; adjustCamera()">' +
              '<img title="Pan Counter Clockwise" src="images/pan-ccw.png" style="left: 90px; top: 255px;"/></a>' +
              '<a href="#" onClick="phi -= 0.1; adjustCamera()">' + 
              '<img title="Pan Down" src="images/pan-down.png" style="left: 45px; top: 300px;"/></a>' +
              '<p style="top: 360px;">Zoom</p>' + 
              '<a href="#" onClick="radius -= 1; adjustCamera()">' +
              '<img title="Zoom In" src="images/zoom-in.png" style="left: 60px; top: 390px;"/></a>' +                             
              '<a href="#" onClick="radius += 1; adjustCamera()">' +
              '<img title="Zoom Out" src="images/zoom-out.png" style="left: 65px; top: 420px;"/></a>' + 
              '<p style="top: 450px;">Move</p>' +                      
              '<a href="#" onClick="deltaY += 1; adjustCamera()">' +              
              '<img title="Move Y-axis +" src="images/move-y-axis-plus.png" style="left: 50px; top: 480px;"/></a>' + 
              '<a href="#" onClick="deltaX += 1; adjustCamera()">' +
              '<img title="Move X-axis -" src="images/move-x-axis-minus.png" style="left: 20px; top: 510px;"/></a>' +               
              '<a href="#" onClick="deltaX -= 1; adjustCamera()">' +              
              '<img title="Move X-axis +" src="images/move-x-axis-plus.png" style="left: 100px; top: 510px;"/></a>' +                            
              '<a href="#" onClick="deltaY -= 1; adjustCamera()">' +
              '<img title="Move Y-axis -" src="images/move-y-axis-minus.png" style="left: 50px; top: 550px;"/></a>' + 
              ' ';    
    
  	nav.innerHTML = txt;
  	container.appendChild( nav );    
/*
              '<a href="#" onClick="deltaX += 0.1; adjustCamera()">Move Z-axis +</a><br>' +
              '<a href="#" onClick="deltaX -= 0.1; adjustCamera()">Move X-axis -</a><br>' +
              '<br>' +
              '<a href="#" onClick="deltaX -= 0.1; adjustCamera()">Rotation On</a><br>' + 
              '<a href="#" onClick="deltaX -= 0.1; adjustCamera()">Rotation Off</a><br>' +
              '<a href="#" onClick="deltaX -= 0.1; adjustCamera()">Follow the action On</a><br>' +
              '<a href="#" onClick="deltaX -= 0.1; adjustCamera()">Follow the action Off</a><br>' +

*/
      
    
    stats = new Stats();
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.top = '10px';
    stats.domElement.style.right = '42px'; 
    
    // stats.domElement.style.color = '!important:#ddd'; 
    // stats.domElement.style.backgroundColor =  '#dddddd'; // '!important:#dddddd';   
  	container.appendChild( stats.domElement );
        
  	// 
	}
  
  var cnt = 0;
  var timeobj;
  var timer_is_on;
  var tim0 = new Date();
  var tim;

  var wb_symbolsLength;
  var symbolsData = new Array();
  var symbolsSlices;
  var symbolsPerSlice;
  var symbolsStrings = new Array();
  var sliceCount;
  var checkIndices;
  
  var wb_dataUpdate = false;
  
  
  function selectDji(index) {
    wb_symbols = wb_symbols.concat(wb_djiSymbols);
    wb_sectors = wb_sectors.concat(wb_djiSectors);
    selectIndex();
  }  
    
  function selectSp500(index) {
    wb_symbols = wb_symbols.concat(wb_sp500Symbols);
    wb_sectors = wb_sectors.concat(wb_sp500Sectors);
    selectIndex();
  }  
        
  function selectIndex() {
    wb_symbolsLength = wb_symbols.length;
    symbolsSlices = Math.ceil(wb_symbolsLength / 200) ;
    symbolsPerSlice = Math.ceil(wb_symbolsLength / symbolsSlices);
    sliceCount = 0;
    checkIndices = 3 * symbolsSlices + 1;    
        
    initStockData();	
  }
	
	function initStockData() {
    info.innerHTML += 'Data \'chunks\' to load: ' + (symbolsSlices + 1) + '<br><br>';
    //console.log('init start', cnt, ' ', tim0);
    for (var i = 0; i < wb_symbolsLength; i ++) {
      symbolsData[i] = new symbolsInfo(wb_symbols[i], wb_sectors[i]);
    }

    for (var i = 0; i < symbolsSlices; i++) {
      symbolsStrings[i] = wb_symbols.slice(i * symbolsPerSlice, i * symbolsPerSlice + symbolsPerSlice).toString();
    }    
    timedInitCount();
    // console.log('yahoo init complete', ' ', new Date());
  }  

  function symbolsInfo( symbol, sector) {
    this.symbol = symbol;
    this.sector = sector;
    this.data = new Array();
  }

  function timedInitCount() {
    tim = new Date;
    
    switch(true) {
        
      case cnt === 0:
        //info.innerHTML += 'case 0' + '<br>';
              
      case cnt < symbolsSlices:     
        // getInitData();
        fetchInitYqlData(symbolsStrings[cnt]);
        info.innerHTML += 'Loaded chunk #' + (cnt + 1) + ':<br> Yahoo data. Time: ' + (new Date - tim) + 'ms.<br>';
        timeobj = setTimeout("timedInitCount()",3000);
        break;
                
      case cnt === symbolsSlices:
        initIndicesData();
        info.innerHTML += 'Loaded chunk #' + (cnt + 1) + ':<br> Google data. Time: ' + (new Date - tim) + 'ms.<br>';
        timeobj = setTimeout("timedInitCount()",2000);
        break;
        
      case cnt === symbolsSlices + 1:
        info.innerHTML += 'Preparing the display...<br>';
        init();
        timeobj = setTimeout("timedInitCount()",1000);
        break;
        
      case cnt > symbolsSlices + 1:
        animate();
        timedCount()
        break;  
    }
    cnt++;
  }
  function timedCount() {
    tim = new Date;  
    if (cnt % checkIndices === 0) {
      fetchYqlDataGoogle(wb_indices);
    } else {
      wb_getData();
    }    
    cnt++;
    timeobj = setTimeout("timedCount()",5000);  
  }
  
  function doTimer() {
    if(!symbolsData.length) {
      initStockData();
    } else {
      if (!timer_is_on) {
        timer_is_on=1;
        console.log('timer is on ', new Date());
        timedCount();
      }
    } 
  }

  function stopCount() {
    clearTimeout(timeobj);
    timer_is_on=0;
    console.log('timer is off ', new Date());
  }