// Theo Armour 2011-04-07

var wb_symbols = [];
var wb_sectors = [];

var wb_djiSymbols = ["AA","AXP","BA","BAC","CAT","CSCO","CVX","DD","DIS","GE","HD","HPQ","IBM","INTC","JNJ","JPM","KFT","KO","MCD","MMM","MRK","MSFT","PFE","PG","T","TRV","UTX","VZ","WMT","XOM"];

var wb_djiSectors = ["Basic_Materials","Financial","Capital_Goods","Financial","Capital_Goods","Technology","Energy","Basic_Materials","Services","Financial","Services","Technology","Technology","Technology","Healthcare","Financial","Consumer_Non-Cyclical","Consumer_Non_Cyclical","Services","Capital_Goods","Healthcare","Technology","Healthcare","Consumer_Non_Cyclical","Services","Financial","Capital_Goods","Services","Services","Energy"];

var wb_sp500Symbols = ['A','AA','AAPL','ABC','ABT','ACE','ADBE','ADI','ADM','ADP','ADSK','AEE','AEP','AES','AET','AFL','AGN','AIG','AIV','AIZ','AKAM','AKS','ALL','ALTR','AMAT','AMD','AMGN','AMP','AMT','AMZN','AN','ANF','AON','APA','APC','APD','APH','APOL','ARG','ATI','AVB','AVP','AVY','AXP','AZO','BA','BAC','BAX','BBBY','BBT','BBY','BCR','BDX','BEN','BF-B','BHI','BIG','BIIB','BK','BLL','BMC','BMS','BMY','BRCM','BRK-B','BSX','BTU','BXP','C','CA','CAG','CAH','CAM','CAT','CB','CBG','CBS','CCE','CCL','CEG','CELG','CEPH','CERN','CF','CFN','CHK','CHRW','CI','CINF','CL','CLF','CLX','CMA','CMCSA','CME','CMI','CMS','CNP','CNX','COF','COG','COH','COL','COP','COST','COV','CPB','CPWR','CRM','CSC','CSCO','CSX','CTAS','CTL','CTSH','CTXS','CVC','CVH','CVS','CVX','D','DD','DE','DELL','DF','DFS','DGX','DHI','DHR','DIS','DISCA','DNB','DNR','DO','DOV','DOW','DPS','DRI','DTE','DTV','DUK','DV','DVA','DVN','EBAY','ECL','ED','EFX','EIX','EL','EMC','EMN','EMR','EOG','EP','EQR','EQT','ERTS','ESRX','ETFC','ETN','ETR','EW','EXC','EXPD','EXPE','F','FAST','FCX','FDO','FDX','FE','FFIV','FHN','FII','FIS','FISV','FITB','FLIR','FLR','FLS','FMC','FO','FRX','FSLR','FTI','FTR','GAS','GCI','GD','GE','GENZ','GILD','GIS','GLW','GME','GNW','GOOG','GPC','GPS','GR','GS','GT','GWW','HAL','HAR','HAS','HBAN','HCBK','HCN','HCP','HD','HES','HIG','HNZ','HOG','HON','HOT','HP','HPQ','HRB','HRL','HRS','HSP','HST','HSY','HUM','IBM','ICE','IFF','IGT','INTC','INTU','IP','IPG','IR','IRM','ISRG','ITT','ITW','IVZ','JBL','JCI','JCP','JDSU','JEC','JNJ','JNPR','JNS','JOYG','JPM','JWN','K','KEY','KFT','KIM','KLAC','KMB','KMX','KO','KR','KSS','L','LEG','LEN','LH','LIFE','LLL','LLTC','LLY','LM','LMT','LNC','LO','LOW','LSI','LTD','LUK','LUV','LXK','M','MA','MAR','MAS','MAT','MCD','MCHP','MCK','MCO','MDT','MEE','MET','MHP','MHS','MI','MJN','MKC','MMC','MMI','MMM','MO','MOLX','MON','MRK','MRO','MS','MSFT','MSI','MTB','MU','MUR','MWV','MWW','MYL','NBL','NBR','NDAQ','NE','NEE','NEM','NFLX','NFX','NI','NKE','NOC','NOV','NOVL','NRG','NSC','NSM','NTAP','NTRS','NU','NUE','NVDA','NVLS','NWL','NWSA','NYX','OI','OKE','OMC','ORCL','ORLY','OXY','PAYX','PBCT','PBI','PCAR','PCG','PCL','PCLN','PCP','PCS','PDCO','PEG','PEP','PFE','PFG','PG','PGN','PGR','PH','PHM','PKI','PLD','PLL','PM','PNC','PNW','POM','PPG','PPL','PRU','PSA','PWR','PX','PXD','QCOM','QEP','R','RAI','RDC','RF','RHI','RHT','RL','ROK','ROP','ROST','RRC','RRD','RSG','RSH','RTN','S','SAI','SBUX','SCG','SCHW','SE','SEE','SHLD','SHW','SIAL','SJM','SLB','SLE','SLM','SNA','SNDK','SNI','SO','SPG','SPLS','SRCL','SRE','STI','STJ','STT','STZ','SUN','SVU','SWK','SWN','SWY','SYK','SYMC','SYY','T','TAP','TDC','TE','TEG','TER','TGT','THC','TIE','TIF','TJX','TLAB','TMK','TMO','TROW','TRV','TSN','TSO','TSS','TWC','TWX','TXN','TXT','TYC','UNH','UNM','UNP','UPS','URBN','USB','UTX','V','VAR','VFC','VIA-B','VLO','VMC','VNO','VRSN','VTR','VZ','WAG','WAT','WDC','WEC','WFC','WFMI','WFR','WHR','WIN','WLP','WM','WMB','WMT','WPI','WPO','WU','WY','WYN','WYNN','X','XEL','XL','XLNX','XOM','XRAY','XRX','YHOO','YUM','ZION','ZMH'];

