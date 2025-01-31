import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

import os
import sys

TAISCRIPT_REPO_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "taiscript-repo")
sys.path.insert(0, TAISCRIPT_REPO_DIR)

from taiback.taiscript.src.lexer import lexer
from taiback.taiscript.src.parser import Parser
from taiback.taiscript.src.interpreter import Interpreter

#@@maybe work on removing this in future
@csrf_exempt
def processInput(request):
    if request.method == "POST":
        try:
            body=json.loads(request.body)
            input_text = body["input"]

            print(f"*******************************************************************************************************\nReceived input: {input_text}")
            if input_text is not None:
                output_text = input_text
                tokens = lexer(input_text)
                parser = Parser(tokens)
                ast = parser.parse()
                interpreter = Interpreter()
                output = interpreter.interpret(ast)
                return JsonResponse({'output': output})
            else:
                return JsonResponse({'error': 'No input provided'})
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)

    return JsonResponse({"error": "Only POST requests are allowed."}, status=405)