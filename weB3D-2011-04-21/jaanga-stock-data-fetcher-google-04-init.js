// Theo Armour 2011-04-12

  var wb_indicesData = new Array();
  var wb_indicesLength = wb_indices.length;
  var wb_indexUpdate = false;

  function fetchYqlDataGoogle(indices) {
    var yqlUrl1 = "http://query.yahooapis.com/v1/public/yql?q=select * from html where url='";
    var goofinUrl = "http://www.google.com/finance/info?infotype=infoquoteall&q=";
    // var goofinUrl = "http://finance.google.com/finance/info?q=";
    var goofinUrl2 = encodeURIComponent(goofinUrl) + indices + "'&format=json" ;
    var bigUrl = yqlUrl1 + goofinUrl2;

		var i, str, obj, arr = new Array();
    $.ajax({
    		type: "GET",
    		url: bigUrl,
        dataType: "jsonp",
        
        success: function(data){
          // console.log('google success ');
          if (data.query.results) { 
      			str = data.query.results.body.p;
            str = str.substr(6, str.length - 9);
      			str = str.replace(/[\r|\n]+/g,'');
      			str = str.replace(/\\x26/g,'&amp;');
      			arr = str.split("} ,{");
      			for (i = 0; i < wb_indicesLength; i++) {
      			  str = '{' + arr[i] + '}' ;
      			  try {
                obj = $.parseJSON(str); 
                wb_indicesData[i].data.push({change: obj.c, price: obj.l, time: obj.lt});             
                wb_indicesData[i].name = obj.name;
                // console.log(str); 
              }
              catch(e) {
                console.log('parse json error: ',e,' line: ',i, obj);
              }
      			}
          } else {
            console.log('google no data ' + new Date());
          }    			
    		},

        error:function (jqXHR, textStatus, errorThrown){
          console.log("xhr.status: ", jqXHR.status);
          console.log("jqXHR.responseText: ", jqXHR.responseText); // .status //
          console.log("jqXHR.statusText: ", jqXHR.statusText);
          console.log("jqXHR.getResponseHeaders: ", jqXHR.getResponseHeaders);
          console.log("textStatus: ",textStatus);
          console.log("errorThrown: ", errorThrown);
        },

    		complete:function (data){
    		  wb_indexUpdate = true;
          // console.log('google indices complete #', cnt, ' - ', new Date() - tim);
    		}
    });
  };

  function indicesInfo( index) {
    this.index = index;
    this.data = new Array();
  }

  function initIndicesData() {  
    // console.log('google start ', cnt, ' ', new Date - tim); 
    for (var i = 0; i < wb_indicesLength; i ++) {
      wb_indicesData[i] = new indicesInfo(wb_indices[i]);
    }
    fetchYqlDataGoogle(wb_indices);
    // console.log('google init complete', ' ' , new Date());
  }