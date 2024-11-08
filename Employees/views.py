from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from .models import Employee

# Create your views here.

# INFO: Read Data
def index(request):
  emp = Employee.objects.all().values()
  template = loader.get_template("index.html")
  context = {
    "employees": emp
  }
  return HttpResponse(template.render(context, request))

# INFO: Update Data

def edit(request,id):
  emp = Employee.objects.get(emp_id=id)
  template = loader.get_template("edit.html")
  context = {
    "employee": emp
  }
  return HttpResponse(template.render(context, request))

def updateData(request):
  if(request.method == "POST"):
    data = request.POST
    emp = Employee.objects.update()
