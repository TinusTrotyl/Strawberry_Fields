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
        {
            "input": [100, 100, 100, 100],
            "answer": 90,
            "explanation": ""
        },
        {
            "input": [200, 100, 100, 100],
            "answer": 60,
            "explanation": ""
        }
    ],
    "Extra": [
        {
            "input": [100, 100, 0, 100],
            "answer": 60,
            "explanation": "6+3=?"
        },
    ]
}