var wb_sp500Sectors = ['Technology','Basic_Materials','Technology','Healthcare','Healthcare','Financial','Technology','Technology','Consumer_Non_Cyclical','Services','Technology','Utilities','Utilities','Utilities','Financial','Financial','Healthcare','Financial','Services','Financial','Technology','Basic_Materials','Financial','Technology','Technology','Technology','Healthcare','Financial','Services','Services','Services','Services','Financial','Energy','Energy','Basic_Materials','Technology','Services','Basic_Materials','Basic_Materials','Services','Consumer_Non_Cyclical','Basic_Materials','Financial','Services','Capital_Goods','Financial','Healthcare','Services','Financial','Services','Healthcare','Healthcare','Financial','Consumer_Non_Cyclical','Energy','Services','Healthcare','Financial','Basic_Materials','Technology','Basic_Materials','Healthcare','Technology','Financial','Healthcare','Energy','Services','Financial','Technology','Consumer_Non_Cyclical','Healthcare','Energy','Capital_Goods','Financial','Services','Services','Consumer_Non_Cyclical','Services','Utilities','Healthcare','Healthcare','Technology','Basic_Materials','Healthcare','Energy','Transportation','Financial','Financial','Consumer_Non_Cyclical','Basic_Materials','Consumer_Non_Cyclical','Financial','Services','Financial','Capital_Goods','Utilities','Utilities','Energy','Financial','Energy','Services','Capital_Goods','Energy','Services','Healthcare','Consumer_Non_Cyclical','Technology','Technology','Technology','Technology','Transportation','Services','Services','Technology','Technology','Services','Financial','Services','Energy','Utilities','Basic_Materials','Capital_Goods','Technology','Consumer_Non_Cyclical','Financial','Healthcare','Capital_Goods','Technology','Services','Services','Technology','Energy','Energy','Capital_Goods','Basic_Materials','Consumer_Non_Cyclical','Services','Utilities','Services','Utilities','Services','Healthcare','Energy','Services','Consumer_Non_Cyclical','Utilities','Services','Utilities','Consumer_Non_Cyclical','Technology','Basic_Materials','Technology','Energy','Utilities','Services','Energy','Technology','Healthcare','Financial','Technology','Utilities','Healthcare','Utilities','Transportation','Services','Consumer_Cyclical','Capital_Goods','Basic_Materials','Services','Transportation','Utilities','Technology','Financial','Financial','Financial','Technology','Financial','Capital_Goods','Capital_Goods','Capital_Goods','Basic_Materials','Capital_Goods','Healthcare','Technology','Energy','Services','Utilities','Services','Capital_Goods','Financial','Healthcare','Healthcare','Consumer_Non_Cyclical','Consumer_Non_Cyclical','Services','Financial','Technology','Consumer_Cyclical','Services','Capital_Goods','Financial','Consumer_Cyclical','Consumer_Cyclical','Energy','Consumer_Cyclical','Consumer_Cyclical','Financial','Financial','Services','Services','Services','Energy','Financial','Consumer_Non_Cyclical','Consumer_Cyclical','Capital_Goods','Services','Energy','Technology','Services','Consumer_Non_Cyclical','Technology','Healthcare','Services','Consumer_Non_Cyclical','Financial','Technology','Financial','Basic_Materials','Services','Technology','Technology','Basic_Materials','Services','Capital_Goods','Services','Healthcare','Capital_Goods','Capital_Goods','Financial','Technology','Consumer_Cyclical','Services','Technology','Capital_Goods','Healthcare','Technology','Financial','Capital_Goods','Financial','Services','Consumer_Non_Cyclical','Financial','Consumer_Non_Cyclical','Services','Technology','Consumer_Non_Cyclical','Services','Consumer_Non_Cyclical','Services','Services','Financial','Consumer_Cyclical','Capital_Goods','Healthcare','Healthcare','Capital_Goods','Technology','Healthcare','Financial','Capital_Goods','Financial','Consumer_Non_Cyclical','Services','Technology','Services','Services','Transportation','Technology','Services','Financial','Services','Capital_Goods','Consumer_Cyclical','Services','Technology','Healthcare','Services','Healthcare','Energy','Financial','Services','Services','Financial','Consumer_Non_Cyclical','Consumer_Non_Cyclical','Financial','Technology','Capital_Goods','Consumer_Non_Cyclical','Technology','Basic_Materials','Healthcare','Energy','Financial','Technology','Technology','Financial','Technology','Energy','Basic_Materials','Services','Healthcare','Energy','Energy','Financial','Energy','Utilities','Basic_Materials','Services','Energy','Utilities','Consumer_Cyclical','Capital_Goods','Energy','Technology','Utilities','Transportation','Technology','Technology','Financial','Utilities','Basic_Materials','Technology','Technology','Consumer_Non_Cyclical','Services','Financial','Basic_Materials','Utilities','Services','Technology','Services','Energy','Services','Financial','Technology','Consumer_Cyclical','Utilities','Services','Services','Basic_Materials','Services','Healthcare','Utilities','Consumer_Non_Cyclical','Healthcare','Financial','Consumer_Non_Cyclical','Utilities','Financial','Basic_Materials','Capital_Goods','Healthcare','Services','Capital_Goods','Consumer_Non_Cyclical','Financial','Utilities','Utilities','Basic_Materials','Utilities','Financial','Services','Capital_Goods','Basic_Materials','Energy','Technology','Energy','Services','Consumer_Non_Cyclical','Energy','Financial','Services','Technology','Consumer_Cyclical','Technology','Technology','Services','Energy','Services','Services','Services','Capital_Goods','Services','Technology','Services','Utilities','Financial','Utilities','Basic_Materials','Services','Services','Basic_Materials','Consumer_Non_Cyclical','Energy','Consumer_Non_Cyclical','Financial','Consumer_Cyclical','Technology','Services','Utilities','Services','Consumer_Non_Cyclical','Services','Utilities','Financial','Healthcare','Financial','Consumer_Non_Cyclical','Energy','Services','Consumer_Cyclical','Energy','Services','Healthcare','Technology','Services','Services','Consumer_Non_Cyclical','Technology','Utilities','Utilities','Technology','Services','Healthcare','Basic_Materials','Services','Services','Technology','Financial','Healthcare','Financial','Financial','Consumer_Non_Cyclical','Energy','Technology','Services','Services','Technology','Conglomerates','Conglomerates','Financial','Financial','Transportation','Transportation','Services','Financial','Capital_Goods','Financial','Healthcare','Consumer_Cyclical','Services','Energy','Capital_Goods','Services','Technology','Services','Services','Services','Technology','Technology','Utilities','Financial','Services','Technology','Consumer_Cyclical','Services','Financial','Services','Energy','Services','Healthcare','Services','Services','Basic_Materials','Services','Services','Basic_Materials','Utilities','Financial','Technology','Energy','Healthcare','Technology','Technology','Services','Financial','Healthcare'];



