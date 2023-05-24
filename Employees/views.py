from contextlib import nullcontext
from django.http import HttpResponse ,HttpResponseRedirect
from django.shortcuts import render
from django.template import loader
from django.urls import reverse
from .models import Employees
from .models import Vacation_Employee
from datetime import datetime, timedelta



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
    
def add_vaction(request,id):
    template=loader.get_template('vaction-form.html')
    employee = Employees.objects.get(id=id)   
    context = { 'employee': employee }
    date_from=request.POST.get('date_from')
    date_to=request.POST.get('date_to')
    reason=request.POST.get('reason')

    data = Vacation_Employee(employee=employee,name=employee.name,from_date=date_from,to_date=date_to,reason=reason)
    if request.method == 'POST':
        data.save()
        employee.save()
    return HttpResponse(template.render(context, request))




def vacations(request):
    myvacations = Vacation_Employee.objects.all().values()
    template = loader.get_template('vacations-table.html')
    context = { 'myvacations':myvacations }
    return HttpResponse(template.render(context, request))



def aprroved_vacation(request, id):
    myvacation = Vacation_Employee.objects.get(id=id)
    employee = myvacation.employee
    if myvacation.status != 'approved':
        from_date = myvacation.from_date
        to_date = myvacation.to_date
        duration = (to_date - from_date).days + 1
        employee.Available_Vacation -= duration
        employee.save()
        myvacation.status = 'approved'
        myvacation.save()
    return HttpResponseRedirect(reverse('vacations'))



#make declined_vacation function
def declined_vacation(request,id):
    myvacation = Vacation_Employee.objects.get(id=id)
    context = { 'myvacation': myvacation }
    myvacation.status='declined'
    myvacation.save()
    return HttpResponseRedirect(reverse('vacations'))


    