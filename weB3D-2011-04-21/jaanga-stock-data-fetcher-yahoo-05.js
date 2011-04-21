// Theo Armour 2011-04-11

  
  function getInitData() {
    fetchInitYqlData(symbolsStrings[cnt]);
  };

  function wb_getData() {
    
    fetchYqlData(symbolsStrings[sliceCount]);
    sliceCount++;
    if (sliceCount % symbolsSlices === 0) sliceCount = 0;
    // console.log(symbolsStrings[sliceCount]); 
  };
  
  function fetchInitYqlData(symbs) {
    //var tradeDataParams = "l1pc1p2t1v omva2j1n";
    var tradeDataParams = "c1l1t1va2pnj1os";
    var tradeDataString = "change,price,time,volume,avgvolume,close,companyname,mktcap,open,symbol";
    var yqlUrl ="http://query.yahooapis.com/v1/public/yql?q=select " + tradeDataString +
  	    " from csv where url='http://download.finance.yahoo.com/d/quotes.csv?s=" +
  	    symbs + "%26f=" + tradeDataParams + "%26e=.csv' and columns='" +
  	    tradeDataString + "'&format=json&callback=?";

    var num, i, j = cnt * symbolsPerSlice;
    $.ajax({
    		type: "GET",
    		url: yqlUrl,
        dataType: "jsonp",
        success: function(data){
          // console.log('yahoo success ', cnt);
          if (data.query.results) {
            
            $.each(data.query.results.row, function(index, item){
              i = j + index;
              //num = item.volume / item.avgvolume;
      			  symbolsData[i].data.push( {change: item.change, price: item.price, time: item.time, volume: item.volume, symbol: item.symbol} );
      			  
      			  symbolsData[i].avgvolume = item.avgvolume;
              symbolsData[i].close = item.close;
      			  symbolsData[i].companyname = item.companyname;
              if (symbolsData[i].symbol == 'APA') {
                item.mktcap = item.mktcap.replace("B","M");
                // console.log(item.symbol, item.mktcap);
              }
      			  num = item.mktcap;              
      			  symbolsData[i].mktcap = num;      			  
      			  symbolsData[i].mktcap2 = (num.indexOf("M") > 0) ?  num = 0.00005 * parseFloat(num) :  0.05 * parseFloat(num);
      			  symbolsData[i].open = item.open;
              symbolsData[i].update = false;  
      		  });
      		  
    		  } else {
            // alert('big boo boo');
            console.log(data);
          }
    		},

        // http://api.jquery.com/jQuery.ajax/
        // http://www.w3.org/TR/XMLHttpRequest/
        error:function (jqXHR, textStatus, errorThrown){
          console.log("xhr.status: ", jqXHR.status);
          console.log("jqXHR.responseText: ", jqXHR.responseText); // .status //
          console.log("jqXHR.statusText: ", jqXHR.statusText);
          console.log("jqXHR.getResponseHeaders: ", jqXHR.getResponseHeaders);
          console.log("textStatus: ",textStatus);
          console.log("errorThrown: ", errorThrown);
        },

    		complete:function (jqXHR, textStatus){
          // console.log('yahoo slice ', cnt, ' init complete ', cnt, ' ',new Date - tim);
    		}
    });
  };

  function fetchYqlData(symbs) {
    var tradeDataParams = "c1l1t1vs";
    var tradeDataString = "change,price,time,volume,symbol" // avgvolume,close,open,range,mktcap,companyname";
    var yqlUrl ="http://query.yahooapis.com/v1/public/yql?q=select " + tradeDataString +
  	    " from csv where url='http://download.finance.yahoo.com/d/quotes.csv?s=" +
  	    symbs + "%26f=" + tradeDataParams + "%26e=.csv' and columns='" +
  	    tradeDataString + "'&format=json&callback=?";

    var len;
    var num, i, j = sliceCount * symbolsPerSlice, k = 0;
    $.ajax({
    		type: "GET",
    		url: yqlUrl,
        dataType: "jsonp",                    
        success: function(data){
          if (data.query.results) {
            $.each(data.query.results.row, function(index, item){
              i = j + index;
              len = symbolsData[i].data.length;
              //               
              if (len > 1) {              
                if (item.volume > symbolsData[i].data[len - 2].volume) { 
                  symbolsData[i].data.push( {change: item.change, price: item.price, time: item.time, volume: item.volume, symbol: item.symbol});    
                  symbolsData[i].update = true;                   
                  k++;
                } else {
                  symbolsData[i].update = false;
                }    
              }  else {
                symbolsData[i].data.push( {change: item.change, price: item.price, time: item.time, volume: item.volume, symbol: item.symbol});
                symbolsData[i].update = true;
              }                                            			   
      		 });
      		 // console.log('updated: ',k,' ',new Date()); 
    		  } else {
            console.log('yahoo data error ', new Date());
          }
    		},

        // http://api.jquery.com/jQuery.ajax/
        // http://www.w3.org/TR/XMLHttpRequest/
        error:function (jqXHR, textStatus, errorThrown){
          console.log("xhr.status: ", jqXHR.status);
          console.log("jqXHR.responseText: ", jqXHR.responseText); // .status //
          console.log("jqXHR.statusText: ", jqXHR.statusText);
          console.log("jqXHR.getResponseHeaders: ", jqXHR.getResponseHeaders);
          console.log("textStatus: ",textStatus);
          console.log("errorThrown: ", errorThrown);
        },

    		complete:function (jqXHR, textStatus){
    		  wb_dataUpdate = true;
          //console.log('yahoo slice ', sliceCount, ' complete #', cnt, ' - ', new Date() - tim);
    		}
    });
  };
 
