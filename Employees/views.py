from django.http import HttpResponse
from django.template import loader
from .models import Employees
from rest_framework.decorators import api_view
from rest_framework.response import Response

from rest_framework import status,filters
def index(request):
    myEmployees = Employees.objects.all().values()
    template = loader.get_template('employees.html')
    context = { 'myEmployees': myEmployees, }
    return HttpResponse(template.render(context, request))



    