var wb_indices = ['INDEXNASDAQ:.IXIC','INDEXSP:.INX','INDEXDJX:.DJI'];
var wb_indicesNames = ["Nasdaq", "S&P 500", "DJI"];
var wb_indicesColors = ["#dddd00", "#dd00dd", "#00dddd"];


  // var wb_marcapMin = 1000000000;
  
  //var wb_colors = ['0x058DC7', '0x50B432', '0xED561B', '0xDDDF00', '0x24CBE5', '0x64E572', '0xFF9655', '0xFFF263', '0x6AF9C4'];
  
  //var wb_colors = ['0xBB00000', '0xBB6600', '0xAABB00', '0x66BB00', '0x00BB00', '0x00BB66', '0x00BBBB', '0x0066BB', '0x0000BB', '0x6600BB', '0xBB00BB', '0xBB0066'];
  
  //var wb_colors = ["0xDDDF0D", "0x55BF3B", "0xDF5353", "0x7798BF", "0xaaeeee", "0xff0066", "0xeeaaee", "0x55BF3B", "0xDF5353", "0x7798BF", "0xaaeeee"];
  
  //var wb_colors = ["0x4572A7", "0xAA4643", "0x89A54E", "0x80699B", "0x3D96AE", "0xDB843D", "0x92A8CD", "0xA47D7C", "0xB5CA92"];
  
  //var wb_colors = ["0x514F78", "0x42A07B", "0x9B5E4A", "0x72727F", "0x1F949A", "0x82914E", "0x86777F", "0x42A07B"];   // "0x55BF3B"

  //var wb_colors = ["0xffffff", "0xDDDF0D", "0x7798BF", "0x55BF3B", "0xDF5353", "0xaaeeee", "0xff0066", "0xeeaaee", "0xffff00", "0xDF5353", "0x7798BF", "0xaaeeee"];  		

  // var wb_colors = ["0xdd0000",  "0xfa8072",  "0x00aa00",  "0x99cc55",  "0x4682b4",  "0x008080",  "0xffd800",  "0x800080",  "0x00dddd",  "0xffaa00",  "0x666666",  "0xbbbbbb",  ];


