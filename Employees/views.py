from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from .models import Employee

# Create your views here.

def index(request):
    emp = Employee.objects.all().values()
    template = loader.get_template("index.html")
    context = {
        "employees": emp
    }
    return HttpResponse(template.render(context, request))