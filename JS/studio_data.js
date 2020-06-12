var data = {
    "type" : "FeatureCollection",
    "name" : "data",
    "crs": {
        "type": "name",
        "properties": {
        	"name": "urn:ogc:def:crs:OGC:1.3:CRS84"
        }
    },
    "features" : [
        { 
            "type" : "Feature", 
            "properties" : {  
                "name" : "Studio 1", 
                "text" : "<p><b>A short film about everything that the Leith School of Art has to offer. Produced by Peter Keith Films.</b></p>",
                "media" : "<iframe src=\"https://www.youtube.com/embed/aCv9zGIXdEY\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
            }, 
            "geometry" : { 
                "type" : "Point", 
                "coordinates" : [
                	-3.17,
                    55.97
                ] 
            }
        },
      { 
            "type" : "Feature", 
            "properties" : {  
                "name" : "Studio 2", 
                "text" : "<p><b>Leith School of Art (LSA) is an independent art college in Edinburgh, Scotland, providing tertiary education in art and design.</b></p>",
                "media" : "<div id=\"malihu3\" style=\"overflow: auto; width: 80%; max-width: 300px; height: auto;\"><ul><li><img src=\"Images/lsa1_thumb.jpg\" /></li><li><img src=\"Images/lsa2_thumb.jpg\" /></li><li><img src=\"Images/lsa3_thumb.jpg\" ></li></ul></div>"
            }, 
            "geometry" : { 
                "type" : "Point", 
                "coordinates" : [
                    -3.175,
                    55.965
                ] 
            }
        }

    ]
};