var wb_colors = [
    
    "0xfa8072",
    "0xffd800",    
    "0x99cc55",
    "0x4682b4",
    "0xffaa00",   
    "0x008800",
    "0x800080",
    "0x00cccc",
    "0x008080",   
    "0xdd0000",    
    "0x666666",
    "0xbbbbbb",

    ];
   
  var wb_sectorIndex = ["Basic_Materials","Capital_Goods","Conglomerates","Consumer_Cyclical","Consumer_Non_Cyclical","Energy","Financial","Healthcare","Services","Technology","Transportation","Utilities"];

function addGrid() {
  var geometry, material, mesh;

  // main underlay		
  material = new THREE.MeshNormalMaterial( );
  geometry = new THREE.Sphere( 2, 10, 5 );
  mesh = new THREE.Mesh( geometry, material);
  mesh.position.set( 0, 0, 2);  
  mesh.matrixAutoUpdate = false;
  mesh.updateMatrix();  
  groupGrid.addChild( mesh );
    
  // main underlay		
  material = new THREE.MeshBasicMaterial( { color: 0xeeeeee } );
  geometry = new THREE.Plane( 1000, 1000 );
  mesh = new THREE.Mesh( geometry, material);
  mesh.position.set( 0, 300, -0.2);  
  mesh.matrixAutoUpdate = false;
  mesh.updateMatrix();  
  groupGrid.addChild( mesh );  

  // horizontal subdivisions - gray 		
  material = new THREE.MeshBasicMaterial( { color: 0xaaaaaa, wireframe: true } );
  geometry = new THREE.Plane( 100, 300, 0, 30 );
  mesh = new THREE.Mesh( geometry, material);
  mesh.position.set(0,150, -0.1);  
  mesh.matrixAutoUpdate = false;
  mesh.updateMatrix();  
  groupGrid.addChild( mesh );
  
  // vertical subdivisions - green right side 
  material = new THREE.MeshBasicMaterial( { color: 0x00aa00, wireframe: true } );
  geometry = new THREE.Plane( 50, 300, 10, 0 );
  mesh = new THREE.Mesh( geometry, material);
  mesh.position.set(25, 150, 0);
  mesh.matrixAutoUpdate = false;
  mesh.updateMatrix();  
  groupGrid.addChild( mesh );
   
  // vertical subdivisions - red left side
  material = new THREE.MeshBasicMaterial( { color: 0xaa0000, wireframe: true } );
  geometry = new THREE.Plane( 50, 300, 10, 0 );
  mesh = new THREE.Mesh( geometry, material);
  mesh.position.set(-25, 150, 0); 
  mesh.matrixAutoUpdate = false;
  mesh.updateMatrix();  
  groupGrid.addChild( mesh );
    
  // Y-axis
  material = new THREE.MeshBasicMaterial( { color: 0xaaaaaa } );
  geometry = new THREE.Plane( 1, 310, 0, 0 );
  mesh = new THREE.Mesh( geometry, material);  
  mesh.position.set(0, 150, 0.1);
  mesh.matrixAutoUpdate = false;
  mesh.updateMatrix();  
  groupGrid.addChild( mesh );
   
  // X-axis - base
  material = new THREE.MeshBasicMaterial( { color: 0xaaaaaa } );
  geometry = new THREE.Plane( 110, 1, 0, 0);
  mesh = new THREE.Mesh( geometry, material);  
  mesh.position.set(0, 0, 0.1);
  mesh.matrixAutoUpdate = false;
  mesh.updateMatrix();  groupGrid.addChild( mesh );
    
  // 100%
  // material = new THREE.MeshBasicMaterial( { color: 0xaaaaaa } );
  geometry = new THREE.Plane( 110, 1, 0, 0 );
  mesh = new THREE.Mesh( geometry, material);  
  mesh.position.set(0, 100, 0.1);
  mesh.matrixAutoUpdate = false;
  mesh.updateMatrix();  
  groupGrid.addChild( mesh ); 

  //200%
  //material = new THREE.MeshBasicMaterial( { color: 0xaaaaaa } );
  geometry = new THREE.Plane( 110, 1, 0, 0 );
  mesh = new THREE.Mesh( geometry, material);  
  mesh.position.set(0, 200, 0.1);
  mesh.matrixAutoUpdate = false;
  mesh.updateMatrix();  
  groupGrid.addChild( mesh ); 

  // out there
  // material = new THREE.MeshBasicMaterial( { color: 0xaaaaaa } );
  geometry = new THREE.Plane( 110, 1, 0, 0 );
  mesh = new THREE.Mesh( geometry, material);  
  mesh.position.set(0, 300, 0.1);
  mesh.matrixAutoUpdate = false;
  mesh.updateMatrix();  
  groupGrid.addChild( mesh );
  
  // Z-azis
  // material = new THREE.MeshBasicMaterial( { color: 0xaaaaaa } );
  geometry = new THREE.Plane( 60, 1, 0, 0 );
  mesh = new THREE.Mesh( geometry, material);  
  mesh.position.set(-50, 100, 25);
  mesh.rotation.y = 1.57;
  mesh.doubleSided = true;
  mesh.matrixAutoUpdate = false;
  mesh.updateMatrix();  
  groupGrid.addChild( mesh ); 

  // X-axis label - Percent Change
  textCanvas = createTextImage("Percent Change", "#000000"); 
  textMaterial = new THREE.MeshBasicMaterial({map: new THREE.Texture(textCanvas)});
  textMaterial.map.needsUpdate = true;

  mesh = new THREE.Mesh(new THREE.Plane(textLength, 8, 0, 0), textMaterial);
  mesh.position.set(0, -8, 0);
  mesh.matrixAutoUpdate = false;
  mesh.updateMatrix();
  groupGrid.addChild( mesh );
    
  // X-axis 100%
  textCanvas = createTextImage("100%", "#aa0000"); 
  textMaterial = new THREE.MeshBasicMaterial({map: new THREE.Texture(textCanvas)});
  textMaterial.map.needsUpdate = true;

  mesh = new THREE.Mesh(new THREE.Plane(textLength, 8, 0, 0), textMaterial);
  mesh.position.set( -58, 105, 0);
  //mesh.doubleSided = true;
  mesh.matrixAutoUpdate = false;
  mesh.updateMatrix();
  groupGrid.addChild( mesh ); 

  // X-axis 200%
  textCanvas = createTextImage("200%", "#aa0000"); 
  textMaterial = new THREE.MeshBasicMaterial({map: new THREE.Texture(textCanvas)});
  textMaterial.map.needsUpdate = true;

  mesh = new THREE.Mesh(new THREE.Plane(textLength, 8, 0, 0), textMaterial);
  mesh.position.set( -58, 205, 0);
  mesh.matrixAutoUpdate = false;
  mesh.updateMatrix();
  groupGrid.addChild( mesh );

  // Y-axis text
  textCanvas = createTextImage("Percent Average Volume", "#000000"); 
  textMaterial = new THREE.MeshBasicMaterial({map: new THREE.Texture(textCanvas)});
  textMaterial.map.needsUpdate = true;

  mesh = new THREE.Mesh(new THREE.Plane( textLength, 8, 0, 0), textMaterial);
  mesh.position.set( -58, 60, 0.1);
  mesh.rotation.z = 1.57;
  mesh.matrixAutoUpdate = false;
  mesh.updateMatrix();
  groupGrid.addChild( mesh ); 
    
  // Z-Axis Text
  textCanvas = createTextImage("Market Cap", "#000000"); 
  textMaterial = new THREE.MeshBasicMaterial({map: new THREE.Texture(textCanvas)});
  textMaterial.map.needsUpdate = true;

  mesh = new THREE.Mesh(new THREE.Plane( textLength, 8, 0, 0), textMaterial);  
  mesh.position.set( -50, 105, 25);
  mesh.rotation.set(0, 1.57, 0);
  mesh.doubleSided = true;
  mesh.matrixAutoUpdate = false;
  mesh.updateMatrix();
  groupGrid.addChild( mesh );  
        
  scene.addObject( groupGrid );  
} 

