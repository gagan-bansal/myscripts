// projected data generated using reproject and proj4 
module.exports ={
  "Point": {
    "input": {
      "type": "Point",
      "coordinates": [
        30,
        10
      ]
    },
    "output": {
      "type": "Point",
      "coordinates": [
        3339584.723798207,
        1118889.9748579597
      ]
    }
  },
  "LineString": {
    "input": {
      "type": "LineString",
      "coordinates": [
        [
          30,
          10
        ],
        [
          10,
          30
        ],
        [
          40,
          40
        ]
      ]
    },
    "output": {
      "type": "LineString",
      "coordinates": [
        [
          3339584.723798207,
          1118889.9748579597
        ],
        [
          1113194.9079327357,
          3503549.843504374
        ],
        [
          4452779.631730943,
          4865942.279503176
        ]
      ]
    }
  },
  "Polygon": {
    "input": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            30,
            10
          ],
          [
            40,
            40
          ],
          [
            20,
            40
          ],
          [
            10,
            20
          ],
          [
            30,
            10
          ]
        ]
      ]
    },
    "output": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            3339584.723798207,
            1118889.9748579597
          ],
          [
            4452779.631730943,
            4865942.279503176
          ],
          [
            2226389.8158654715,
            4865942.279503176
          ],
          [
            1113194.9079327357,
            2273030.926987689
          ],
          [
            3339584.723798207,
            1118889.9748579597
          ]
        ]
      ]
    }
  },
  "Polygon with hole": {
    "input": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            35,
            10
          ],
          [
            45,
            45
          ],
          [
            15,
            40
          ],
          [
            10,
            20
          ],
          [
            35,
            10
          ]
        ],
        [
          [
            20,
            30
          ],
          [
            35,
            35
          ],
          [
            30,
            20
          ],
          [
            20,
            30
          ]
        ]
      ]
    },
    "output": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            3896182.1777645745,
            1118889.9748579597
          ],
          [
            5009377.085697311,
            5621521.486192066
          ],
          [
            1669792.3618991035,
            4865942.279503176
          ],
          [
            1113194.9079327357,
            2273030.926987689
          ],
          [
            3896182.1777645745,
            1118889.9748579597
          ]
        ],
        [
          [
            2226389.8158654715,
            3503549.843504374
          ],
          [
            3896182.1777645745,
            4163881.144064294
          ],
          [
            3339584.723798207,
            2273030.926987689
          ],
          [
            2226389.8158654715,
            3503549.843504374
          ]
        ]
      ]
    }
  },
  "MultiPoint": {
    "input": {
      "type": "MultiPoint",
      "coordinates": [
        [
          10,
          40
        ],
        [
          40,
          30
        ],
        [
          20,
          20
        ],
        [
          30,
          10
        ]
      ]
    },
    "output": {
      "type": "MultiPoint",
      "coordinates": [
        [
          1113194.9079327357,
          4865942.279503176
        ],
        [
          4452779.631730943,
          3503549.843504374
        ],
        [
          2226389.8158654715,
          2273030.926987689
        ],
        [
          3339584.723798207,
          1118889.9748579597
        ]
      ]
    }
  },
  "MultiLineString": {
    "input": {
      "type": "MultiLineString",
      "coordinates": [
        [
          [
            10,
            10
          ],
          [
            20,
            20
          ],
          [
            10,
            40
          ]
        ],
        [
          [
            40,
            40
          ],
          [
            30,
            30
          ],
          [
            40,
            20
          ],
          [
            30,
            10
          ]
        ]
      ]
    },
    "output": {
      "type": "MultiLineString",
      "coordinates": [
        [
          [
            1113194.9079327357,
            1118889.9748579597
          ],
          [
            2226389.8158654715,
            2273030.926987689
          ],
          [
            1113194.9079327357,
            4865942.279503176
          ]
        ],
        [
          [
            4452779.631730943,
            4865942.279503176
          ],
          [
            3339584.723798207,
            3503549.843504374
          ],
          [
            4452779.631730943,
            2273030.926987689
          ],
          [
            3339584.723798207,
            1118889.9748579597
          ]
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
            [
              30,
              20
            ],
            [
              45,
              40
            ],
            [
              10,
              40
            ],
            [
              30,
              20
            ]
          ]
        ],
        [
          [
            [
              15,
              5
            ],
            [
              40,
              10
            ],
            [
              10,
              20
            ],
            [
              5,
              10
            ],
            [
              15,
              5
            ]
          ]
        ]
      ]
    },
    "output": {
      "type": "MultiPolygon",
      "coordinates": [
        [
          [
            [
              3339584.723798207,
              2273030.926987689
            ],
            [
              5009377.085697311,
              4865942.279503176
            ],
            [
              1113194.9079327357,
              4865942.279503176
            ],
            [
              3339584.723798207,
              2273030.926987689
            ]
          ]
        ],
        [
          [
            [
              1669792.3618991035,
              557305.2572745753
            ],
            [
              4452779.631730943,
              1118889.9748579597
            ],
            [
              1113194.9079327357,
              2273030.926987689
            ],
            [
              556597.4539663679,
              1118889.9748579597
            ],
            [
              1669792.3618991035,
              557305.2572745753
            ]
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
            [
              40,
              40
            ],
            [
              20,
              45
            ],
            [
              45,
              30
            ],
            [
              40,
              40
            ]
          ]
        ],
        [
          [
            [
              20,
              35
            ],
            [
              10,
              30
            ],
            [
              10,
              10
            ],
            [
              30,
              5
            ],
            [
              45,
              20
            ],
            [
              20,
              35
            ]
          ],
          [
            [
              30,
              20
            ],
            [
              20,
              15
            ],
            [
              20,
              25
            ],
            [
              30,
              20
            ]
          ]
        ]
      ]
    },
    "output": {
      "type": "MultiPolygon",
      "coordinates": [
        [
          [
            [
              4452779.631730943,
              4865942.279503176
            ],
            [
              2226389.8158654715,
              5621521.486192066
            ],
            [
              5009377.085697311,
              3503549.843504374
            ],
            [
              4452779.631730943,
              4865942.279503176
            ]
          ]
        ],
        [
          [
            [
              2226389.8158654715,
              4163881.144064294
            ],
            [
              1113194.9079327357,
              3503549.843504374
            ],
            [
              1113194.9079327357,
              1118889.9748579597
            ],
            [
              3339584.723798207,
              557305.2572745753
            ],
            [
              5009377.085697311,
              2273030.926987689
            ],
            [
              2226389.8158654715,
              4163881.144064294
            ]
          ],
          [
            [
              3339584.723798207,
              2273030.926987689
            ],
            [
              2226389.8158654715,
              1689200.1396078924
            ],
            [
              2226389.8158654715,
              2875744.6243522423
            ],
            [
              3339584.723798207,
              2273030.926987689
            ]
          ]
        ]
      ]
    }
  },
  "GeometryCollection": {
    "input": {
      "type": "GeometryCollection",
      "geometries": [
        {
          "type": "Point",
          "coordinates": [
            100,
            0
          ]
        },
        {
          "type": "LineString",
          "coordinates": [
            [
              101,
              0
            ],
            [
              102,
              1
            ]
          ]
        }
      ]
    },
    "output": {
      "type": "GeometryCollection",
      "geometries": [
        {
          "type": "Point",
          "coordinates": [
            11131949.079327356,
            -7.081154551613622e-10
          ]
        },
        {
          "type": "LineString",
          "coordinates": [
            [
              11243268.57012063,
              -7.081154551613622e-10
            ],
            [
              11354588.060913904,
              111325.14286638486
            ]
          ]
        }
      ]
    }
  },
  "Feature": {
    "input": {
      "type": "Feature",
      "id": "id1",
      "properties": {
        "foo": "bar1"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              30,
              10
            ],
            [
              41,
              40
            ],
            [
              20,
              40
            ],
            [
              10,
              20
            ],
            [
              30,
              10
            ]
          ]
        ]
      },
      "bbox": [
        10,
        10,
        41,
        40
      ]
    },
    "output": {
      "type": "Feature",
      "id": "id1",
      "properties": {
        "foo": "bar1"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              3339584.723798207,
              1118889.9748579597
            ],
            [
              4564099.122524217,
              4865942.279503176
            ],
            [
              2226389.8158654715,
              4865942.279503176
            ],
            [
              1113194.9079327357,
              2273030.926987689
            ],
            [
              3339584.723798207,
              1118889.9748579597
            ]
          ]
        ]
      },
      "bbox": [
        1113194.9079327357,
        1118889.9748579597,
        4564099.122524217,
        4865942.279503176
      ]
    }
  },
  "FeatureCollection": {
    "input": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              102,
              0.6
            ]
          },
          "properties": {
            "prop0": "value0"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                102,
                0
              ],
              [
                103,
                1
              ],
              [
                104,
                0
              ],
              [
                105,
                1
              ]
            ]
          },
          "properties": {
            "prop1": 0,
            "prop0": "value0"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [
                  100,
                  0
                ],
                [
                  101,
                  0
                ],
                [
                  101,
                  1
                ],
                [
                  100,
                  1
                ],
                [
                  100,
                  0
                ]
              ]
            ]
          },
          "properties": {
            "prop1": {
              "this": "that"
            },
            "prop0": "value0"
          }
        }
      ],
      "bbox": [
        100,
        0,
        105,
        1
      ]
    },
    "output": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              11354588.060913904,
              66792.91526425029
            ]
          },
          "properties": {
            "prop0": "value0"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                11354588.060913904,
                -7.081154551613622e-10
              ],
              [
                11465907.551707178,
                111325.14286638486
              ],
              [
                11577227.042500451,
                -7.081154551613622e-10
              ],
              [
                11688546.533293726,
                111325.14286638486
              ]
            ]
          },
          "properties": {
            "prop1": 0,
            "prop0": "value0"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [
                  11131949.079327356,
                  -7.081154551613622e-10
                ],
                [
                  11243268.57012063,
                  -7.081154551613622e-10
                ],
                [
                  11243268.57012063,
                  111325.14286638486
                ],
                [
                  11131949.079327356,
                  111325.14286638486
                ],
                [
                  11131949.079327356,
                  -7.081154551613622e-10
                ]
              ]
            ]
          },
          "properties": {
            "prop1": {
              "this": "that"
            },
            "prop0": "value0"
          }
        }
      ],
      "bbox": [
        11131949.079327356,
        -7.081154551613622e-10,
        11688546.533293726,
        111325.14286638486
      ]
    }
  }
}