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
           "explanation": "a1.png"  },
        
        { "input": [200, 100, 100, 100],
          "answer": 60,
          "explanation": "a2.png"  },
        
        { "input": [300, 141.421356, 100, 141.421356],
          "answer": 45,
          "explanation": "a3.png" },
        
        { "input": [203, 123, 82, 117],
          "answer": 60.8,
          "explanation": "a4.png" },
        
        
        
    ],
    "Extra": [
        { "input": [25.5 , 60.3 , 52.3 , 29],
          "answer": 128.8,
          "explanation": '"a7.png" },
       
        { "input": [11 , 96 , 84 , 2],
            "answer": 176.8,
            "explanation": None },
    ],
    "Edge": [
        { "input": [100, 100, 0, 100],
            "answer": 60,
            "explanation": "a5.png" },
        
        { "input": [10 , 10 , 10 , 30],
            "answer": 0,
            "explanation": "a6.png" },
    ],
}
