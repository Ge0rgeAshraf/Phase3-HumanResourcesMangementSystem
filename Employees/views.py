from contextlib import nullcontext
from django.http import HttpResponse
from django.shortcuts import render
from django.template import loader
from .models import Employees



def index(request):
    myEmployees = Employees.objects.all().values()
    template = loader.get_template('employees.html')
    context = { 'myEmployees': myEmployees, }
    return HttpResponse(template.render(context, request))


def add(request):
    name=request.POST.get('name')
    address=request.POST.get('address')
    email=request.POST.get('email')
    Phone=request.POST.get('Phone')
    gender=request.POST.get('gender')
    martial_status=request.POST.get('martial_status')
    Available_Vacation=request.POST.get('Available_Vacation')
    Salary=request.POST.get('Salary')
    date=request.POST.get('date')
    
    
    
    data = Employees(name=name,address=address,email=email,Phone=Phone,gender=gender,martial_status=martial_status,Available_Vacation=Available_Vacation,Salary=Salary,date=date)
    if request.method == 'POST':
        data.save()
    
        
    
    return render(request,'add-Employee.html')
    
    