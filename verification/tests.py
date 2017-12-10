"""
TESTS is a dict with all of your tests.
Keys for this will be the categories' names.
Each test is a dict with
    "input" -- input data for a user function
    "answer" -- your right answer
    "explanation" -- not necessarily a key, it's used for an additional info in animation.
"""


TESTS = {
    "Basics": [
        {  "input": [100, 100, 100, 100],
           "answer": 90,
           "explanation": 'square' },
        
        { "input": [150, 100, 150, 100],
          "answer": 90,
          "explanation": 'rectangle' },
        
        { "input": [150, 100, 50, 100],
          "answer": 60,
          "explanation": 'trapezium' },
        
        { "input": [203, 123, 82, 117],
          "answer": 60.8,
          "explanation": 'quadrilateral' },        
    ],
    "Extra": [
         { "input": [25 , 141.421, 175, 141.421],
          "answer": 122,
          "explanation": 'trapezium' },
        
         { "input": [75, 150, 150, 75],
          "answer": 126.9,
          "explanation": 'kite' },         
        
        { "input": [25.5 , 60.3 , 52.3 , 29],
          "answer": 128.8,
          "explanation": 'quadrilateral' },
        
         { "input": [10 , 10 , 10 , 30],
           "answer": 0,
           "explanation": 'no area (0°, 180°, 0°, 180°)' },
        
        { "input": [100, 100, 0, 100],
           "answer": 60,
           "explanation": 'triangle (side c has zero length)' },
    ],
}
