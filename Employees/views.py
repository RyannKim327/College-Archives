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

def updateData(request, id):
  if(request.method == "POST"):
    db = Employee.objects.get(emp_id=id)
    db.firstname = request.POST.get("firstname", "").strip()
    db.middlename = request.POST.get("middlename", "").strip()
    db.lastname = request.POST.get("lastname", "").strip()
    db.work_id = request.POST.get("work_id", "").strip()
    
    db.save()
    return HttpResponse("<script>location.href='../..'</script>")