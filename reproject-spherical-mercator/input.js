module.exports = {
  "Point": {
    "input": {
      "type": "Point",
      "coordinates": [30, 10]
    }
  },
  "LineString": {
    "input": {
      "type": "LineString",
      "coordinates": [
        [30, 10], [10, 30], [40, 40]
      ]
    }
  },
  "Polygon": {
    "input": {
      "type": "Polygon",
      "coordinates": [
        [
          [30, 10], [40, 40], [20, 40], [10, 20], [30, 10]
        ]
      ]
    }
  },
  "Polygon with hole": {
    "input": {
      "type": "Polygon",
      "coordinates": [
        [
          [35, 10], [45, 45], [15, 40], [10, 20], [35, 10]
        ], [
          [20, 30], [35, 35], [30, 20], [20, 30]
        ]
      ]
    }
  },
  "MultiPoint": {
    "input": {
      "type": "MultiPoint",
      "coordinates": [
        [10, 40], [40, 30], [20, 20], [30, 10]
      ]
    }
  },
  "MultiLineString": {
    "input": {
      "type": "MultiLineString",
      "coordinates": [
        [
          [10, 10], [20, 20], [10, 40]
        ], [
          [40, 40], [30, 30], [40, 20], [30, 10]
        ]
      ]
    }
  },
  "MultiPolygon": {
    "input": {
      "type": "MultiPolygon",
      "coordinates": [
        [
          [
            [30, 20], [45, 40], [10, 40], [30, 20]
          ]
        ], [
          [
            [15, 5], [40, 10], [10, 20], [5, 10], [15, 5]
          ]
        ]
      ]
    }
  },
  "MultiPolygon with hole": {
    "input": {
      "type": "MultiPolygon",
      "coordinates": [
        [
          [
            [40, 40], [20, 45], [45, 30], [40, 40]
          ]
        ], [
          [
            [20, 35], [10, 30], [10, 10], [30, 5], [45, 20], [20, 35]
          ], [
            [30, 20], [20, 15], [20, 25], [30, 20]
          ]
        ]
      ]
    }
  },
  "GeometryCollection": {
    "input": {
      "type": "GeometryCollection",
      "geometries": [{
        "type": "Point",
        "coordinates": [100.0, 0.0]
      }, {
        "type": "LineString",
        "coordinates": [
          [101.0, 0.0], [102.0, 1.0]
        ]
      }]
    }
  },
  "Feature": { 
    "input": {
      "type": "Feature",
      "id": "id1",
      "properties": {"foo": "bar1"},
      "geometry": { "type": "Polygon", "coordinates": [
        [[30, 10], [41, 40], [20, 40], [10, 20], [30, 10]]
      ]}
    }
  },
  "FeatureCollection": {
    "input": {
      "type": "FeatureCollection",
      "features": [{
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [102.0, 0.6]
        },
        "properties": {
          "prop0": "value0"
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "LineString",
          "coordinates": [
            [102.0, 0.0], [103.0, 1.0], [104.0, 0.0], [105.0, 1.0]
          ]
        },
        "properties": {
          "prop1": 0.0,
          "prop0": "value0"
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [100.0, 0.0], [101.0, 0.0], [101.0, 1.0], [100.0, 1.0], [100.0, 0.0]
            ]
          ]
        },
        "properties": {
          "prop1": {
            "this": "that"
          },
          "prop0": "value0"
        }
      }]
    }
  },
  "FeatureCollection": {
  "input": { 
    "type": "FeatureCollection",
    "features": [
      { "type": "Feature",
        "geometry": {"type": "Point", "coordinates": [102.0, 0.5]},
        "properties": {"prop0": "value0"}
      },
      { "type": "Feature",
        "geometry": {
          "type": "LineString",
          "coordinates": [
            [102.0, 0.0], [103.0, 1.0], [104.0, 0.0], [105.0, 1.0]
            ]
          },
        "properties": {
          "prop0": "value0",
          "prop1": 0.0
          }
        },
      { "type": "Feature",
         "geometry": {
           "type": "Polygon",
           "coordinates": [
             [ [100.0, 0.0], [101.0, 0.0], [101.0, 1.0],
               [100.0, 1.0], [100.0, 0.0] ]
             ]
         },
         "properties": {
           "prop0": "value0",
           "prop1": {"this": "that"}
           }
         }
       ]
     }
  },
  "GeometryCollection": {
    "input": { 
      "type": "GeometryCollection",
      "geometries": [
        { "type": "Point",
          "coordinates": [100.0, 0.0]
        },
        { "type": "LineString",
          "coordinates": [ [101.0, 0.0], [102.0, 1.0] ]
        }
      ]
    } 
  }
}
