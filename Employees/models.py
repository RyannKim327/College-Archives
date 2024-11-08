from django.db import models

# Create your models here.

class Employee(models.Model):
  emp_id = models.CharField(max_length=25, primary_key=True, unique=True)
  work_id = models.IntegerField(max_length=25, default=3810300380)
  firstname = models.CharField(max_length=25, null=False)
  middlename = models.CharField(max_length=25, null=True, blank=True)
  lastname = models.CharField(max_length=25)

  def __str__(self):
    return f"{self.lastname}, {self.firstname} {self.middlename} - {self.work_id}"
