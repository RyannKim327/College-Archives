from http.client import HTTPResponse
from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from .models import Employee

# Create your views here.

departments = [
  {
    "id": 1247381320,
    "name": "IT Department"
  },
  {
    "id": 3245182330,
    "name": "Finance Department"
  },
  {
    "id": 3810300380,
    "name": "Human Resource Department"
  },
  {
    "id": 1324545230,
    "name": "Sales Department"
  },
]

# INFO: Create section
def add(request):
  if request.method == "POST":
    emp = Employee.objects.all().values()
    new_emp = Employee.objects.create(emp_id=int(len(emp) + 1),
      firstname=str(request.POST.get("firstname")),
      middlename=str(request.POST.get("middlename")),
      lastname=str(request.POST.get("lastname")),
      work_id=str(request.POST.get("work_id")))
    new_emp.save()
    return HttpResponse("<script>location.href='../..'</script>")

  else:
    template = loader.get_template("add.html")
    return HttpResponse(template.render({
      "works": departments
    }, request))

# INFO: Read Data
def index(request):
  emp = Employee.objects.all().values()
  search = 0
  if request.method == "GET":
    try:
      req = int(request.GET.get("dept", 0))
      if not req == 0:
        emp = Employee.objects.filter(work_id=int(req)).values()
        search = request.GET.get("dept", 0)
    except Exception as e:
      print(e)
    pass
  dept = [{
    "id": 0,
    "name": "All"
  }]
  dept += departments
  template = loader.get_template("index.html")
  context = {
    "employees": emp,
    "department": dept,
    "search": int(search)
  }
  return HttpResponse(template.render(context, request))

# INFO: Update Data

def edit(request,id):
  emp = Employee.objects.get(emp_id=id)
  template = loader.get_template("edit.html")
  context = {
    "employee": emp,
    "departments": departments
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
  else:
    return HttpResponse("<h1>You don't have permission for this ...</h1>")

# INFO: Delete user
def deleteAccount(request, id):
  db = Employee.objects.get(emp_id=id)
  db.delete()
  # db.save()
  return HttpResponse("<script>location.href='../..'</script>")

