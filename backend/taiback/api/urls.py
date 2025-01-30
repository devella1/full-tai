from django.urls import path
from .views import processInput

urlpatterns = [
    path('processInput', processInput, name='processInput'),
]