var wb_initTextHeader = '<h1 style="margin:0">Jaanga</h1>' +
    '<p style="margin: 10px 0 5px 5px"><i>Comprehensive methods for viewing the deluge of data.</i></p>';
    
var wb_text_footer = '<div style="position: absolute; top: 580px;">' +
    '<a href="#" onClick="info.innerHTML = wb_infoText1" >Real-time<br>Scores</a> &nbsp;&nbsp;' +
    ' <a href="#" onClick="info.innerHTML = wb_infoText2" >Options</a>' +    
    ' <a href="#" onClick="info.innerHTML = wb_infoTextLegend" >Legend</a>' +
    ' <a href="#" onClick="info.innerHTML = wb_infoText3" >Info</a></div>';	
    
var wb_initTextBody = '<p style="margin: 20px 0 5px 5px">Pease select which symbols to show: <br><br><br>' +
     '<input style="font-weight: bold;" type="button" id="Dow Jones" onClick="selectDji();" value="Dow Jones"> - 30 symbols<br><br>' +
     '<input style="font-weight: bold;" type="button" id="SP500" onClick="selectSp500();" value="S&P 500"> - 500 symbols<br>' +
     '<br><br>Try Dow Jones first. If your machine seems fast enough, reload and try the S&P.<br><br>' +
     'Soon Jaanga will display data from markets that are open - automatically. But, for now, you must help to get things started.</p>' +
      wb_text_footer;

