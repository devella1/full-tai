import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

#@@maybe work on removing this in future
@csrf_exempt
def processInput(request):
    body=json.loads(request.body)
    input_text = body["input"]

    print(f"*******************************************************************************************************\nReceived input: {input_text}")
    if input_text is not None:
        output_text = input_text
        return JsonResponse({'output': output_text})
    else:
        return JsonResponse({'error': 'No input provided'})