var wb_infoText1 = "Move your cursor over a symbol." + wb_text_footer;

   
var wb_infoText2 = '<h1 style="margin:0">Options</h1>' +
    '<p style="margin: 20px 0 10px 0">Coming soon...' +
    wb_text_footer;;
// no londer used     
/*    
    '<form name="options" style="display:inline;" onsubmit="Do()">' +
    'Index: <select id="SelectIndex" style="width:auto;" onClick="do()">' +
    '<option value="DJI">DJI</option>' +
    '<option value="DJC">DJC</option>' +
    '<option value="S&P500 A to E" onClick="do()">SP500 A to E</option>' +
    '<br></select><input type="submit" value="Check Form" /></form>' + wb_text_footer;       
*/
    
var wb_infoText3 = wb_initTextHeader + '<p style="margin: 20px 0 10px 0">' +
    '<b>X-axis:</b> % Change Since Close<br/>' +
		'<b>Y-axis:</b> % Average Volume<br/>' +
		'<b>Z-axis:</b> Market Capitalization<br/><br/>' +	
    '<b>Color</b>: industry sector<br/><br/>' +
    'Move cursor over the symbols to display latest data.<br/><br/>' +
    'Pan: Left button.<br/><br/>' +
    'Move: Right button.<br/><br/>' +	
    'Zoom: scroll wheel.<br/><br/>' +
		'<br><br/>More details from:' +
		'<br><a href="http://jaanga.com" target="_blank">jaanga.com</a></p>' + wb_text_footer;

    var txt = '';
    
    for (var i = 0; i < wb_sectorIndex.length; i++) {
      txt +=  '<p style=" background-color: #' + wb_colors[i].substr(2) + 
              '; margin: 5px 0 0 0; padding: 5px 0 5px 10px;" ><b>' + wb_sectorIndex[i] + '</b></p>'
    }
    txt += '<br>Indices<br>';
    
    for (var i = 0; i < wb_indicesColors.length; i++) {
      txt +=  '<p style=" background-color: ' + wb_indicesColors[i] + 
              '; margin: 5px 0 0 0; padding:  5px 0 5px 10px;" ><b>' + wb_indicesNames[i] + '</b></p>'
    }       
    // console.log(txt);
    
    
var wb_infoTextLegend = '<h1 style="margin:0">Legend</h1>' +
    txt +
    wb_text_footer;

			
function createTextImage(text, color) {
    var canvas = document.createElement("canvas");
    var context = canvas.getContext("2d");
    textLength = context.measureText(text).width; 
    canvas.width = textLength * 10;
    canvas.height = 100;
    
    context.fillStyle = color;
    context.font = "70pt Arial";
    context.textAlign = "center";
    context.textBaseline = "top";
    context.fillText(text, 5 * textLength, 0);
    textLength = 0.5 * textLength;
    return canvas;
} 

  
  
     